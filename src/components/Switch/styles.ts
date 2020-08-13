import styled from 'styled-components';

export const SwitchContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px){
    max-width: 1100px;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;
