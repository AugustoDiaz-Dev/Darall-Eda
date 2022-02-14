<template>
  <div class="col-md-8">
    <article class="resto-ranking">
      <h2 class="resto-ranking-title color-darall">
        {{ darallData.sectionTitle3 }}
      </h2>

      <h3>TOP 10 - Foods</h3>
      <table class="table table-hover">
        <thead class="bg-color-darall text-white">
          <tr>
            <th>Ranking</th>
            <th>Food</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
          </tr>
        </thead>
        <tbody v-for="item in tableFood" :key="item.position">
          <tr>
            <td class="color-darall">{{ item.position }}</td>
            <td class="color-darall">{{ item.name }}</td>
            <td class="text-success">{{ item.up }}</td>
            <td class="text-danger">{{ item.down }}</td>
          </tr>
        </tbody>
      </table>
    </article>

    <article class="resto-ranking">
      <h2 class="resto-ranking-title color-darall">
        {{ darallData.sectionTitle4 }}
      </h2>
      <h3>TOP 10 - Drinks</h3>
      <table class="table table-hover">
        <thead class="bg-color-darall text-white">
          <tr>
            <th>Ranking</th>
            <th>Drinks</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
          </tr>
        </thead>
        <tbody v-for="item in tableDrink" :key="item.position">
          <tr>
            <td class="color-darall">{{ item.position }}</td>
            <td class="color-darall">{{ item.name }}</td>
            <td class="text-success">{{ item.up }}</td>
            <td class="text-danger">{{ item.down }}</td>
          </tr>
        </tbody>
      </table>
    </article>

    <nav class="resto-pagination" aria-label="Pagination">
      <a class="btn btn-outline-darall color-darall" href="#cardFood">{{
        darallData.sectionTitle3
      }}</a>
      <a class="btn btn-outline-darall color-darall" href="#cardDrinks">{{
        darallData.sectionTitle4
      }}</a>
    </nav>
  </div>
</template>

<script>
import tableFood from "../../json/tableFood.json";
import tableDrink from "../../json/tableDrink.json";
export default {
  name: "D8Tables",
  data() {
    return {
      tableFood: tableFood,
      id: "",
      tableDrink: tableDrink,
      id: "",
    };
  },
  props: {
    darallData: Object,
  },
};
</script>

<style>
.resto-pagination {
  margin-bottom: 4rem;
}
.resto-pagination > .btn {
  border-radius: 2rem;
  margin-left: 10px;
}
.resto-ranking {
  margin-bottom: 4rem;
}
.resto-ranking-title {
  margin-bottom: 0.25rem;
  font-size: 2.5rem;
}
.resto-ranking-meta {
  margin-bottom: 1.25rem;
  color: var(--darkgrey);
}
</style>