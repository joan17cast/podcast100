import {
  PodcastDescriptionCard,
  PodcastEpisodeListCard,
} from "@/components/card";
import { Layout } from "@/components/layout";
import { useParams } from "@tanstack/react-router";

function Podcast() {
  const { podcastId } = useParams({
    strict: true,
    from: undefined,
  });
  return (
    <Layout>
      <div className="flex flex-row gap-4 p-10">
        <PodcastDescriptionCard podcastId={podcastId} />
        <PodcastEpisodeListCard podcastId={podcastId} />
      </div>
    </Layout>
  );
}

export default Podcast;
