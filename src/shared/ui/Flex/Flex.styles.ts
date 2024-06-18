import styled from "styled-components";

export const Flex = styled.div<{
  direction?: "column" | "row";
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
