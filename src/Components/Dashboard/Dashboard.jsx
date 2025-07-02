

const Dashboard = () => {
    return (
        <div className="bg-[#9538E2]">
            <h2 className="font-bold text-[32px] text-white text-center pt-8 mb-4">Dashboard</h2>
            <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="flex gap-6 justify-center items-center mt-8 pb-8">
                <button class="btn py-[25px] px-[64px] bg-white text-[#9538E2] font-extrabold text-[18px] rounded-3xl">Cart</button>
                <button class="btn py-[25px] px-[64px] bg-white text-[#9538E2] font-extrabold text-[18px] rounded-3xl">WishList</button>
            </div>
        </div>
    );
};

export default Dashboard;