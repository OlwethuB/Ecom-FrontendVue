<template>
    <section class="admin">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name and Author</th>
          <th>Category</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr v-for="book of books" :key="book.id" :book="book">
          <td>{{ book.id }}</td>
          <td>{{ book.name }} by {{ book.author }}</td>
          <td>{{ book.category }}</td>
          <td>{{ book.price }}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  components: {},
  props: ["books"],
  computed: {
    book() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script>

<style>
.admin {
  margin-top: 100px;
  background-color: dodgerblue !important;
}

.table {
  margin-top: 100px;
  min-height: 100vh;
  justify-items: center;
  text-align: center;
}

.body{
    color: black !important;
}

</style>
