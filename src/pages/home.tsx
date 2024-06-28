import { useGetAllPodcast } from "@/persistence/podcast.persistence";

function Home() {
  const { status, error, data } = useGetAllPodcast();
  console.log({ status, error, data });
  return <>Home</>;
}

export default Home;
