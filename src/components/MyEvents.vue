<template>
  <div>
      <div class="list-services-content">
              <div class="col-4" v-for="(event, index) in events" :key="index">
                  <CategoryServiceCard v-bind="event"/>
              </div>
      </div>
  </div>
</template>

<script>
import CategoryServiceCard from '../components/CategoryServiceCard'
import api from '../lib/api'
export default {
  name: 'MyEvents',
  components: {
    CategoryServiceCard
  },
  data () {
    return {
      events: {
        type: Array,
        default: () => ([])
      }
    }
  },
  async mounted () {
    const events = await api.getEvent()
    console.log('events mounted')
    console.log(events)
    this.events = events.map((event) => ({
      ServiceTitle: event.name,
      ServiceDescription: event.description,
      ServiceImage: event.image,
      ServiceIsEvent: true
    }))

    console.log(this.events)

    this.loading = false
  }
}
</script>
<style>
.list-services-content .card {
    border-radius: 50px 12px 5px!important;
    border: none;
    margin-bottom: 20px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);

}
.list-services-content .card-text {
    color: #333333;
    font-weight: normal!important;
    font-size: .8em;
}
.list-services-content .card:hover {
    border: solid #ffff00 3px;
    box-shadow: 0px 0px 25px #0000009e;
    transition: ease-in 0.3s;
}
.list-services {
    font-size: 2em;
    color: black;
}
.btn-evntu {
    background-color: #ffff00!important;
    color: #000000;
    font-size: 1em;
    border-radius: 12px;
    border: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    padding: 9px 25%;
}
.btn-evntu:hover {
    border: solid 2px;
    border-color: black!important;
    background-color: #ffff00!important;
    color: #000000;
    transition: .4 ease;
}
.service-price-container {
    display: flex;
    justify-content: center;
}
.col-4{
  max-width: 100%;
}
.service-price {
    margin-right: .4em;
}
.list-services-content img {
    border-radius: 50px 12px 5px!important;
    max-width: 100%!important;
}
</style>
