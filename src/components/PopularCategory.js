import React, { Fragment, useState } from 'react';
import './PopularCategory.scss'

export const PopularCategory = () => {
    const [isFullCatalog, setIsFullCatalog] = useState(false);

    const catalogItems = {
        'Твердосплавный инструмент': 'popular-1.jpg',
        'Металорежущий инструмент': 'popular-2.jpg',
        'Абразивный инструмент': 'popular-3.jpg',
        'Алмазный инструмент': 'popular-4.jpg',
        'Измерительный инструмент': 'popular-5.jpg',
        'Слесарный, ручной инструмент': 'popular-6.jpg',
        'Оснастка и приспособления': 'popular-7.jpg',
        'Электроинструмент': 'popular-8.jpg',
        'инструмент9': 'popular-1.jpg',
        'инструмент10': 'popular-2.jpg',
        'инструмент11': 'popular-3.jpg',
        'инструмент12': 'popular-4.jpg',
        'инструмент13': 'popular-5.jpg',
        'инструмент14': 'popular-6.jpg',
        'инструмент15': 'popular-7.jpg',
        'инструмент16': 'popular-8.jpg',
    }

    const showFullCatalog = () => {
        setIsFullCatalog(!isFullCatalog)
    }

    return (
        <section className="PopularCategory">
            <div className="PopularCategory__shell">
                <div className="PopularCategory__contant">
                    <h3 className="PopularCategory__title">Популярные категории товаров</h3>
                    <div className="PopularCategory__items">
                        {!isFullCatalog ? 
                            Object.entries(catalogItems).slice(0,8).map(([name, img]) => {return (
                            <div className="PopularCategory__item" key={name} style={{ backgroundImage: `url(/img/${img})`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'right', backgroundPositionY: 'bottom' }}>
                                <span className="PopularCategory__item-caption">
                                    {name}
                                </span>
                                <div className="PopularCategory__item-arrow" style={{ backgroundImage: `url(/img/popular-arrow.png)`, backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            )}) 
                        :   Object.entries(catalogItems).map(([name, img]) => {return (
                            <div className="PopularCategory__item" key={name} style={{ backgroundImage: `url(img/${img})`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'right', backgroundPositionY: 'bottom' }}>
                                <span className="PopularCategory__item-caption">
                                    {name}
                                </span><div className="PopularCategory__item-arrow" style={{ backgroundImage: `url(/img/popular-arrow.png)`, backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            )}) 
                        }
                    </div>
                    <button className="PupularCategory__button" onClick={showFullCatalog}>Смотреть полный каталог</button>
                </div>
            </div>
        </section>
    )
}