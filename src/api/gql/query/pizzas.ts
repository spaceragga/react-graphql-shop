// libraries
import { gql } from "@apollo/client";

export const GET_PIZZAS = gql`
  query getPizzas ($limit: Int!, $offset: Int!) {
    pizzas (limit: $limit, offset: $offset) {
      id
      name
      image
      amount
      price
    }
  }
`;
