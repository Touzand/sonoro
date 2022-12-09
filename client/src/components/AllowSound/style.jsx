import styled from "styled-components";
import "../../index.css";

export const AllowContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 100%;
  bottom: 0;
  right: 0;
  background-color: var(--second-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primal-color);
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 100px;
  }

  * {
    pointer-events: none;
  }
`;
