const AddCart = ({ item }) => {
    const { image, name, description, price } = item;
    return (
        <div>
            <p className="text-3xl font-bold text-center p-10">Cart</p>
            <div className="flex w-10/12 mx-auto gap-9 my-10 p-10 shadow-2xl">
                <div>
                    <img
                        className="w-[200px] h-[150px] object-cover"
                        src={image}
                        alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default AddCart;