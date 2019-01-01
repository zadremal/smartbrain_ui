import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.25rem;
  marign: 1rem;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center
  padding: 2rem;
  background-color:#556;
background-image: linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), 
linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);
background-size:80px 140px;
background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
`;

export const Input = styled.input`
  font-size: 1.25rem;
  flex-basis: 70%;
  height: auto;
`;
export const Button = styled.button`
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  flex-basis: 30%;
  background-color: #8a2be2;
  color: #fff;
  border: 0;
`;
