import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import CarouselContainer from "./pages/CarouselContainer/CarouselContainer";
import GridProdutos from "./components/GridProdutos/GridProdutos";
import { Slider } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <GridProdutos/>
      <Slider/>
      <Main />
      <Footer />
    </>
  );
}

export default App;