import Frame from "components/common/frame";
import React, { useEffect, useState } from "react";
import { getKoreanDate } from "util/date";

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
    <Frame>
      <div></div>
      {date}
    </Frame>
  );
}
