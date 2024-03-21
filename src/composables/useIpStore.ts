import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useIpStore = defineStore('ip', () => {
    const ipList = ref<Record<string, boolean>>({});
    const addIp = (ip: string) => {
        ipList.value[ip] = true;
    };
    const actualIpList = computed(() => {
        return Object.keys(ipList.value);
    });
    return { addIp, actualIpList, ipList };
});

