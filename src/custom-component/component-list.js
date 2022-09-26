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
const list = [
    {
        component: 'VText',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'wenben',
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
        propValue: 'PieChart',
        icon: 'icona-Union7',
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
        propValue: 'AnnularChart',
        icon: 'home',
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
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo3',
        label: 'VDemo3',
        propValue: 'VDemo3',
        icon: 'wenben',
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
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo4',
        label: 'VDemo4',
        propValue: 'VDemo4',
        icon: 'wenben',
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
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo5',
        label: 'VDemo5',
        propValue: 'VDemo5',
        icon: 'wenben',
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
