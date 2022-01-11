<template>
  <q-card class="my-card">
    <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="350">
      <div class="absolute-bottom-right text-subtitle2">
        <q-card-section class="bg-grey">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </div>
    </q-parallax>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
</style>
