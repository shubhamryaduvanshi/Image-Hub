import { Component, createSignal, Show } from "solid-js";
import { images } from "../store/AppStore";
import { Dialog } from "./Dialog";
import { ImageCard } from "./ImageCard";

export const CardsContainer: Component = () => {
  const [showModal, setShowModal] = createSignal(false);
  const [showSelectedImage, setShowSelectedImage] = createSignal("");

  const showPreview = (url: string) => {
    showModal() ? setShowModal(false) : setShowModal(true);
    setShowSelectedImage(url);
  };

  return (
    <>
      <Show when={showModal()}>
        <Dialog id="12" image={showSelectedImage()} close={()=>setShowModal(false)} />
      </Show>
      <Show
        when={images().length > 0}
        fallback={
          <div class="text-2xl text-slate-100 h-96 flex justify-center items-center">
            No images found
          </div>
        }
      >
        <div
          class="grid grid-cols-1 gap-6 justify-center
          xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4
            mt-16 pb-14"
        >
          {images().map((image) => (
            <ImageCard imageInfo={image} showPreview={showPreview} />
          ))}
        </div>
      </Show>
    </>
  );
};
