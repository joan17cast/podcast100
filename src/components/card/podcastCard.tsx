import { useNavigate } from "@tanstack/react-router";

interface PodcastCardProps {
  image?: string;
  podcastName: string;
  artist: string;
  id: string;
}

function PodcastCard({ image, podcastName, artist, id }: PodcastCardProps) {
  const navigate = useNavigate();
  return (
    <button
      className="flex flex-col items-center transition-all duration-200 ease-in-out hover:scale-[103%] relative pt-10 w-full"
      onClick={() =>
        navigate({
          to: `podcast/${id}`,
        }).catch(() => console.error(`Error navigating to podcast: ${id}`))
      }
    >
      <img
        // TODO Add a fallback image if it's not available
        src={image ?? ""}
        alt={podcastName}
        className="h-20 w-20 rounded-full object-cover absolute -top-0 shadow-md"
      />
      <div className="rounded-lg border p-4 shadow-md w-full pt-10">
        <h1 className="w-full truncate text-center font-semibold">
          {podcastName}
        </h1>
        <p className="w-full truncate text-center font-light">{`Author: ${artist}`}</p>
      </div>
    </button>
  );
}

export default PodcastCard;
