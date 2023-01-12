import React, { useEffect, useState } from "react";
import Frame from "../../../components/common/frame";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

export default function Real() {
  const [socket, setSocket] = useState();
  const [isChecking, setIsChecking] = useState(false);
  const { id } = useParams();
  const cancel = () => console.log("추ㅣ소용");

  useEffect(() => {
    const socketIo = io("http://localhost:8080", {
      cors: {
        origin: "http://localhost:8080",
        credentials: true,
      },
      transports: ["websocket"],
      query: {
        tenant: "EGU",
      },
    });

    socketIo.on("responsRoom", (data) => {
      console.log(data);
    });

    setSocket(socketIo);
  }, [id]);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <Frame rollback>
      <div className="w-full h-full p-12 text-center">
        <div className="mt-[200px]">
          {!isChecking ? (
            <>
              <h1 className="text-[#1C69FF] text-6xl font-bold">
                보호자가 확인하는 중..
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-red-500">보호자가 오는 중..</h1>
            </>
          )}
        </div>
        <button
          type="button"
          className="rounded-full bg-[#1C69FF] text-white p-10 w-[150px] h-[150px] mt-[100px]"
          onClick={() => cancel(id)}
        >
          <h1 className="text-[40px] font-bold m-0">취소</h1>
        </button>
      </div>
    </Frame>
  );
}
