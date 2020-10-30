import React from 'react';
import {InfoSection, Pricing} from '../../components';
import 
{
homeObjTwo,
} from './Data';

function Home () {
    return (
        <>
        <Pricing/>
        <InfoSection {...homeObjTwo}/>
            
        </>
    )
}

export default Home;
