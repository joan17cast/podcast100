import { useGetPodcastById } from "@/persistence/podcast.persistence";
import { useParams } from "@tanstack/react-router";
import { match } from "ts-pattern";

function Podcast() {
  const { podcastId } = useParams({
    strict: true,
    from: undefined,
  });
  console.log(podcastId);
  const getAllPodcast = useGetPodcastById(podcastId);
  return match(getAllPodcast)
    .with({ status: "pending" }, () => <div>Loading...</div>)
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      console.log(fetchData);
      return <>Podcast info here</>;
    })
    .exhaustive();
}

export default Podcast;
