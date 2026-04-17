<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <span class="chart-title">{{ title }}</span>
      <div class="chart-legend">
        <span class="legend-item legend-item--current">당월</span>
        <span class="legend-item legend-item--prev">전월</span>
        <span class="legend-item legend-item--target">목표</span>
      </div>
    </div>
    <ClientOnly>
      <VChart :option="chartOption" :style="{ height }" autoresize />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption } from 'echarts/charts'
import type {
  GridComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  MarkLineComponentOption,
} from 'echarts/components'

type ChartOption = ComposeOption<
  | BarSeriesOption
  | GridComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | MarkLineComponentOption
>

withDefaults(
  defineProps<{
    title?: string
    height?: string
  }>(),
  {
    title: '공정별 불량률',
    height: '300px',
  },
)

// ── 공정 목록 ─────────────────────────────────────────────
const processes = ['입고검사', '선삭가공', '밀링가공', '조립', '배선', '최종검사']

// ── 목 데이터 (단위: %) ────────────────────────────────────
const currentMonth = [1.2, 2.4, 1.8, 0.9, 1.5, 0.6]
const prevMonth    = [1.5, 2.8, 2.1, 1.2, 1.8, 0.8]
const target       = 1.0  // 목표 불량률

const chartOption = computed<ChartOption>(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params: any) => {
      const process = params[0].axisValue
      const lines = params.map(
        (p: any) => `<span style="color:${p.color}">●</span> ${p.seriesName}: <b>${p.value}%</b>`,
      )
      return `${process}<br/>${lines.join('<br/>')}`
    },
  },
  legend: {
    data: ['당월', '전월'],
    top: 4,
    right: 12,
    textStyle: { fontSize: 11 },
  },
  grid: { top: 36, left: 52, right: 16, bottom: 24 },
  xAxis: {
    type: 'category',
    data: processes,
    axisLabel: { fontSize: 11 },
    axisLine: { lineStyle: { color: '#e4e7ed' } },
    axisTick: { show: false },
  },
  yAxis: {
    type: 'value',
    name: '%',
    nameTextStyle: { fontSize: 11 },
    axisLabel: { fontSize: 11, formatter: '{value}%' },
    splitLine: { lineStyle: { color: '#f0f0f0' } },
    max: 4,
  },
  series: [
    {
      name: '당월',
      type: 'bar',
      data: currentMonth.map((value, i) => ({
        value,
        itemStyle: {
          color: value > target ? '#f56c6c' : '#409eff',  // 목표 초과 시 빨간색
          borderRadius: [3, 3, 0, 0],
        },
      })),
      barWidth: '30%',
      markLine: {
        silent: true,
        symbol: 'none',
        data: [{ yAxis: target }],
        lineStyle: { color: '#67c23a', type: 'dashed', width: 1.5 },
        label: {
          formatter: `목표 ${target}%`,
          fontSize: 10,
          color: '#67c23a',
          position: 'end',
        },
      },
    },
    {
      name: '전월',
      type: 'bar',
      data: prevMonth.map(value => ({
        value,
        itemStyle: {
          color: '#e4e7ed',
          borderRadius: [3, 3, 0, 0],
        },
      })),
      barWidth: '30%',
    },
  ],
}))
</script>

<style scoped>
.chart-wrapper {
  background-color: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  padding: 16px 16px 8px;
}

.chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.chart-title {
  font-size: 13px;
  font-weight: 600;
  color: #1a1f36;
}

.chart-legend {
  display: flex;
  gap: 12px;
}

.legend-item {
  font-size: 11px;
  color: #606266;
  display: flex;
  align-items: center;
  gap: 4px;
}

.legend-item::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.legend-item--current::before { background-color: #409eff; }
.legend-item--prev::before    { background-color: #e4e7ed; border: 1px solid #c0c4cc; }
.legend-item--target::before  { background-color: #67c23a; }
</style>
