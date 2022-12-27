import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  align-items: center;
  box-shadow: black 0px 5px 15px;
  justify-content: space-between;
`;

const HeadingDiv = styled.div`
  font-size: 24px;
  margin-left: 24px;
  cursor: pointer;
`;

const LinksDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`;

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeadingDiv onClick={() => navigate("/")}>Marcel Hofmann</HeadingDiv>
      <LinksDiv>
        <Button color="secondary" onClick={() => navigate("/blog")}>
          Blog
        </Button>
        <Button color="secondary" onClick={() => navigate("/me")}>
          About Me
        </Button>
      </LinksDiv>
    </Container>
  );
};
