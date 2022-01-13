<template>
  <q-img v-bind:src="img" fit="cover">
    <div class="absolute-bottom">
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5">{{ title }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>{{ text }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-img>
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
  },
};
</script>
