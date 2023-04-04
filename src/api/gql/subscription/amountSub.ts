// libraries
import { gql } from "@apollo/client";

export const AMOUNT_SUB = gql`
  subscription onPizzaUpdated {
    pizzaUpdated {
      id
      name
      image
      amount
      price
    }
  }
`;
