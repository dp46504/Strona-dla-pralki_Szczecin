import styled, { createGlobalStyle, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const mobileDesktop = "426px";

export const colors = {
  blue: "#1b3659",
  lightBlue: "#1A4173",
  gray: "#737373",
  lightGray: "#BFBFBF",
  black: "#262626",
  a: "#2e6ab8",
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  
}



a{
  text-decoration:none;
  color:${colors.a};
  font-weight:bold;
}

html,body {margin: 0; height: 100%; overflow: auto}

  @media screen and (max-width: ${mobileDesktop}){
    :root{font-size:20px;}
  }
`;

export const MenuItem = styled(NavLink)`
  color: ${colors.lightBlue};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  margin: 0.25rem;
  border: 0.3rem solid ${colors.lightBlue};
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 300ms;
  &:any-link {
    text-decoration: none;
  }

  @media screen and (max-width: ${mobileDesktop}) {
    border: none;
    background: transparent;
    background-position: center;
    background-blend-mode: screen;
    color: ${colors.lightGray};
    /* backdrop-filter: blur(10px); */
    width: 78%;
    height: 10vh;
    transition: background 350ms;
  }
`;

export const MenuBarBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: ${mobileDesktop}) {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: -100vw;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
    background: ${colors.lightBlue};
    background-size: cover;
  }
`;

const dropFromUp = keyframes`
from{
transform: translateY(-20vh)
}
to{
transform:translateY(0)
}

`;

export const LogoBar = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 8%;
  background-color: ${colors.blue};
  flex-direction: row;
  justify-content: flex-start;
  animation: ${dropFromUp} 300ms both;
`;

// BurgerIcon
export const BurgerIconContainer = styled.div`
  width: 60px;
  height: 60px;
  display: none;
  /* background-color: white; */
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;

  @media screen and (max-width: ${mobileDesktop}) {
    display: flex;
    /* backdrop-filter: blur(5px); */
  }
`;

export const LineBurger = styled.div`
  width: 80%;
  transform-origin: center;
  height: 5px;
  position: absolute;
  background-color: ${colors.black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: ${mobileDesktop}) {
    width: 80%;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.lightBlue};
  margin: 2vh auto 0 auto;
  display: flex;
  text-align: left;
`;

export const Content = styled.div`
  width: 100%;
  color: ${colors.black};
  font-size: 1.2rem;
`;

export const CommentBox = styled.div`
  border: 0.2rem dashed ${colors.lightGray};
  padding: 1vh;
  margin: 1vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 300ms;
  &:hover {
    transform: translateX(20px);
  }
  @media screen and (max-width: ${mobileDesktop}) {
    &:hover {
      transform: none;
    }
  }
`;

export const Author = styled.div`
  width: 100%;
  border-top: 0.1rem dashed ${colors.lightGray};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: ${colors.black};
`;

export const CommentContent = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-weight: bold;
  color: ${colors.lightBlue};
  @media screen and (max-width: ${mobileDesktop}) {
    font-weight: normal;
  }
`;

export const ListItem = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0.3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.lightBlue};
  transition: transform 200ms, background 200ms;
  overflow-x: hidden;

  &:first-of-type {
    padding-top: 3vh;
  }

  @media screen and (max-width: ${mobileDesktop}) {
    &:hover {
      transform: none;
    }
    font-size: 1rem;
  }
`;

export const FormBox = styled.form`
  display: flex;
  margin-top: 2vh;
  flex-direction: column;
  justify-content: center;
  align-items: auto;
  width: 70%;
  border: 0.2rem dashed ${colors.lightBlue};
`;
export const Input = styled.input`
  border: 0.2rem dotted ${colors.blue};
  margin: 1vh;
  width: 100%;
  padding: 1vh;
  font-size: 1.2rem;
  text-align: center;
  transition: top 300ms, left 300ms;
  &:last-of-type {
    height: 20vh;
  }
  &:first-of-type {
    margin-top: 5vh;
  }
  @media screen and (max-width: ${mobileDesktop}) {
    font-size: 1.1rem;
    border: 0.15rem dotted ${colors.blue};
    &:focus {
      position: absolute;
      top: 2.5vh;
      left: 2.5vw;
      margin: 0 auto;
      width: 95vw;
      height: 30vh;
    }
  }
`;

export const Button = styled.a`
  border: 0.2rem solid ${colors.blue};
  margin: 1vh;
  padding: 1vh;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.blue};
  text-decoration: none;
`;
export const MadziaContainer = styled.div`
  display: flex;
  padding: 0 5vw 3vh 5vw;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;

  & img {
    width: 100%;
    align-self: center;
  }

  ul {
    padding: 0 0;
  }

  & li {
    list-style-type: none;
  }

  & ${Title} {
    justify-content: center;
    text-align: center;
    color: ${colors.blue};
  }
  & ${Content} {
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${mobileDesktop}) {
    & img {
      width: 100%;
      border: 0.3rem solid ${colors.lightBlue};
    }
    & ${Content} {
      font-size: 1rem;
    }

    width: 80%;
    background-color: ${colors.a};
  }
`;
