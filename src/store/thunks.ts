import axios from "axios";
import { RootState, AppDispatch } from ".";
import { setPokemon } from "./counter/slice";

export const getPokemon =
  (pokemonName: string) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      dispatch(setPokemon(response.data));
    } catch (e) {
      console.log("Error", e);
    }
  };
