import { formatDate } from "@/utils/dateUtils";
import { Link } from "@tanstack/react-router";

interface TableItemProps {
  title: string;
  releaseDate: string;
  duration: number;
  episodeId: number;
  podcastId: number;
}

function TableItem({
  title,
  releaseDate,
  duration,
  episodeId,
  podcastId,
}: TableItemProps) {
  return (
    <tr className="border-b-[1px]">
      <th className="p-2 text-left font-normal">
        <Link
          to="/podcast/$podcastId/episode/$episodeId"
          params={{ podcastId: podcastId, episodeId: episodeId }}
          className="text-blue-800 hover:text-blue-500"
        >
          {title}
        </Link>
      </th>
      <th className="font-normal">{formatDate("DD/MM/YYYY", releaseDate)}</th>
      <th className="font-normal">
        {formatDate("HH:mm:ss", duration.toString())}
      </th>
    </tr>
  );
}

export default TableItem;
