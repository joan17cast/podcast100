import { z } from "zod";

export const authorSchema = z.object({
  name: z.object({ label: z.string() }),
  uri: z.object({ label: z.string() }),
});

export type AuthorModel = z.infer<typeof authorSchema>;

export const entrySchema = z.array(
  z.union([
    z.object({
      "im:name": z.object({ label: z.string() }),
      "im:image": z.array(
        z.object({
          label: z.string(),
          attributes: z.object({ height: z.string() }),
        }),
      ),
      summary: z.object({ label: z.string() }),
      "im:price": z.object({
        label: z.string(),
        attributes: z.object({ amount: z.string(), currency: z.string() }),
      }),
      "im:contentType": z.object({
        attributes: z.object({ term: z.string(), label: z.string() }),
      }),
      rights: z.object({ label: z.string() }),
      title: z.object({ label: z.string() }),
      link: z.object({
        attributes: z.object({
          rel: z.string(),
          type: z.string(),
          href: z.string(),
        }),
      }),
      id: z.object({
        label: z.string(),
        attributes: z.object({ "im:id": z.string() }),
      }),
      "im:artist": z.object({
        label: z.string(),
        attributes: z.object({ href: z.string() }),
      }),
      category: z.object({
        attributes: z.object({
          "im:id": z.string(),
          term: z.string(),
          scheme: z.string(),
          label: z.string(),
        }),
      }),
      "im:releaseDate": z.object({
        label: z.string(),
        attributes: z.object({ label: z.string() }),
      }),
    }),
    z.object({
      "im:name": z.object({ label: z.string() }),
      "im:image": z.array(
        z.object({
          label: z.string(),
          attributes: z.object({ height: z.string() }),
        }),
      ),
      summary: z.object({ label: z.string() }),
      "im:price": z.object({
        label: z.string(),
        attributes: z.object({ amount: z.string(), currency: z.string() }),
      }),
      "im:contentType": z.object({
        attributes: z.object({ term: z.string(), label: z.string() }),
      }),
      rights: z.object({ label: z.string() }),
      title: z.object({ label: z.string() }),
      link: z.object({
        attributes: z.object({
          rel: z.string(),
          type: z.string(),
          href: z.string(),
        }),
      }),
      id: z.object({
        label: z.string(),
        attributes: z.object({ "im:id": z.string() }),
      }),
      "im:artist": z.object({ label: z.string() }),
      category: z.object({
        attributes: z.object({
          "im:id": z.string(),
          term: z.string(),
          scheme: z.string(),
          label: z.string(),
        }),
      }),
      "im:releaseDate": z.object({
        label: z.string(),
        attributes: z.object({ label: z.string() }),
      }),
    }),
    z.object({
      "im:name": z.object({ label: z.string() }),
      "im:price": z.object({
        label: z.string(),
        attributes: z.object({ amount: z.string(), currency: z.string() }),
      }),
      "im:image": z.array(
        z.object({
          label: z.string(),
          attributes: z.object({ height: z.string() }),
        }),
      ),
      summary: z.object({ label: z.string() }),
      "im:artist": z.object({ label: z.string() }),
      title: z.object({ label: z.string() }),
      link: z.object({
        attributes: z.object({
          rel: z.string(),
          type: z.string(),
          href: z.string(),
        }),
      }),
      id: z.object({
        label: z.string(),
        attributes: z.object({ "im:id": z.string() }),
      }),
      "im:contentType": z.object({
        attributes: z.object({ term: z.string(), label: z.string() }),
      }),
      category: z.object({
        attributes: z.object({
          "im:id": z.string(),
          term: z.string(),
          scheme: z.string(),
          label: z.string(),
        }),
      }),
      "im:releaseDate": z.object({
        label: z.string(),
        attributes: z.object({ label: z.string() }),
      }),
    }),
  ]),
);

export type EntryModel = z.infer<typeof entrySchema>;
export const listOfPodcastSchema = z.object({
  feed: z.object({
    author: authorSchema,
    entry: entrySchema,
    updated: z.object({ label: z.string() }),
    rights: z.object({ label: z.string() }),
    title: z.object({ label: z.string() }),
    icon: z.object({ label: z.string() }),
    link: z.array(
      z.union([
        z.object({
          attributes: z.object({
            rel: z.string(),
            type: z.string(),
            href: z.string(),
          }),
        }),
        z.object({
          attributes: z.object({ rel: z.string(), href: z.string() }),
        }),
      ]),
    ),
    id: z.object({ label: z.string() }),
  }),
});
export type ListOfPodcastPodcastModel = z.infer<typeof listOfPodcastSchema>;

export const podcastEpisodeSchema = z.union([
  z
    .object({
      wrapperType: z.string(),
    })
    .passthrough(),
  z
    .object({
      episodeFileExtension: z.string(),
      episodeContentType: z.string(),
      artworkUrl160: z.string(),
      artworkUrl600: z.string(),
      feedUrl: z.string(),
      artistIds: z.array(z.number()),
      trackTimeMillis: z.number(),
      genres: z.array(z.object({ name: z.string(), id: z.string() })),
      episodeGuid: z.string(),
      description: z.string(),
      closedCaptioning: z.string(),
      collectionId: z.number(),
      collectionName: z.string(),
      releaseDate: z.string(),
      collectionViewUrl: z.string(),
      shortDescription: z.string(),
      trackId: z.number(),
      trackName: z.string(),
      episodeUrl: z.string(),
      trackViewUrl: z.string(),
      artworkUrl60: z.string(),
      artistViewUrl: z.string(),
      previewUrl: z.string(),
      country: z.string(),
      kind: z.string(),
      wrapperType: z.string(),
    })
    .passthrough(),
]);

export type PodcastEpisodeModel = z.infer<typeof podcastEpisodeSchema>;

export const listOfPodcastEpisodesSchema = z.object({
  resultCount: z.number(),
  results: z.array(podcastEpisodeSchema),
});

export type ListOfPodcastEpisodesModel = z.infer<
  typeof listOfPodcastEpisodesSchema
>;
