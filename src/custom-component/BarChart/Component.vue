<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="content">
        <div ref="refBarChart" class="myChart"></div>
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
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                    }
                ]
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
            debugger
            this.myChart = this.$echarts.init(this.$refs.refBarChart);
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
