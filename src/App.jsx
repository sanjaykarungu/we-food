import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import Groceries from "./pages/Groceries";
import Hotels from "./pages/Hotels";
import Register from "./pages/Register";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Briyani from "./Menu/Briyani";
import Dosa from "./Menu/Dosa";
import Idli from "./Menu/Idli";
import Salad from "./Menu/Salad";
import Juice from "./Menu/Juice";
import Tea from "./Menu/Tea";
import Coffee from "./Menu/Coffee";
import Cakes from "./Menu/Cakes";
import Burger from "./Menu/Burger";
import Shawarma from "./Menu/Shawarma";
import Ice from "./Menu/Ice";
import Pizza from "./Menu/Pizza";
import Vegetables from "./Groceries/Vegetables";
import Fruits from "./Groceries/Fruits";
import Dairy from "./Groceries/Dairy";
import Masala from "./Groceries/Masala"
import Munchies from "./Groceries/Munchies";
import Oils from "./Groceries/Oils"
import Rice from "./Groceries/Rice"


const App = () => {
  return (
    <div>

     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="briyani" element={<Briyani />} />
        <Route path="dosa" element={<Dosa />} />
        <Route path="idli" element={<Idli />} />
        <Route path="salad" element={<Salad />} />
        <Route path="juice" element={<Juice />} />
        <Route path="tea" element={<Tea />} />
        <Route path="coffee" element={<Coffee />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="burger" element={<Burger />} />
        <Route path="shawarma" element={<Shawarma />} />
        <Route path="ice" element={<Ice />} />
        <Route path="pizza" element={<Pizza />} />


      </Routes>

      <Routes>

        <Route path="/" element={<Groceries />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="dairy" element={<Dairy />} />
        <Route path="masala" element={<Masala />} />
        <Route path="munch" element={<Munchies />} />
        <Route path="oil" element={<Oils/>} />
        <Route path="rice" element={<Rice/>} />

      </Routes>

      <Routes>
        <Route path="/" element={<Hotels />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
