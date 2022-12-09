import styled from "styled-components";

export const TrackContainer = styled.div`
  max-width: 700px;
  min-width: auto;
  margin: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));

  @media (max-width: 620px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  img {
    height: 100px;
  }
`;
