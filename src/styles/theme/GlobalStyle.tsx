import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  body
  { 
    background-color: ${({ theme }) => theme.background}; 
    color: ${({ theme }) => theme.color}; 
    transition: all 0.3s linear;
  }
`;
