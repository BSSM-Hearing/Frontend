import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Help() {
  const [socket, setSocket] = useState();

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
  }, []);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return <div>살려주삼</div>;
}
