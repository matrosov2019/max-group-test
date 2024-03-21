<template>
    <div class="flex flex-col">
        <div class="flex flex-none mb-20">
            <el-input
                v-model="search"
                style="width: 460px;"
                size="large"
                placeholder="Поиск по таблице..."
                :prefix-icon="Search"
                @input="onInput"
            />
        </div>
        <div class="flex flex-none" v-if="tableData && tableData?.length">
            <el-table
                border
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                height="336"
            >
                <el-table-column fixed type="selection" width="40" />
                <el-table-column label="ip" width="250">
                    <template #header>
                        <div class="flex flex-row flex-justify-between w-full">
                            <div class="flex flex-none">
                                IP
                            </div>
                            <div class="flex flex-none">
                                <el-tag type="danger" style="cursor: pointer" v-if="multipleSelection?.length"
                                        @click="deleteItems">Удалить выбранные
                                </el-tag>
                            </div>
                        </div>
                    </template>
                    <template #default="scope">

                        <div class="flex flex-row flex-justify-between flex-align-item-center">
                            <div class="flex flex-none flex-align-item-center">
                                <div class="mr-4" v-if="scope.row.countryCode">
                                    <country-flag :country="scope.row.countryCode" size='normal' />
                                </div>
                                <div @click="openDetail( scope.row.ip)" class="cursor-pointer">{{ scope.row.ip }}</div>
                            </div>
                            <div class="flex flex-none">
                                <el-tooltip
                                    class="box-item"
                                    effect="dark"
                                    content="Удалить"
                                    placement="top"
                                >
                                    <el-icon :size="13" color="#791919" @click="deleteItem( scope.row.ip )"
                                             class="mr-4">
                                        <Delete style="cursor: pointer" />
                                    </el-icon>
                                </el-tooltip>

                                <el-tooltip
                                    class="box-item"
                                    effect="dark"
                                    :content="copied? 'Скопировано!' : 'Скопировать'"
                                    placement="top"
                                >
                                    <el-icon :size="13" color="#929496">
                                        <CopyDocument style="cursor: pointer" @click="copy( scope.row.ip )" />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </div>

                    </template>
                </el-table-column>
                <el-table-column property="country" label="Country" width="400">
                    <template #header>
                        <div class="flex flex-row flex-justify-between w-full">
                            <div class="flex flex-none">
                                Country
                            </div>
                            <div class="flex flex-none">
                                <el-select
                                    v-model="sortCountryDir"
                                    placeholder="Сортировка"
                                    size="small"
                                    style="width: 150px"
                                >
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    />
                                </el-select>
                            </div>
                        </div>
                    </template>
                    <template #default="scope">
                        {{ scope.row.country }}
                    </template>
                </el-table-column>
                <el-table-column property="city" label="City/Town">
                    <template #default="scope">
                        {{ scope.row.city }}
                    </template>
                </el-table-column>
                <el-table-column property="status" label="" width="50">
                    <template #default="scope">
                        <el-tooltip
                            v-if="scope.row.status === 'success'"
                            class="box-item"
                            effect="light"
                            content="Успешно"
                            placement="top"
                        >
                            <div :class="`ip-status-${scope.row.status}`">
                                <el-icon :size="20" color="#3E7919">
                                    <Check />
                                </el-icon>
                            </div>
                        </el-tooltip>

                        <el-tooltip
                            v-if="scope.row.status === 'loading'"
                            class="box-item"
                            effect="light"
                            content="В процессе"
                            placement="top"
                        >
                            <div :class="`ip-status-${scope.row.status}`">
                                <el-icon :size="20" color="#F9A500">
                                    <Refresh />
                                </el-icon>
                            </div>

                        </el-tooltip>

                        <el-tooltip
                            v-if="scope.row.status === 'error'"
                            class="box-item"
                            effect="light"
                            content="Не успешно"
                            placement="top"
                        >
                            <div :class="`ip-status-${scope.row.status}`">
                                <el-icon :size="20" color="#791919">
                                    <Close />
                                </el-icon>
                            </div>
                        </el-tooltip>

                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { ElInput, ElMessage, ElTable } from 'element-plus';
