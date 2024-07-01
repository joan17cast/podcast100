import { LoadingCircle } from "@/components/loading";
import { Table } from "@/components/table";
import { PodcastEpisodeModel } from "@/domain/podcast.domain";
import { useGetPodcastEpisodesById } from "@/persistence/podcast.persistence";
import { match } from "ts-pattern";

interface PodcastEpisodeListCardProps {
  podcastId: number;
}

function PodcastEpisodeListCard({ podcastId }: PodcastEpisodeListCardProps) {
  const getPodcastEpisodes = useGetPodcastEpisodesById(podcastId.toString());
  return match(getPodcastEpisodes)
    .with({ status: "pending" }, () => (
      <div className="flex h-max w-full items-center justify-center">
        <LoadingCircle />
      </div>
    ))
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      const listOfEpisodes = fetchData.data.results.filter(
        (episode): episode is PodcastEpisodeModel =>
          episode.wrapperType === "podcastEpisode",
      );
      return (
        <div className="flex w-full flex-col gap-4">
          <section className="w-full rounded-md px-4 py-2 shadow-md ring-1 ring-gray-200">
            <h2 className="text-lg font-bold">{`Episodes: ${listOfEpisodes.length}`}</h2>
          </section>
          <Table listOfEpisodes={listOfEpisodes} podcastId={podcastId} />
        </div>
      );
    })
    .exhaustive();
}

export default PodcastEpisodeListCard;
