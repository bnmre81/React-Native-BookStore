import React from "react";
import { observer } from "mobx-react";
// Styles
import { Text } from "react-native";
import { List, Content, Spinner } from "native-base";
// Components
import AuthorItem from "./AuthorItem";
// Stores
import authorStore from "../../stores/authorStore";

const AuthorList = ({ navigation }) => {
  if (authorStore.loading) return <Spinner />;
  const authorList = authorStore.authors.map((author) => (
    <AuthorItem author={author} key={author.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{authorList}</List>;
    </Content>
  );
};
export default observer(AuthorList);
