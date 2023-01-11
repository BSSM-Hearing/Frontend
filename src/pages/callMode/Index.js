import React, { useState } from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { IoMdCall } from "react-icons/io";

const Index = () => {
  return (
    <Frame>
      <S.CallModeContainer>
        <S.Title>전화 모드</S.Title>
        <S.CallBtn>
          <IoMdCall color={"white"} size={80} />
        </S.CallBtn>
      </S.CallModeContainer>
    </Frame>
  );
};

export default Index;
