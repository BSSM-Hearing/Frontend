import React, { useState } from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { IoMdCall } from "react-icons/io";

const Index = () => {
  const [isCalling, setIsCalling] = useState(false);
  return (
    <Frame>
      <S.CallModeContainer>
        <S.Title>전화 모드</S.Title>
        {!isCalling ? (
          <>
            <S.CallBtn bgColor={"#1c69ff"} onClick={() => setIsCalling(true)}>
              <IoMdCall color={"white"} size={80} />
            </S.CallBtn>
          </>
        ) : (
          <S.CallingBox>
            <S.DialogBox>
              <S.LeftDialog bgColor={"whitesmoke"}>안녕하세여</S.LeftDialog>
              <S.RightDialog bgColor={"#1c69ff"}>안녕하세여</S.RightDialog>
              <S.LeftDialog bgColor={"whitesmoke"}>안녕하세여</S.LeftDialog>
              <S.RightDialog bgColor={"#1c69ff"}>안녕하세여</S.RightDialog>
            </S.DialogBox>
            <S.CallBtn onClick={() => setIsCalling(false)} bgColor={"red"}>
              종료
            </S.CallBtn>
          </S.CallingBox>
        )}
      </S.CallModeContainer>
    </Frame>
  );
};

export default Index;
