<template>
    <footer class="footer">
      <div class="container-fluid">
        <p>&copy; 2024 ULTIMATE UTOPIA. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "footerComp"
  }
  </script>
  
  <style scoped>
  .footer {
    transition: 2s;
    background-color:rgba(0, 0, 0, 0.952);
    color: #ffffff;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    font-size: larger;
    font-family: 'Times New Roman', Times, serif
  }

  .footer:hover{
    transition: 2s;
    color: rgb(0, 0, 0);
    background-color: rgba(249, 148, 6, 0.959);
    text-align: center;
  }

  .container {
    margin: 0 auto;
  }
  </style>