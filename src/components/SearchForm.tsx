import { Accessor, Component, Show, createSignal, onMount } from "solid-js";
import { setImages } from "../store/AppStore";

interface SearchFormProps {
  isLoading: Accessor<boolean>,
  setLoading: (e: boolean) => void
}

export const SearchForm: Component<SearchFormProps> = ({ isLoading, setLoading }) => {
  const [searchTerm, setSearchTerm] = createSignal("");
  // const [isLoading, setIsLoading] = createSignal<boolean>(false);


  onMount(() => {
    getImages("random");
  });

  const getImages = async (type: string) => {
    setLoading(true);
    try {
      const res = await fetch(`https://commonserver.onrender.com/upsplace/${type}`);
      const data = await res.json();
      setImages(data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    getImages(searchTerm());
  };

  return (
    <div class="p-4 mx-auto flex justify-center flex-col sm:flex-row items-center">
      <input
        type="text"
        placeholder="Search"
        class="w-72 p-2 bg-slate-200 rounded-md sm:96"
        value={searchTerm()}
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <div class="flex items-center justify-center">
        <button type="button"
          class="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6
          sm:ml-4  sm:w-auto
          mt-4 sm:mt-0
          mx-auto sm:mx-0
          transition duration-150 ease-in-out bg-slate-100 rounded-md shadow  hover:bg-slate-200"
          disabled={searchTerm().length === 0}
          onClick={handleSubmit}
        >
          <Show when={isLoading()}>
            <svg class="w-5 h-5 mr-3 -ml-1 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
          </Show>
          {isLoading() ? 'Loading...' : 'Submit'}
        </button>
      </div>

    </div >
  );
};
