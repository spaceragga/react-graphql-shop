import { gql } from "@apollo/client";

export const PIZZAS_UPDATED_SUBSCRIPTION = gql`
  subscription pizzasUpdated {
    pizzasUpdated {
      id
      name
      image
      amount
      price
    }
  }
`;