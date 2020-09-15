import React from 'react';
import { InfoSection } from '../../components';
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjectOne} />
            <InfoSection {...homeObjectTwo} />
            <InfoSection {...homeObjectThree} />
            <InfoSection {...homeObjectFour} />
        </>
    )
}

export default Home
