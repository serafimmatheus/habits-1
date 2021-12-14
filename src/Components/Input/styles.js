import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  p {
    padding-bottom: 3px;
    padding-left: 10px;

    @media screen and (max-width: 400px) {
      font-size: 0.9rem;
    }
  }

  div {
    span {
      padding: 3px 10px 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--red);
      font-style: italic;
      font-size: 0.7rem;
      text-align: center;
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 1px solid var(--log-cabin);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  input {
    background: transparent;
    font-family: "PT Serif", serif;
    font-size: 1rem;
    align-items: center;
    flex: 1;
    border: 0;
    outline-color: var(--coriander);
    outline-offset: 0.1em;
    &::placeholder {
      color: var(--log-cabin);

      @media screen and (max-width: 410px) {
        font-size: 0.9rem;
      }
    }
  }

  svg {
    margin-right: 16px;
    color: var(--log-cabin);
  }
`;
