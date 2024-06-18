import React from 'react';
import * as SС from './Profile.style';
import {NavMenu} from "@pages/Profile/ui/nav/nav";

export const Profile = () => {
  return (
      <SС.Container>
          <SС.Card>
              <NavMenu/>
              <SС.ProfileFrame>
                  <SС.Rectangle></SС.Rectangle>
                  <SС.Header>
                      <SС.Icon></SС.Icon>
                      <SС.DataLogin>
                          <SС.UserName> Sweetfoxnya</SС.UserName>
                          <SС.Email>Sweetfoxnya@mail.ru</SС.Email>
                      </SС.DataLogin>
                  </SС.Header>
                  <SС.Frame>
                      <SС.MiniFrame>
                          <SС.NameData>
                              Имя
                          </SС.NameData>
                          <SС.Data>

                          </SС.Data>
                          <SС.NameData>
                              Фамилия
                          </SС.NameData>
                          <SС.Data>

                          </SС.Data>
                          <SС.NameData>
                              Отчество
                          </SС.NameData>
                          <SС.Data>

                          </SС.Data>

                      </SС.MiniFrame>
                      <SС.MiniFrame>
                          <SС.NameData>
                              Пол
                          </SС.NameData>
                          <SС.Data>

                          </SС.Data>
                          <SС.NameData>
                              Серия
                          </SС.NameData>
                          <SС.Data>

                          </SС.Data>
                          <SС.NameData>
                              Номер
                          </SС.NameData>
                          <SС.Data>

                          </SС.Data>

                      </SС.MiniFrame>
                  </SС.Frame>

              </SС.ProfileFrame>
          </SС.Card>
      </SС.Container>
  );
};
