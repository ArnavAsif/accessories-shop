import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';


const Statistics = () => {
    const [productPrice, setProductPrice] = useState([])
    console.log(productPrice)
    useEffect(() => {
        fetch('./accessories.json')
            .then(res => res.json())
            .then(data => setProductPrice(data))
    }, [])
    
    // const mathMarks = [
    //     { id: 1, name: "Rahim", math: 85 },
    //     { id: 2, name: "Karim", math: 72 },
    //     { id: 3, name: "Ayesha", math: 90 },
    //     { id: 4, name: "Tanvir", math: 60 },
    //     { id: 5, name: "Nadia", math: 88 },
    // ];


    return (
        <div className="mx-auto w-8/12 p-30">
            <LineChart width={1200} height={300} data={productPrice} >
                <Line type='monotone' dataKey='price' />
                <XAxis dataKey='name'></XAxis>
                <YAxis width='auto'></YAxis>
                <Legend></Legend>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    )
};

export default Statistics;