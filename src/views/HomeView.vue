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
            <el-button size="large" @click="parseIpList" :disabled="!textarea.length">Отправить</el-button>
        </div>
    </div>
    <div v-if="state === 'table'">
        table
        <button @click="state='add'">to add</button>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useIpStore } from '@/composables/useIpStore';
import { useValidator } from '@/composables/useValidator';
import { ElMessage } from 'element-plus';

const ipStore = useIpStore();
const { validateIp } = useValidator();

type TState = 'add' | 'table';

const state = ref<TState>('add');
const textarea = ref<string>('');

const parseIpList = () => {
    const arrIp: string[] = textarea.value.split('\n');

    for (const ip of arrIp) {
        if (ip && validateIp(ip)) {
            ipStore.addIp(ip);
        }
    }

    textarea.value = "";

    console.log("ipStore.actualIpList?.length: ", ipStore.actualIpList?.length);
    if (ipStore.actualIpList?.length) {
        state.value = 'table';
    } else {
        ElMessage.error('Список IP адресов не валидный')
    }

};


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
