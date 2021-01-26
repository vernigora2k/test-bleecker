import React, { Fragment, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './News.scss'

export const News = () => {
    const [slides, setSlides] = useState(3)
    const [width, setWidth] =useState(window.innerWidth)

    const articleItems = {
        'Выбор абразивного материала, зернистость круга, твердость': {image: 'news-item1.png', isAvailable: true, prise: '2 ноября 2020 г.'},
        'Твердые сплавы - основные свойства, классификация, область применения': {image: 'news-item2.png', isAvailable: true, prise: '29 октября 2020 г.'},
        'Инструментальные стали': {image: 'news-item1.png', isAvailable: true, prise: '28 октября 2020 г.1'},
        'Гайковерт пневматический ударный G1260': {image: 'news-item2.png', isAvailable: true, prise: '28 октября 2020 г.'},
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
        if(width>1460 && slides==3) {
            console.log('')
        } else {
           if (width>1460 && slides!=3) {
               setSlides(3)
           } else {
               if (width<1460 && slides==3) {
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
        <section className="News">
            <div className="News__shell">
                <div className="News__contant">
                    <div className="News__article">
                        <h3 className="News__title">Новости и статьи</h3>
                        <span className="News__description">
                        Изучай новые инструменты и лайфхаки для создания или ремонта своего дома, улучешние бизнеса, продвижения компании.
                        </span>
                    </div>
                    <div className="News__slider">
                        <Slider {...settings}>
                        {Object.entries(articleItems).map(([name, data]) => {return (
                            <div className="News__container">
                                <div className="News__item" key={name} style={{ backgroundImage: `url(img/${data.image})`, backgroundSize: 'cover' }}>
                                    
                                    <span className="News__item-caption">
                                        {name}
                                    </span>
                                    <div className="News__item-prise">
                                        {data.prise}
                                    </div>
                                </div>
                            </div>
                        )})}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}