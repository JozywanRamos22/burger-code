import styled from "styled-components";
import Background from "../../assets/backgroud.jpg";

export const Conteiner = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
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

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(150, 150, 150, 0.2);

  font-style: normal;
  font-weight: 900;
  text-align: center;
  font-size: 17px;
  border: 1px solid #ffff;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`;
export const Order = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 101px;
  border: none;
  outline: none;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;

    color: #ffffff;
  }
  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
