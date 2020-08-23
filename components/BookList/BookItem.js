import React, { useState } from "react";
// Styles
import { ListItem, Thumbnail, Left, Body, Right } from "native-base";
import { AuthorItemStyled } from "../AuthorList/styles";
import NumericInput from "react-native-numeric-input";

const BookItem = ({ book, bakery, navigation }) => {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = () => {
        const newItem = { quantity, bookId: book.id };
        console.log("handleAdd -> newItem", newItem);
        cartStore.addItemToCart(newItem);
      };
      
  return (
    <ListItem>
  <Left>
    <AuthorItemStyled>{cookie.name}</BakeryItemStyled>
  </Left>
  <Right>
  <NumericInput
  rounded
  value={quantity}
  onChange={setQuantity}
  totalHeight={30}
  totalWidth={60}
  initValue={1}
/>
<Button onPress={handleAdd}>
    <Text>Add</Text>
  </Button>
  </Right>
</ListItem>
    <ListItem onPress={() => navigation.navigate("Books")>
      <Thumbnail
        source={{
          uri: book.image ||
            : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479637297l/33017563._SX318_.jpg",
        }}
      />
      <AuthorItemStyled>{book.name}</AuthorItemStyled>
    </ListItem>
  );
};
export default BookItem;
