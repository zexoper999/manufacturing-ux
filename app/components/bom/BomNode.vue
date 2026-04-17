<template>
  <div class="bom-node">
    <div
      class="bom-row"
      :class="{ 'bom-row--hold': node.hold, 'bom-row--root': node.lev === 0 }"
      @click="toggleRow"
    >
      <!-- Lev -->
      <div class="bom-cell bom-cell--center">{{ node.lev }}</div>

      <!-- Part No (트리 들여쓰기 + 토글 아이콘) -->
      <div class="bom-cell bom-cell--partno" :style="{ paddingLeft: `${node.lev * 16 + 8}px` }">
        <span class="toggle-icon" @click.stop="toggle">
          <el-icon v-if="hasChildren" :class="{ 'icon--open': isOpen }">
            <ArrowRight />
          </el-icon>
          <span v-else class="toggle-leaf">○</span>
        </span>
        <span class="partno-text">{{ node.partNo }}</span>
      </div>

      <!-- Part Name -->
      <div class="bom-cell bom-cell--name" :title="node.partName">{{ node.partName }}</div>

      <!-- Part Type -->
      <div class="bom-cell bom-cell--center">
        <el-tag :type="partTypeTagType(node.partType)" size="small" class="type-tag">
          {{ node.partType }}
        </el-tag>
      </div>

      <!-- Part Spec -->
      <div class="bom-cell bom-cell--spec" :title="node.partSpec">{{ node.partSpec }}</div>

      <!-- Ver -->
      <div class="bom-cell bom-cell--center">{{ node.ver }}</div>

      <!-- Latest Ver -->
      <div class="bom-cell bom-cell--center">
        <span :class="{ 'ver--outdated': node.ver !== node.latestVer }">
          {{ node.latestVer }}
        </span>
      </div>

      <!-- Qty -->
      <div class="bom-cell bom-cell--center">{{ node.qty }}</div>

      <!-- Parent No -->
      <div class="bom-cell bom-cell--small">{{ node.parentNo }}</div>

      <!-- Hold -->
      <div class="bom-cell bom-cell--center">
        <el-checkbox :model-value="node.hold" disabled size="small" />
      </div>
    </div>

    <template v-if="isOpen && hasChildren">
      <BomNode
        v-for="child in node.children"
        :key="child.partNo"
        :node="child"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import type { BomNode as BomNodeType } from '~/types/bom'
import { BOM_TREE_CONTROL_KEY } from '~/types/bom'

defineOptions({ name: 'BomNode' })

const props = defineProps<{ node: BomNodeType }>()

const isOpen = ref(true)
const hasChildren = computed(() => !!props.node.children?.length)

const treeCtrl = inject(BOM_TREE_CONTROL_KEY)

watch(
  () => treeCtrl?.expandVersion.value,
  () => {
    if (treeCtrl) isOpen.value = treeCtrl.expandAll.value
  },
)

function toggle() {
  if (hasChildren.value) isOpen.value = !isOpen.value
}

function toggleRow() {
  if (hasChildren.value) isOpen.value = !isOpen.value
}

function partTypeTagType(type: string) {
  if (type === 'PRODUCT') return 'primary'
  if (type === 'PURCHASE') return 'success'
  return 'info'
}
</script>

<style>
/* non-scoped: BomTree의 CSS 변수 --bom-cols를 상속받아 사용 */
.bom-row {
  display: grid;
  grid-template-columns: var(--bom-cols);
  border-bottom: 1px solid #ebeef5;
  min-height: 36px;
  align-items: center;
  cursor: default;
  transition: background-color 0.1s;
}

.bom-row:hover {
  background-color: #f5f7fa;
}

.bom-row--root {
  background-color: #ecf5ff;
  font-weight: 600;
}

.bom-row--root:hover {
  background-color: #d9ecff;
}

.bom-row--hold {
  background-color: #fff6ed;
}

.bom-cell {
  padding: 0 8px;
  font-size: 12px;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.bom-cell--center {
  justify-content: center;
}

.bom-cell--partno {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #606266;
}

.bom-cell--name {
  color: #1a1f36;
}

.bom-cell--spec {
  color: #909399;
  font-size: 11px;
}

.bom-cell--small {
  font-size: 11px;
  color: #909399;
  font-family: 'Courier New', monospace;
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  color: #909399;
  transition: transform 0.15s;
}

.toggle-icon .el-icon {
  font-size: 11px;
  transition: transform 0.2s;
}

.toggle-icon .icon--open {
  transform: rotate(90deg);
}

.toggle-leaf {
  font-size: 8px;
  color: #c0c4cc;
}

.partno-text {
  overflow: hidden;
  text-overflow: ellipsis;
}

.type-tag {
  font-size: 10px;
  padding: 0 5px;
  height: 20px;
  line-height: 20px;
}

.ver--outdated {
  color: #f56c6c;
  font-weight: 600;
}
</style>
