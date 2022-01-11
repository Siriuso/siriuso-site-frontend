<template>
  <div class="full-width bg-secondary">
    <q-card class="main-message container" flat square>
      <q-card-section horizontal class="flex justify-between full-width">
        <q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Overline</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat> Download </q-btn>
            <q-btn flat> Learn more </q-btn>
          </q-card-actions>
        </q-card-section>
        <q-img
          class="rounded-borders col-6"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          fit="cover"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style scoped>
.main-message {
  height: 300px;
}
</style>
