import styled from "styled-components";

export const PracticeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackBtn = styled.svg`
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const DialogBox = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15%;
`;
export const Dialog = styled.div`
  width: 95%;
  height: 35%;
  background-color: ${(props) => props.bgColor};
  box-shadow: 2px 7px 10px 3px #888;
  border-radius: 20px;
  font-size: 3rem;
  padding: 10px;
`;

export const MicBox = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ExplainText = styled.p`
  font-size: 2rem;
  margin: 10px 0;
`;
export const Mic = styled.button`
  width: 30%;
  height: 50%;
  background-color: #1c69ff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MicBtn = styled.svg`
  border: 4px solid white;
  border-radius: 200px;
`;
