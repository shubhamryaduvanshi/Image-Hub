import { createSignal, type Component } from "solid-js";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { CardsContainer } from "./components/CardsContainer";
import { Footer } from "./components/Footer";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal<boolean>(false);
  return (
    <div class="bg-slate-700 h-full min-h-screen font-poppins">
      <div class="max-w-4xl mx-auto">
        <Header />
        <SearchForm isLoading={isLoading} setLoading={setIsLoading} />
        <CardsContainer isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
