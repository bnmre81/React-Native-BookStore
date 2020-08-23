import React from "react";
// Styles
import { ListItem } from "native-base";
import { AuthorItemStyled } from "./styles";

const AuthorItem = ({ author, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Books", { author: author })}>
      <AuthorItemStyled>Author.name</AuthorItemStyled>
    </ListItem>
  );
};
export default AuthorItem;
