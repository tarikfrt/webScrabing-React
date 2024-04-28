import React, { useState, useEffect } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from "semantic-ui-react";
import ArticleService from "../services/articleService";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let articleService = new ArticleService();
    articleService.getArticles().then((result) => setArticles(result.data));
  });
  return (
    <div style={{ overflowX: "auto" }}>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Yayın Id</TableHeaderCell>
            <TableHeaderCell>Yayın Adı</TableHeaderCell>
            <TableHeaderCell>Yazarların İsmi</TableHeaderCell>
            <TableHeaderCell>Url Adresi</TableHeaderCell>
            <TableHeaderCell>Yayınlanma Tarihi</TableHeaderCell>
            <TableHeaderCell>Yayıncı Adı</TableHeaderCell>
            <TableHeaderCell>Anahtar Kelimeler</TableHeaderCell>
            <TableHeaderCell>yayın Türü</TableHeaderCell>
            <TableHeaderCell>Özet</TableHeaderCell>
            <TableHeaderCell>Referanslar</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {articles.map((article) => (
            <TableRow>
              <TableCell>{article.articleId}</TableCell>
              <TableCell>{article.articleName}</TableCell>
              <TableCell>{article.writers}</TableCell>
              <TableCell>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.url}
                </a>
              </TableCell>

              <TableCell>{article.publicationDate}</TableCell>
              <TableCell>{article.publisherName}</TableCell>
              <TableCell>
                <TableCell>{article.keyWords}</TableCell>
              </TableCell>
              <TableCell>{article.typeOfArticle}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
