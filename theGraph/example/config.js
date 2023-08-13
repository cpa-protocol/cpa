const config = {
  graphqlQuery: `
      swaps(orderBy: timestamp, orderDirection: desc, where: { sender: "$address" }) {
        transaction {
          id
        }
      }
  `,
  apiEndpoint: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
  checkFunction: function(data) {
    if (data.swaps && data.swaps.length >= 1) {
      return 1;
    }
    return 0;
  }
};

module.exports = config;
