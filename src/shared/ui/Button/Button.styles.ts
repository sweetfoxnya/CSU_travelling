import styled from "styled-components";

import {Color} from "@shared/constants";

export const Button = styled.button<{
  color?: string;
}>`
  padding: 8px 16px;
    
  border-radius: 8px;
  background: ${({ color }) => color ?? Color.Blue};
    
  font-weight: 600;
  color: ${Color.White};
`;
