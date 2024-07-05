import axios from "axios";

interface ReturnedData {
  data: {
    link: string;
  };
}

export const getShortenedUrl = async (url: string) => {
  const TOKEN = "a52add28cee0cfab9642fb25d9d71496d3c7d5e1";
  const res = await axios
    .post(
      "https://api-ssl.bitly.com/v4/shorten",
      {
        long_url: url,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: ReturnedData) => res.data.link)
    .catch((err) => console.log(err));

  return res;
};
