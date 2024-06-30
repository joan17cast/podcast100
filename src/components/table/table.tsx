import { TableHead, TableItem } from "@/components/table";
import { PodcastEpisodeModel } from "@/domain/podcast.domain";

interface TableProps {
  listOfEpisodes: PodcastEpisodeModel[];
  podcastId: number;
}

function Table({ listOfEpisodes, podcastId }: TableProps) {
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
              duration={e.trackTimeMillis ?? 0}
              episodeId={e.trackId}
              podcastId={podcastId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
