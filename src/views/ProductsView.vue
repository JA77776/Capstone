<template>
      <div class="products">
      <!-- <img src="" height="25%" width="100%"> -->
      <h1>OUR BEST BRANDS</h1>
      <input class="input" type="text" id="searchBar" placeholder="Search...">
    <select id="sortOptions">
        <option value="cheapest">Cheapest first</option>
        <option value="expensive">Most expensive first</option>
    </select>
      <!-- <div class="product-grid"> -->
        <div class="card" v-for="product in products" :key="product.id" style="width: 18rem;">
  <img src="{{ product.prodUrl }}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{ product.prodID }}</h5>
    <!-- <p class="card-text"></p> -->
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ product.prodName }}</li>
    <li class="list-group-item">{{ product.prodQuantity }}</li>
    <li class="list-group-item">{{ product.prodAmount }}</li>
  </ul>
  <div class="card-body">
    <a href="../views/CheckoutView.vue" class="card-link">Card link</a>
    <!-- <a href="#" class="card-link">Another link</a> -->
  </div>
</div>
        <!-- <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.prodName }}</li>
    </ul>
</div> -->
<!-- <h2>{{ product.prodName }}</h2> -->
<!-- <div v-for="product in products" :key="product.id" class="product">
    <router-link :to="{name:'products', params:{id:product.id}}">
            <img :src="product.img" alt="Product Image">
          </router-link>
        </div> -->
      </div>
    <!-- </div>  -->
</template>

<script>
import axios from 'axios';
import sweet from 'sweetalert'
const baseURL = 'https://capstone-6go6.onrender.com'

export default {
  data() {
    return {
      products: [] 
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts(context) {
      try{
        let {results} =
        (await axios.get(`${baseURL}products`)).data
        if(results) {
          context.commit('setProducts', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving products.',
          icon: "error",
          timer: 2000
        })
      }
    }
}
};

</script>