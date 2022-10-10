// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    collapseName: '', // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
    linkage: {
        duration: 0,
        data: [ // 组件联动
            {
                id: '',
                label: '',
                event: '',
                style: [{ key: '', value: '' }],
            },
        ],
    },
}

// 编辑器左侧组件列表
// 组件type的枚举值 1:基础组件 2:echarts图表 3: 3D效果
const list = [
    {
        component: 'VText',
        label: '文字',
        type: '1',
        propValue: '双击编辑文字',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'Div',
        label: '空白区域',
        type: '1',
        propValue: 'Div',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            textAlign: '',
            color: '',
            x:0,
            y: 0,
        },
    },
    {
        component: 'Table',
        label: '表格',
        type: '1',
        propValue: 'Table',
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'PieChart',
        label: '饼状图',
        type: '2',
        propValue: 'PieChart',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'AnnularChart',
        label: '环形图',
        type: '2',
        propValue: 'AnnularChart',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'BarChart',
        label: '柱状图',
        type: '2',
        propValue: 'BarChart',
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'BubbleChart',
        label: '气泡图',
        type: '2',
        propValue: 'BubbleChart',
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            backgroundColor: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'MeterChart',
        label: '仪表盘',
        type: '2',
        propValue: 'MeterChart',
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'Earth',
        label: '地球',
        type: '3',
        propValue: 'Earth',
        style: {
            width: 200,
            height: 28,
            backgroundColor: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list

// 组件type的枚举值 1:基础组件 2:echarts图表 3: 3D效果
export const componentTypes = [
    { value: '', label: '全部' }, 
    { value: '1', label: '基础组件' }, 
    { value: '2', label: 'echart' },
    { value: '3', label: '3D效果' },

]
