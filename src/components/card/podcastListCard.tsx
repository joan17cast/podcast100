import { PodcastCard } from "@/components/card";
import { LoadingCircle } from "@/components/loading";
import { TextFieldBase } from "@/components/textField";
import { useGetAllPodcast } from "@/persistence/podcast.persistence";
import { useSearch } from "@/zustand/podcast.zustand";
import { match } from "ts-pattern";

function PodcastList() {
  const { paramToSearch, setParamToSearch } = useSearch();
  const getAllPodcast = useGetAllPodcast();
  return match(getAllPodcast)
    .with({ status: "pending" }, () => (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingCircle />
      </div>
    ))
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      const listOfPodcast = fetchData.data.feed.entry;
      const listOfPodcastFiltered = listOfPodcast.filter((podcast) => {
        const artist = podcast["im:artist"].label.toLowerCase();
        const podcastName = podcast["im:name"].label.toLowerCase();
        return (
          artist.includes(paramToSearch.toLowerCase()) ||
          podcastName.includes(paramToSearch.toLowerCase())
        );
      });
      return (
        <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
          <div className="flex w-full items-center justify-end gap-4">
            <h4 className="w-fit rounded-lg bg-cyan-600 px-1 font-bold text-white">
              {listOfPodcastFiltered.length}
            </h4>
            <TextFieldBase
              value={paramToSearch}
              onChange={(text) => setParamToSearch(text)}
            />
          </div>
          <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listOfPodcastFiltered.map((podcast) => (
              <PodcastCard
                key={podcast.id.attributes["im:id"]}
                id={podcast.id.attributes["im:id"]}
                image={podcast["im:image"][1]?.label}
                podcastName={podcast["im:name"].label}
                artist={podcast["im:artist"].label}
              />
            ))}
          </section>
        </div>
      );
    })
    .exhaustive();
}

export default PodcastList;
