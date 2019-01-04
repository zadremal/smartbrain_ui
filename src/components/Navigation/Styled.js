import styled from "styled-components";

export const Nav = styled.nav`
  padding: 1rem;
`;

export const NavItem = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #2e2e2e;
  margin: 0 8px;
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    color: #4e4e4e;
    text-decoration: underline;
  }
`;
