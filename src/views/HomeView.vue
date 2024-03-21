<template>
    <AddingListIpAddresses @success="state = 'table'" v-if="state === 'add'"/>
    <TableIpAddresses v-if="state === 'table'" @moveToAdd="state = 'add'"/>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AddingListIpAddresses from '@/components/AddingListIpAddresses.vue';
import TableIpAddresses from '@/components/TableIpAddresses.vue';
type TState = 'add' | 'table';
const state = ref<TState>('add');
</script>