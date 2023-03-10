import React from "react";
import { theme } from "../../styles/theme";
import { getDateOnly } from "../../util/date";

export default function DashBoard({ slot }) {
  return (
    <div className="text-[28px] [&>h1]:mb-4 mx-auto fold-bold">
      <h1 className={`text-[${theme.deepMain}] text-8xl text-center font-bold`}>
        μ’μ {slot}! ππ»
      </h1>
      <div className="flex flex-col items-center mt-24 font-bold">
        <div className="inline">
          <h2>μ€λμ</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>
              {getDateOnly()}
            </span>{" "}
            μλλ€.
          </h2>
          <h2>λ°κΉ₯ λ μ¨λ</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>λ§μ (20ΒΊC)</span>{" "}
            μλλ€.
          </h2>
          <h2>λ―ΈμΈλ¨Όμ§λ</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>μ’μ(30)</span> μλλ€.
          </h2>
        </div>
      </div>
    </div>
  );
}
