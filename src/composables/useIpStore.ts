import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { TIpTableItem } from '@/types/TIpTableItem';

export const useIpStore = defineStore('ip', () => {
    const ipList = ref<Record<string, Partial<TIpTableItem>>>({});
    const addIp = (ip: string) => {
        ipList.value[ip] = {
            ip: ip,
            status: 'loading'
        };
    };
    const deleteIp = (ip: string) => {
        delete ipList.value[ip];
    };
    const actualIpList = computed(() => {
        return Object.keys(ipList.value);
    });
    const updateIp = (ip: string, data: Partial<TIpTableItem>) => {
        ipList.value[ip] = data;
    };
    return { addIp, actualIpList, ipList, updateIp, deleteIp };
});

