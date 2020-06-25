<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <span>Scheme</span>
          <v-switch
            v-model="$vuetify.theme.dark"
            primary
            label="Dark"
          ></v-switch>
        </v-col>
        <v-col cols="12" md="6">
          <span>Drawer</span>
          <v-radio-group v-model="type" column>
            <v-radio
              v-for="drawer in drawers"
              :key="drawer"
              :label="drawer"
              :value="drawer.toLowerCase()"
              primary
            ></v-radio>
          </v-radio-group>
          <v-switch v-model="clipped" label="Clipped" primary></v-switch>
          <v-switch v-model="floating" label="Floating" primary></v-switch>
          <v-switch v-model="mini" label="Mini" primary></v-switch>
        </v-col>
        <v-btn @click="setPrimaryDrawer({id: 4})"></v-btn>
        <v-col cols="12" md="6">
          <span>Footer</span>
          <v-switch v-model="footer.inset" label="Inset" primary></v-switch>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text>Cancel</v-btn>
      <v-btn text color="primary">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const {
    mapGetters: mapGettersSettingsApp,
    mapActions: mapActionsSettingsApp,
  } = createNamespacedHelpers('settingsApp');

  export default {
    name: 'Settings',
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      // primaryDrawer: {

      //   type: 'default (no property)',
      //   clipped: false,
      //   floating: false,
      //   mini: false,
      // },
      footer: {
        inset: false,
      },
    }),
    methods: {
      ...mapActionsSettingsApp({
        setPrimaryDrawer: 'setPrimaryDrawerAction',
      }),
    },
    computed: {
      type: {
        get() {
          return this.primaryDrawer.type;
        },
        set(val) {
          console.log(val);
          this.setPrimaryDrawer({ type: val });
        },
      },
      clipped: {
        get() {
          return this.primaryDrawer.clipped;
        },
        set(val) {
          console.log(val);
          this.setPrimaryDrawer({ clipped: val });
        },
      },
      floating: {
        get() {
          return this.primaryDrawer.floating;
        },
        set(val) {
          console.log(val);
          this.setPrimaryDrawer({ floating: val });
        },
      },
      mini: {
        get() {
          return this.primaryDrawer.mini;
        },
        set(val) {
          console.log(val);
          this.setPrimaryDrawer({ mini: val });
        },
      },
      ...mapGettersSettingsApp({
        primaryDrawer: 'getPrimaryDrawer',
      }),
    },
  };
</script>

<style scoped></style>
