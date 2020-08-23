import React from "react";
import { Text, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
// Styles
import { CartButtonStyled } from "./styles";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};
export default observer(CartButton);
