import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Editor from "../Components/Editor";
import Logo from "../Assests/Logo.svg";
import "./EditorPage.css";
import Avatar from "react-avatar";

const EditorPage = () => {
  return (
    <>
      <HStack>
        <aside className="aside">
          <Image mb={2} src={Logo} />
          <Divider />

          <Text fontSize={"larger"} fontWeight={"semibold"} color={"white"} mb={3}>
            Connected
          </Text>

          <Avatar name="Wim Mostmans" size="50" round="50%" />
          <Avatar name="Mohammad Shoaib" size="50" round="50%" />

          <ButtonGroup mt={"62vh"} colorScheme="purple">
            <VStack spacing={2}>
              <Button w={40}>Copy Room Id</Button>
              <Button w={40}>Leave</Button>
            </VStack>
          </ButtonGroup>
        </aside>
        <Editor />
      </HStack>
    </>
  );
};

export default EditorPage;
