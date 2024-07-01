import { PodcastCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { TextFieldBase } from "@/components/textField";
import { useGetAllPodcast } from "@/persistence/podcast.persistence";
import { useSearch } from "@/zustand/podcast.zustand";
import { match } from "ts-pattern";

function Home() {
  const { paramToSearch, setParamToSearch } = useSearch();
  const getAllPodcast = useGetAllPodcast();
  return match(getAllPodcast)
    .with({ status: "pending" }, () => <div>Loading...</div>)
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
        <Layout>
          <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
            <div className="flex items-center gap-4">
              <TextFieldBase
                value={paramToSearch}
                onChange={(text) => setParamToSearch(text)}
              />
              <h4 className="w-full">
                {listOfPodcastFiltered.length} podcast(s) found
              </h4>
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
        </Layout>
      );
    })
    .exhaustive();
}

export default Home;
