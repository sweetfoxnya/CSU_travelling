import styled from "styled-components";

import back from '@static/images/back.png';

export const Container = styled.div`
    position: relative;
    
    width: 100%;
    height: 740px;
    
    background: rgba(0, 0, 0, .30) url(${back});
    background-size: cover;
    background-blend-mode: darken;
`;

export const Logo = styled.img`
    width: 60px;
    height: 40px;
    z-index: 10;
    position: absolute;
`;

export const Content = styled.div`
    padding: 150px 0 358px 160px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    position: relative;
`;

export const TitleTop = styled.div`
    font-size: 72px;
    font-weight: 400;
    line-height: 87px;
    text-align: left;
    color: white;
    font-family: Mont;
    margin: 0;
    position: absolute;
    bottom: -140px;
    
`;

export const TitleMiddle = styled.p`
    font-size: 55px;
    font-weight: 400;
    line-height: 64px;
    text-align: left;
    color: #FFC700;
    margin: 0;
    position: absolute;
    bottom: -185px;
    right: 810px;
    font-family: mr;

`;

export const TitleBottom = styled.p`
    font-size: 96px;
    font-weight: 900;
    line-height: 117px;
    text-align: left;
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 1px white;
    margin: 0;
    position: absolute;
    bottom: -245px;
    font-family: MontBig;
`;

export const ExcursionButton = styled("button")`
    width: 230px;
    height: 50px;
    top: 491px;
    left: 160px;
    gap: 0;
    border-radius: 60px;
    color: white;
    background: linear-gradient(90deg, rgba(4, 153, 221, 1) , rgba(23, 193, 188, 1) 100%);
    position: absolute;
`;
