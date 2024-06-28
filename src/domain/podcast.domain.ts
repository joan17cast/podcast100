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

export const listOfPodcastEpisodesSchema = z.object({
  resultCount: z.number(),
  results: z.array(
    z.object({
      wrapperType: z.string(),
      kind: z.string(),
      artistId: z.number(),
      collectionId: z.number(),
      trackId: z.number(),
      artistName: z.string(),
      collectionName: z.string(),
      trackName: z.string(),
      collectionCensoredName: z.string(),
      trackCensoredName: z.string(),
      artistViewUrl: z.string(),
      collectionViewUrl: z.string(),
      feedUrl: z.string(),
      trackViewUrl: z.string(),
      artworkUrl30: z.string(),
      artworkUrl60: z.string(),
      artworkUrl100: z.string(),
      collectionPrice: z.number(),
      trackPrice: z.number(),
      collectionHdPrice: z.number(),
      releaseDate: z.string(),
      collectionExplicitness: z.string(),
      trackExplicitness: z.string(),
      trackCount: z.number(),
      trackTimeMillis: z.number(),
      country: z.string(),
      currency: z.string(),
      primaryGenreName: z.string(),
      contentAdvisoryRating: z.string(),
      artworkUrl600: z.string(),
      genreIds: z.array(z.string()),
      genres: z.array(z.string()),
    }),
  ),
});
export type ListOfPodcastEpisodesModel = z.infer<
  typeof listOfPodcastEpisodesSchema
>;
