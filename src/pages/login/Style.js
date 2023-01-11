import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: black;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LoginForm = styled.div`
  /* background-color: black; */
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TopBox = styled.div`
  width: 100%;
  height: 40%;
  background-color: #1c69ff;
`;

export const Input = styled.input`
  width: 100%;
  height: 20%;
  background-color: white;
  border-radius: 100px;
  border: 2px solid blue;
  box-sizing: border-box;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 20%;
  background-color: #1c69ff;
  border-radius: 100px;
  border: none;
  font-size: 3.5rem;
  color: white;
`;
