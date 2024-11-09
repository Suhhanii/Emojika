import axios from "axios";

const instance=axios.create({
    //baseURL: "https://api.emojisworld.fr/v1/"
    baseURL: "https://emoji-api.com/"
});
export default instance;