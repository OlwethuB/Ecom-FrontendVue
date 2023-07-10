import { createStore } from 'vuex'

export default createStore({
  state: {
    books: null,
    book: null,
    user: null,
    asc: true,
  },

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setBooks: (state, books) => {
      state.books = books;
    },
    setBook: (state, book) => {
      state.book = book;
    },
    setProperty: (state, book) => {
      state.book = book;
    },
    sortBooksByPrice: (state) => {
      state.books.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.books.reverse();
      }
      state.asc = !state.asc;
    },
  },


  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;

      const response = await fetch(
        `https://olwethub.github.io/db.json/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
    getBooks: async (context) => {
      try {
        fetch("https://olwethub.github.io/vue_db.json/db.json")
          .then((res) => res.json())
          .then((data) => {
            let {books} = data;
            context.commit("setBooks", books);
          });
      } catch (error) {
        console.error(error);
      }
    },
    getBook: async (context,id) => {
      try {
        fetch("https://olwethub.github.io/vue_db.json/db.json" + id)
          .then((res) => res.json())
          .then((data) => {
            let {book} = data;
            context.commit("setBook", book);
          });
      } catch (error) {
        console.error(error);
      }
    }
  },

})
