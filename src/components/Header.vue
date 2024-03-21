<template>
        <div class="flex flex-none header__logo">
            IP-PN.COM
        </div>
        <div class="flex flex-none">
            <el-input
                class="header__input-search"
                v-model="search"
                @keyup.enter="onSearch"
                style="width: 460px;"
                size="large"
                placeholder="95.213.138.174"
                :prefix-icon="Search"
            />
        </div>
        <div class="flex flex-row gap-2">
            <div class="flex flex-none header__link mr-32">
                Documentation
            </div>
            <div class="flex flex-none header__link mr-32">
                Contacts
            </div>
            <div class="flex flex-none header__link">
                <b>Log in</b>
            </div>
        </div>

</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ElInput, ElHeader } from 'element-plus';

import { ref } from 'vue';

const search = ref('');

const onSearch = () => {
    console.log('onSearch', search.value);
};
</script>
