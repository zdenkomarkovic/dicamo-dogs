import type { PedigreeNode } from "@/lib/litters";

const DEPTH = 4;

function getLevel(nodes: (PedigreeNode | undefined)[], level: number): (PedigreeNode | undefined)[] {
  if (level === 0) return nodes;
  return getLevel(
    nodes.flatMap((n) => [n?.sire, n?.dam]),
    level - 1
  );
}

const COL_LABELS = ["Parent", "Grandparent", "Great Grandparent", "Great Great Grandparent"];

export function PedigreeTable({ sire, dam }: { sire: PedigreeNode; dam: PedigreeNode }) {
  const roots = [sire, dam];
  const totalRows = Math.pow(2, DEPTH - 1) * roots.length; // 16

  const columns = Array.from({ length: DEPTH }, (_, i) => getLevel(roots, i));

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-xs min-w-[600px]">
        <thead>
          <tr>
            {COL_LABELS.map((label) => (
              <th
                key={label}
                className="text-left px-3 py-2 text-[10px] tracking-widest uppercase text-gold font-semibold border border-border bg-surface"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: totalRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((nodes, colIndex) => {
                const rowsPerCell = totalRows / nodes.length;
                const cellIndex = Math.floor(rowIndex / rowsPerCell);
                // Only render cell on the first row of each cell span
                if (rowIndex % rowsPerCell !== 0) return null;
                const node = nodes[cellIndex];
                return (
                  <td
                    key={colIndex}
                    rowSpan={rowsPerCell}
                    className="border border-border px-3 py-2 align-middle text-text/85 leading-snug"
                  >
                    {node?.name ?? "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
