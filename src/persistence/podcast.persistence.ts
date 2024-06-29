import {
  ListOfPodcastEpisodesModel,
  listOfPodcastEpisodesSchema,
  ListOfPodcastPodcastModel,
  listOfPodcastSchema,
} from "@/domain/podcast.domain";
import { customEncodeURIComponent } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// ** GET ALL Podcast

export const getAllPodcast = async () => {
  try {
    const envUrl = import.meta.env.VITE_CUSTOM_API_URL;

    const url = new URL(
      `${envUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`,
    );

    const response = await axios.get(url.href);

    const checkedResponse = listOfPodcastSchema.safeParse(response.data);

    if (checkedResponse.success) {
      return checkedResponse.data;
    }

    return Promise.reject(console.error(checkedResponse.error));
  } catch (error) {
    return Promise.reject(console.error(error));
  }
};

export const useGetAllPodcast = () => {
  return useQuery<ListOfPodcastPodcastModel, void>({
    queryKey: ["getAllPodcast"],
    queryFn: async () => {
      return getAllPodcast();
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};

// ** GET Podcast by ID

export const getPodcastEpisodesById = async (podcastId: string) => {
  try {
    const envUrl = import.meta.env.VITE_CUSTOM_API_URL;

    const url = new URL(`${envUrl}/lookup`);
    url.searchParams.append("id", podcastId);
    url.searchParams.append("media", "podcast");
    url.searchParams.append("entity", "podcastEpisode");

    const response = await axios.get(
      `https://api.allorigins.win/raw?url=${customEncodeURIComponent(url.href)}`,
    );
    const checkedResponse = listOfPodcastEpisodesSchema.safeParse(
      response.data,
    );

    if (checkedResponse.success) {
      return checkedResponse.data;
    }

    return Promise.reject(console.error(checkedResponse.error.stack));
  } catch (error) {
    return Promise.reject(console.error(error));
  }
};

export const useGetPodcastEpisodesById = (podcastId: string) => {
  return useQuery<ListOfPodcastEpisodesModel, void>({
    queryKey: ["getPodcastEpisodesById", podcastId],
    queryFn: async () => {
      return getPodcastEpisodesById(podcastId);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
