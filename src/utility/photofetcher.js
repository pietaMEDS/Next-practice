import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: "LAIM2RA2Z_GYPDX1JWkSRHe56h_FRmy5iVDqz6ajltk",
  });

export async function photoGet(query) {
    let result = await unsplash.search.getPhotos({
        query: search,
        page: 1,
        perPage: 12,
    });
    return result
}

export async function categoriesGetRandom(  ) {
    let result = await unsplash.photos.getRandom({
        count: 4,
    });
    return result
}