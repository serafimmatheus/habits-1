import styled, {css} from "styled-components";

export const Container = styled.div`
    text-align: left;

    div {
        span {
            color: var(--red);
            font-style: italic;
            font-size: 0.8rem;
        }
    }
`

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 1px solid var(--log-cabin);
    color: var(--gray);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;

    ${props => props.isErrored && css`
        border-color: var(--red);
    `}

    input {
        background: transparent;
        font-family: 'PT Serif', serif;
        font-size: 1rem;
        align-items: center;
        flex: 1;
        border: 0;
        /* color: var(--log-cabin); */
        outline-color: var(--coriander);
        outline-offset: 0.1em;
        &::placeholder {
            color: var(--log-cabin);
        }
    }
    
    svg {
        margin-right: 16px;
        color: var(--log-cabin);
    }
`