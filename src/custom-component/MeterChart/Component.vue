<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="content">
        <div ref="refMeterChart" class="myChart"></div>
    </div>
</template>

<script>
import request from '@/utils/request'
import OnEvent from '../common/OnEvent'

export default {
    extends: OnEvent,
    props: {
        request: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            myChart: null,
            option: {

            }
        }
    },
    computed: {
    },
    mounted() {
        this.drawLine();
    },
    // http://39.106.84.29:6266/mcb/api/questionnaire/list?limit=10&pageNo=1"
    created() {
        if (this.request) {
            this.cancelRequest = request(this.request, this.propValue, 'data')
        }
    },
    beforeDestroy() {
        // 组件销毁时取消请求
        this.request && this.cancelRequest()
    },
    methods: {
        drawLine(){
            this.myChart = this.$echarts.init(this.$refs.refMeterChart);
            this.myChart.setOption(this.option);
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    .myChart {
        width: 100%;
        height: 100%;
    }
}
</style>
