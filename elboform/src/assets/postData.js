import axios from "axios";

async function postData(url, input) {
  const r = await axios.post("http://wm-test.elboapps.com/" + url, input);
  return r;
}

export default postData;
