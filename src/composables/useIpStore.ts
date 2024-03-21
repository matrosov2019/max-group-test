import { defineStore } from 'pinia'
import { TIpItem } from '@/types/TIpItem'

export const useIpStore = defineStore('ip', {
    state: () => {
        return {
            list: [] as TIpItem[]
        }
    },
    getters: {
        // automatically infers the return type as a number
        ipList(state) {
            return state.list;
        }
    }
})

