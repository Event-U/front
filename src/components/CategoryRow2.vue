<template>
        <div class="row">
                    <div class="col-6">
                        <div class="card bg-dark text-white">
                            <img src="../assets/img/barman.jpg" class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <h5 class="card-title">Bebidas🍹</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <ServiceCategoryCard/>
                    </div>
        </div>
</template>

<script>
import ServiceCategoryCard from './ServiceCategoryCard'

export default {
  name: 'CategoryRow2',
  components: {
    ServiceCategoryCard
  }
}
</script>

<style>

</style>
