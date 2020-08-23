import React from "react";
import { observer } from "mobx-react";

// Sotres
import cartStore from "../../stores/cartStore";
import bookStore from "../../stores/bookStore";
import authStore from "../../stores/authStore"

// Components
import CartItem from "./CartItem";

// Styles
import { List, Spinner, Content } from "native-base";
import { CheckoutButton } from "./styles";
import {Alert} from "react-native"

const CartList = () => {

  const handleCheckout = ({navigation}) => {
    if (authStore.user) cartStore.checkoutCart;
    else {
        Alert.alert(
            "Signin",
            "You need to sign in before completing your order",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "Signin", onPress: () => navigation.navigate("Signin") },
            ],
            { cancelable: false }
        );
    }
};

  if (bookStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...bookStore.getBookById(item.bookId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
  <Content>
  <List>{cartList}</List>);
<CheckoutButton onPress={handleCheckout}>
<CheckouttonText>Checkout</CheckouttonText>
</CheckoutButton>
  </Content>
};
export default observer(CartList);
