import styled from "styled-components";
import {Color} from "@shared";
import {Link as ReactLink} from "react-router-dom";

export const NavBar = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: aliceblue;
`;

export const NavBarItem = styled(ReactLink)`
    font-family: Mont;
    text-decoration: none;
    color: black;
    &:hover {
        color: ${Color.Peach};
    }
`;