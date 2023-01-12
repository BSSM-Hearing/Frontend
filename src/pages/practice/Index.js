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
  const [value, setValue] = useState();
  const { debounce } = useDebounce();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setShowVal(result);
      debounce(() => setValue(result), 500);
    },
  });

  // useEffect(() => {
  //   setDefaultValue(showVal);
  // }, []);

  return (
    <Frame rollback>
      <S.PracticeContainer>
<<<<<<< HEAD
        <Link to="/">
          <S.BackBtn as={MdArrowBack} color="black" size={50} />
        </Link>
=======
>>>>>>> dd1fac56a99fdc687c3422341fe2cc5e2c4f67f8
        <S.DialogBox>
          <S.Dialog bgColor={"white"}>{data}</S.Dialog>
          <S.Dialog bgColor={"#ccccce"}>{value}</S.Dialog>
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
