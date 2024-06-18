import styled from "styled-components";
import {Link as ReactLink} from "react-router-dom";
import {Color} from "@shared";

export const Container = styled.div`
    display: flex;
    gap: 30px;
    position: relative;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    color: white;
    font-size: 60px;
    position: absolute;
    white-space: nowrap;
    top: 150px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    padding: 18px;
    width: 400px;
    height: 450px;
    gap: 40px;
`;

export const Link = styled(ReactLink)`
    color: ${Color.White};
    padding: 15px 15px;
    text-decoration: none;
    font-size: 17px;
    font-family: Mont;
    background: linear-gradient(90deg, rgba(4, 153, 221, 1) , rgba(23, 193, 188, 1) 100%);
    border-radius: 60px;
    &:hover {
        box-shadow: 5px 5px 10px rgba(0.5, 0.5, 0.5, 0.5);
    }
`;
