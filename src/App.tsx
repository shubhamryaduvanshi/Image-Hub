import type { Component } from "solid-js";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { CardsContainer } from "./components/CardsContainer";
import { Footer } from "./components/Footer";

const App: Component = () => {
  const url =
    "https://api.unsplash.com/search/photos?page=1&per_page=15&query=computer&client_id=DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok";
  return (
    <div class="bg-slate-700 h-full min-h-screen font-poppins">
      <div class="max-w-4xl mx-auto">
        <Header />
        <SearchForm />
        <CardsContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
