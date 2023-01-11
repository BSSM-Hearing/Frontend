import React from "react";
import Frame from "../../components/common/frame/index";
import Header from "../../components/common/header";
import * as S from "./Style";

const Index = () => {
  return (
    <Frame>
      {/* <S.LoginForm>asd</S.LoginForm> */}
      <S.LoginContainer>
        <S.TopBox>로그인</S.TopBox>
        <S.LoginForm>
          <S.Input />
          <S.Input />
          <S.SubmitBtn>로그인</S.SubmitBtn>
        </S.LoginForm>
        <S.BottomBox>
          <S.Link>회원가입</S.Link>
          <S.Link>비밀번호 찾기</S.Link>
        </S.BottomBox>
      </S.LoginContainer>
    </Frame>
  );
};

export default Index;
