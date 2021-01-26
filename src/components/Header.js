import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

export const Header = () => {
    const catalogMenuItems = {
        'Твердосплавный инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Металлорежущий инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Абразивный инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Алмазный инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Измерительный инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Слесарный, ручной инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Оснастка и приспособление': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Электроинструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Средства защиты': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Расходные материалы': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Пневмоинструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Сварочные электроды, проволка': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Домкраты гидравлические': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Разный инструмент': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Уцененный товар': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
        'Новые товары в каталоге': [{'Штангенциркули': 'newitems-2.png'}, {'Глубиномеры': 'newitems-2.png'},{'Индикаторы': 'newitems-2.png'},{'Линейки': 'newitems-2.png'},{'Микрометры': 'newitems-2.png'},{'Меры угла': 'newitems-2.png'},{'Концевые меры длины': 'newitems-2.png'},{'Наборы щупов, радиусомеры': 'newitems-2.png'},{'Нутрометры': 'newitems-2.png'},{'Призмы, поверочные, плиты': 'newitems-2.png'},{'Проволочки для изм. средн. диам. резьбы': 'newitems-2.png'},{'Рулетки': 'newitems-2.png'},{'Поверочные стеклянные пластины': 'newitems-2.png'},{'Скобы': 'newitems-2.png'},{'Угломеры': 'newitems-2.png'},],
    }

    return (
        <header className="header">
            <div className="header__shell">
                <div className="header__row header__nav">
                    <div className="header__logo">
                        <span>КОМПАНИЯ ИНСТРУМЕНТ</span>
                    </div>
                    <nav className="header__nav">
                        <NavLink to={"/about"}>О компании</NavLink>
                        <NavLink to={"/"}>Производители</NavLink>
                        <NavLink to={"/"}>Акции</NavLink>
                        <NavLink to={"/"}>Доставка</NavLink>
                        <NavLink to={"/"}>ГОСТы</NavLink>
                        <NavLink to={"/"}>Контакты</NavLink>
                    </nav>
                    <div className="header__langSwitch">
                    <label class="label">
                        <div class="toggle">
                            <input class="toggle-state" type="checkbox" name="check" value="check" defaultChecked />
                            <div class="toggle-inner">
                            <div class="indicator"></div>
                            </div>
                            <div class="active-bg"></div>
                        </div>
                        <div class="label-text">RU</div>
                    </label>
                    </div>
                    <div className="header__tel">
                        <span>+38 067 255 12 12</span>
                        <span className="header__tel-adit header__tel-adit1">+38 097 777 77 77</span>
                        <span className="header__tel-adit header__tel-adit2">+38 097 777 77 77</span>
                    </div>
                </div>
                <div className="header__row header__main">
                    <div className="header__catalogBtn">
                        <button className="catalogBtn">
                            КАТАЛОГ ТОВАРОВ
                            <div className="header__catalog-menu">
                                <div className="catalog-menu__clean"></div>
                                {Object.entries(catalogMenuItems).map(([name, data]) => {return (
                                <div className="catalog-menu__item" style={{ backgroundImage: `url(img/header-catalog-menu-arrow.png` }} key={name}>
                                   {name}
                                </div>
                                 )})}      
                                <div className="catalog-menu__inner-menu">
                                {Object.entries(catalogMenuItems).splice(0, 1)[0][1].map((e,i) => {return (
                                    <div className="inner-menu__item" style={{ backgroundImage: `url(img/inner-menu/${i+1}.png` }}>
                                        <span>
                                            {Object.keys(e)[0]}
                                        </span>
                                    </div>
                                )})}
                                </div>
                            </div>
                        </button>
                    </div>
                    <input className="header__search" type="text" placeholder="Введите название или код товара" />
                    <div className="header__basket">
                        <button className="basket">Корзина</button>
                    </div>
                </div>
            </div>
        </header>
    )
}