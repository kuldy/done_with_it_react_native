import client from "./client";
import axios from "axios";

const baseURL = "http://127.0.0.1:8080/api";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const getListingsAxios = () =>
  axios.get(
    `${baseURL + endpoint}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("category", listing.category.value);
  data.append("description", listing.description);
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri1: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  // console.log('the post data is')
  // for (var pair of data.entries()) {
  //   console.log(pair[0] + ', ' + pair[1]);
  // }

  // console.log('the listings is:', listing)
  // console.log('the formData json is:', JSON.stringify(listing))

  // let data1 = 'kullu'
  return client.post("/add-listing", listing, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  getListingsAxios,
  addListing,
};
