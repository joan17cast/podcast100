import { TableHead, TableItem } from "@/components/table";
import { PodcastEpisodeModel } from "@/domain/podcast.domain";

interface TableProps {
  listOfEpisodes: PodcastEpisodeModel[];
}

function Table({ listOfEpisodes }: TableProps) {
  return (
    <div className="w-full rounded-md px-4 shadow-md ring-1 ring-gray-200">
      <table className="w-full">
        <TableHead />
        <tbody>
          {listOfEpisodes.map((e) => (
            <TableItem
              key={e.trackId}
              title={e.trackName}
              releaseDate={e.releaseDate}
              duration={e.trackTimeMillis}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
