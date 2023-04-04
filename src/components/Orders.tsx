import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ORDERS } from "../api/gql/query/orders";

const Orders: React.FC = () => {
  const { data, loading } = useQuery(GET_ALL_ORDERS);

  return (
    <div>
      <h1>Orders</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {data.orders.map((order: any) => (
            <li key={Math.random().toString(36).substring(2, 8)}>
              Pizzas: {order.name} - Total: {order.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
