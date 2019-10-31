<template>
 <div id="index">
   <Investors/>
</div>
</template>

<script>
import Investors from '../components/Investors'

export default {
  name: 'Index',
  components: {
    Investors
  }
}
</script>

<style scoped>
#background {
    background: linear-gradient( rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.16)), url(../assets/bg-login.png);
    background-size: cover;
    height: 1000px!important;
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
