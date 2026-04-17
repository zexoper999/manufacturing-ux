import type { BomNode, PartType } from "~/types/bom";

/**
 * 가상의 산업용 6축 로봇 암 (IRA-6000) BOM 목 데이터
 * - 데모용 데이터입니다.
 * - 파트 번호 규칙: MECH-xxxxx (기계가공), PURC-xxxxx (구매품)
 */
const mockBomTree: BomNode[] = [
  {
    productNo: "IRA-6000",
    lev: 0,
    partNo: "IRA-6000",
    partName: "6축 산업용 로봇 암",
    partType: "PRODUCT",
    partSpec: "",
    ver: "B",
    latestVer: "B",
    qty: 1,
    parentNo: "ROOT",
    hold: false,
    children: [
      // ── 1) 베이스 프레임 ──────────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "MECH-A0001",
        partName: "베이스 프레임 어셈블리",
        partType: "MECH",
        partSpec: "",
        ver: "A",
        latestVer: "A",
        qty: 1,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-A0002",
            partName: "메인 베이스 플레이트",
            partType: "MECH",
            partSpec: "T=12mm / SS400",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-A0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-A0003",
            partName: "지지 브라켓 L형",
            partType: "MECH",
            partSpec: "T=6mm / SS400",
            ver: "A",
            latestVer: "A",
            qty: 4,
            parentNo: "MECH-A0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-A0001",
            partName: "앵커 볼트 M16x80",
            partType: "PURCHASE",
            partSpec: "M16x80 / STS304",
            ver: "A",
            latestVer: "A",
            qty: 8,
            parentNo: "MECH-A0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-A0002",
            partName: "평와셔 M16",
            partType: "PURCHASE",
            partSpec: "M16 / STS304",
            ver: "A",
            latestVer: "A",
            qty: 8,
            parentNo: "MECH-A0001",
            hold: false,
          },
        ],
      },
      // ── 2) 1축 관절 어셈블리 ────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "MECH-J0001",
        partName: "1축 관절 어셈블리",
        partType: "MECH",
        partSpec: "",
        ver: "A",
        latestVer: "B",
        qty: 1,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-J0002",
            partName: "관절 하우징 본체",
            partType: "MECH",
            partSpec: "ALU6061-T6",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-J0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-J0001",
            partName: "서보 모터 400W",
            partType: "PURCHASE",
            partSpec: "400W / 3000rpm",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-J0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-J0002",
            partName: "하모닉 감속기 1:100",
            partType: "PURCHASE",
            partSpec: "ratio 1:100",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-J0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-J0003",
            partName: "크로스 롤러 베어링",
            partType: "PURCHASE",
            partSpec: "ID=66mm",
            ver: "A",
            latestVer: "A",
            qty: 2,
            parentNo: "MECH-J0001",
            hold: false,
          },
        ],
      },
      // ── 3) 링크 암 어셈블리 ─────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "MECH-L0001",
        partName: "링크 암 어셈블리",
        partType: "MECH",
        partSpec: "",
        ver: "A",
        latestVer: "A",
        qty: 2,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-L0002",
            partName: "알루미늄 링크 파이프",
            partType: "MECH",
            partSpec: "ALU6063 / L=450mm",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-L0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-L0003",
            partName: "링크 엔드 플레이트",
            partType: "MECH",
            partSpec: "T=8mm / ALU6061",
            ver: "A",
            latestVer: "A",
            qty: 2,
            parentNo: "MECH-L0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-L0001",
            partName: "케이블 가이드 체인",
            partType: "PURCHASE",
            partSpec: "15x30mm",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-L0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-L0004",
            partName: "케이블 클램프 브라켓",
            partType: "MECH",
            partSpec: "T=2.0mm",
            ver: "A",
            latestVer: "A",
            qty: 3,
            parentNo: "MECH-L0001",
            hold: false,
            children: [
              {
                productNo: "IRA-6000",
                lev: 3,
                partNo: "PURC-L0002",
                partName: "클램프 볼트 M5x12",
                partType: "PURCHASE",
                partSpec: "M5x12 / STS304",
                ver: "A",
                latestVer: "A",
                qty: 4,
                parentNo: "MECH-L0004",
                hold: false,
              },
              {
                productNo: "IRA-6000",
                lev: 3,
                partNo: "PURC-L0003",
                partName: "스프링 와셔 M5",
                partType: "PURCHASE",
                partSpec: "M5 / STS304",
                ver: "A",
                latestVer: "A",
                qty: 4,
                parentNo: "MECH-L0004",
                hold: false,
              },
            ],
          },
        ],
      },
      // ── 4) 손목 어셈블리 ────────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "MECH-W0001",
        partName: "손목 어셈블리",
        partType: "MECH",
        partSpec: "",
        ver: "A",
        latestVer: "A",
        qty: 1,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-W0002",
            partName: "손목 하우징",
            partType: "MECH",
            partSpec: "ALU7075-T6",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-W0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-W0001",
            partName: "서보 모터 200W",
            partType: "PURCHASE",
            partSpec: "200W / 3000rpm",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-W0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-W0002",
            partName: "베벨 기어 세트",
            partType: "PURCHASE",
            partSpec: "M1.5 / Z=20T",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-W0001",
            hold: false,
            children: [
              {
                productNo: "IRA-6000",
                lev: 3,
                partNo: "MECH-W0003",
                partName: "기어 하우징 커버",
                partType: "MECH",
                partSpec: "T=3.0mm",
                ver: "A",
                latestVer: "A",
                qty: 1,
                parentNo: "PURC-W0002",
                hold: false,
              },
              {
                productNo: "IRA-6000",
                lev: 3,
                partNo: "PURC-W0003",
                partName: "오일 씰 28x40x7",
                partType: "PURCHASE",
                partSpec: "28x40x7mm",
                ver: "A",
                latestVer: "A",
                qty: 2,
                parentNo: "PURC-W0002",
                hold: false,
              },
            ],
          },
        ],
      },
      // ── 5) 제어 박스 ────────────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "PURC-E0001",
        partName: "제어 박스 어셈블리",
        partType: "PURCHASE",
        partSpec: "",
        ver: "A",
        latestVer: "A",
        qty: 1,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-E0002",
            partName: "로봇 컨트롤러",
            partType: "PURCHASE",
            partSpec: "6축 제어 / EtherCAT",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "PURC-E0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-E0003",
            partName: "서보 드라이브",
            partType: "PURCHASE",
            partSpec: "750W / 단상 220V",
            ver: "A",
            latestVer: "A",
            qty: 6,
            parentNo: "PURC-E0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-E0004",
            partName: "전원 공급 장치 24V",
            partType: "PURCHASE",
            partSpec: "24V / 10A",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "PURC-E0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "MECH-E0001",
            partName: "제어 박스 외함",
            partType: "MECH",
            partSpec: "T=2.0mm / SECC",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "PURC-E0001",
            hold: true,
          },
        ],
      },
      // ── 6) 배선 어셈블리 ────────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "MECH-C0001",
        partName: "배선 어셈블리",
        partType: "MECH",
        partSpec: "",
        ver: "A",
        latestVer: "A",
        qty: 1,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-C0001",
            partName: "로봇 전용 케이블",
            partType: "PURCHASE",
            partSpec: "6m / 14core",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "MECH-C0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-C0002",
            partName: "D-SUB 커넥터 세트",
            partType: "PURCHASE",
            partSpec: "DSUB-15P",
            ver: "A",
            latestVer: "A",
            qty: 2,
            parentNo: "MECH-C0001",
            hold: false,
          },
        ],
      },
      // ── 7) 툴 체인저 ────────────────────────────────────────────
      {
        productNo: "IRA-6000",
        lev: 1,
        partNo: "PURC-T0001",
        partName: "툴 체인저",
        partType: "PURCHASE",
        partSpec: "payload 10kg",
        ver: "A",
        latestVer: "A",
        qty: 1,
        parentNo: "IRA-6000",
        hold: false,
        children: [
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-T0002",
            partName: "마스터 플레이트",
            partType: "PURCHASE",
            partSpec: "Φ50mm 플랜지",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "PURC-T0001",
            hold: false,
          },
          {
            productNo: "IRA-6000",
            lev: 2,
            partNo: "PURC-T0003",
            partName: "툴 플레이트",
            partType: "PURCHASE",
            partSpec: "Φ50mm 플랜지",
            ver: "A",
            latestVer: "A",
            qty: 1,
            parentNo: "PURC-T0001",
            hold: false,
          },
        ],
      },
    ],
  },
];

