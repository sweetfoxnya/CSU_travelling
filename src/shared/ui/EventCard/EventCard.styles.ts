import styled from "styled-components";
import {Color} from "@shared/constants";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    padding: 16px 32px;
    
    border-radius: 16px;
    background-color: ${Color.Gray};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    padding: 8px 16px;
    
    border-radius: 8px;
    background-color: ${Color.White};
`;
