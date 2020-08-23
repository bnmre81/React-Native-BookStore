import { decorate, observable } from "mobx";

import slugify from "react-slugify";
import instance from "./instance"

class AuthorStore {
  authors = [];
  loading = true;

  fetchAuthors = async () => {
    try {
      const res = await axios.get("http://localhost:8000/authors");
      this.authors = res.data;
      this.loading = false;
    } catch (error) {
      console.log("AuthorStore -> fetchAuthors -> error", error);
    }
  };

decorate(AuthorStore, {
  authors: observable,
  loading: observable,
});

const authorStore = new AuthorStore();
authorStore.fetchAuthors();
export default authorStore;
