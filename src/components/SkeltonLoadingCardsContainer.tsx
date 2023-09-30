import { createEffect, createSignal } from "solid-js"


const SkeltonLoadingCardsCotainer = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div
            class="grid grid-cols-1 gap-6 justify-center
        xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4
          mt-8 pb-14
          sm:mt-16
          "
        >
            {numbers.map(num => (
                <CardLoader />
            ))}
        </div>
    )
}

const CardLoader = () => {
    return (<div role="status" class="space-y-4 animate-pulse md:space-y-0 flex-col border-slate-300 border w-64 rounded-md">
        <div class="flex items-center justify-center w-64 h-48  bg-gray-300 rounded dark:bg-gray-700 ">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
        </div>
        <div class="w-64 mt-0 px-3 pb-3">
            <div class="flex items-center justify-between mt-2">
                <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-6"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 "></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 "></div>
                <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-6"></div>
            </div>
            <div class="flex items-center gap-2 mt-2">
                <div class="h-10 bg-gray-300 rounded-full dark:bg-gray-600 w-10"></div>
                <div class="flex-col gap-2">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2"></div>
                    <div class="flex">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-2.5 mr-2"></div>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40"></div>
                    </div>
                </div>
            </div>
        </div>
        <span class="sr-only">Loading...</span>
    </div >)
}

export default SkeltonLoadingCardsCotainer