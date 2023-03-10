import React from "react";
import Button from "../atom/button";
import {
  CellPhoneIcon,
  GuardIcon,
  TalkingPeopleIcon,
  VibrationPhoneIcon,
} from "../icon";

export default function quickMenu({ date }) {
  return (
    <div className="mb-[70px]" id="quick-menu">
      <div className="flex flex-col items-center">
        <h2 className="mt-24 text-[36px] font-bold">{date}</h2>
        <p className="inline text-[30px] mt-7">
          이름님, <br /> 무엇이 필요하신가요?
        </p>
      </div>
      <div className="grid grid-cols-[1fr_1fr] grid-rows-2 mt-8">
        <div>
          <Button className="bg-[#1C69FF]">
            <CellPhoneIcon />
          </Button>
          <h4 className="text-4xl text-center">전화 모드</h4>
        </div>

        <div>
          <Button className="bg-[#373737]">
            <VibrationPhoneIcon />
          </Button>
          <h4 className="text-4xl text-center">외출 모드</h4>
        </div>

        <div>
          <Button className="bg-[#98E5D4]">
            <TalkingPeopleIcon />
          </Button>
          <h4 className="text-4xl text-center">발음 연습</h4>
        </div>

        <div>
          <Button className="bg-[#F6CE60]">
            <GuardIcon />
          </Button>
          <h4 className="text-4xl text-center">보호자 호출</h4>
        </div>
      </div>
    </div>
  );
}
