import React, { useEffect, useState } from 'react';

import Navigation from './Navigation';
// import Footer from '../Footer';
import JsonData from '../data/data.json';
import Footer from './Footer';

const Layout = (props) => {
    const [kkData, setKKData] = useState({});

    useEffect(() => {
        setKKData(JsonData)
    }, []);
    return (
        <div>
            <Navigation data={kkData.Social}/>
            <main>
                {props.children}
            </main>
            <Footer data={kkData.Social} />
        </div>
    )
}

export default Layout;