import React from "react";
import Frame from "../../components/common/frame/index";
import * as S from "./Style";
import { MdOutlineMic } from "react-icons/md";

const Index = () => {
  return (
    <Frame rollback>
      <S.Container>
        <S.IconBox>
          <MdOutlineMic size={130} />
          <S.IconText>REC</S.IconText>
        </S.IconBox>
        <S.StartBtn></S.StartBtn>
        <S.Text>주변 소리를 듣고 있어요.</S.Text>
      </S.Container>
    </Frame>
  );
};

export default Index;
