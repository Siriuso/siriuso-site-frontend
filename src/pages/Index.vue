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
              <q-btn flat label="More"> </q-btn>
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
    <div class="full-width bg-primary">
      <q-card class="get_involved container q-pa-none column" square flat>
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h4">Get involved</q-item-label>
            </q-item-section></q-item
          >
          <q-item>
            <q-item-section>
              <q-item-label
                >Join the community and help create a game engine that belongs to
                everybody</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="row justify-between">
          <standart-block-card
            v-for="i in 3"
            :key="i"
            class="col-4"
          ></standart-block-card>
        </q-card-section>
      </q-card>
    </div>
    <div class="full-width bg-secondary">
      <q-card class="get_involved container" square flat>
        <q-card-section class="row flex-center">
          <standart-block-card class="col-4"></standart-block-card> </q-card-section
      ></q-card>
    </div>
    <div class="full-width bg-secondary">
      <q-card class="sponsored container bg-secondary column" square flat>
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h4 text-center text-primary"
                >Sponsored</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section class="row flex-center">
          <q-btn
            flat
            type="a"
            :href="item.link"
            target="_blank"
            :color="item.color"
            v-for="(item, index) in $options.sponsored"
            :key="index"
            :label="item.img ? '' : item.label"
          >
            <q-img v-if="item.img" :src="item.img" width="120px" fit="contain" />
          </q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import MainMessageCard from 'src/components/MainMessageCard.vue';
import StandartBlockWithTextImg from 'src/components/StandartBlockWithTextImg.vue';
import StartCardParallax from 'src/components/StartCardParallax.vue';
import StandartBlockCard from 'src/components/StandartBlockCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    StartCardParallax,
    MainMessageCard,
    StandartBlockWithTextImg,
    StandartBlockCard,
  },
  name: 'PageIndex',
  sponsored: [
    {
      img: 'sponsored/gamblify.png',
      label: 'BannerA',
      color: 'deep-orange',
      link: '#',
    },
    {
      img: 'sponsored/heroiclabs.png',
      label: 'BannerB',
      color: 'red',
      link: '#',
    },
    {
      img: 'sponsored/spiffcode.png',
      label: 'BannerC',
      color: 'blue',
      link: '#',
    },
    {
      img: '',
      label: 'BannerC',
      color: 'green',
      link: '#',
    },
  ],
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
