import React, { Fragment, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewItems.scss'

export const NewItems = () => {
    const [slides, setSlides] = useState(4)
    const [width, setWidth] =useState(window.innerWidth)

    const catalogItems = {
        'Перфоратор Stark RH 900': {image: 'newitems-1.png', isAvailable: true, prise: '1681'},
        'Сверло-метчик М 4 х 0,7 мм. HSS M2, L=39/5 мм. HEX-1/4"': {image: 'newitems-2.png', isAvailable: true, prise: '1681'},
        'Домкрат гидравлический бутылочный 10 т.': {image: 'newitems-3.png', isAvailable: true, prise: '1681'},
        'Гайковерт пневматический ударный G1260': {image: 'newitems-4.png', isAvailable: true, prise: '1681'},
        'инструмент9': {image: 'newitems-1.png', isAvailable: true, prise: '1681'},
        'инструмент10': {image: 'newitems-2.png', isAvailable: true, prise: '1681'},
        'инструмент11': {image: 'newitems-3.png', isAvailable: true, prise: '1681'},
        'инструмент12': {image: 'newitems-4.png', isAvailable: true, prise: '1681'},
    }

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };
    
    const showAllNewItems = () => {
        console.log('Show all new items')
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        if(width>1460 && slides==4) {
            console.log('')
        } else {
           if (width>1460 && slides!=4) {
               setSlides(4)
           } else {
               if (width<1460 && slides==4) {
                   setSlides(1)
               } else setSlides(1)
           }
        }
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    })

    return (
        <section className="NewItems">
            <div className="NewItems__shell">
                <div className="NewItems__contant">
                    <h3 className="NewItems__title">Новинки</h3>
                    <div className="NewItems__slider">
                        <Slider {...settings}>
                        {Object.entries(catalogItems).map(([name, data]) => {return (
                            <div className="NewItems__container">
                                <div className="NewItems__item" key={name} style={{ backgroundImage: `url(img/${data.image})` }}>
                                    {data.isAvailable ? 
                                        <span className="NewItems__item-available"></span>
                                    : 
                                        <span className="NewItems__item-unavailable">
                                            {name}
                                        </span>
                                    }
                                    <span className="NewItems__item-caption">
                                        {name}
                                    </span>
                                    <div className="NewItems__item-prise">
                                        {data.prise},00 <span style={{fontSize:'12px', fontWeight:'400', paddingLeft:'5px'}}>грн</span>
                                        <span className="NewItems__item-amount"></span>
                                    </div>
                                    <button className="NewItems__item-button"></button>
                                </div>
                            </div>
                        )})}
                        </Slider>
                    </div>
                    <button className="NewItems__button" onClick={showAllNewItems}>Смотреть полный каталог</button>
                </div>
            </div>
        </section>
    )


}