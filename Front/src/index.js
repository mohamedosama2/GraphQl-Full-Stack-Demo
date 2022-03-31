import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import App2 from "./App2";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

render(
  <BrowserRouter>
    <ApolloProvider {...{ client }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/1" element={<App2 />} />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
