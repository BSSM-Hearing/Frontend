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
  justify-content: space-between;
`;
export const LeftDialog = styled.div`
  width: 60%;
  height: 16%;
  background-color: ${(props) => props.bgColor};
  box-shadow: 1px 4px 8px 2px #aaa;
  border-radius: 15px;
  margin-left: 5%;
  padding: 2%;
  font-size: 2rem;
`;
export const RightDialog = styled(LeftDialog)`
  margin-left: 30%;
  color: white;
`;
