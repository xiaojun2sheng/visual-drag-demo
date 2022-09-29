<template>
    <div class="content" ref="el">
        <div ref="refChart" class="myChart"></div>
    </div>
</template>

<script>

import { echartsMixin } from '../echartsUtils/echartsmixin.js'
import { options } from './options'

export default {
    mixins: [ echartsMixin ],
    data() {
        return {
            option: options
        }
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/echarts.scss'
</style>
