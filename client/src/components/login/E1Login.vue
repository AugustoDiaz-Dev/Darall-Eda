<template>
  <div>
    <form class="offset-4 col-4 mt-5">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="foo@gmail.com"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-check d-flex justify-content-start">
        <input
          type="checkbox"
          class="form-check-input p-2"
          id="exampleCheck1"
        />
        <label class="form-check-label mt-1" for="exampleCheck1"
          >Check me out</label
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="container">
      <div class="row">
        <div class="offset-6 col-3 mt-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex justify-content-end">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/main">Main</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "E1Login",
  props: {
    infoAPIshops: Array,
    darallData: Object,
  },
};
</script>

<style scoped>
label,
input,
small {
  margin-bottom: 1em;
}
</style>