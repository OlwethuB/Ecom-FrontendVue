<template>
    <section class="admin m-4">
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
          <td>{{ book.name }} | {{ book.author }}</td>
          <td>{{ book.category }}</td>
          <td>R{{ book.price }}</td>
          <td>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal">
              Edit
            </button> 
            |
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
<!--Editing Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editModalLabel">Edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!--Deleting Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          You are deleting this product, Are you sure?...
        ...
        <br>
        <br>
        <span class="mt-5 mb-3 detB" >
          <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>  
          <button type="button" class="btn btn-primary">Yes</button>
        </span>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script> 

<style>
body{
  background-color: #042a5b !important;

}
.admin {
  margin-top: 100px;
}

.table {
  margin-top: 100px;
  min-height: 100vh;
  justify-items: center;
  text-align: center;
  border-radius: 10px;
}

.delB{
  justify-items: center !important;
}
</style>
