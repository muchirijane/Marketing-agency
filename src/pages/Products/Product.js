import React from 'react';
import {InfoSection} from '../../components';
import 
{ 
homeObjTwo,
homeObjThree,

} from './Data';

function Home () {
    return (
        <>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home;
