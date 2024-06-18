import styled from "styled-components";
import {Link as ReactLink} from 'react-router-dom';

import rec from '@static/images/Rec1.png';

import {Color} from "@shared";

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: rgba(0, 0, 0, .30) url(${rec});
    width: 100%;
    height: 170px;
    padding-top: 50px;
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
