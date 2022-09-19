interface DialogProps {
  id: string;
  image: string;
  close: () => void;
}

export const Dialog = (props: DialogProps) => {
  return (
    <div
      class="dialog-overlay"
      onClick={(e: any) => {
        e.stopPropagation();
      }}
    >
      <div class="dialog-wrapper">
        <div class="flex align-center justify-between py-4">
          <p class="text-md">Image Preview </p>
          <div
            class="text-slate-600 border border-slate-500 rounded-md px-2 cursor-pointer"
            onClick={props.close}
          >
            Close
          </div>
        </div>
        <div class="content pb-6 max-h-96 overflow-hidden">
          <img src={props.image} alt="image" class=" max-h-80 h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};
