import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 70%;
  max-width: 420px;
  padding: 30px;
  margin: 0 auto;
  box-shadow: 6px 6px 33px 0px rgba(0, 0, 0, 0.75);
`;

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 36px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 240px;
  margin: 12px auto;
  border-radius: 3px;
  border: 2px solid #000;
  padding: 6px 12px;
`;

export const Button = styled.button`
  background-color: transparent;
  margin: 20px auto;
  display: block;
  color: #fff;
  padding: 6px 20px;
  border-radius: 3px;
  border: 2px solid #000;
  font-size: 16px;

  transition: all 0.2s ease-out;
  &:hover {
    background-color: #8a2be2;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  color: #000;
  width: 100%;
  text-align: center;
  display: block;
  fonst-size: 18px;
  font-weigth: 800;
  font-family: "Inconsolata", monospace, sans-serif;
`;

export const RegisterLink = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  min-height: 20px;
  color: red;
`;
