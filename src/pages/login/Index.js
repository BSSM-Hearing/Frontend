import React from "react";
import Frame from "../../components/common/frame/index";
import Header from "../../components/common/header";
import * as S from "./Style";

const Index = () => {
  return (
    <Frame>
      {/* <S.LoginForm>asd</S.LoginForm> */}
      <S.LoginContainer>
        <S.TopBox></S.TopBox>
        <S.LoginForm>
          <S.Input />
          <S.Input />
          <S.SubmitBtn>로그인</S.SubmitBtn>
        </S.LoginForm>
      </S.LoginContainer>
    </Frame>
  );
};

export default Index;
