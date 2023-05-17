import React, { useState,  useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axios from "axios";

import Burger2 from "../../assets/burger 2.svg";
import Lata from "../../assets/lata.svg";
import {
  Conteiner,
  H1,
  Image,
  ConteinerIntens,
  Button,
  Order,
} from "./styles";

function Orders() {
  const [orderUser, setOrders] = useState([]);
  const history = useHistory()
  
 
  useEffect(() => {
    async function fetchOrders() {
      const { data: getOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(getOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)

    const newOrders = orderUser.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  }
  function goBackPage(){
    history.push("/");
  }
  return (
    <Conteiner>
      <Image alt="logo-imagem" src={Burger2} />
      <H1>Pedidos</H1>

      <ConteinerIntens>
       

        <ul>
          {orderUser.map((order) =>(
            <Order key={order.id}>
              <p>{order.order}</p> 
              
              
             <p className="name">{order.clientName}</p>

              <button onClick={() => deleteOrder(order.id)}>
                <img src={Lata} alt="lixeira" />
              </button>
            </Order>
          ))}
        </ul>
        
        <Button onClick={goBackPage} >Voltar</Button>

      </ConteinerIntens>
    </Conteiner>
  );
}
export default Orders;
