import "isomorphic-fetch";

export default async (type = "top") => {
  const response = await fetch(
    `https://www.reddit.com/r/meme/${type}/.json?count=20`
  );
  const data = await response.json();
  return data;
};
