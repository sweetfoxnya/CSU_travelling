import styled from 'styled-components';
import {Color} from "@shared";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
`;

export const Body = styled.div`
  --padding: 56px 40px 40px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 28px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 40px;
  font-size: 66px;
`;
