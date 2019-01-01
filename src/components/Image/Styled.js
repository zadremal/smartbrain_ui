import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
`;

export const Box = styled.div`
  box-shadow: 0px 0px 0px 3px rgba(152,84,255,1);
  position: absolute;
  top: ${props => props.top}
  bottom: ${props => props.bottom}
  left: ${props => props.left}
  right: ${props => props.right}
  display: flex;
  transition: all .2s ease-out;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 0px 3px rgba(152,84,255,.6);
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 1rem auto;
`;
