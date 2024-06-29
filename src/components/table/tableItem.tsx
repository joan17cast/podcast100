import { formatDate } from "@/utils/dateUtils";

interface TableItemProps {
  title: string;
  releaseDate: string;
  duration: number;
}

function TableItem({ title, releaseDate, duration }: TableItemProps) {
  return (
    <tr className="border-b-[1px]">
      <th className="p-2 text-left font-normal">{title}</th>
      <th className="font-normal">{formatDate("DD/MM/YYYY", releaseDate)}</th>
      <th className="font-normal">
        {formatDate("HH:mm:ss", duration.toString())}
      </th>
    </tr>
  );
}

export default TableItem;
