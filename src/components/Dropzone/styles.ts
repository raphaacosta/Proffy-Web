import styled from 'styled-components';

export const DropzoneStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  background: ${({ theme }) => theme.title === 'light' ? '#ccc' : '#999'};
  border-radius: 50%;
  
  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }

  @media (min-width: 1100px) {
    height: 100%;
    width: 100%;
    outline: 0;

    > img {
      object-fit: cover;
    }
  }
`;