import { Component, createSignal, onMount } from "solid-js";
import { setImages } from "../store/AppStore";

export const SearchForm: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal("");
  onMount(() => {
    getImages("random");
  });

  const getImages = async (type: string) => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=25&query=${type}&client_id=${
          import.meta.env.VITE_CLIENT_ID
        }`
      );
      const data = await res.json();
      setImages(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    getImages(searchTerm());
  };

  return (
    <div class="p-4 mx-auto flex justify-center">
      <input
        type="text"
        placeholder="Search"
        class="w-96 p-2 bg-slate-200 rounded-md"
        value={searchTerm()}
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <button
        class="bg-slate-100 ml-4 py-2 px-3 rounded-md text-md shadow-md"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};
