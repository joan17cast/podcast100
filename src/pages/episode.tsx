import { PodcastEpisodeCard } from "@/components/card";
import PodcastDescriptionCard from "@/components/card/podcastDescriptionCard";
import { Layout } from "@/components/layout";
import { useParams } from "@tanstack/react-router";

function Episode() {
  const { podcastId, episodeId } = useParams({
    strict: true,
    from: undefined,
  });

  return (
    <Layout>
      <div className="flex flex-row gap-4 p-10">
        <PodcastDescriptionCard podcastId={podcastId} />
        <PodcastEpisodeCard
          podcastId={podcastId}
          episodeId={parseInt(episodeId)}
        />
      </div>
    </Layout>
  );
}

export default Episode;
