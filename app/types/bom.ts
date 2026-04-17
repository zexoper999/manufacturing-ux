export type PartType = 'PRODUCT' | 'PURCHASE' | 'MECH'

export interface BomNode {
  productNo: string
  lev: number
  partNo: string
  partName: string
  partType: PartType
  partSpec: string
  ver: string
  latestVer: string
  qty: number
  parentNo: string
  hold: boolean
  children?: BomNode[]
}

export interface BomTreeControl {
  expandVersion: Ref<number>
  expandAll: Ref<boolean>
}

export const BOM_TREE_CONTROL_KEY = Symbol('bomTreeControl') as InjectionKey<BomTreeControl>
