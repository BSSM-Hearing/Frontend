import React from "react";
import * as S from "./index.style";

export default function Frame({ children, notice, rollback, down }) {
  return <S.Frame>
    
    {children}
    </S.Frame>;
}
