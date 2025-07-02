import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getTheAddStoreList } from "../Utility/addToDb";
import AddCart from "../AddCart/AddCart";




const Dashboard = () => {
    const [addCart , setAddCart] = useState([])
    const mainData = useLoaderData();
    useEffect(()=>{
        const accessoriesData = getTheAddStoreList();
        const accessoriesDataStr = accessoriesData.map(item => parseInt(item))
        const addToCart = mainData.filter(item => accessoriesDataStr.includes(item.id));
        setAddCart(addToCart);
    },[mainData])
    return (
        <div>
            <div className="bg-[#9538E2]">
                <h2 className="font-bold text-[32px] text-white text-center pt-8 mb-4">Dashboard</h2>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex gap-6 justify-center items-center mt-8 pb-8">
                    <button className="btn py-[25px] px-[64px] bg-white text-[#9538E2] font-extrabold text-[18px] rounded-3xl">Cart</button>
                    <button className="btn py-[25px] px-[64px] bg-white text-[#9538E2] font-extrabold text-[18px] rounded-3xl">WishList</button>
                </div>
            </div>

            <div>
                {
                    addCart.map(item => <AddCart key={item.id} item={item}></AddCart>)
                }
            </div>
        </div>
    );
};

export default Dashboard;