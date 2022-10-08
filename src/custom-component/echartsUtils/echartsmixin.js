import { useElementSize } from '@vueuse/core'
import request from '@/utils/request'
import OnEvent from '../common/OnEvent'

export const echartsMixin = {
    extends: OnEvent,
    props: {
        request: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return{
            contentDom: {},
            myChart: null,
            options: {}
        }
    },
    // http://39.106.84.29:6266/mcb/api/questionnaire/list?limit=10&pageNo=1"
    created () {
        this.featchData()
    },
    beforeDestroy() {
        // 组件销毁时取消请求
    },
    watch: {
        contentDom: {
            handler: function() {
                this.myChart.resize()
            },
            deep:true
        }
    },
    mounted() {
        this.drawLine();
        this.contentDom = useElementSize(this.$refs.el)
    },
    methods: {
        drawLine(){
            this.myChart = this.$echarts.init(this.$refs.refChart);
            this.myChart.setOption(this.option);
        },
        async featchData () {
            if (this.request) {
                let res = await request(this.request, this.propValue, 'data')
                if (!res) return
                console.dir(res.data)
            }

        }
    },
}