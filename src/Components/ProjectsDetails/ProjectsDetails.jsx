import { useLoaderData, useParams } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToFavourite } from "../Utility/addToDb";

const ProjectsDetails = () => {
    const { gadgetId } = useParams();
    const id = parseInt(gadgetId)
    const data = useLoaderData();
    const allData = data.find(item => item.id === id)
    const { name, price, inStock, description, rating, image } = allData;
    const handleAddToCart = (id)=>{
        addToCart(id)
    }
    const handleFavourite = (id)=>{
        addToFavourite(id)
    }

    return (
        <div>
            <div className="h-[335px] bg-[#9538E2] rounded-b-2xl">
                <h1 className="font-bold text-3xl text-white text-center pt-8">Products Details</h1>
                <p className="text-center text-white mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className=" bg-base-100 shadow-2xl  mx-auto flex p-6 rounded-2xl gap-15 w-9/12 -mt-43 mb-10">
                <div className="w-5/12 rounded-2xl p-6 flex justify-center items-center">
                    <img
                        className="w-full h-full object-contain rounded-2xl "
                        src={image}
                        alt={name} />
                </div>
                <div className="w-1/2">
                    <h2 className="text-[#09080F] font-semibold text-[28px] mb-3">{name}</h2>
                    <p className="text-[#09080F] font-semibold text-xl opacity-70 mb-4">Price: {price}$</p>
                    <div className="mb-4">
                        {
                            inStock === true ? <button className="btn btn-dash btn-primary">In Stock</button>
                                : <button className="btn btn-dash btn-secondary">Out Of stock</button>
                        }
                    </div>
                    <p className="text-[#09080F] opacity-60 text-[18px] mb-4">{description}</p>
                    <div>
                        <h5 className="font-bold text-[#09080F] text-[18px] mb-3">Specification:</h5>
                        <ol className="text-[#09080F] opacity-60 text-[18px]">
                            {
                                Object.entries(allData.specification).map((item , index) => <li key={index}>{item}</li>)
                            }
                        </ol>
                    </div>
                    <p className="font-bold text-[#09080F] text-[18px] mb-3">Rating: {rating}</p>
                    <div className="rating mb-5">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                    <div className="">
                        <button onClick={()=> handleAddToCart(gadgetId)} className="btn btn-primary mr-4">Add to Cart<FaCartShopping /> </button>
                        <button onClick={()=> handleFavourite(gadgetId)} className="btn btn-ghost btn-circle border-2 border-fuchsia-500 rounded-full p-4">
                            <div className="indicator">
                                <CiHeart className="w-5 h-5"></CiHeart>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;