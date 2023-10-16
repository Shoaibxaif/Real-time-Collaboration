import {
  Button,
  Container,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Editor from "../Components/Editor";
import Logo from "../Assests/Logo.svg";
import "./EditorPage.css";
import Client from "../Components/Client";

const EditorPage = () => {
  const [clients, setClients] = useState([
    {
      socketId: 1,
      username: "John Doe",
    },
    {
      socketId: 2,
      username: "martin james",
    },
  ]);

  return (
    <>
      <HStack>
        <aside className="aside">
          <VStack >
            <Container  h={"82vh"}>

            <Image mb={2} src={Logo} />
            <Divider />

            <Text
              fontSize={"larger"}
              fontWeight={"semibold"}
              color={"white"}
              mb={3}
            >
              Connected
            </Text>

            {clients.map((client) => {
              return (
                <Client username={client.username} key={client.socketId} />
              );
            })}
            </Container>

            <VStack spacing={2} className="btn" >
              <Button w={40}>Copy Room Id</Button>
              <Button w={40}>Leave</Button>
            </VStack>
          </VStack>
        </aside>
        <Editor />
      </HStack>
    </>
  );
};

export default EditorPage;
