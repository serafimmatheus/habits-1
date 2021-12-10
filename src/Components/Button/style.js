import styled from "styled-components";

// Matheus
// export const ButtonStyled = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   cursor: pointer;
//   border: 2px solid green;
//   border-radius: 8px;
// `;

// Figma Style
export const ButtonStyled = styled.button`
    background-color: ${props => (props.whiteSchema ? "#f9f9f9" : "#03031b")};
    color: ${props => (props.whiteSchema ? "#03031b" : "#f9f9f9" )};
    height: 45px; 
    border-radius: 8px;
    border: 1px solid var(--black-russian);
    font-family: 'PT Serif', serif;
    font-size: 1.2rem;
    margin-top: 16px;
    width: 300px;
    transition: 0.5s;
`