
import * as echarts from 'echarts/core'
import Img from './statistics.png'

const gaugeData = [
  {
    value: 0,
    name: '0%',
    title: {
      offsetCenter: ['0%', '40%']
    },
    detail: {
      offsetCenter: ['0%', '-20%']
    }
  }
]

export const options = {
  tooltip: {
    show: true
  },
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      anchor: {
        show: false
      },
      pointer: {
        show: false
      },
      progress: {
        show: true,
        roundCap: true,
        width: 5,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
            {
              offset: 0,
              color: '#F17401'
            },
            {
              offset: 1,
              color: '#FFB524'
            }
          ])
        }
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 3,
          color: [[1, '#000000']]
        },
        color: '#ff0000'
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        // distance: -30,
        // 使用函数模板，函数参数分别为刻度数值
        formatter: function (value) {
          return value == '0' || value == '100' ? value +'%': ''
        },
        // color:'#ff0000'
      },
      data: gaugeData,
      title: {
        fontSize: 12,
        color: '#ffffff',
        fontFamily: 'DIN-Bold'
      },
      detail: {
        fontSize: 12,
        color: '#ff00ff',
        backgroundColor: '',
        // formatter: '{value}%',
        formatter: ['{a|}'].join('\n'),
        rich: {
          a: {
            backgroundColor: {
              image: Img,
            },
            height: 10,
            width: 10
          }
        }
      }
    }
  ]
}

// option && myChart.setOption(option);
