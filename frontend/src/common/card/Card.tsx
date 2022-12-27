import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 60%;
  margin: auto;
  padding: 12px;
`;

interface ICard {
  children: any;
}

export const Card = ({ children }: ICard) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};
