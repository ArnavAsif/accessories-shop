import { Link } from "react-router";


const Data = ({ data }) => {
    const {name, price, image, id } = data;
    return (
        <>
        
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure >
                <img className=" scale-100 h-[282px] object-cover transition delay-150 duration-300 ease-in-out hover:scale-105"
                    src={image }
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}$</p>
                <div className="card-actions">
                    <Link to={`/gadget/${id}`}><button className="btn btn-outline btn-secondary rounded-2xl">View Details</button></Link>
                </div>
            </div>
        </div></>
    );
};

export default Data;