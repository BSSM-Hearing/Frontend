import React, { useEffect, useState } from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { MdArrowBack, MdMic } from "react-icons/md";
import { useSpeechRecognition } from "react-speech-kit";
import useDebounce from "../../hooks/useDebounce";
import { Link } from "react-router-dom";

const Index = () => {
  const data = "밥은 먹고 다녀?";
  const [showVal, setShowVal] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const deBouncedValue = useDebounce({ callback: showVal, timeMS: 2000 });

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setShowVal(result);
    },
  });

  useEffect(() => {
    setDefaultValue(showVal);
  }, [deBouncedValue]);

  return (
    <Frame>
      <S.PracticeContainer>
        <Link to="/">
          <S.BackBtn as={MdArrowBack} color="black" size={50} />
        </Link>
        <S.DialogBox>
          <S.Dialog bgColor={"white"}>{data}</S.Dialog>
          <S.Dialog bgColor={"#ccccce"}>{defaultValue}</S.Dialog>
        </S.DialogBox>
        <S.MicBox>
          <S.ExplainText>눌러서 말하기</S.ExplainText>
          <S.Mic onMouseDown={listen} onMouseUp={stop}>
            <S.MicBtn as={MdMic} size={70} color={"white"} />
          </S.Mic>
          {listening && <S.ExplainText>마이크 입력중...</S.ExplainText>}
        </S.MicBox>
      </S.PracticeContainer>
    </Frame>
  );
};

export default Index;
