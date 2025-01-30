import axios from "axios";

export const FetchMyInfo = async() => {
  try {
    const response = await axios.get("https://wishwesee.n-e.kr/api/v1/user", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraGhtMzc4N0BnbWFpbC5jb20iLCJpYXQiOjE3MzgyMjk5MzMsImV4cCI6MTczODIzNzEzM30.g13xhd2i7ULOdcMQGH4kvExMIuvNZj2DvWRKGFYJB8nuHb99uaRTNqy-_wF63xb5--PjwURa_XugMXk9eCGVsQ",
        "Content-Type": "application/json",
      },
    });
    console.log("API Response:", response.data);
    return response.data.information;
  } catch (error) {
    console.error("Error fetching info:", error);
    throw error;
  }
};
