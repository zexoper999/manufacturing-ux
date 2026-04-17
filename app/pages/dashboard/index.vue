<template>
  <div class="dashboard">
    <!-- KPI 카드 -->
    <div class="kpi-grid">
      <div
        v-for="kpi in kpiList"
        :key="kpi.label"
        class="kpi-card"
        :class="{ 'kpi-card--alert': kpi.alert }"
      >
        <div class="kpi-icon" :style="{ backgroundColor: kpi.bgColor, color: kpi.color }">
          <el-icon size="18"><component :is="kpi.icon" /></el-icon>
        </div>
        <div class="kpi-body">
          <span class="kpi-label">{{ kpi.label }}</span>
          <div class="kpi-value-row">
            <span class="kpi-value" :style="{ color: kpi.alert ? '#f56c6c' : '#1a1f36' }">
              {{ kpi.value }}
            </span>
            <span class="kpi-unit">{{ kpi.unit }}</span>
            <el-tag
              :type="kpi.trend > 0 ? 'danger' : 'success'"
              size="small"
              class="kpi-trend"
            >
              {{ kpi.trend > 0 ? '▲' : '▼' }} {{ Math.abs(kpi.trend) }}%
            </el-tag>
          </div>
        </div>
      </div>
    </div>

    <!-- 차트 섹션 -->
    <div class="chart-section">
      <LineChart
        title="설비 온도 추이 (24h)"
        unit="°C"
        :warning-threshold="80"
        height="280px"
      />
      <LineChart
        title="설비 진동 추이 (24h)"
        unit="mm/s"
        :warning-threshold="60"
        height="280px"
      />
    </div>

    <div class="chart-section chart-section--single">
      <BarChart
        title="공정별 불량률 비교 (당월 vs 전월)"
        height="280px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Odometer, Warning, SetUp, TrendCharts } from '@element-plus/icons-vue'

definePageMeta({ title: '설비 모니터링' })

const kpiList = [
  {
    label: '설비 가동률',
    value: '94.2',
    unit: '%',
    trend: -1.3,
    alert: false,
    icon: TrendCharts,
    color: '#409eff',
    bgColor: '#ecf5ff',
  },
  {
    label: 'B설비 온도',
    value: '85.4',
    unit: '°C',
    trend: 6.2,
    alert: true,
    icon: Warning,
    color: '#f56c6c',
    bgColor: '#fef0f0',
  },
  {
    label: '금월 불량률',
    value: '1.47',
    unit: '%',
    trend: -12.5,
    alert: false,
    icon: SetUp,
    color: '#67c23a',
    bgColor: '#f0f9eb',
  },
  {
    label: '일일 생산량',
    value: '1,248',
    unit: 'EA',
    trend: 3.8,
    alert: false,
    icon: Odometer,
    color: '#e6a23c',
    bgColor: '#fdf6ec',
  },
]
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ── KPI 카드 ── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
}

.kpi-card {
  background-color: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: box-shadow 0.2s;
}

.kpi-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.kpi-card--alert {
  border-color: #fbc4c4;
  background-color: #fff5f5;
}

.kpi-icon {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.kpi-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.kpi-label {
  font-size: 11px;
  color: #909399;
  white-space: nowrap;
}

.kpi-value-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.kpi-value {
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
}

.kpi-unit {
  font-size: 12px;
  color: #909399;
}

.kpi-trend {
  font-size: 10px;
  padding: 0 4px;
  height: 18px;
  line-height: 18px;
}

/* ── 차트 섹션 ── */
.chart-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.chart-section--single {
  grid-template-columns: 1fr;
}
</style>
