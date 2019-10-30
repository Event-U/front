<template>
 <div id="index">
<div class="background" id="background">
  <div class="container">
  <logo/>
        <form class="form-body">
          <TitleInitial />
          <FormGroup />
          <Button />
          <a href="/register" class="form-text">¿Aun no creas una cuenta?</a>
        </form>
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

console.log('Login')
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
</style>
