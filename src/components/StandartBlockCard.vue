<template>
  <q-card class="q-pa-none" square flat>
    <q-card-section>
      <q-img v-bind:src="img" fit="cover"> </q-img>
    </q-card-section>
    <q-card-section>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5">{{ title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section>
      <q-item>
        <q-item-section>
          <q-item-label>{{ text }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn type="a" :href="button.link" target="_blank" flat>{{
        button.label
      }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
  props: {
    img: {
      type: String,
      default: () => {
        return "https://cdn.quasar.dev/img/parallax2.jpg";
      },
    },
    title: {
      type: String,
      default: () => {
        return "Godot Showcase - RPG in a Box developer talks about his experience";
      },
    },
    text: {
      type: String,
      default: () => {
        return `We interviewed Justin Arnold about his project RPG in a Box, which is an
            engine made with Godot that lets you easily create 3D grid-based, voxel-style
            RPGs, adventure games, and more!`;
      },
    },
    button: {
      type: Object,
      default: () => {
        return { label: "LABEL", link: "#" };
      },
    },
  },
};
</script>
