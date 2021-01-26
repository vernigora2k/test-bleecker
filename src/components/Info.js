import React, { Fragment } from 'react';
import './Info.scss'

export const Info = () => {
    return (
        <section className="Info">
            <div className="Info__shell">
                <div className="Info__contant">
                    <div className="Info__banner"></div>
                    <article className="Info__article">
                        <h2 className="Info__title">Наша компания осуществляет поставки промышленного инструмента</h2>
                        <div className="Info__description">
                        На нашем складе имеется широкий ассортимент инструмента который постоянно обновляется и расширяется. За время существования компании, налажено тесное сотрудничество с заводами-производителями, крупными фирмами Украины, стран СНГ, стран дальнего зарубежья, поэтому сможем обеспечить Вас большим ассортиментом как универсального 
                        так и специального качественного инструмента. <br/><br/>
                        Кроме инструмента, который можно приобрести в любой торгующей фирме, мы специализируемся на изготовлении твердосплавного инструмента 
                        а именно: фрезы, сверла, развертки твердосплавные монолитные, cверла оснащенные пластинами из твердого сплава.
                        </div>
                        <button className="Info__button">Читать подробнее</button>
                    </article>
                </div>
                <div className="Info__adit">
                    <div className="Info__important">
                        <h3 className="important__title">Важная информация</h3>
                        <div className="important__items">
                            <div className="important__item">Минимальная сумма заказа 200,00 грн.</div>
                            <div className="important__item">Цена на сайте может отличаться от фактической</div>
                            <div className="important__item">Цены на сайте указаны с учетом НДС</div>
                            <div className="important__item">Наша компания является плательщиком НДС</div>
                        </div>
                    </div>
                    <div className="Info__order">
                        <h3 className="order__title">Как заказать</h3>
                        <ul>
                            <li>Оформить заказ на сайте через корзину</li>
                            <li>Прислать заказ на e-mail или через <span>форму обратной связи</span></li>
                            <li>Оформить заказ по телефону - <span>контактные телефоны</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}