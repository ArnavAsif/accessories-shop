import { Bounce, toast } from "react-toastify";

const getTheAddStoreList = ()=>{
    const storeListStr = localStorage.getItem('add-to-cart');
    if(storeListStr){
        const storeList = JSON.parse(storeListStr);
        return storeList;
    }
    else{
        return [];
    }
}


const addToCart = (data)=>{
    const storedList = getTheAddStoreList();
    storedList.push(data);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('add-to-cart',storedListStr);
}


const getAddTofavourite = ()=>{
    const favouriteStr = localStorage.getItem('favourite');
    if(favouriteStr){
        const favourite = JSON.parse(favouriteStr);
        return favourite;
    }
    else{
        return [];
    }
}

const addToFavourite = (id)=>{
    const addedFavourite = getAddTofavourite();
    if(addedFavourite.includes(id)){
        toast('Already Exists ❤', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    }
    else{
        addedFavourite.push(id);
        const addedFavouriteStr = JSON.stringify(addedFavourite);
        localStorage.setItem('favourite', addedFavouriteStr);
        toast('Added to Favourite ❤', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    }
} 

const removeFromCart = (id) => {
    const storedListStr = localStorage.getItem('add-to-cart');
    if (!storedListStr) return;

    const storedList = JSON.parse(storedListStr);
    // Keep only items NOT equal to the id we want to delete
    const updatedList = storedList.filter(itemId => parseInt(itemId) !== id);
    localStorage.setItem('add-to-cart', JSON.stringify(updatedList));
};

const removeFromfav = (id) => {
    const storedListStr = localStorage.getItem('favourite');
    if (!storedListStr) return;

    const storedList = JSON.parse(storedListStr);
    // Keep only items NOT equal to the id we want to delete
    const updatedList = storedList.filter(itemId => parseInt(itemId) !== id);
    localStorage.setItem('favourite', JSON.stringify(updatedList));
};
  

export {addToCart, addToFavourite, getTheAddStoreList, getAddTofavourite , removeFromCart, removeFromfav};