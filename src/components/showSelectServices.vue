<template v-for="n in 10">
  <CategoryServiceCard  :key="n"></CategoryServiceCard>
</template>
<script>
import CategoryServiceCard from './CategoryServiceCard'
export default {
  name: 'showSelectServices',
  components: {
    CategoryServiceCard
  }

}
</script>
