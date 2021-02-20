const { gql } = require("@apollo/client");

const GET_FLAGS = gql`
  {
    countries {
      name
      emoji
    }
  }
`;

module.exports = GET_FLAGS;
