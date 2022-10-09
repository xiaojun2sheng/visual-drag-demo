export const options = {
    title: {
        text: '饼状图',
        subtext: '饼状图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
            { value: 1048, name: '事件' },
            { value: 735, name: '剧本' },
            { value: 300, name: '告警' }
        ],
        emphasis: {
            itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
        }
    ]
}