import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';

import DressAbout from './DressAbout/DressAbout';
import Logos from './Logos/Logos';
import OurProductOnYou from './OurProductOnYou/OurProductOnYou';
import Sell from './Sell/Sell';
import Shipping from './Shipping/Shipping';
import SomeText from './Some text/SomeText';
import Video from './video/video';
import WearNow from './Wear Now/WearNow';

const Home = () => {
    return (
        <div>
            <Video></Video>
         <Banner></Banner>
         
         <SomeText></SomeText>
         <Category></Category>
         
         <DressAbout></DressAbout>
         <WearNow></WearNow>
       
         <Sell></Sell>
         <Logos></Logos>
         <OurProductOnYou></OurProductOnYou>
         <Shipping></Shipping>
         
        </div>
    );
};

export default Home;