import React, { Fragment, useState } from 'react';
import Slider from 'react-slick';
import './Footer.scss'

export const Footer = () => {
    return (
        <section className="Footer">
            <div className="Footer__shell-left">  
                <div className="left-contant__col1">
                    <div className="Footer__logo">
                        <span>КОМПАНИЯ ИНСТРУМЕНТ</span>
                    </div>
                    <span className="Footer__copiright">© 2021 Название компании. Все права защищены</span>
                    <div className="Footer__visa">Мы принимаем:</div>
                </div>
                <div className="left-contant__col2">
                    <div className="col2-title">
                        <span>Информация</span>
                    </div>
                    <div className="col2-links">
                        <span>О компании</span>
                        <span>Производители</span>
                        <span>Контакты</span>
                    </div>
                </div>
                <div className="left-contant__col3">
                    <div className="col3-title">
                        <span>Полезное</span>
                    </div>
                    <div className="col3-links">
                        <span>Оплата заказа</span>
                        <span>Обмен и возврат</span>
                        <span>Доставка</span>
                        <span>Статьи</span>
                    </div>
                </div>   
            </div>
            <div className="Footer__shell-right">
                <div className="Footer__feedback">
                    <span className="feedback-tel1">094 986 29 18</span>
                    <span className="feedback-getpurchase">Заказать или оформить покупку</span>
                    <span className="feedback-email">office@company.ua</span>
                    <span className="feedback-tel2">050 711 88 43</span>
                    <span className="feedback-tel3">067 647 91 71</span>
                </div>
            </div>
        </section>
    )
}