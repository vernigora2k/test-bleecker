import React, { Fragment } from 'react'
import { MainBanner } from '../components/MainBanner';
import { NewItems } from '../components/NewItems';
import { PopularCategory } from '../components/PopularCategory';
import { Manufacturers } from '../components/Manufacturers';
import { News } from '../components/News';
import './Home.scss';
import { Info } from '../components/Info';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="container">
            <MainBanner />
            <PopularCategory />
            <NewItems />
            <Manufacturers />
            <Info />
            <News />
            <Footer />
        </div>
    )
}