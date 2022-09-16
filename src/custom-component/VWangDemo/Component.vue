<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="content">
        wang-demo
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { keycodes } from '@/utils/shortcutKey.js'
import request from '@/utils/request'
import OnEvent from '../common/OnEvent'

export default {
    extends: OnEvent,
    props: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    created() {
    },
    beforeDestroy() {
        // 组件销毁时取消请求
        this.request && this.cancelRequest()
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.content {
    font-size: 18px;
    background: gray;
}
</style>
