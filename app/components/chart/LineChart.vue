<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <span class="chart-title">{{ title }}</span>
      <div class="chart-status">
        <span
          v-for="eq in equipmentList"
          :key="eq.name"
          class="status-dot"
          :class="`status-dot--${eq.status}`"
        >
          {{ eq.name }}
        </span>
      </div>
    </div>
    <ClientOnly>
      <VChart :option="chartOption" :style="{ height }" autoresize />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { ComposeOption } from 'echarts/core'
import type { LineSeriesOption } from 'echarts/charts'
import type {
  GridComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  DataZoomComponentOption,
  MarkLineComponentOption,
} from 'echarts/components'

type ChartOption = ComposeOption<
  | LineSeriesOption
  | GridComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | DataZoomComponentOption
  | MarkLineComponentOption
>

const props = withDefaults(
  defineProps<{
    title?: string
    height?: string
    unit?: string
    warningThreshold?: number
  }>(),
  {
    title: '설비 모니터링',
    height: '300px',
    unit: '°C',
    warningThreshold: 80,
  },
)

// ── 24시간 시간축 생성 ─────────────────────────────────────
const hours = Array.from({ length: 25 }, (_, i) => `${String(i).padStart(2, '0')}:00`)

// ── 설비별 목 데이터 ──────────────────────────────────────
const equipmentList = [
  { name: 'A설비', status: 'normal' },
  { name: 'B설비', status: 'warning' },
  { name: 'C설비', status: 'normal' },
]

function makeSeries(base: number, variance: number, spike?: { index: number; value: number }) {
  return Array.from({ length: 25 }, (_, i) => {
    if (spike && i === spike.index) return spike.value
    return +(base + (Math.random() - 0.5) * variance).toFixed(1)
  })
}

// 재현 가능한 고정 시드 데이터
const seriesA = [52,53,51,52,54,55,53,54,56,57,55,56,58,57,56,55,57,58,59,58,57,56,55,54,53]
const seriesB = [61,62,63,65,67,68,70,72,74,76,78,81,83,85,84,82,80,79,78,77,76,75,74,73,72]
const seriesC = [45,46,45,47,46,48,47,49,48,50,49,51,50,52,51,50,49,51,50,49,48,50,49,48,47]

const chartOption = computed<ChartOption>(() => ({
  tooltip: {
    trigger: 'axis',
    formatter: (params: any) => {
      const time = params[0].axisValue
      const lines = params.map(
        (p: any) => `<span style="color:${p.color}">●</span> ${p.seriesName}: <b>${p.value}${props.unit}</b>`,
      )
      return `${time}<br/>${lines.join('<br/>')}`
    },
  },
  legend: {
    data: ['A설비', 'B설비', 'C설비'],
    top: 4,
    right: 12,
    textStyle: { fontSize: 11 },
  },
  grid: { top: 36, left: 48, right: 16, bottom: 48 },
  dataZoom: [
    { type: 'slider', height: 18, bottom: 4, textStyle: { fontSize: 10 } },
  ],
  xAxis: {
    type: 'category',
    data: hours,
    axisLabel: { fontSize: 11, interval: 3 },
    axisLine: { lineStyle: { color: '#e4e7ed' } },
  },
  yAxis: {
    type: 'value',
    name: props.unit,
    nameTextStyle: { fontSize: 11 },
    axisLabel: { fontSize: 11, formatter: `{value}${props.unit}` },
    splitLine: { lineStyle: { color: '#f0f0f0' } },
  },
  series: [
    {
      name: 'A설비',
      type: 'line',
      data: seriesA,
      smooth: true,
      symbol: 'none',
      lineStyle: { color: '#409eff', width: 2 },
      areaStyle: { color: 'rgba(64,158,255,0.06)' },
    },
    {
      name: 'B설비',
      type: 'line',
      data: seriesB,
      smooth: true,
      symbol: 'none',
      lineStyle: { color: '#e6a23c', width: 2 },
      areaStyle: { color: 'rgba(230,162,60,0.06)' },
      markLine: {
        silent: true,
        symbol: 'none',
        data: [{ yAxis: props.warningThreshold }],
        lineStyle: { color: '#f56c6c', type: 'dashed', width: 1.5 },
        label: {
          formatter: `경고 ${props.warningThreshold}${props.unit}`,
          fontSize: 10,
          color: '#f56c6c',
        },
      },
    },
    {
      name: 'C설비',
      type: 'line',
      data: seriesC,
      smooth: true,
      symbol: 'none',
      lineStyle: { color: '#67c23a', width: 2 },
      areaStyle: { color: 'rgba(103,194,58,0.06)' },
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

.chart-status {
  display: flex;
  gap: 12px;
}

.status-dot {
  font-size: 11px;
  color: #606266;
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-dot::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-dot--normal::before  { background-color: #67c23a; }
.status-dot--warning::before { background-color: #e6a23c; }
.status-dot--error::before   { background-color: #f56c6c; }
</style>
