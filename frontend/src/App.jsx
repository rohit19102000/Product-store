import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import  CreatePage  from "./Pages/CreatePage"
import NavBar from "./Components/NavBar"


function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>  
    <NavBar /> 
    <Routes>
      <Route path="/" element={<HomePage />}  />
      <Route path="/create" element={<CreatePage />}  />
    </Routes>
    </Box>
  )
}

export default App
