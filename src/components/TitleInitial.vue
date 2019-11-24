<template>
  <div class="title-login">
               <logo/>
                <h1>Inicia Sesión</h1>
                <h3>Provedores y Organizadores</h3>
            </div>
</template>

<script>
export default {
  name: 'titleinitial'
}
// props:{
//     title:'holaaaa'
// }
</script>

<style scoped>
*{
    color:#ffffff;
}
h1{
    font-size:4em;
}

h3 {
    font-size: 1.2em;
    margin-bottom: 1em;
}
.first-input-register {
    border-radius: 10px 10px 0px 0px;
}

input.form-control:hover {
    border: 3px solid #ffff00;
    color: black;
}

.last-input-register {
    border-radius: 0px 0px 10px 10px;
}

.form-control {
    border: none;
    color: black;
    border-bottom: 1px solid black;
    font-size: 1.1em;
}
</style>
