import React from 'react';
import * as SC from "./NavBar.styles";
export const NavBar = () => {
    return (
        <SC.Container>
            <SC.Link to='/'>
                Главная
            </SC.Link>
            <SC.Link to='/excursions'>
                Экскурсии
            </SC.Link>
            <SC.Link to='/auth/login'>
                Войти
            </SC.Link>
            <SC.Link to='/auth/register'>
                Зарегистрироваться
            </SC.Link>
            <SC.Link to='/profile'>
                Личный кабинет
            </SC.Link>
        </SC.Container>
    );
};
