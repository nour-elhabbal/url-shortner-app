import { Box } from "@chakra-ui/react";
import Boost from "./components/Boost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection";
import Shortener from "./components/Shortener/Shortener";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Box bgColor="#f0f1f6" pos="relative" minH="500px">
        <Shortener />
      </Box>
      <Boost />
      <Footer />
    </>
  );
};

export default App;
