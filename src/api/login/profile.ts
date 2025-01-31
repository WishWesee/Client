import axios from "axios";

export const FetchMyInfo = async() => {
  try {
    const response = await axios.get("https://wishwesee.n-e.kr/api/v1/user", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraGhtMzc4N0BnbWFpbC5jb20iLCJpYXQiOjE3MzgzMzYwNjksImV4cCI6MTczODMzOTY2OX0.Be5D-fjkTy2zaqKemEji1L18Rrwy7hYux-PgZImD_4NAc7tfaR2vFoYMrM5EfTAMHblMeaGmc1ZzPKKWFp4nnw",
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
