<template>
  <q-page>
    <start-card-parallax></start-card-parallax>
    <main-message-card></main-message-card>

    <div class="full-width bg-primary">
      <q-card class="news_and_features container q-py-xl" square flat>
        <q-card-section horizontal class="full-width">
          <standart-block-with-text-img
            class="col-6"
            title="Мой тайтл"
            img="https://cdn.quasar.dev/img/parallax2.jpg"
            text="Мой текст!"
          ></standart-block-with-text-img>
          <q-card-section class="column justify-between full-width">
            <q-list class="col-6" padding separator>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-h5">NEWS</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label
                    >Godot Engine receiving a new grant from Meta's Reality
                    Labs</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Maintenance release: Godot 3.4.2</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Maintenance release: Godot 3.4.1</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-card-actions align="center">
              <q-btn label="More"> </q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="full-width bg-primary">
      <q-card square flat class="container column">
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h4">A different way to make games </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pa-none full-width six-images">
          <standart-block-with-text-img
            v-for="(item, index) in $options.cards"
            :key="index"
            :title="item.title"
            :img="item.img"
            :text="item.text"
          ></standart-block-with-text-img>
        </q-card-section>
      </q-card>
    </div>
    <q-card class="features">dsgdf</q-card>
    <q-card class="get_involved">dsgfdh</q-card>
  </q-page>
</template>

<script>
import MainMessageCard from 'src/components/MainMessageCard.vue';
import StandartBlockWithTextImg from 'src/components/StandartBlockWithTextImg.vue';
import StartCardParallax from 'src/components/StartCardParallax.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { StartCardParallax, MainMessageCard, StandartBlockWithTextImg },
  name: 'PageIndex',
  cards: [
    {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'blabla1',
      text: 'Hello',
    },
    {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'blabla2',
      text: 'Hello',
    },
    {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'blabla3',
      text: 'Hello',
    },
    {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'blabla4',
      text: 'Hello',
    },
    {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'blabla5',
      text: 'Hello',
    },
    {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'blabla6',
      text: 'Hello',
    },
  ],
  data() {
    return {};
  },
});
</script>
<style scoped>
.six-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style>
