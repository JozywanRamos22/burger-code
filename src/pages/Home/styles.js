import styled from "styled-components";
import Background from "../../assets/backgroud.jpg";

export const Conteiner = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin-top: 11px;
`;
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  margin-top: 30px;
  text-align: center;

  color: #ffffff;
`;
export const ConteinerIntens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 36px;
`;
export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;

  color: #ffffff;
`;
export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  padding-left: 20px;
  border-radius: 14px;
  margin-bottom: 60px;
  width: 342px;
  height: 58px;
  border: none;
  font-style: normal;
  font-weight: 300px;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
`;

export const Button = styled.button`
  display: flex;
  justify-content:center;
  width: 342px;
  height: 68px;
  margin-top: 20px;
  background: #d93856;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  align-items: center;
  border: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`;

