import {Links} from "./navbarItemStyled";
import React from "react";

interface NavbarItemProps {
    link: string;
    children: React.ReactNode;
}
export const NavbarItem = ({ link, children }: NavbarItemProps) => {
    return (<Links href={link}> {children}</Links>)
}