import React from 'react';
import {InfoSection, Pricing} from '../../components';
import 
{homeObjOne, 
homeObjTwo,
homeObjThree,
homeObjFour
} from './Data';

function Home () {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Pricing/>
        <InfoSection {...homeObjFour}/>
            
        </>
    )
}

export default Home;
