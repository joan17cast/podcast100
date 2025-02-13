import { PodcastEpisodeModel } from "@/domain/podcast.domain";
import { useGetPodcastEpisodesById } from "@/persistence/podcast.persistence";
import DOMPurify from "dompurify";
import { match } from "ts-pattern";

interface PodcastEpisodeCardProps {
  podcastId: number;
  episodeId: number;
}

function PodcastEpisodeCard({ podcastId, episodeId }: PodcastEpisodeCardProps) {
  const getPodcastEpisodes = useGetPodcastEpisodesById(podcastId.toString());
  return match(getPodcastEpisodes)
    .with({ status: "pending" }, () => <div>Loading...</div>)
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      const listOfEpisodes: PodcastEpisodeModel[] =
        fetchData.data.results.filter(
          (episode): episode is PodcastEpisodeModel =>
            episode.wrapperType === "podcastEpisode",
        );
      const episodeInfo = listOfEpisodes.find(
        (episode) => episode.trackId === episodeId,
      );
      if (episodeInfo === undefined) return <div>Episode not found</div>;

      // Sanitize the description HTML content
      const sanitizedDescription = DOMPurify.sanitize(episodeInfo.description);

      return (
        <section className="flex h-fit w-full flex-col gap-4 rounded-md px-4 py-2 shadow-md ring-1 ring-gray-200">
          <h1 className="text-3xl font-bold">{episodeInfo.trackName} </h1>
          <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          <hr className="w-full rounded-md border border-gray-300" />
          <audio controls className="w-full">
            <source src={episodeInfo?.episodeUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      );
    })
    .exhaustive();
}

export default PodcastEpisodeCard;
