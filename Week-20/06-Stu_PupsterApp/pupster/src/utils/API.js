import axios from "axios";
const BASEURL = "https://dog.ceo/dog-api";
const BREED = "/breed/";

export default {
  search: function (query) {
    return axios.get(BASEURL + BREED);
  }
};