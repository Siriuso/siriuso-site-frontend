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
            <img
              :src="
                dark
                  ? 'https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg'
                  : 'https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg'
              "
            />
          </q-avatar>
          Siriuso
        </q-toolbar-title>
        <template v-if="$q.screen.gt.sm">
          <q-separator :dark="dark" vertical inset />
          <q-btn stretch flat label="Features" />
          <q-btn stretch flat label="News" />
          <q-btn stretch flat label="Community" />

          <q-btn-dropdown stretch flat label="More">
            <q-list :dark="dark">
              <q-item
                clickable
                v-close-popup
                tabindex="0"
                :class="dark ? 'container--dark' : 'container--light'"
              >
                <q-item-section avatar>
                  <q-avatar icon="folder" />
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
          <q-btn>
            <q-img
              :src="dark ? 'boosty_white.png' : 'boosty_dark.png'"
              width="120px"
              fit="contain"
            />
          </q-btn>
        </template>
        <template v-else>
          <q-space />
          <q-btn icon="menu" flat round></q-btn>
        </template>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated :class="dark ? 'container--dark' : 'container--light'">
      <q-toolbar class="container">
        <q-toolbar-title class="flex items-center footer__toolbar-title">
          <q-avatar>
            <img
              :src="
                dark
                  ? 'https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg'
                  : 'https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg'
              "
            />
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
import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';
import { LocalStorage } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

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
    ...mapGetters({ dark: 'UIstore/getDark' }),
  },

  mounted() {
    this.$store.commit('UIstore/setDark', LocalStorage.getItem('dark'));
  },
});
</script>
<style>
.footer__toolbar-title > * + * {
  margin-left: 6px;
}
</style>
