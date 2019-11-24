<template>
 <div id="index">
<div class="background" id="background">
  <div class="container">
  <logo/>
  <div class="row">
    <div class="col display-flex">
        <form class="form-body">
          <TitleInitial />
          <FormGroup />
          <Button />
          <a href="/#/register" class="form-text">¿Aun no creas una cuenta?</a>
        </form>
        </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Logo from '../components/LogoImage'
import FormGroup from '../components/FormGroup'
import Background from '../components/Background'
import TitleInitial from '../components/TitleInitial'
import Button from '../components/Button'

export default {
  name: 'Index',
  components: {
    Logo,
    FormGroup,
    Background,
    TitleInitial,
    Button
  }

}
</script>

<style scoped>
.row{
      text-align: -webkit-center;

}
#background {
    background: linear-gradient( rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.16)), url(../assets/bg-loginn.jpg);
    background-size: cover;
    height: 800px!important;
    background-attachment: fixed;
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
}
h1 {
    font-size: 70px;
}
.form-text:hover {
    color: #fff;
}
.form-text{
  color:#fff;
}
form{
  max-width: 50%;
}
.logo{
 padding-top:100px;
}
.logo img{
  max-width:136px;
}
.form-body{
  align-items:center;
}
@media (max-width: 700px) {
    .container {
        min-width: 100%;
    }
    #background {
        height: 900px!important;
        background: /* top, transparent red, faked with gradient */
        linear-gradient( rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.12)), url(../assets/bg-loginn.jpg),cover;
        background-position-x: center;
    }
    .form-text {
        font-size: 1em;
    }
     .btn-yellow {
      border-radius: 8px;
    font-size: 17px!important;
    font-weight: bold;
    color:black;
    padding: 5px 10%;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    }
    form{
  max-width: 80%;
  }
}
</style>
