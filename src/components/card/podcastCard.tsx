interface PodcastCardProps {
  image?: string;
  podcastName: string;
  artist: string;
}

function PodcastCard({ image, podcastName, artist }: PodcastCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border p-4 shadow-md">
      <img
        // TODO Add a fallback image if it's not available
        src={image ?? ""}
        alt={podcastName}
        className="h-20 w-20 rounded-full object-cover"
      />
      <h1 className="w-full truncate text-center font-semibold">
        {podcastName}
      </h1>
      <p className="w-full truncate text-center font-light">{`Author: ${artist}`}</p>
    </div>
  );
}

export default PodcastCard;
