<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      settings
      <settings />
    </v-col>
  </v-row>
</template>

<script>
  import Settings from '@/components/app/Settings';

  export default {
    name: 'SettingsView',
    components: { Settings },
  };
</script>
