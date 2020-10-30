import React from 'react';
import {InfoSection, Pricing} from '../../components';
import 
{homeObjOne, 
homeObjTwo,
} from './Data';

function Home () {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
            
        </>
    )
}

export default Home;
