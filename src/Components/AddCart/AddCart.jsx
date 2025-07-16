import { MdDelete } from "react-icons/md";

const AddCart = ({ item , onDelete }) => {
    const cartDelete = onDelete;
    console.log(cartDelete)
    const { image, name, description, price } = item;
    return (
        <div>
            
            <div className="flex w-10/12 mx-auto gap-9 my-10 p-10 shadow-2xl items-center justify-between">
                <div>
                    <img
                        className="w-[200px] h-[150px] object-cover"
                        src={image}
                        alt="" />
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold">{name}</h1>
                    <p>{description}</p>
                    <p className="font-bold">{price}$</p>
                </div>
                <div onClick={cartDelete} className="btn">
                    <MdDelete className="text-3xl text-red-500"/>
                </div>
            </div>
        </div>
    );
};

export default AddCart;