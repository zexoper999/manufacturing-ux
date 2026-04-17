<template>
  <div class="bom-page">
    <!-- 제품 헤더 -->
    <div class="product-header">
      <div class="product-header-inner">
        <div class="product-info">
          <div class="product-badge">PRODUCT</div>
          <div class="product-no">{{ rootNode?.partNo }}</div>
          <div class="product-sep">/</div>
          <div class="product-ver">
            <span class="ver-label">Ver.</span>
            <span class="ver-value">{{ rootNode?.ver }}</span>
          </div>
        </div>
        <div class="product-name">{{ rootNode?.partName }}</div>
      </div>
      <div class="product-meta">
        <el-tag type="success" size="small">Released</el-tag>
        <span class="meta-item">
          <span class="meta-label">Qty</span>
          <span class="meta-value">{{ rootNode?.qty }}</span>
        </span>
        <span class="meta-item">
          <span class="meta-label">전체 부품</span>
          <span class="meta-value">{{ totalCount }}개</span>
        </span>
      </div>
    </div>

    <!-- 필터 툴바 -->
    <div class="toolbar">
      <div class="toolbar-left">
        <el-radio-group v-model="filterType" size="small">
          <el-radio-button value="">
            전체 <span class="count-badge">{{ totalCount }}</span>
          </el-radio-button>
          <el-radio-button value="PRODUCT">
            PRODUCT <span class="count-badge">{{ typeCounts.PRODUCT }}</span>
          </el-radio-button>
          <el-radio-button value="PURCHASE">
            PURCHASE <span class="count-badge count-badge--green">{{ typeCounts.PURCHASE }}</span>
          </el-radio-button>
          <el-radio-button value="MECH">
            MECH <span class="count-badge count-badge--gray">{{ typeCounts.MECH }}</span>
          </el-radio-button>
        </el-radio-group>
      </div>

      <div class="toolbar-right">
        <el-input
          v-model="searchText"
          placeholder="Part No / Part Name 검색"
          :prefix-icon="Search"
          size="small"
          clearable
          style="width: 240px"
        />
        <el-button size="small" @click="expandAllNodes">전체 펼치기</el-button>
        <el-button size="small" @click="collapseAllNodes">전체 접기</el-button>
      </div>
    </div>

    <!-- BOM 트리 -->
    <BomTree :nodes="filteredTree" />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { BOM_TREE_CONTROL_KEY } from '~/types/bom'

definePageMeta({ title: 'BOM 트리' })

const { filterType, searchText, filteredTree, typeCounts } = useBom()

const rootNode = computed(() => filteredTree.value[0])

const totalCount = computed(() =>
  typeCounts.value.PRODUCT + typeCounts.value.PURCHASE + typeCounts.value.MECH,
)

const expandVersion = ref(0)
const expandAll = ref(true)

provide(BOM_TREE_CONTROL_KEY, { expandVersion, expandAll })

function expandAllNodes() {
  expandAll.value = true
  expandVersion.value++
}

function collapseAllNodes() {
  expandAll.value = false
  expandVersion.value++
}
</script>

<style scoped>
.bom-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

/* ── 제품 헤더 ── */
.product-header {
  background-color: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.product-header-inner {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-badge {
  font-size: 10px;
  font-weight: 700;
  background-color: #ecf5ff;
  color: #409eff;
  padding: 2px 7px;
  border-radius: 3px;
  letter-spacing: 0.5px;
}

.product-no {
  font-size: 15px;
  font-weight: 700;
  color: #1a1f36;
  font-family: 'Courier New', monospace;
}

.product-sep {
  color: #c0c4cc;
}

.ver-label {
  font-size: 11px;
  color: #909399;
  margin-right: 2px;
}

.ver-value {
  font-size: 13px;
  font-weight: 600;
  color: #606266;
}

.product-name {
  font-size: 13px;
  color: #606266;
  font-weight: 500;
}

.product-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-label {
  font-size: 11px;
  color: #909399;
}

.meta-value {
  font-size: 13px;
  font-weight: 600;
  color: #303133;
}

/* ── 툴바 ── */
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.count-badge {
  display: inline-block;
  background-color: #409eff;
  color: #fff;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  padding: 0 5px;
  min-width: 18px;
  text-align: center;
  margin-left: 4px;
  line-height: 16px;
  vertical-align: middle;
}

.count-badge--green { background-color: #67c23a; }
.count-badge--gray  { background-color: #909399; }
</style>
