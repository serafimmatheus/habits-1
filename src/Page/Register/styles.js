import styled, { keyframes } from "styled-components";
import registerImage from "../../Assets/registerV.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    width: 50%;
    /* border-right: 1px solid var(--black); */
    background: url(${registerImage}) no-repeat center, var(--log-cabin);
    background-size: contain;
    /* background-size: contain (acima) para diminuir conforme altura diminui */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  /* max-width: 700px; */
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
      font-size: 3rem;
    }

    > div {
      margin-top: 16px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: var(--red);
      }
    }
  }
`;
