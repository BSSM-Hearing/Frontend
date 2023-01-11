import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
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
  width: 170%;
  height: 30%;
  background-color: #1c69ff;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  font-size: 7.2rem;
  color: white;
  text-align: center;
  line-height: 270%;
`;

export const Input = styled.input`
  width: 100%;
  height: 23%;
  background-color: white;
  border-radius: 100px;
  border: 2px solid blue;
  box-sizing: border-box;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 23%;
  background-color: #1c69ff;
  border-radius: 100px;
  border: none;
  font-size: 3.5rem;
  color: white;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 30%;
`;

export const Link = styled.p`
  color: #1c69ff;
  font-size: 2rem;
  text-align: center;
`;
