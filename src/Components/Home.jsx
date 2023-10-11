import {
  Center,
  Text,
  Stack,
  CardFooter,
  Button,
  CardBody,
  Card,
  Image,
} from "@chakra-ui/react";
import React from "react";
import './Home.css';
import Logo from "../Assests/Logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Center h="100vh" bgColor="#404258" px={10}>
        {" "}
        <Card w={"xl"} bgColor="#50577A" border="4px solid #6B46C1">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image src={Logo} alt="Logo" w="100px" color={"black"} />

              <Text fontSize="xl" fontWeight={"semibold"}>
                Paste Room ID
              </Text>
              <input
                type="text"
                style={{ padding: "4px", border: "none", borderRadius: "5px" }}
                placeholder="ROOM ID"
              ></input>
              <input
                type="text"
                style={{ padding: "4px", border: "none", borderRadius: "5px" }}
                placeholder="USERNAME"
              ></input>
            </Stack>
          </CardBody>

          <CardFooter display="grid">
            <Button
              w={"100px"}
              variant="solid"
              colorScheme="purple"
              justifySelf="end"
            >
              Join
            </Button>
            <Text fontWeight={"semibold"}>
              Do you have room id?{" "}
              <Link className="link" color="#ff0000" href="/">
                Create Now
              </Link>
            </Text>
          </CardFooter>
        </Card>
      </Center>
    </>
  );
};

export default Home;
