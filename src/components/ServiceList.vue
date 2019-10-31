<template>
    <div class="container-fluid">
        <div id="main-wrapper" class="cat-servicios">
            <CategoryRow1/>
            <CategoryRow3/>
            <CategoryRow2/>
        </div>
    </div>
</template>

<script>
import CategoryRow1 from '../components/CategoryRow1'
import CategoryRow3 from '../components/CategoryRow3'
import CategoryRow2 from '../components/CategoryRow2'

export default {
  name: 'ServiceList',
  components: {
    CategoryRow1,
    CategoryRow3,
    CategoryRow2
  }
}
</script>

<style>

.cat-servicios .card {
    border-radius: 50px 12px 5px!important;
    border: none;
    margin-bottom: 20px;
}

.cat-servicios .card-body {
    padding: 25px!important;
}

.content {
    background-color: #1C2038!important;
    padding-top: 2%;
}

.card-img-overlay {
    font-family: Futura;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
    border-radius: 50px 12px 5px;
}

.card-img-overlay h5 {
    font-size: 2em;
    font-weight: 100;
    position: absolute;
    bottom: 0;
}

.cat-servicios img {
    border-radius: 50px 12px 5px!important;
    box-shadow: 0px 4px 7px 2px #0000004a;
    max-width: 100%;
}

#main .card-img-overlay h5 {
    font-size: 5em;
}

.cat-servicios .card:hover {
    border: solid #ffff00 3px;
    box-shadow: 0px 0px 25px #0000009e;
    transition: ease-in 0.2s;
}

.sideMenu {
    background-color: #252B48;
}

.list-services-content .card {
    border-radius: 50px 12px 5px!important;
    border: none;
    margin-bottom: 20px;
}

.list-services-content .card-text {
    color: #333333;
    font-weight: normal!important;
    font-size: .8em;
}

.list-services-content .card:hover {
    border: solid #ffff00 3px;
    box-shadow: 0px 0px 25px #0000009e;
    transition: ease-in 0.2s;
}

.list-services {
    font-size: 2em;
    color: black;
}
#main {
    overflow: hidden;
    height: 340px;
    display: flex;
    position: relative;
}

#main img {
    position: absolute;
    top: -90px;
    max-width:100%;
}
</style>
