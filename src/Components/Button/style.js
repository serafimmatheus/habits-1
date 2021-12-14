import styled from "styled-components";

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

    @media screen and (max-width: 410px) {
      width: 270px;
      font-size: 1.1rem;
    }

    @media screen and (max-width: 360px) {
      width: 240px;
    }
`