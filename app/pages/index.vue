<template>
  <div class="home">
    <div class="home-header">
      <h1 class="home-title">Manufacturing UX Demo</h1>
      <p class="home-desc">
        제조업 핵심 화면을 Vue 3 + Nuxt 4 + Element Plus로 구현한 데모입니다.
      </p>
    </div>

    <div class="card-grid">
      <NuxtLink to="/bom" class="card">
        <div class="card-icon card-icon--blue">
          <el-icon size="28"><Grid /></el-icon>
        </div>
        <div class="card-body">
          <h3 class="card-title">BOM 트리</h3>
          <p class="card-desc">
            수주 제품의 자재명세서(Bill of Materials)를 계층형 트리로 탐색합니다.
            재귀 컴포넌트 · 접기/펼치기 · 타입별 필터링을 지원합니다.
          </p>
          <div class="card-tags">
            <el-tag size="small" type="info">재귀 컴포넌트</el-tag>
            <el-tag size="small" type="info">TypeScript</el-tag>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/dashboard" class="card">
        <div class="card-icon card-icon--green">
          <el-icon size="28"><DataLine /></el-icon>
        </div>
        <div class="card-body">
          <h3 class="card-title">설비 모니터링 대시보드</h3>
          <p class="card-desc">
            설비 온도·진동 추이(라인 차트)와 공정별 불량률(바 차트)을
            Apache ECharts로 시각화합니다.
          </p>
          <div class="card-tags">
            <el-tag size="small" type="info">ECharts</el-tag>
            <el-tag size="small" type="info">실시간 데이터</el-tag>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/virtual" class="card">
        <div class="card-icon card-icon--orange">
          <el-icon size="28"><List /></el-icon>
        </div>
        <div class="card-body">
          <h3 class="card-title">대용량 목록 (가상 스크롤)</h3>
          <p class="card-desc">
            1만 건 이상의 BOM 부품 목록을 가상 스크롤로 렌더링합니다.
            실제 DOM은 뷰포트 내 아이템만 유지하여 성능을 최적화합니다.
          </p>
          <div class="card-tags">
            <el-tag size="small" type="info">Virtual Scroll</el-tag>
            <el-tag size="small" type="info">성능 최적화</el-tag>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid, DataLine, List } from '@element-plus/icons-vue'

definePageMeta({ title: '홈' })
</script>

<style scoped>
.home {
  max-width: 960px;
}

.home-header {
  margin-bottom: 32px;
}

.home-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a1f36;
  margin-bottom: 8px;
}

.home-desc {
  font-size: 14px;
  color: #606266;
  line-height: 1.7;
}

/* ── 카드 그리드 ── */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  gap: 16px;
  background-color: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-color: #409eff;
}

.card-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon--blue  { background-color: #ecf5ff; color: #409eff; }
.card-icon--green { background-color: #f0f9eb; color: #67c23a; }
.card-icon--orange { background-color: #fdf6ec; color: #e6a23c; }

.card-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #1a1f36;
}

.card-desc {
  font-size: 13px;
  color: #606266;
  line-height: 1.6;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
</style>
