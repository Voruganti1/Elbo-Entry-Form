import axios from "axios";

export async function getToken(formEntries) {
  let data;

  try {
    data = await axios.post(
      "http://wm-test.elboapps.com/clients/token",
      formEntries
    );
  } catch (err) {
    data = err;
  }

  return data.response.data;
}

export const validateForm = (values) => {
  const errors = {};
  //console.log(values);
  if (!values.email) {
    errors.emailAddress = "please enter valid email ID!";
  }
  if (!values.password) {
    errors.password = "please enter valid password!";
  }
  console.log(getToken());
  return errors;
};
