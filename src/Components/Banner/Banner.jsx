import BannerPic from '../../assets/banner.jpg'
import AllGadgets from '../AllGadgets/AllGadgets';
const Banner = () => {
    return (
        
        <div className='mb-16'>
            <div>
                <div className="bg-[#9538E2] rounded-b-2xl pt-6 h-[694px]">
                    <h1 className="text-white font-bold text-[56px] text-center ">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="text-white text-center mt-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <div className="flex justify-center mt-8">
                        <button className="text-[#9538E2] bg-white rounded-3xl font-bold text-xl py-[15px] px-6">Shop Now</button>
                    </div>
                </div>
                <div className='flex justify-center md:-mt-[300px]'>
                    <img className='md:h-[563px] md:w-[1062px] p-4 border-2 border-gray-200 rounded-[32px] object-cover' src={BannerPic} alt="" />
                </div>
            </div>
            <div className='mt-20'>
                <AllGadgets></AllGadgets>
            </div>
        </div>

    );
};

export default Banner;