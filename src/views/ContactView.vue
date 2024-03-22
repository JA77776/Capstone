<template>
    <div class="contact">
      <br><br><h1 class="head">Reach Out To Us!</h1>
        <p class="p">If you have any questions or inquiries, 
          please feel free to contact us using the form below:</p>
      <div class="contact-details">
        <div><br>
          <p><i class="bi bi-envelope"></i>UltimatUtopia@UU.co.za</p>
          <p><i class="bi bi-telephone"></i>082 333 7777</p>
          <div class="social-icons">
            <a href="" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a href="" target="_blank"><i class="bi bi-github"></i></a>
            <a href="" target="_blank"><i class="bi bi-instagram"></i></a>
          </div><br>
          
        </div>
      </div>
      <section class="container" id="Contact">
        <div class="row my-5 justify-content-center">
          <h1 class="display"></h1>
          <div class="login-box">
            <form action ="https://formspree.io/f/xkndbkee" target="_blank">
              <div class="user-box">
                <input type="text" name=" required">
                <label>Fullname</label>
              </div>
              <div class="user-box">
                <input type="password" name="required">
                <label>Email</label>
              </div>
              <div class="user-box">
                <input type="text" name=" required">
                <label>Message</label>
              </div>
              <button type="submit" class="submit-button">
                Submit
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </template>
  <script>
  
  </script>
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1{
    font-weight: 700;
  }

  .head{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .p{
    display: flex;
    align-items: center;
    justify-content: center;
  }
.move{
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact-details {
    display: flex;
    justify-content: center;
    align-items: center;
}
  
  .contact {
    color: rgb(0, 0, 0);
    /* display: flex;
    align-items: center;
    justify-content: center; */
    height: 100vh;
    /* background-image: url('https://i.postimg.cc/L586qPH6/th.jpg'); */
    /* background-size: cover;
    background-position: center; */
  }
  
  .login-box {
    background-color: #333;
    border-radius: 10px;
    padding: 40px;
    width: 400px;
    text-align: center;
    margin-bottom: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .user-box {
    position: relative;
    margin-bottom: 10px;
  }
  
  .user-box input {
    width: 100%;
    padding: 10px;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
  
  .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    transition: 0.5s;
    pointer-events: none;
  }
  
  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03a9f4;
    font-size: 12px;
  }
  
  .submit-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .submit-button:hover::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: pulse 0.6s linear infinite;
  }
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }
  </style>
  