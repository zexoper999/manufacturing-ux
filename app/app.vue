<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-icon">⬡</span>
        <span class="logo-text">MFG</span>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-group">
          <span class="nav-group-label">PLM</span>
          <NuxtLink to="/bom" class="nav-item" active-class="nav-item--active">
            <span class="nav-icon">
              <el-icon><Grid /></el-icon>
            </span>
            <span>BOM 트리</span>
          </NuxtLink>
        </div>

        <div class="nav-group">
          <span class="nav-group-label">모니터링</span>
          <NuxtLink
            to="/dashboard"
            class="nav-item"
            active-class="nav-item--active"
          >
            <span class="nav-icon">
              <el-icon><DataLine /></el-icon>
            </span>
            <span>설비 모니터링</span>
          </NuxtLink>
        </div>

        <div class="nav-group">
          <span class="nav-group-label">최적화</span>
          <NuxtLink
            to="/virtual"
            class="nav-item"
            active-class="nav-item--active"
          >
            <span class="nav-icon">
              <el-icon><List /></el-icon>
            </span>
            <span>대용량 목록</span>
          </NuxtLink>
        </div>
      </nav>

      <div class="sidebar-footer">
        <span class="version">v0.1.0</span>
      </div>
    </aside>

    <div class="main-wrapper">
      <header class="topbar">
        <div class="topbar-breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">홈</el-breadcrumb-item>
            <el-breadcrumb-item v-if="route.meta.title">
              {{ route.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="topbar-info">
          <span class="topbar-date">{{ today }}</span>
          <el-avatar :size="28" class="topbar-avatar">AD</el-avatar>
        </div>
      </header>

      <main class="content">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid, DataLine, List } from "@element-plus/icons-vue";

const route = useRoute();

const today = computed(() => {
  return new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family:
    "Pretendard",
    "Noto Sans KR",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  background-color: #f0f2f5;
  color: #1a1a2e;
}
</style>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* ── 사이드바 ── */
.sidebar {
  width: 220px;
  flex-shrink: 0;
  background-color: #1a1f36;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.logo-icon {
  font-size: 22px;
  color: #409eff;
}

.logo-text {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
}

/* ── 네비게이션 ── */
.sidebar-nav {
  flex: 1;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-group {
  padding: 8px 0 4px;
}

.nav-group-label {
  display: block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.35);
  padding: 0 20px 6px;
  text-transform: uppercase;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 20px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  border-left: 3px solid transparent;
  transition:
    background-color 0.15s,
    color 0.15s,
    border-color 0.15s;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.9);
}

.nav-item--active {
  background-color: rgba(64, 158, 255, 0.15);
  color: #409eff;
  border-left-color: #409eff;
  font-weight: 600;
}

.nav-icon {
  display: flex;
  align-items: center;
  font-size: 15px;
}

/* ── 사이드바 하단 ── */
.sidebar-footer {
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.version {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
}

/* ── 메인 영역 ── */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.topbar {
  height: 52px;
  background-color: #ffffff;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-shrink: 0;
}

.topbar-breadcrumb {
  font-size: 13px;
}

.topbar-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.topbar-date {
  font-size: 12px;
  color: #909399;
}

.topbar-avatar {
  background-color: #409eff;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}
</style>
