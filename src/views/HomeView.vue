<template>

    <div v-if="state === 'add'" class="flex flex-col">
        <div class="flex flex-none mb-20">
            <el-input
                v-model="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 20 }"
                type="textarea"
                placeholder="Введите IP адреса"
            />
        </div>
        <div class="flex flex-none">
            <el-button size="large" @click="parseIpList">Отправить</el-button>
        </div>
    </div>
    <div v-if="state === 'table'">
        table
        <button @click="state='add'">to add</button>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
type TState = 'add' | 'table';

const state = ref<TState>('add');
const textarea = ref<string>('');

const parseIpList = () => {
    const arr = textarea.value.split('\n');
    console.log('arr: ', arr);
    //TODO Добавить в PInia
}


</script>
<style scoped lang="scss">
.textarea {
    width: 620px;
    min-height: 112px;
}

.mb-20 {
    margin-bottom: 20px;
}
</style>
