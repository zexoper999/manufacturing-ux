<template>
  <div class="bom-table">
    <!-- 컬럼 헤더 -->
    <div class="bom-header">
      <div class="bom-header-cell bom-header-cell--center">Lev</div>
      <div class="bom-header-cell">Part No</div>
      <div class="bom-header-cell">Part Name</div>
      <div class="bom-header-cell bom-header-cell--center">Part Type</div>
      <div class="bom-header-cell">Part Spec</div>
      <div class="bom-header-cell bom-header-cell--center">Ver</div>
      <div class="bom-header-cell bom-header-cell--center">Latest Ver</div>
      <div class="bom-header-cell bom-header-cell--center">Qty</div>
      <div class="bom-header-cell">Parent No</div>
      <div class="bom-header-cell bom-header-cell--center">Hold</div>
    </div>

    <!-- 트리 노드 -->
    <div class="bom-body">
      <template v-if="nodes.length">
        <BomNode v-for="node in nodes" :key="node.partNo" :node="node" />
      </template>
      <div v-else class="bom-empty">
        <el-empty description="검색 결과가 없습니다" :image-size="60" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BomNode } from '~/types/bom'

defineProps<{ nodes: BomNode[] }>()
</script>

<style scoped>
.bom-table {
  --bom-cols: 44px 148px 1fr 100px 136px 44px 76px 50px 120px 52px;

  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
  background-color: #ffffff;
  font-size: 12px;
}

.bom-header {
  display: grid;
  grid-template-columns: var(--bom-cols);
  background-color: #f5f7fa;
  border-bottom: 2px solid #e4e7ed;
  min-height: 38px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
}

.bom-header-cell {
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bom-header-cell--center {
  text-align: center;
}

.bom-body {
  overflow-y: auto;
}

.bom-empty {
  padding: 32px 0;
}
</style>
