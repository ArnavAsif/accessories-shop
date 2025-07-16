import { useEffect, useState } from "react";
import Data from "../Data/Data";



const AllGadgets = () => {
    const [allData, setAllData] = useState([]);

    const [showCategory, setShowCategory] = useState('all');
    useEffect(() => {
        fetch('./accessories.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    const filterCategory = showCategory === 'all' ? allData : allData.filter(item => item.category === showCategory)


    return (
        <div>

            <div className="flex mx-auto">
                <div className="w-2/11 h-full flex flex-col sticky top-18 gap-10 p-8">
                    <button onClick={() => setShowCategory('all')} className={`btn btn-outline ${showCategory === 'all' ? 'btn-active bg-amber-300' : ''}`}>All</button>
                    <button onClick={() => setShowCategory('laptop')} className={`btn btn-outline btn-primary ${showCategory === 'laptop' ? 'btn-active' : ''}`}>Laptop</button>
                    <button onClick={() => setShowCategory('mobile')} className={`btn btn-outline btn-secondary ${showCategory === 'mobile' ? 'btn-active' : ''}`}>Mobile</button>
                    <button onClick={() => setShowCategory('accessory')} className={`btn btn-outline btn-accent ${showCategory === 'accessories' ? 'btn-active' : ''}`}>Accessories</button>
                    <button onClick={() => setShowCategory('smart-watch')} className={`btn btn-outline btn-info ${showCategory === 'smart-watch' ? 'btn-active' : ''}`}>Smart Watch</button>
                </div>

                <div className="grid grid-cols-3 gap-10 w-9/11">
                    
                    {

                        filterCategory.length > 0 ? filterCategory.map(data => <Data key={data.id} data={data}></Data>) :
                            <figure className="diff aspect-16/9" tabIndex={0}>
                                <div className="diff-item-1" role="img" tabIndex={0}>
                                    <div className="bg-primary text-primary-content grid place-content-center text-5xl font-black">
                                        NO DATA FOUND
                                    </div>
                                </div>
                                <div className="diff-item-2" role="img">
                                    <div className="bg-base-200 grid place-content-center text-5xl font-black">NO DATA FOUND</div>
                                </div>
                                <div className="diff-resizer"></div>
                            </figure>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGadgets;