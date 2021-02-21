const { gql } = require("@apollo/client");

const GET_FLAGS = gql`
  {
    countries {
      name
      emoji
    }
  }
`;

export default GET_FLAGS;
