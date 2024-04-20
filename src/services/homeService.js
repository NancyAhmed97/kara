import axios from "./axios";

const getCategories = async () => {
  try {
    const response = await axios.post(`https://marriage-application.onrender.com/getall?gender=Female`);
    return console.log(response.data);
  } catch (e) {
    return e.response
  }
}

const getHotels = async () => {
  try {
    await axios({

      url: "/getall?gender=Female",
      method: "POST",
    }).then((res) => {
      // handle success
      console.log(res);
    });

  } catch (error) {
    console.log(error.response);

  }
}
export default getHotels;