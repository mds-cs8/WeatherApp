// THIS COMPONENT UI FOR OUR DATA THAT COME FROM API

import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Slide, Bounce } from "react-awesome-reveal";
import moment from "moment";

const City = (props) => {
  let date = moment().format("MMMM Do YYYY, h:mm:ss a"); // July 6th 2023, 10:12:10 am

  return (
    <div
      style={{
        width: "100%",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* city and date box */}
      <Box
        mt={"6"}
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        width={"100%"}
        minHeight={"100px"}
        overflow={"hidden"}
        alignItems={"start"}
        wordBreak={"break-all"}
      >
        <Slide delay={500} direction="left">
          <Heading
            as="h6"
            size="sm"
            fontFamily={"Tajawal"}
            fontWeight={"lighter"}
          >
            {/* HERE WE PUT DATE */}
            {date}
          </Heading>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            fontFamily={"Tajawal"}
            fontWeight={"bolder"}
            textShadow="1px 1px #5AE4A8"
            color={"#5a5959"}
          >
            {/* HERE WE PUT CITY NAME */}
            {props.data.city} , {props.data.country}
          </Heading>
        </Slide>
      </Box>

      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* HERE WE PUT IMAGE THAT REFLECTS THE WEATHER */}
        <Bounce delay={600}>
          <Image
            src={
              props.data.weatherState == "few clouds"
                ? "/img/cloud.png"
                : props.data.weatherState == "clear sky"
                ? "/img/clear.png"
                : props.data.weatherState == "scattered clouds"
                ? "/img/scattered.png"
                : props.data.weatherState == "rain" ||
                  props.data.weatherState == "shower rain"
                ? "/img/rain.png"
                : props.data.weatherState == "thunderstorm"
                ? "/img/thunder.png"
                : props.data.weatherState == "snow"
                ? "/img/snow./img/snow.webp"
                : props.data.weatherState == "mist"
                ? "/img/mist.png"
                : "/img/scattered.png"
            }
            alt="Green double couch with wooden legs"
            objectFit="cover"
            width={{ base: "200px", md: "200px" }}
          />

          <Heading
            as="h3"
            size={{ base: "xl", md: "xl" }}
            fontFamily={"Tajawal"}
            fontWeight={"normal"}
            color={"gray.400"}
          >
            {/* WEATHER STATE */}
            {props.data.weatherState}
          </Heading>
        </Bounce>
      </Box>
      <Box
        mt={"5"}
        width={{ base: "100%", md: "80%" }}
        height={"50px"}
        display={"flex"}
        alignItems={"center"}
        // justifyContent={{ base: "space-evenly", md: "space-evenly" }}
        justifyContent={"space-evenly"}
      >
        <Bounce delay={650}>
          <Box>
            <Heading as="h6" size="xs" color={"#164B60"} mb={"10px"}>
              درجة الحرارة
            </Heading>
            <Heading as="h5" size="md">
              {props.data.temp} <sup style={{ color: "#5AE4A8" }}>°</sup>{" "}
              <span style={{ color: "#5AE4A8" }}>C</span>
            </Heading>
          </Box>

          <Box
            padding={{ base: "0 10px", md: "0 20px" }}
            borderRight={"2px solid #5AE4A8"}
            borderLeft={"2px solid #5AE4A8"}
          >
            <Heading as="h6" size="xs" color={"#164B60"} mb={"10px"}>
              الرطوبة
            </Heading>
            <Heading as="h5" size="md">
              {props.data.humidity} <span style={{ color: "#5AE4A8" }}>%</span>
            </Heading>
          </Box>

          <Box>
            <Heading as="h6" size="xs" color={"#164B60"} mb={"10px"}>
              سرعة الرياح
            </Heading>
            <Heading as="h5" size="md">
              {props.data.windSpeed}
              <span style={{ color: "#5AE4A8" }}> KM/H</span>
            </Heading>
          </Box>
        </Bounce>
      </Box>
    </div>
  );
};

export default City;
