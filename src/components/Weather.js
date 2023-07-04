import React from "react";
import { Container, Img, requiredChakraThemeKeys } from "@chakra-ui/react";
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Input,
  Heading,
  Divider,
  Image,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Slide } from "react-awesome-reveal";
import WelcomePage from "./WelcomePage";

const Weather = () => {
  return (
    <Container maxW="container.sm">
      <Card w="100%" bg={"#fff"} boxShadow="xl" overflow={"hidden"}>
        <Slide delay={1000}>
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            minH={"50vh"}
            padding={"5px 20px"}
          >
            <WelcomePage />
          </CardBody>
        </Slide>
        <CardFooter
          // bg={"#5AE4A8"}
          style={{
            // background: "#5AE4A8" /* fallback for old browsers */,
            background: "linear-gradient(to left, #5AE4A8, #43bc87)",
          }}
          // h={{ base: "100px", md: "150px" }}
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
              variant="filled"
              placeholder="Enter the city name"
              w={{ base: "75%", md: "85%" }}
            />

            <IconButton
              background={"#fff"}
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "10px",
            }}
          >
            <Button colorScheme="teal" size="sm">
              عربي
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Weather;
