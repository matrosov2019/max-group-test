<template>
    <div class="about">
        <h1>IP: {{ $route.params.ip }}</h1>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.params.id: ', route.params.id);

</script>
