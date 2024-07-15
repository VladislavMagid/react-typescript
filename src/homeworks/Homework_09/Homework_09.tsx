import { useState, useEffect } from "react";
import axios from "axios";

import Button from "components/Button/Button";

import { Homework_09Wrapper, ButtonControl, JokeCard } from "./styles";

function Homework_09() {
  interface Joke {
    setup: string;
    punchline: string;
  }

  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  const getRandomJoke = async () => {
    //   try{
    //     const response: Joke | undefined = await axios.get (RANDOM_JOKE_URL)
    //     setJoke(`${response.data.setup} ${response.data.punchline}`)
    //   }catch (error){
    //     setError ("ошибка при получении данных")
    //   }finally{
    //   }
    // }
    //   setJoke(undefined);
    //   setError(undefined);
    //   const response = await fetch(
    //     "https://official-joke-api.appspot.com/random_joke"
    //   );
    //   const result = await response.json();
    //   if (response.ok) {
    //     setJoke({ setup: result.setup, punchline: result.punchline });
    //   } else {
    //     setError("Ошибка при получении данных");
    //   }
    // };
    // useEffect(() => {
    //   getRandomJoke();
    // }, []);
  };
  return (
    <Homework_09Wrapper>
      <JokeCard>
        {joke && <p>{`${joke.setup} ${joke.punchline}`}</p>}
        {error && <p>{error}</p>}
      </JokeCard>
      <ButtonControl>
        <Button name="Get Joke" onClick={getRandomJoke} />
      </ButtonControl>
    </Homework_09Wrapper>
  );
}

export default Homework_09;
