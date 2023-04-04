import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { GET_PIZZAS } from "../api/gql/query/pizzas";
import PizzaCard from "./PizzaCard";
import { PIZZAS_UPDATED_SUBSCRIPTION } from "../api/gql/subscription/pizzasUpdated";

const PizzasList: React.FC = () => {
  const [isMoreButton, setIsMoreButton] = useState(true);
  const { addToCart } = useContext(CartContext);

  const { data, loading, fetchMore, refetch, subscribeToMore } = useQuery(
    GET_PIZZAS,
    {
      fetchPolicy: "network-only",
      variables: {
        limit: 3,
        offset: 0,
      },
    }
  );

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: PIZZAS_UPDATED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) return prev;
        refetch();
      },
    });
    return unsubscribe;
  }, [subscribeToMore]);

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        limit: 3,
        offset: data.pizzas.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        if (!fetchMoreResult.pizzas.length) {
          setIsMoreButton(false);
        }

        return Object.assign({}, prev, {
          pizzas: [...prev.pizzas, ...fetchMoreResult.pizzas],
        });
      },
    });
  };

  return (
    <div>
      <h1>Pizzas</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "20px",
              textAlign: "center",
            }}
          >
            {data.pizzas.map((pizza: any) => (
              <PizzaCard key={pizza.id} {...{ pizza, addToCart }} />
            ))}
          </div>
          {isMoreButton && (
            <div
              style={{ display: "grid", placeItems: "center", margin: "30px" }}
            >
              <button onClick={handleLoadMore}>Get more!</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PizzasList;
