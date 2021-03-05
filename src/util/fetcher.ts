const API_KEY = "2d33c77063aa0a5a20bcf4682a1c151c";
const BASE_URL = "https://api.themoviedb.org/3";
const language = "pt-BR";

const basicFetcher = async (endpoint: string) => {
  const req = await fetch(
    `${BASE_URL}${endpoint}&api_key=${API_KEY}&language=${language}`
  );
  const json = await req.json();
  return json;
};

export default basicFetcher;
