<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8">
      <h1>Http</h1>
      <div class="form-group">
        <label for="">Username</label>
        <input type="text" class="form-control" v-model="user.username" />
      </div>
      <div class="form-group">
        <label for="">Mail</label>
        <input type="text" class="form-control" v-model="user.email" />
      </div>
      <button class="btn btn-primary" @click="sumbmit">Submit</button>
      <hr />
      <input type="text" class="form-control" v-model="node" />
      <br /><br />
      <button class="btn btn-primary" @click="getData">Get data</button>
      <br /><br />
      <ul class="list-group">
        <li class="list-group-item" v-for="(user, index) in users" :key="index">
          {{ user.username }} / {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    // sumbmit() {
    //   this.$http
    //     .post('data.json', this.user)
    //     .then(
    //       response => {
    //         console.log(response);
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    // },
    sumbmit() {
      this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    // getData() {
    //   this.$http
    //     .get("data.json")
    //     .then(
    //       response => {
    //         return response.json();
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     )
    //     .then(data => {
    //       const resultArray = [];
    //       for (let key in data) {
    //         resultArray.push(data[key]);
    //       }
    //       this.users = resultArray;
    //     });
    // }
    getData() {
      this.resource.getData({ node: this.node })
        .then(
          response => {
            return response.json();
          },
          error => {
            console.log(error);
          }
        )
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  },
  created() {
    const customAcctions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource('{node}.json', {}, customAcctions);
  }
};
</script>

<style lang="scss">
@import "assets/breakpoints";
</style>

