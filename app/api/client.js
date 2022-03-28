import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
  // baseURL: "http://127.0.0.1:8080/api",
  baseURL: "https://yellow-goose-94.loca.lt/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  // console.log("token is:", authToken);
  if (!authToken) return;
  request.headers["Authorization"] = authToken;
});

//overriding the implementation of get method of api sauce libraries
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig); // original get method

  //we cannot save all get requests in storage so we need to blacklist some get requests
  if (response.ok) {
    // console.log("the response in implemented get method is:", response);
    cache.store(url, response.data);
    return response;
  }

  // const data = await cache.get(url);
  // return data ? { ok: true, data } : response;
};

export default apiClient;

// fetch
// const url = 'https://127.0.0.1:8080/api/products'
//     try {
//       const response = await fetch('url');
//       console.log(response)

//     } catch (error) {
//       console.log('error is ', error)
//     }

// axios
// const serverUrl = "http://127.0.0.1:8080/api/products";
// axios.get(serverUrl, {}, {
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   }
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log('the error is:', error);
// })
