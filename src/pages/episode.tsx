import PodcastDescriptionCard from "@/components/card/podcastDescriptionCard";
import { PodcastEpisodeModel } from "@/domain/podcast.domain";
import { useGetPodcastEpisodesById } from "@/persistence/podcast.persistence";
import { useParams } from "@tanstack/react-router";
import { match } from "ts-pattern";

function Episode() {
  const { podcastId, episodeId } = useParams({
    strict: true,
    from: undefined,
  });
  const getPodcastEpisodes = useGetPodcastEpisodesById(podcastId);
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
        (episode) => episode.trackId === parseInt(episodeId),
      );
      console.log(episodeInfo);
      if (episodeInfo === undefined) return <div>Episode not found</div>;
      return (
        <>
          <div className="flex flex-row gap-4 p-10">
            <PodcastDescriptionCard podcastId={podcastId} />
            <section className="h-fit w-full rounded-md px-4 py-2 shadow-md ring-1 ring-gray-200 flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{episodeInfo.trackName} </h1>
              <p>{episodeInfo.description} </p>
              <hr className="w-full rounded-md border border-gray-300" />
              <audio controls className="w-full">
                <source src={episodeInfo?.episodeUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </section>
          </div>
        </>
      );
    })
    .exhaustive();
}

export default Episode;
