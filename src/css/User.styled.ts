import styled from "styled-components";

export const UserWrapper = styled.div`
  .doc-title {
    padding-top: 50px;
    display: block;
    width: 88px;
    height: 27px;
    margin: 0 auto;
    background-size: 100px 80px;
    font-size: 19px;
    line-height: 27px;
    text-align: center;
    vertical-align: top;
  }

  .content-article {
    box-sizing: border-box;
    width: 580px;
    height: 100%;
    margin: 40px auto 42px;
    padding: 0 69px;
    border: 1px solid rgba(0, 0, 0, .12);
    font-size: 12px;
  }

  .content-article > .cont-login {
    word-wrap: break-word;
    position: relative;
    padding: 55px 0 50px;
  }

  .login-form {
    padding: 50px;
  }

  .con-login form {
    display: flex;
    flex-direction: column;
  }
  .con-login form input{
    margin-bottom: 10px;
  }

  .con-login form button {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  

  .cont-link {
    margin-top: 10px;
  }
`;