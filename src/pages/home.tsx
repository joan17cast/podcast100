import { PodcastCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { useGetAllPodcast } from "@/persistence/podcast.persistence";
import { match } from "ts-pattern";

function Home() {
  const getAllPodcast = useGetAllPodcast();
  return match(getAllPodcast)
    .with({ status: "pending" }, () => <div>Loading...</div>)
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      const listOfPodcast = fetchData.data.feed.entry;
      return (
        <Layout>
          <div className="flex w-full items-center justify-center p-4">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {listOfPodcast.map((podcast) => (
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
