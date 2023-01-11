import React, { useEffect, useState } from "react";
import Frame from "../../components/common/frame";
import { getKoreanDate } from "../../util/date";
import Button from "../../components/atom/button";
import CellPhoneIcon from "../../components/icon/CellPhoneIcon";

export default function Main() {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(getKoreanDate(new Date()));
    setInterval(() => {
      setDate(getKoreanDate(new Date()));
    }, 60000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <Frame notice>
      <div className="p-8 w-full h-auto">
        <div className="flex flex-col items-center">
          <h2 className="mt-24 text-[36px] font-bold">{date}</h2>
          <p className="inline text-[30px] mt-7">
            이름님, <br /> 무엇을 하실건가요?
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <div>
            <Button className="bg-[#1C69FF]">
              <CellPhoneIcon />
            </Button>
            <h4 className="text-4xl text-center">전화 모드</h4>
          </div>

          <div>
            <Button className="bg-[#373737]">
              <CellPhoneIcon />
            </Button>
            <h4 className="text-4xl text-center">외출 모드</h4>
          </div>

          <div>
            <Button className="bg-[#98E5D4]">
              <CellPhoneIcon />
            </Button>
            <h4 className="text-4xl text-center">뭐시기 모드</h4>
          </div>

          <div>
            <Button className="bg-[#F6CE60]">
              <CellPhoneIcon />
            </Button>
            <h4 className="text-4xl text-center">뭐시기 모드</h4>
          </div>
          <div>
            <Button className="bg-[#F6CE60]">
              <CellPhoneIcon />
            </Button>
            <h4 className="text-4xl text-center">뭐시기 모드</h4>
          </div>
          
        </div>
      </div>
    </Frame>
  );
}
