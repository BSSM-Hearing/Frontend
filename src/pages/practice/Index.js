import React, { useEffect, useState } from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { MdArrowBack, MdMic } from "react-icons/md";
import { useSpeechRecognition } from "react-speech-kit";
import useDebounce from "../../hooks/useDebounce";

const Index = () => {
  const data = "밥은 먹고 다녀?";
  const [showVal, setShowVal] = useState();
  const deBouncedValue = useDebounce(showVal, 2000);
  useEffect(() => {
    setShowVal(deBouncedValue);
  }, [deBouncedValue]);
  const { listen, listening, stop } = useSpeechRecognition({
    // onResult: (result) => {
    //   setShowVal(result);
    // },
  });
  return (
    <Frame>
      <S.PracticeContainer>
        <S.BackBtn as={MdArrowBack} color="black" size={50} />
        <S.DialogBox>
          <S.Dialog bgColor={"white"}>{data}</S.Dialog>
          <S.Dialog bgColor={"#ccccce"}>{showVal}</S.Dialog>
        </S.DialogBox>
        <S.MicBox>
          <S.ExplainText>눌러서 말하기</S.ExplainText>
          <S.Mic onMouseDown={listen} onMouseUp={stop}>
            <S.MicBtn as={MdMic} size={70} color={"white"} />
          </S.Mic>
          {/* {listening && <p>마이크 입력중...</p>} */}
        </S.MicBox>
      </S.PracticeContainer>
    </Frame>
  );
};

export default Index;
