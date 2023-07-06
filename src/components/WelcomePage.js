// THIS COMPONENT IS FIRST PAGE USER WILL SHOW BEFORE SEARCH

import React from "react";
import { Stack, Heading, Image } from "@chakra-ui/react";
import { Slide } from "react-awesome-reveal";

const WelcomePage = () => {
  return (
    <Slide delay={500}>
      <div
        style={{
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Stack mb="6" spacing="3" w={"100%"} textAlign="start">
          <Heading size="lg" color={"gray.400"} fontWeight={"light"}>
            Daily
          </Heading>
          <Heading size="2xl" textShadow="2px 2px #5AE4A8" color={"#5a5959"}>
            Weather
          </Heading>
        </Stack>
        <Image
          src="/img/main.jpg"
          alt="Green double couch with wooden legs"
          w={{ base: "400px", xl: "500px" }}
          h={{ xl: "300px" }}
          objectFit="cover"
        />
      </div>
    </Slide>
  );
};

export default WelcomePage;
