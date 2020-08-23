const { decorate, observable, computed } = require("mobx");
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
    items = [],
//   items = [
//     {
//       bookId: 1,
//       quantity: 5,
//     },
//     {
//       bookId: 2,
//       quantity: 2,
//     },
//   ];

fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  checkout = () => {
    this.items = [],
    alert("Thank you for buying from my store!")
  }
  
  addItemToCart = async (newItem) => {
    const foundItem = this.items.find((item) => item.bookId === newItem.bookId);
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.bookId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
}

}

decorate(CartStore, {
    items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();

export default cartStore;
