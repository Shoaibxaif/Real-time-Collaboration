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
import React, { useState } from "react";
import './Home.css';
import Logo from "../Assests/Logo.svg";
import { Link } from "react-router-dom";
import {v4 as uid} from 'uuid'
import toast from 'react-hot-toast';


const Home = () => {
  
  const [roomid, setroomid] = useState('');
  const [username, setUsername] = useState('');
  
 
  const CreateRoomId =(e)=>{
    e.preventDefault();
    const id = uid();

    setroomid(id);
    toast.success('Newroom Created')
   

  }
  return (
    <>
      <Center h="100vh" bgColor="#404258" px={10}>
        {" "}
        <Card w={"xl"} bgColor="#50577A" border="4px solid #6B46C1">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image src={Logo} alt="Logo" w="100px" color={"black"} />

              <Text color={"white"} fontSize="xl" fontWeight={"semibold"}>
                Paste Room ID
              </Text>
              <input
                 onChange={(e) => setroomid(e.target.value)}
                 value={roomid}
                type="text"
                placeholder="ROOM ID"
               
                style={{ padding: "4px", border: "3px solid #6B46C1 ", borderRadius: "8px", background:"none", color:"black" }}
             
            
          
              ></input>
              <input
                type="text"
                style={{ padding: "4px", border: "3px solid #6B46C1 ", borderRadius: "8px", background:"none" , }} 
                placeholder="USERNAME"
                onChange={(e) => setUsername(e.target.value)}
                 value={username}
             
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
            <Text color={"white"} fontWeight={"semibold"}>
              Do you have room id? &nbsp;
              <Link  className="link"    onClick={CreateRoomId}>
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
