import styled from "styled-components";
import { Link as ReactLink} from 'react-router-dom';
import {rgba} from "polished";

import {Color} from "@shared";

export const Container = styled.nav`
    display: flex;
`;

export const Link = styled(ReactLink)`
    padding: 20px;
    
    text-decoration: none;
    color: ${Color.Black};
    font-size: 30px;
    
    &:hover {
        background: ${rgba(Color.Black, .1)};
    }
`;
