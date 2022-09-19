import { Component } from "solid-js";

export const Footer: Component = () => {
  return (
    <div class="w-full bg-slate-800 text-slate-400 py-4 flex justify-center flex-col items-center">
      <div>
        Made with <span class="text-red-500">❤</span> by Shubham Yadav.
      </div>
      <div>
        All rights reserved. <span class="text-red-500">©</span> 2022.
      </div>
    </div>
  );
};
