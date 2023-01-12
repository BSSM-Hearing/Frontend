import styled from "styled-components";

export const CallModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Title = styled.p`
  position: absolute;
  top: 1%;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  width: 100%;
`;
export const CallBtn = styled.button`
  width: 40%;
  height: calc(90vh / 4);
  background-color: ${(props) => props.bgColor};
  border-radius: 300px;
  border: none;
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
`;

export const CallingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8%;
  height: 75%;
  width: 100%;
`;
export const DialogBox = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: scroll;
  /* background-color: #ccc; */
`;
export const Dialog = styled.div`
  width: 60%;
  height: 16%;
  border-radius: 15px;
  font-size: 2rem;
  margin: 10px 0;
`;
