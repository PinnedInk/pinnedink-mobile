import * as React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Routes from "./routes";

const client = new ApolloClient({
  uri: "https://zat932sfo2.execute-api.us-east-1.amazonaws.com/prod/graphql",
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App;
