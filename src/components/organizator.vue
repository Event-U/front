<template>
  <div class="offset-1 col-md-10 mt-3">
    <nav class="bg-mattBlackLight text-muted m-auto">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active text-muted"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >Eventos</a>
        <a
          class="nav-item nav-link text-muted"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >Nuevo evento</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      ></div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <AddEvents></AddEvents>
      </div>
    </div>
  </div>
</template>

<script>
import AddEvents from './AddEvents'
export default {
  name: 'organizator',
  components: {
    AddEvents
  }
}
</script>
