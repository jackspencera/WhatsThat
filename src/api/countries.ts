import { Region } from "../components/GameConfig";

const BASE_URL = 'https://restcountries.com/v3.1';

export const getCountriesInRegion = async (region: Region): Promise<String[]> => {
  const url = `${BASE_URL}/region/${region}`;
  const data: any = await fetch(url, {
    method: 'GET'
  });
  const res = await data.json();
  // Make this difficulty setting based on the settings
  const difficultyFiltered = res.filter((country: any) => country.area > 10000);
  return difficultyFiltered.map((country: any) => country.name.common);
}