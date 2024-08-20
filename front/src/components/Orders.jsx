import { useState, useEffect } from "react";

const Orders = ({ state }) => {
  const [orders, setOrders] = useState([]);

  const { contract } = state;

  useEffect(() => {
    const getOrders = async () => {
      const orders = await contract.getOrdersInfo();
      setOrders(orders);
    };
    contract && getOrders();
  }, [contract]);

  return (
    <div className="center">
      {orders.map((order) => {
        return (
          <div>
            <p>{`Name: ${order.name}`}</p>
            <p>{`Message: ${order.message}`}</p>
            <p>{`From: ${order.from}`}</p>
            <p>
              {`Date: ${new Date(order.timestamp * 1000).toLocaleString()}`}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
