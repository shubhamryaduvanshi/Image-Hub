import { FaSolidLocationDot } from "solid-icons/fa";
import { formatString } from "../common/utlity";
import { AiOutlineCloudDownload } from "solid-icons/ai";
import { FaSolidDownload } from "solid-icons/fa";
import { AiOutlineZoomIn } from "solid-icons/ai";
// @ts-ignore
import { saveAs } from "file-saver";

export const ImageCard = ({ imageInfo,showPreview }: any) => {
  
  const download = (url: string, id: string) => {
    saveAs(url, `download ${id}.png`);
  };

  return (
    <>
      <div class="w-64 h-80 bg-slate-600 rounded-md shadow-md m-auto">
        <img
          src={imageInfo.urls?.small}
          class="h-56 w-full object-cover rounded-t-md"
        />
        <div class="p-2">
          <div class="text-slate-100 font-semibold text-md mb-3 mt-1 flex items-center">
            <AiOutlineCloudDownload size={28} />
            <div class="flex items-center ml-2">
              <div
                onClick={(e) => download(imageInfo.urls?.small, imageInfo?.id)}
                class="text-slate-400 text-sm cursor-pointer
              hover:text-slate-200
              transition duration-300 ease-in-out
              "
              >
                Small
              </div>
              <div
                class="text-slate-400 text-sm ml-2 cursor-pointer
              hover:text-slate-200
              transition duration-300 ease-in-out
              "
                onClick={(e) =>
                  download(imageInfo.urls?.regular, imageInfo?.id)
                }
              >
                Medium
              </div>
              <div
                class="text-slate-400 text-sm ml-2 cursor-pointer
              hover:text-slate-200
              transition duration-300 ease-in-out
              "
                onClick={(e) => download(imageInfo.urls?.raw, imageInfo?.id)}
              >
                Large
              </div>
              <div
                class="text-slate-400 text-sm ml-4 cursor-pointer
              hover:text-slate-200
              transition duration-300 ease-in-out
              "
                onClick={(e) => showPreview(imageInfo.urls?.raw)}
              >
                <AiOutlineZoomIn size={24} />
              </div>
            </div>
          </div>

          {/* author details container  */}
          <div class="text-slate-100 text-sm mt-1">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  src={imageInfo.user?.profile_image?.small}
                  class="h-8 w-8 rounded-full"
                />
                <div class="flex flex-col text-slate-300 ">
                  <div class="ml-2">
                    <a
                      href={imageInfo.user?.links?.html}
                      class="font-normal"
                      target="_blank"
                    >
                      {formatString(imageInfo.user?.name, 30)}
                    </a>
                  </div>
                  {imageInfo.user?.location && (
                    <div class="ml-2 text-xs flex items-center">
                      {/* @ts-ignore */}
                      <FaSolidLocationDot style={"margin-right:4px"} />{" "}
                      {formatString(imageInfo.user?.location, 40)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
