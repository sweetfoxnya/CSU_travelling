import React from 'react';
import {Navbar} from "../../Widgets/Navbar/navbar";
import {Container, Content, ExcursionButton, TitleTop, TitleMiddle, Title, TitleBottom, Logo} from "./homePageStyled";
export const HomePage = () => {
    return (
        <Container>
            <Navbar/>
            <Content>
                <Title>
                    <TitleTop>Путешествуй</TitleTop>
                    <TitleMiddle>вместе с</TitleMiddle>
                    <TitleBottom>RusVenture</TitleBottom>
                </Title>
                <ExcursionButton>
                    К экскурсиям →
                </ExcursionButton>
            </Content>
        </Container>
    );
};