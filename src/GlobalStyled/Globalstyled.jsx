import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}

  button{
    cursor: pointer;
  }

  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%); 
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
}
  
`;

export default GlobalStyled;
