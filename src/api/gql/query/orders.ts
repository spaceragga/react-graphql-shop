// libraries
import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query getOrders {
    orders {
      id
      name
      amount
    }
  }
`;
