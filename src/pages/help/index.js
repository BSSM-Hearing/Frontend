import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Frame from "../../components/common/frame";

export default function Help() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEmergency = (id) => {
    if (window.confirm("긴급 상황인가요?")) {
      navigate(`/help/real/${id}`);
    }
  };

  return (
    <Frame rollback>
      <div className="p-10 w-full h-full flex items-center justify-center">
        <button
          type="button"
          className="rounded-full bg-red-500 text-white p-10 w-[200px] h-[200px]"
          onClick={() => isEmergency(id)}
        >
          <h1 className="text-[48px] m-0 font-bold">긴급</h1>
        </button>
      </div>
    </Frame>
  );
}
