import styled from "styled-components";
import {Link as ReactLink} from "react-router-dom";

export const Link = styled(ReactLink)`  
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 20px;
`;

export const Avatar = styled.img`  
    width: 40px;
    height: 40px;
`;
