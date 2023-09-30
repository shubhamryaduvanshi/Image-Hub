import { Accessor, Component, createSignal, Match, Show, Switch } from "solid-js";
import { images } from "../store/AppStore";
import { Dialog } from "./Dialog";
import { ImageCard } from "./ImageCard";
import SkeltonLoadingCardsContainer from "./SkeltonLoadingCardsContainer";
interface CardsContainerProps {
  isLoading: Accessor<boolean>
}

export const CardsContainer: Component<CardsContainerProps> = ({ isLoading }) => {
  const [showModal, setShowModal] = createSignal(false);
  const [showSelectedImage, setShowSelectedImage] = createSignal("");

  const showPreview = (url: string) => {
    showModal() ? setShowModal(false) : setShowModal(true);
    setShowSelectedImage(url);
  };

  return (
    <Switch fallback={<div class="text-2xl text-slate-100 h-96 flex justify-center items-center">
      Something went wrong. Please try again.
    </div>}>
      <Match when={showModal()} >
        <Dialog id="12" image={showSelectedImage()} close={() => setShowModal(false)} />
      </Match>
      <Match when={isLoading()} >
        <SkeltonLoadingCardsContainer />
      </Match>
      <Match when={!isLoading() && !images().length}>
        <div class="text-2xl text-slate-100 h-96 flex justify-center items-center">
          No images found!
        </div>
      </Match>
      <Match when={images().length}>
        <div
          class="grid grid-cols-1 gap-6 justify-center
          xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4
            mt-8 pb-14
            sm:mt-16
            "
        >
          {images().map((image) => (
            <ImageCard imageInfo={image} showPreview={showPreview} />
          ))}
        </div>
      </Match>
    </Switch>
  );
};
