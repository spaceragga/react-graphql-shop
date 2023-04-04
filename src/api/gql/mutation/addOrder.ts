// libraries
import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation addOrder ($order: [OrderInput]) {
    addOrder(order: $order) {
        name
        amount
        id
    }
  }
`