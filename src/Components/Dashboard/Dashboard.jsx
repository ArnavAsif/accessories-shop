import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getAddTofavourite, getTheAddStoreList, removeFromCart, removeFromfav } from "../Utility/addToDb";
import AddCart from "../AddCart/AddCart";
import AddToFav from "../AddToFav/AddToFav";

const Dashboard = () => {
    const [addCart, setAddCart] = useState([]);
    const [addFav, setAddFav] = useState([]);
    const [showBtn, setShowBtn] = useState('cart')
    const mainData = useLoaderData();
    useEffect(() => {
        const accessoriesData = getTheAddStoreList();
        const accessoriesDataStr = accessoriesData.map(item => parseInt(item))
        const addToCart = mainData.filter(item => accessoriesDataStr.includes(item.id));
        setAddCart(addToCart);
    }, [mainData]);

    useEffect(() => {
        const accessoriesDataFav = getAddTofavourite();
        const accessoriesDataFavStr = accessoriesDataFav.map(item => parseInt(item));
        const addToFav = mainData.filter(item => accessoriesDataFavStr.includes(item.id))
        setAddFav(addToFav)
    }, [mainData]);
    
    return (
        <div>
            <div className="bg-[#9538E2]">
                <h2 className="font-bold text-[32px] text-white text-center pt-8 mb-4">Dashboard</h2>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex gap-6 justify-center items-center mt-8 pb-8">
                    <button onClick={() => setShowBtn('cart')} className={`btn py-[25px] px-[64px]  font-extrabold text-[18px] rounded-3xl ${showBtn === 'cart' ? 'text-white bg-[#9538E2]' : 'bg-white text-[#9538E2]'}`}>Cart</button>
                    <button onClick={() => setShowBtn('wishlist')} className={`btn py-[25px] px-[64px] font-extrabold text-[18px] rounded-3xl ${showBtn === 'wishlist' ? 'text-white bg-[#9538E2]' : 'bg-white text-[#9538E2]'}`}>WishList</button>
                </div>
            </div>

            <div>
                <p className={`text-3xl font-bold text-center p-10 ${showBtn === 'cart' ? '' : 'hidden'}`}>Cart</p>
                {showBtn === 'cart' &&
                        
                    (addCart.map(item =>
                        <AddCart
                            key={item.id}
                            item={item}
                            onDelete = { ()=>{
                                removeFromCart(item.id);
                                const newData = getTheAddStoreList();
                                const newDataStr = newData.map(id => parseInt(id));
                                const updatedData = mainData.filter(item => newDataStr.includes(item.id));
                                setAddCart(updatedData);
                            }
                            }
                            ></AddCart>))
                }
            </div>
            <div>
                <p className={`text-3xl font-bold text-center p-10 ${showBtn === 'wishlist' ? '' : 'hidden'}`}>Wishlist</p>
                {showBtn === 'wishlist' &&
                    (addFav.map(item => <AddToFav 
                        key={item.id}
                         item={item}
                         onDelete = {
                            ()=>{
                                removeFromfav(item.id);
                                const newData = getAddTofavourite();
                                const newDataStr = newData.map(id => parseInt(id));
                                const updatedData = mainData.filter(item => newDataStr.includes(item.id));
                                setAddFav(updatedData);
                            }
                         }
                         ></AddToFav>))
                }
            </div>

        </div>
    );
};

export default Dashboard;