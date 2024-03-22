<template>
  <div class="home">
    <h1 class="animated-heading">WELCOME TO THE WORLD OF<br> ULTIMATE UTOPIA</h1>
    <a href="../views/ProductsView.vue">
      <button class="b_button">Shop Now</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://i.postimg.cc/LsvQgq3r/8c64412c7aed80a20bfc11e1391f12f4.jpg');
  background-size: cover;
  background-position: center;
}

h1 {
  color: #ffffff;
  font-size: 4rem;
  /* color: rgb(0, 0, 0); */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 2s;
  box-sizing: border-box;
  border-color: #000;
}

h1:hover{
  transition: 2s;
  color: rgb(255, 170, 0);
}

h1{
  transition: 2s;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #000000e5;
  border-radius: 20px;
  border-width: 5rem;
}


.animated-heading {
  color: #ffffff;
  font-weight: 700;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 4rem;
  /* color: rgb(0, 0, 0); */
  text-align: center;
  box-sizing: border-box;
  border-width: 200px;
  /* color: #000000; */
  animation: moveUpDown 2s infinite alternate;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-40px); /* Move the element up by 20px */
  }
}

.b_button {
  transition: 4s;
  background-color: rgb(0, 0, 0);
  padding: 15px 25px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-top: 30px; 
  transition: 1s; 
}

.b_button:hover {
  transition: 2s;
  color: #000;
  background-color: rgba(255, 150, 2, 0.653);
  border-radius: 60px;
}
</style>
