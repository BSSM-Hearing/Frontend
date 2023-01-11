import React from "react";
import * as S from "./index.style";
import NoticeIcon from "../../icon/NoticeIcon";
import RollBackIcon from "../../icon/RollbackIcon";
import DownIcon from "../../icon/DownIcon";

export default function Frame({ children, notice, rollback, down }) {
  return (
    <S.Frame>
      {notice ? (
        <NoticeIcon
          style={{ position: "absolute", top: "16px", left: "16px" }}
        />
      ) : null}
      {rollback ? (
        <RollBackIcon
          style={{
            width: "32px !important",
            position: "absolute",
            top: "32px",
            left: "32px",
          }}
        />
      ) : null}
      {down ? (
        <DownIcon
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : null}
      {children}
    </S.Frame>
  );
}
