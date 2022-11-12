import styled from 'styled-components';

export const WriterWrapper = styled.div`
  position: fixed;
  top: 50px;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  .upload-form {
    width: 400px;
    text-align: center;
  }

  .upload-form form {
    display: flex;
    flex-direction: column;
  }

  .box {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label-img label:hover {
    cursor: pointer;
  }

  .slider-box {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .slider-box .cancel-btn {
    width: 30px;
    height: 30px;
  }
`;
