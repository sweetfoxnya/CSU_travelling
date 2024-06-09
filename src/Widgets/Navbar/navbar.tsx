import React from "react";
import {Container} from "./navbarStyled";
import {NavbarItem} from "./UI/navbarItem";

export const Navbar = () => {
    return (
        <Container>
            <NavbarItem link={"/"}>Главная</NavbarItem>
            <NavbarItem link="/tours">Экскурсии</NavbarItem>
            <NavbarItem link="/login">Войти</NavbarItem>
            <NavbarItem link="/logout">Зарегистрироваться</NavbarItem>
        </Container>
    )
}