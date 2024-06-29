import { useGetAllPodcast } from "@/persistence/podcast.persistence";
import { match } from "ts-pattern";

interface PodcastDescriptionCardProps {
  id: string;
}

function PodcastDescriptionCard({ id }: PodcastDescriptionCardProps) {
  const getAllPodcast = useGetAllPodcast();
  return match(getAllPodcast)
    .with({ status: "pending" }, () => <div>Loading...</div>)
    .with({ status: "error" }, () => <div>Error</div>)
    .with({ status: "success" }, (fetchData) => {
      const podcast = fetchData.data.feed.entry.find(
        (e) => e.id.attributes["im:id"] === id,
      );
      if (podcast !== undefined) {
        return (
          <div className="flex h-fit max-w-80 flex-col items-center gap-4 rounded-lg border p-4 shadow-md">
            <img
              // TODO Add a fallback image if it's not available
              src={podcast["im:image"][2]?.label ?? ""}
              alt={podcast["im:name"].label}
              className="h-40 w-40 rounded-md object-cover"
            />
            <hr className="w-full rounded-md border border-gray-300" />
            <div className="w-full">
              <h1 className="w-full truncate text-left font-semibold">
                {podcast["im:name"].label}
              </h1>
              <p className="w-full truncate text-left font-light">{`by ${podcast["im:artist"].label}`}</p>
            </div>
            <hr className="w-full rounded-md border border-gray-300" />
            <div className="w-full">
              <h1 className="w-full text-left">Description:</h1>
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
