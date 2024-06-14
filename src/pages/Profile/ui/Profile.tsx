import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    background-color: aliceblue;
    margin: 49px 286px 73px 286px;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    padding: 20px;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: aliceblue;
`;

const ProfileFrame = styled.div`
    display: flex;
    flex-direction: column;
`;

const Rectangle = styled.div`
    background: rgb(174,238,186);
    background: radial-gradient(circle, rgba(174,238,186,1) 0%, rgba(87,90,244,1) 100%);
    width: 800px;
    height: 70px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;
const Data = styled.div`
    background-color: #d9e2ea;
    width: 390px;
    height: 30px;
    border-radius: 7px;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

const Frame = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: aliceblue;
    align-items: center;
    justify-content: center;
`;
const MiniFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const Profile = () => {
  return (
      <Container>
          <NavBar>
              <a> Главная</a>
              <a> Экскурсии </a>
              <a> Мяу</a>
          </NavBar>
          <ProfileFrame>
              <Rectangle></Rectangle>
              <Frame>
                  <MiniFrame>
                      <div>
                          Пол
                      </div>
                      <Data>
                          Введённое значение

                      </Data>
                      <div>
                          Серия
                      </div>
                      <Data>
                          Введённое значение
                      </Data>
                      <div>
                          Номер
                      </div>
                      <Data>
                          Введённое значение
                      </Data>

                  </MiniFrame>
                  <MiniFrame>
                      <div>
                          Пол
                      </div>
                      <Data>
                          Введённое значение
                      </Data>
                      <div>
                          Серия
                      </div>
                      <Data>
                          Введённое значение
                      </Data>
                      <div>
                          Номер
                      </div>
                      <Data>
                          Введённое значение
                      </Data>

                  </MiniFrame>
              </Frame>

          </ProfileFrame>
      </Container>

  );
};
