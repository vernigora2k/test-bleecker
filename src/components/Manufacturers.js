import React, { Fragment, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Manufacturers.scss'

export const Manufacturers = () => {
    const [slides, setSlides] = useState(6)
    const [width, setWidth] =useState(window.innerWidth)

    const manufacturers = {
        'bosch': '1.jpg',
        'fanar': '2.jpg',
        'makita': '3.jpg',
        'intertool': '4.jpg',
        'groz': '5.jpg',
        'maxidrill': '6.jpg',
        'gvto': '7.jpg',
        'miol': '8.jpg',
        'sibrtex': '9.jpg',
        'ruko': '10.jpg',
        'bizon': '11.jpg',
        'hz': '12.jpg',
    }

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
      };

    const showAllNewItems = () => {
        console.log('Show all new items')
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        if(width>1460 && slides==6) {
            console.log('')
        } else {
           if (width>1460 && slides!=6) {
               setSlides(6)
           } else {
               if (width<1460 && slides==6) {
                   setSlides(2)
               } else setSlides(2)
           }
        }
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    })


    return (
        <section className="Manufacturers">
            <div className="Manufacturers__shell">
                <div className="Manufacturers__contant">
                    <h3 className="Manufacturers__title">Выберите продукцию по производителю</h3>
                    <div className="Manufacturers__slider">
                        <Slider {...settings}>
                        {Object.entries(manufacturers).map(([name, image], i) => {return (
                            <div className="Manufacturer__item" key={name} >
                                {(Object.entries(manufacturers)[i]) && 
                                    <div className="Manufacturer__item-caption" style={{ backgroundImage: `url(img/manufacturers/${image})` }}></div>
                                }
                                {(Object.entries(manufacturers)[i]) && 
                                    <div className="Manufacturer__item-caption2" style={{ backgroundImage: `url(img/manufacturers/${12-i}.jpg)` }}></div>
                                }
                            </div>
                        )})}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}