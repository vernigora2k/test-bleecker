import React, { Fragment } from 'react';
import './MainBanner.scss'

export const MainBanner = () => {
    return (
        <section className="MainBanner">
            <div className="MainBanner__shell">
                <div className="MainBanner__contant">
                    <div className="MainBanner__caption">
                        <h2>Инструмент Bosc для любых целей и решений</h2>
                    </div>
                    <span>Неповторимое сочетание иновационных технологий и дизайна.</span>
                    <button className="MainBanner__button">Выбрать</button>
                    <div className="MainBanner__image"></div>
                </div>
            </div>
        </section>
    )
}