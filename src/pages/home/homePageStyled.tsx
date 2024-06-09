import styled from "styled-components";
import backgroundImage from "../../images/back.png";
import Mont from '../../font/Mont.ttf';
import Mr from '../../font/mr.otf';
import MontBig from '../../font/MontBig.ttf';

export const Container = styled.div`
    position: relative;
    width: 1536px;
    height: 740px;
    gap: 0;
    padding: 0;
    z-index: 0;
    background: rgba(0, 0, 0, .30)url(${({ background }) => backgroundImage});
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
    bottom: -145px;
    @font-face {
        font-family: 'Mont';
        src: url(${Mont}) format('truetype');
    }
`;
export const TitleMiddle = styled.p`
    font-size: 55px;
    font-weight: 400;
    line-height: 64px;
    text-align: left;
    color: #FFC700;
    font-family: Mr;
    margin: 0;
    position: absolute;
    bottom: -185px;
    right: 737px;
    
    @font-face {
        font-family: 'Mr';
        src: url(${Mr}) format('truetype');
    }

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
    @font-face {
        font-family: 'MontBig';
        src: url(${MontBig}) format('truetype');
    }
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