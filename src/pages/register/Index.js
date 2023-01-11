import React from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";

const Index = () => {
  return (
    <Frame>
      <S.RegisterContainer>
        <S.TopBox>회원가입</S.TopBox>
        <S.RegisterForm>
          <S.InputBox>
            <S.Input placeholder="아이디" />
            <S.Input placeholder="비밀번호" />
            <S.Input placeholder="비밀번호 확인" />
            <S.Input placeholder="닉네임" />
            <S.Input placeholder="보호자 아이디" />
          </S.InputBox>
          <S.SubmitBox>
            <S.SubmitBtn>가입 완료</S.SubmitBtn>
            <S.Link>로그인하기</S.Link>
          </S.SubmitBox>
          <S.EmptyBox />
        </S.RegisterForm>
      </S.RegisterContainer>
    </Frame>
  );
};

export default Index;
