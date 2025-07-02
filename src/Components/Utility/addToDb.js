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
        console.log();
    }
    else{
        addedFavourite.push(id);
        const addedFavouriteStr = JSON.stringify(addedFavourite);
        localStorage.setItem('favourite', addedFavouriteStr);
    }
} 

  

export {addToCart, addToFavourite, getTheAddStoreList};