import { Search, Delete, Check, Refresh, Close, CopyDocument } from '@element-plus/icons-vue';
import type { TIpTableItem } from '@/types/TIpTableItem';
import { useIpStore } from '@/composables/useIpStore';
import { getIpInfo } from '@/api/ip';
import { useDebounceFn, useClipboard } from '@vueuse/core';
import { useRouter } from 'vue-router';

const emit = defineEmits<{
    moveToAdd: []
}>();
const source = ref('');
const { copy, copied } = useClipboard({ source });
const router = useRouter();
const ipStore = useIpStore();
const sortCountryDir = ref<'descending' | 'ascending' | undefined>();
const search = ref<string>('');
const searchFinal = ref<string>('');

const deleteItem = (ip: string) => {
    ipStore.deleteIp(ip);
    ElMessage({
        message: `IP: ${ip} был удален!`,
        type: 'success'
    });
    if (!ipStore.actualIpList.length) {
        emit("moveToAdd");
    }
};

const deleteItems = () => {
    for (const item of multipleSelection.value) {
        //@ts-ignore
        ipStore.deleteIp(item.ip);
    }
    ElMessage({
        message: `Выделенные ip были удалены!`,
        type: 'success'
    });
    if (!ipStore.actualIpList.length) {
        emit("moveToAdd");
    }
};

const openDetail = (ip: string) => {
    router.push(`/details/${ip}`);
};


const debouncedFn = useDebounceFn(() => {
    searchFinal.value = search.value;
    router.push({ query: { search: search.value } });
}, 1000);


const onInput = () => {
    debouncedFn();
};

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<Partial<TIpTableItem>[]>([]);

const handleSelectionChange = (val: Partial<TIpTableItem>[]) => {
    multipleSelection.value = val;
};


const options = [
    {
        value: 'descending',
        label: 'A-Z'
    },
    {
        value: 'ascending',
        label: 'Z-A'
    }
];


const tableData = computed(() => {
    let data = Object.values(ipStore.ipList);

    //Filtering
    if (searchFinal.value) {
        const searchValue = searchFinal.value.trim().toLowerCase();
        data = data.filter((item: Partial<TIpTableItem>) => {
            if (item?.country?.toLowerCase().includes(searchValue)) return true;
            if (item?.city?.toLowerCase().includes(searchValue)) return true;
            if (item?.ip?.toLowerCase().includes(searchValue)) return true;
            return false;
        });
    }

    //Sorting
    data = data.sort((a: Partial<TIpTableItem>, b: Partial<TIpTableItem>) => {
        if (sortCountryDir.value === undefined) return compare(a, b, 'ip');
        return sortCountryDir.value === 'descending' ? compare(a, b, 'country') : compare(b, a, 'country');
    });

    return data;
});


const compare = (a: Partial<TIpTableItem>, b: Partial<TIpTableItem>, field: string) => {
    //@ts-ignore
    if (a[field] < b[field]) {
        return -1;
    }
    //@ts-ignore
    if (a[field] > b[field]) {
        return 1;
    }
    return 0;
};

const init = async () => {

    const arrPromises = [];
    for (const ip of ipStore.actualIpList) {
        arrPromises.push(getIpInfo(ip));
    }
    const promises = await Promise.allSettled(arrPromises);
    for (const promise of promises) {
        //TODO Обернуть в промис, который возращает всегда IP, и уже данные запроса
        //@ts-ignore
        const ip = promise?.value?.config.url.replace('http://ip-api.com/json/', '');
        if (promise.status === 'fulfilled') {
            const data = promise?.value?.data;
            ipStore.updateIp(ip, {
                ip: ip,
                country: data.country,
                city: data.city,
                countryCode: data?.countryCode,
                status: 'success'
            });
        } else {
            ipStore.updateIp(ip, {
                ip: ip,
                status: 'error'
            });
        }
    }

};

init();

</script>
<style scoped lang="scss">

</style>