import styled from "styled-components";
import profile from '@static/images/profile.png';
import rec from '@static/images/rec.png';
import {Color} from "@shared";

export const Container = styled.div`
    background: rgba(0, 0, 0, .30) url(${profile});
    background-size: cover;
    width: 100%;
    height: 740px;
    display: flex;
    align-content: center;
    justify-content: center;
`;
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    background-color: aliceblue;
    margin: 49px 286px 73px 286px;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    padding: 20px;
`;

export const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: aliceblue;
`;

export const NavBarItem = styled.a`
    font-family: Mont;
    &:hover {
        color: ${Color.Peach};
    }
`;

export const ProfileFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const Rectangle = styled.div`
    background: rgba(0, 0, 0, .30) url(${profile});
    width: 800px;
    height: 70px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`;

export const Icon = styled.div`
    width: 93px;
    height: 93px;
    background: rgba(0, 0, 0, .30) url(${rec});
    border-radius: 100px;
`;

export const DataLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    justify-content: center;
`;

export const UserName = styled.div`
    font-family: Mont;
`;

export const Email = styled.div`
    font-family: Mont;
`;

export const Data = styled.div`
    background-color: #dcecfa;
    width: 390px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
    font-family: Mont;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: aliceblue;
    align-items: center;
    justify-content: center;
`;
export const MiniFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const NameData = styled.div`
    font-family: Mont;
`;