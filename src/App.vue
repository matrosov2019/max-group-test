<template>

    <div class="common-layout">
        <el-container>
            <el-header class="flex flex-row flex-align-item-center header flex-justify-between">
                <Header />
            </el-header>
            <el-main class="main">
                <router-view />
            </el-main>
        </el-container>
    </div>
    <!--
       <country-flag country='it' size='big'/>
      -->
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElMain } from 'element-plus';
import Header from '@/components/Header.vue';
</script>

<style lang="scss">
body {
    padding: 0;
    margin: 0;
    font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.main {
    padding: 80px 100px !important;
}

#app {
    font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.mr-32 {
    margin-right: 32px;
}

.header {
    height: 100px;
    background: #F2F0F0;
    padding: 0 100px !important;

    &__logo {
        color: #0E2E3B;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
    }

    &__input-search {
        margin-left: 20px;
        width: 460px;
    }

    &__link {
        transition: 0.3s all;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
}

.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -moz-box-wrap: nowrap;
    -webkit-box-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    -ms-flexbox-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.flex-none {
    flex: none;
}

.flex-auto {
    -webkit-box-basis: auto;
    -webkit-flex-basis: auto;
    -ms-flex-basis: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;
    /* OLD - Firefox 19- */
    -webkit-flex: 1;
    /* Chrome */
    -ms-flex: 1 0 auto;
    /* IE 10 */
    flex: 1;
}

.flex-row {
    -moz-box-direction: row;
    -webkit-box-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -ms-flexbox-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}

.flex-col {
    -moz-box-direction: column;
    -webkit-box-direction: column;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flexbox-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.flex-align-between {
    -webkit-box-align-content: space-between;
    -webkit-align-content: space-between;
    -ms-flex-align-content: space-between;
    align-content: space-between;
}

.flex-align-center {
    -webkit-box-align-content: center;
    -webkit-align-content: center;
    -ms-flex-align-content: center;
    align-content: center;
}

.flex-align-start {
    -webkit-box-align-content: flex-start;
    -webkit-align-content: flex-start;
    -ms-flex-align-content: flex-start;
    align-content: flex-start;
}

.flex-align-item-start {
    -webkit-box-align: flex-start;
    -webkit-align-items: flex-start;
    -moz-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
}

.flex-align-item-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.flex-start-all {
    -webkit-box-pack: justify;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: flex-start;
    -webkit-box-align: flex-start;
    -webkit-align-items: flex-start;
    -moz-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-box-align-content: flex-start;
    -webkit-align-content: flex-start;
    -ms-flex-align-content: flex-start;
    align-content: flex-start;
}

.flex-align-item-stretch {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -moz-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}

.flex-justify-between {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: space-between;
}

.flex-justify-center {
    -webkit-box-pack: justify;
    -webkit-justify-content: center;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: center;
}

.flex-justify-start {
    -webkit-box-pack: justify;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: flex-start;
}

.flex-justify-end {
    -webkit-box-pack: justify;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: flex-end;
}

.flex-wrap {
    -moz-box-wrap: wrap;
    -webkit-box-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flexbox-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
</style>
