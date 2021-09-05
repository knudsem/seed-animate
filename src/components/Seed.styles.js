import styled from "styled-components";
import { isIE } from "react-device-detect";


// All styled components

export const Wrapper = styled.div`
  position: ${isIE ? "absolute" : "fixed"};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  opacity:1;
  z-index: 1;
  ${isIE &&
  `
    top: 0; 
    left: 0;
      `}
`;

export const Container = styled.div`
  position: ${isIE ? "absolute" : "fixed"};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url("${(props) => props.backgroundImage}");
  background-size: cover;
  z-index: 1;
  @media screen and (max-width: 800px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  ${isIE &&
  `
    top: 0; 
    left: 0;
      `}
      
`;

export const EnvelopContainer = styled.div`
  && {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: auto;
    height: 100%;
    width: 100%;
    justify-content: space-around;
  }
`;