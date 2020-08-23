import React from "react";
import { observer } from "mobx-react";
// Styles
import { Text } from "react-native";
import { List, Content, Spinner } from "native-base";
// Components
import BookItem from "./AuthorItem";
// Stores
import bookStore from "../../stores/authorStore";

const BookList = ({ route }) => {
  if (bookStore.loading) return <Spinner />;
  const { author } = route.params;
  const bookList = author.books
    .map((book) => bookeStore.getBookById(book.id))
    .map((book) => <BookItem book={book} key={book.id} />);
  return (
    <Content>
      <List>{bookList}</List>;
    </Content>
  );
};
export default observer(BookList);
