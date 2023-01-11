import React from "react";
import Frame from "../../components/common/frame/index";
import { set, useForm } from "react-hook-form";
import * as S from "./Style";
import axios from "axios";

const Index = () => {
  const { register, watch, handleSubmit } = useForm({});
  console.log(watch());
  const onValid = () => {
    axios
      .post("", watch())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const onInvalid = () => {
    alert("아이디 또는 비밀번호를 확인해주세요.");
  };
  return (
    <Frame>
      <S.LoginContainer>
        <S.TopBox>로그인</S.TopBox>
        <S.LoginForm onSubmit={handleSubmit(onValid, onInvalid)}>
          <S.Input
            {...register("Id", {
              required: "아이디를 입력해주세요.",
            })}
            placeholder="아이디 입력"
          />
          <S.Input
            {...register("Password", {
              required: "비밀번호를 입력해주세요.",
            })}
            placeholder="비밀번호 입력"
          />
          <S.SubmitBtn type="submit">로그인</S.SubmitBtn>
          <S.LinkTabs>
            <S.Link>회원가입</S.Link>
            <S.Link>비밀번호 찾기</S.Link>
          </S.LinkTabs>
        </S.LoginForm>
        <S.BottomBox></S.BottomBox>
      </S.LoginContainer>
    </Frame>
  );
};

export default Index;
