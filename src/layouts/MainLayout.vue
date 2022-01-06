<template>
  <q-layout view="hhh lpR fff">
    <q-header
      reveal
      elevated
      height-hint="98"
      :class="dark ? 'container--dark' : 'container--light'"
    >
      <q-toolbar class="container">
        <q-toolbar-title shrink>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Siriuso
        </q-toolbar-title>
        <q-separator :dark="dark" vertical inset />
        <q-btn stretch flat label="Features" />
        <q-btn stretch flat label="News" />
        <q-btn stretch flat label="Community" />

        <q-btn-dropdown stretch flat label="More">
          <q-list :dark="dark">
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-space />

        <q-btn stretch flat label="Download" />

        <q-btn stretch flat label="Learn" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated :class="dark ? 'container--dark' : 'container--light'">
      <q-toolbar class="container">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
        <q-space />
        <q-btn
          :label="dark ? 'dark' : 'light'"
          @click="$store.commit('UIstore/setDark', !dark)"
        ></q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
import { LocalStorage } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    ...mapGetters({ dark: "UIstore/getDark" }),
  },

  mounted() {
    this.$store.commit("UIstore/setDark", LocalStorage.getItem("dark"));
  },
});
</script>
