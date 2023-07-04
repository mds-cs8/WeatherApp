import React from "react";
import { Stack, Heading, Image } from "@chakra-ui/react";

const WelcomePage = () => {
  return (
    <div
      style={{
        maxHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Stack mb="6" spacing="3" w={"100%"} textAlign="start">
        <Heading size="lg" color={"gray.400"} fontWeight={"light"}>
          Daily
        </Heading>
        <Heading size="2xl">Weather</Heading>
      </Stack>
      <Image
        src="/img/main.jpg"
        alt="Green double couch with wooden legs"
        w={{ base: "400px", xl: "500px" }}
        h={{ xl: "300px" }}
        objectFit="cover"
      />
    </div>
  );
};

export default WelcomePage;
