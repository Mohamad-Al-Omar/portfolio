<script setup>
import { computed, ref } from "vue";
import { _axios as axios } from "../plugins/axios";

defineProps({
  msg: String,
});

const data = ref("");
const data2 = ref("");

const loadData = async function () {
  console.log("axios => ", axios);
  const [response, response2] = await Promise.all([
    axios.get(),
    axios.get("/test"),
  ]);
  console.log("response => ", response);
  data.value = response.data;
  data2.value = response2.data;
  console.log("data => ", data);
};

const getData = computed(() => {
  return data;
});
loadData();
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ data }}</h1>
  <h1>{{ data2 }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
