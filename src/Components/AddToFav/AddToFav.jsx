import { MdDelete } from "react-icons/md";

const AddToFav = ({ item , onDelete }) => {
    const favDelete = onDelete;
        const { image, name, description, price } = item;
        return (
            <div>
                
                <div className="flex w-10/12 mx-auto gap-9 my-10 p-10 shadow-2xl items-center">
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
                    <div onClick={favDelete} className="btn">
                        <MdDelete className="text-3xl text-red-500"/>
                    </div>
                </div>
            </div>
    );
};

export default AddToFav;