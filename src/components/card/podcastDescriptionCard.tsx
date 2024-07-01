import { LoadingCircle } from "@/components/loading";
import { useGetAllPodcast } from "@/persistence/podcast.persistence";
import { Link } from "@tanstack/react-router";
import { match } from "ts-pattern";

interface PodcastDescriptionCardProps {
  podcastId: string;
}

function PodcastDescriptionCard({ podcastId }: PodcastDescriptionCardProps) {
  const getAllPodcast = useGetAllPodcast();
  return match(getAllPodcast)
    .with({ status: "pending" }, () => (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingCircle />.
      </div>
    ))
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      const podcast = fetchData.data.feed.entry.find(
        (e) => e.id.attributes["im:id"] === podcastId,
      );
      if (podcast !== undefined) {
        return (
          <div className="flex h-fit max-w-80 flex-col items-center gap-4 rounded-lg border p-4 shadow-md">
            <Link to={`/podcast/${podcastId}`}>
              <img
                // TODO Add a fallback image if it's not available
                src={podcast["im:image"][2]?.label ?? ""}
                alt={podcast["im:name"].label}
                className="h-40 w-40 rounded-md object-cover"
              />
            </Link>
            <hr className="w-full rounded-md border border-gray-300" />
            <div className="w-full">
              <Link
                to={`/podcast/${podcastId}`}
                className="w-full truncate text-left font-bold"
              >
                {podcast["im:name"].label}
              </Link>
              <p className="w-full truncate text-left font-light">{`by ${podcast["im:artist"].label}`}</p>
            </div>
            <hr className="w-full rounded-md border border-gray-300" />
            <div className="w-full">
              <h1 className="w-full text-left font-semibold">Description:</h1>
              <p className="w-full truncate text-wrap text-left font-light">
                {podcast.summary.label}
              </p>
            </div>
          </div>
        );
      }
      return <div>Podcast not found</div>;
    })
    .exhaustive();
}

export default PodcastDescriptionCard;
