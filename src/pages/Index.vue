<template>
  <q-page class="flex">
    <start-card-parallax></start-card-parallax>
    <main-message-card></main-message-card>

    <div class="full-width bg-primary">
      <q-card class="news_and_features"> </q-card>
    </div>
    <q-card class="main-message"></q-card>
    <q-card class="main-message"></q-card>
  </q-page>
</template>

<script>
import MainMessageCard from 'src/components/MainMessageCard.vue';
import StartCardParallax from 'src/components/StartCardParallax.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { StartCardParallax, MainMessageCard },
  name: 'PageIndex',
});
</script>
