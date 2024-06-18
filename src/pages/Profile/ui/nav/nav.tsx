import React from 'react';

import * as SC from './nav.style';
import {NavBar} from "@pages/Profile/ui/nav/nav.style";
import {NavBarItem} from "./nav.style";

export const NavMenu = () => {
    return (
        <SC.NavBar>
            <SC.NavBarItem to='/'>Главная</SC.NavBarItem>
            <SC.NavBarItem to='/excursions'>Экскурсии</SC.NavBarItem>
            <SC.NavBarItem to='/auth/login'>Войти</SC.NavBarItem>
            <SC.NavBarItem to='/auth/register'>Зарегистрироваться</SC.NavBarItem>
            <SC.NavBarItem to='/profile'>Личный кабинет</SC.NavBarItem>
        </SC.NavBar>
);
};