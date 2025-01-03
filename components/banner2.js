export default function Banner2() {
  return (
    <div>
      <div class="bg-white/60 backdrop-blur-lg dark:bg-neutral-900/60">
        <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          <div class="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
            <div class="flex items-center gap-x-3 md:gap-x-5">
              <svg
                class="shrink-0 size-10 md:size-14"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  class="fill-blue-600"
                />
                <path
                  d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19"
                  stroke="white"
                  stroke-width="2"
                />
                <circle cx="20" cy="19.5214" r="5" fill="white" />
              </svg>

              <div class="grow">
                <p class="md:text-xl text-gray-800 font-semibold dark:text-neutral-200">
                  Get started today.
                </p>
                <p class="text-sm md:text-base text-gray-800 dark:text-neutral-200">
                  Sign up to get unlimited updates.
                </p>
              </div>
            </div>

            <div class="text-center sm:text-start flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
              <a
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Free trial
              </a>
              <a
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 dark:focus:text-neutral-300 dark:focus:border-neutral-300"
                href="#"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
