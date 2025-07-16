import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { getAddTofavourite, getTheAddStoreList, removeFromCart, removeFromfav } from "../Utility/addToDb";
import AddCart from "../AddCart/AddCart";
import AddToFav from "../AddToFav/AddToFav";


const Dashboard = () => {
    const navigate = useNavigate();
    const [addCart, setAddCart] = useState([]);
    const [addFav, setAddFav] = useState([]);
    const [showBtn, setShowBtn] = useState('cart')
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const mainData = useLoaderData();
    const totalPrice = addCart.reduce((sum, item) => sum + parseFloat(item.price), 0);
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
                    <button onClick={() => setShowBtn('cart')} className={`btn py-[25px] px-[64px]  font-extrabold text-[18px] rounded-3xl ${showBtn === 'cart' ? 'bg-white text-[#9538E2]' : 'text-white bg-[#9538E2]'}`}>Cart</button>
                    <button onClick={() => setShowBtn('wishlist')} className={`btn py-[25px] px-[64px] font-extrabold text-[18px] rounded-3xl ${showBtn === 'wishlist' ? 'bg-white text-[#9538E2]' : 'text-white bg-[#9538E2]'}`}>WishList</button>
                </div>
            </div>

            <div>
                <div className="flex justify-between">
                    <p className={`text-3xl font-bold text-center p-10 ${showBtn === 'cart' ? '' : 'hidden'}`}>Cart</p>
                    <div className={`flex items-center gap-3 ${showBtn === 'cart' ? '' : 'hidden'}`}>
                        <p className="font-bold text-xl text-black">Total Cost: ${totalPrice.toFixed(2)}</p>
                        <button className="btn btn-outline btn-secondary rounded-2xl">Sort By Price</button>
                        <button
                            className="btn btn-outline btn-secondary rounded-2xl"
                            onClick={() => setShowModal(true)}
                        >
                            Purchase
                        </button>

                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-40">
                        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-xl p-6 relative">
                            <h2 className="text-2xl font-bold mb-4 text-center text-[#9538E2]">Purchase Summary</h2>

                            <div className="space-y-2 max-h-[300px] overflow-y-auto">
                                {addCart.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center border-b pb-2">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-[#9538E2]">${parseFloat(item.price).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold">Total:</span>
                                <span className="text-lg font-bold text-[#9538E2]">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setShowSuccessModal(true); // Show success modal
                                        setAddCart([]);
                                        
                                        localStorage.removeItem("add-to-cart"); // clear localStorage or use your util
                                    }}
                                    className="btn btn-success"
                                >
                                    Confirm Purchase
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="btn btn-outline btn-error"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {showSuccessModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-40">
                        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 text-center relative">
                            <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Purchase Successful!</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Thank you for your purchase. Your order has been placed successfully.
                            </p>
                            <button
                                onClick={() => 
                                {
                                    setShowSuccessModal(false);
                                    navigate('/')
                                }
                                    
                                }
                                className="btn btn-primary"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}




                {showBtn === 'cart' &&

                    (addCart.map(item =>
                        <AddCart
                            key={item.id}
                            item={item}
                            onDelete={() => {
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
                        onDelete={
                            () => {
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