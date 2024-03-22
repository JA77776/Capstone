<template>

     <div>
    <nav class="navbar navbar-expand-lg navbar- bg- justify-content-center">
      <router-link :to="{name:'home'}" class="navbar-brand">
        <img src="" alt="Logo" class="logo-img">
      </router-link>
      <router-link :to="{name:'home'}" class="nav-link">Home</router-link> 
      <router-link :to="{name:'about'}" class="nav-link">About</router-link> 
      <router-link :to="{name:'products'}" class="nav-link">Products</router-link> 
      <router-link :to="{name:'checkout'}" class="nav-link">Checkout</router-link>
      <router-link :to="{name:'admin'}" class="nav-link">Admin</router-link> 
      <router-link :to="{name:'contact'}" class="nav-link">Contact</router-link>
    </nav>
    <router-view />
  </div>

</template>


<script>
export default {
    name: 'navbarComp',
}



</script>

<style scoped>
.navbar {
  background-color: #000000e0; /* Dark color for the navbar background */
  padding: 0.5rem 1rem; /* Add padding to the navbar */
  border-radius: 20px;
}

.navbar:hover{
  transition: 2s;
  color: white;
  background-color: rgba(184, 135, 11, 0.944);
}

.navbar-brand {
  margin-right: auto; /* Make the brand logo push to the left */
}

.nav-link {
  color: #d4d4d4; /* Light color for the link text */
  text-decoration: none;
  padding: 0.5rem 1rem; /* Add padding to the links */
  margin-right: 0.5rem; /* Add margin between the links */
  border-radius: 0.25rem; /* Add a slight border-radius to the links */
  transition: background-color 0.3s; /* Smooth background color transition */
}

.nav-link:hover {
  background-color: transparent; /* Light blue color on hover */
}

.router-link-exact-active {
  background-color: #ffa602; /* Light blue color for the active link */
}

.router-link-exact-active:hover {
  background-color: #ffa600; /* Keep the same color on hover for the active link */
}

.router-link-exact-active .nav-link {
  color: #ffffff; /* White color for the active link text */
}

.logo-img {
  height: 40px; /* Set the height of the logo */
  width: 50px;
  margin-right: 10px;
  margin-left: 10px; /* Optional: Add some space between the logo and the links */
}
</style>