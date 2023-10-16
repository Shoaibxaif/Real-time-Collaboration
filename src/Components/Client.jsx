import {   Text, VStack } from "@chakra-ui/react";
import React from "react";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  return (
    <VStack alignItems={"flex-start"}>
      <Avatar name={username} size={50} round="14px" />
      <Text as="span" mt={-1} mb={2}>{username}</Text>
    </VStack>
  );
};

export default Client;
