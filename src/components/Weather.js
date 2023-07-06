// IMPORT REACT HOOKS//
import { React, useState, useEffect } from "react";
import axios from "axios";

// UI LIBRARY//
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  IconButton,
  Button,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// COMPONENT AND OTHER //
import WelcomePage from "./WelcomePage";
import City from "./City";

const Weather = () => {
  const [Search, setSearch] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [apiState, setApiState] = useState(null);
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    weatherState: "",
    humidity: "",
    windSpeed: "",
  });
  // HANDLE
  function searchInputy(value) {
    let city = value;
    setCityInput(city);
  }

  function searchCity() {
    setSearch(cityInput);
  }

  useEffect(() => {
    let cleanApi = null;
    const apiKey = "4d55f6f64a7bae23f0f355cb31ac5251";
    const city = Search;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((clean) => {
          cleanApi = clean;
        }),
      })
      .then(function (response) {
        // handle success
        const C = Math.round(response.data.main.temp - 272.15);
        const data = {
          ...weather,
          city: response.data.name,
          country: response.data.sys.country,
          temp: C,
          weatherState: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        };
        setWeather(data);
        setApiState(response.status);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setApiState(error.response);
      });
    return () => {
      cleanApi();
    };
  }, [Search]);
  console.log(weather);
  console.log("api state" + apiState);
  return (
    <Container minWidth={{ base: "100vw", md: "600px" }} centerContent>
      <Card
        w={{ base: "100%", md: "550px" }}
        bg={"#fff"}
        boxShadow="xl"
        overflow={"hidden"}
      >
        {/* // CARD CONTENT // */}
        <CardBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          minH={"55vh"}
          padding={"5px 18px"}
        >
          {/* // HERE PUT COMPONENT // */}

          {Search == "" ? (
            <WelcomePage />
          ) : apiState.status == 404 ? (
            <h1 style={{ fontSize: "30px", marginTop: "30px" }}>not found</h1>
          ) : (
            <City data={weather} state={apiState} />
          )}

          {/* // HERE PUT COMPONENT // */}
        </CardBody>
        {/* /* FOOTER */}
        <CardFooter
          style={{
            background: "linear-gradient(to left, #5AE4A8, #43bc87)",
          }}
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius="20px 20px 0 0 "
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Input
              placeholder="Enter the city name in english eg:mecca"
              w={{ base: "75%", md: "85%" }}
              background={"#fff"}
              onChange={(e) => {
                let value = e.target.value;
                searchInputy(value);
              }}
            />

            <IconButton
              className="button"
              color={"#fff"}
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={searchCity}
            />
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Weather;