function filterNode(
  node: BomNode,
  type: PartType | "",
  text: string,
): BomNode | null {
  const filteredChildren = (node.children ?? [])
    .map((child) => filterNode(child, type, text))
    .filter((c): c is BomNode => c !== null);

  const lowerText = text.toLowerCase();
  const matchesType = !type || node.partType === type;
  const matchesText =
    !text ||
    node.partNo.toLowerCase().includes(lowerText) ||
    node.partName.toLowerCase().includes(lowerText);

  if (matchesType && matchesText)
    return { ...node, children: filteredChildren };
  if (filteredChildren.length > 0)
    return { ...node, children: filteredChildren };
  return null;
}

function countByType(nodes: BomNode[]): Record<PartType, number> {
  const counts: Record<PartType, number> = { PRODUCT: 0, PURCHASE: 0, MECH: 0 };
  function walk(list: BomNode[]) {
    for (const n of list) {
      counts[n.partType]++;
      if (n.children) walk(n.children);
    }
  }
  walk(nodes);
  return counts;
}

export function useBom() {
  const filterType = ref<PartType | "">("");
  const searchText = ref("");

  const filteredTree = computed<BomNode[]>(() => {
    if (!filterType.value && !searchText.value) return mockBomTree;
    return mockBomTree
      .map((root) => filterNode(root, filterType.value, searchText.value))
      .filter((n): n is BomNode => n !== null);
  });

  const typeCounts = computed(() => countByType(mockBomTree));

  return { filterType, searchText, filteredTree, typeCounts };
}
