import React from "react";
import ArticleSearch from "./ArticleSearch";
import ArticleList from "../pages/ArticleList";
import { Container } from "semantic-ui-react";


export default function Dashboard() {
  return (
    <div>
      <ArticleSearch/>
      <Container className="main2">
        <ArticleList/>
      </Container>
      
    </div>
  );
}
