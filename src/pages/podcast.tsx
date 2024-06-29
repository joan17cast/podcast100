import PodcastDescriptionCard from "@/components/card/podcastDescriptionCard";
import { Table } from "@/components/table";
import { PodcastEpisodeModel } from "@/domain/podcast.domain";
import { useGetPodcastEpisodesById } from "@/persistence/podcast.persistence";
import { useParams } from "@tanstack/react-router";
import { match } from "ts-pattern";

function Podcast() {
  const { podcastId } = useParams({
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
          (e) => e.wrapperType === "podcastEpisode",
        );
      fetchData.data.results.filter((e) => e.wrapperType === "podcastEpisode");
      return (
        <>
          <div className="flex flex-row gap-4 p-10">
            <PodcastDescriptionCard id={podcastId} />
            <div className="flex w-full flex-col gap-4">
              <section className="w-full rounded-md px-4 py-2 shadow-md ring-1 ring-gray-200">
                <h2 className="text-lg font-bold">{`Episodes: ${listOfEpisodes.length}`}</h2>
              </section>
              <Table listOfEpisodes={listOfEpisodes} />
            </div>
          </div>
        </>
      );
    })
    .exhaustive();
}

export default Podcast;
