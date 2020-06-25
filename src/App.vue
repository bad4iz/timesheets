<template>
  <v-app>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    ></v-navigation-drawer>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <v-container fluid> </v-container>
    </v-main>

    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters: mapGettersSettingsApp } = createNamespacedHelpers(
    'settingsApp'
  );

  export default {
    name: 'App',
    data: () => ({
      footer: {
        inset: false,
      },
    }),
    computed: {
      ...mapGettersSettingsApp({
        primaryDrawer: 'getPrimaryDrawer',
      }),
    },
  };
</script>

<style scoped></style>
