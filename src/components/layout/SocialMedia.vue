<template>
  <div class="wraper">
    <ul class="social-icons icon-circle list-unstyled list-inline">
      <li>
        <a href="https://www.facebook.com/VelvetNoviSad" target="_blank">
          <font-awesome-icon
            class="fa fa-facebook"
            icon="fa-brands fa-facebook"
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/velvet_novi_sad/" target="_blank"
          ><font-awesome-icon
            class="fa-instagram"
            icon="fa-brands fa-instagram"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper,
.copyright {
  padding: 20px;
  text-align: center;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 10px;
}
/*---- Genral classes end -------*/

/*Change icons size here*/
.social-icons .fa {
  font-size: 1.9em;
}
/*Change icons circle size and color here*/
.social-icons .fa {
  width: 55px;
  height: 55px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  color: rgba(27, 70, 228, 0.8);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.social-icons.icon-circle .fa {
  border-radius: 50%;
}
.social-icons.icon-rounded .fa {
  border-radius: 5px;
}
.social-icons.icon-flat .fa {
  border-radius: 0;
}

.social-icons .fa:hover,
.social-icons .fa:active {
  color: #fff;
  background-color: #1a52c2;
  -webkit-box-shadow: 1px 1px 3px #333;
  -moz-box-shadow: 1px 1px 3px #333;
  box-shadow: 1px 1px 3px #333;
}

.social-icons .fa-facebook,
.social-icons .fa-facebook-square {
  background-color: #dfe3eb;
}
.social-icons .fa-instagram {
  width: 50px;
  height: 50px;
  text-align: center;
  color: #fff;
  padding: 1.1px;
  margin-left: 20px;
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
}
.social-icons .fa-instagram:hover,
.social-icons .fa-instagram:active {
  color: rgb(193, 72, 72);
  background-color: #1a52c2;
  -webkit-box-shadow: 1px 1px 3px #333;
  -moz-box-shadow: 1px 1px 3px #333;
  box-shadow: 1px 1px 3px #333;
}
</style>
