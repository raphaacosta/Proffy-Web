import styled from 'styled-components';

export const DropzoneStyle = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.title === 'light' ? '#ccc' : '#999'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;