import styled from "styled-components";
import {Link as ReactLink} from 'react-router-dom';
import {rgba} from "polished";

import {Color} from "@shared";

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: unset;
    padding: 45px 60px 0 200px;
    
`;

export const Link = styled(ReactLink)`
    color: ${Color.White};
    padding: 0 15px;
    text-decoration: none;
    font-size: 17px;
    font-family: Mont;

    &:hover {
        color: ${Color.Yellow};
    }
`;
