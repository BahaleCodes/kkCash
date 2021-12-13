import React, { useEffect, useState } from 'react';

import Header from './Header/Header';
import Intro from './Intro/Intro';
import Question from './Questions';
import WhyUs from './WhyUs';
import jsonData from '../../data/data.json';

const Home = () => {
    const [kkdata, setKKdata] = useState([]);
    useEffect(() => {
        setKKdata(jsonData);
    }, []);

    return (
        <div style={{ marginTop: "10rem" }}>
            <div className='text-center'>
                <Header />
            </div>
            <Intro />
            <WhyUs data={kkdata.Values} />
            <Question />
        </div>
    )
}

export default Home;