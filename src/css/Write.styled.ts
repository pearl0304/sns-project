import styled from 'styled-components';

export const WriterWrapper = styled.div`
  margin-top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;

  .upload-form form {
    display: flex;
    flex-direction: column;
  }

  .upload-form form label {
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .upload-form form button {
    margin-top: 40px;
  }
`;
