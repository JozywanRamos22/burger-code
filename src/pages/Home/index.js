import React, { useState, useRef, } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Burger from "../../assets/burger 1.svg";
import {
  Conteiner,
  H1,
  Image,
  InputLabel,
  ConteinerIntens,
  Input,
  Button,
} from "./styles";

function App() {
  const [orderUser, setOrders] = useState([]);
  const history = useHistory();
  const inputOrder = useRef();
  const inputName = useRef();
 

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: inputOrder.current.value,
        clientName: inputName.current.value,
      }
    );

    setOrders([...orderUser, newOrder]);
    history.push('/order');
  }

  return (
    <Conteiner>
      <Image alt="logo-imagem" src={Burger} />
      <H1>Faça seu pedido!</H1>

      <ConteinerIntens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Josivan Ramos" />
       
        <Button onClick={addNewOrder}>Novo Pedido</Button>
       
      </ConteinerIntens>
    </Conteiner>
  );
}
export default App;
