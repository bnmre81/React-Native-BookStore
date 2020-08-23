import { decorate, observable } from "mobx";

import slugify from "react-slugify";
import instance from "./instance";

class BookStore {
  books = [];
  loading = true;

  getBookById = (bookId) => this.books.find((book) => book.id === bookId);

  fetchBooks = async () => {
    try {
      const res = await instance.get("/books");
      this.books = res.data;
      this.loading = false;
    } catch (error) {
      console.log("BookStore -> fetchBooks -> error", error);
    }
  };

decorate(BookStore, {
  books: observable,
  loading: observable,
});

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
