<template>
    <div>
      <h1>Checkout</h1>
      
      <!-- Display cart items -->
      <div v-if="cart.length">
        <h2>Cart Items</h2>
        <ul>
          <li v-for="(item, index) in cart" :key="index">
            {{ item.prodName }} - Quantity: {{ item.prodQuantity }} - Price: {{ item.prodAmount }}
          </li>
        </ul>
      </div>
  
  
      <div>
        <h2>Shipping Information</h2>
        <form @submit.prevent="submitOrder">
          <input type="text" v-model="shippingInfo.name" placeholder="Name" required>
          <!-- Add more input fields for address, city, state, zip code, etc. -->
          <button type="submit">Submit Order</button>
        </form>
      </div>
  
      <!-- Order Summary -->
      <div>
        <h2>Order Summary</h2>
        <p>Total Items: {{ totalItems }}</p>
        <p>Subtotal: {{ subtotal }}</p>
        <!-- Display other order summary details like taxes, discounts, and total price -->
      </div>
  
      <!-- Payment Method -->
      <div>
        <h2>Payment Method</h2>
        <!-- Add options for payment methods -->
      </div>
      
      <!-- Place Order Button -->
      <button @click="placeOrder" :active="!shippingInfo.name || !cart.length">Place Order</button>
      
    </div>
  </template>
  
  <script>
    import sweetalert from 'sweetalert';
    import axios from 'axios';
    import router from '../router/index.js'
    const baseURL = 'https://capstone-6go6.onrender.com'


  export default {

  methods: {
    async register(context, payload) {
      try {
        let { msg } = (await axios.post(`${baseURL}users/register`, payload)).data;
        if (msg) {
          context.dispatch('fetchUsers');
          sweetalert.fire({
            icon: 'success',
            title: 'Registration',
            text: msg,
            timer: 2000,
            showConfirmButton: false
          });
          router.push({ name: 'login' });
        }
      } catch (e) {
        sweetalert.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please try again later',
          timer: 2000,
          showConfirmButton: false
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${baseURL}users`)).data;
        if (results) {
          context.commit('setUsers', results);
        }
      } catch (e) {
        sweetalert.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          timer: 2000,
          showConfirmButton: false
        });
      }
    },
    // Add other methods here...
  }
};
  </script>
  
  <style scoped>
.checkout-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.cart-items {
  margin-bottom: 20px;
}

.shipping-info,
.order-summary,
.payment-method {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
  </style>
  