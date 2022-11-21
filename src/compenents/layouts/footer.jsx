let styles = {
  bgblacksmooth: "bg-black w-screen h-52",
  bordergold: "border border-yellow-500",
  footerflex: "flex flex-col justify-center",
  footergrid: "grid grid-rows-1",
  footertext: "uppercase text-white text-center",
};

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font bg-customBlack-blackdark">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"></a>
        <p class="text-sm text-blue-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-500 sm:py-2 sm:mt-0 mt-4">
          © Benigno Killian
          <a
            href="https://twitter.com/knyttneve"
            class="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          ></a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="ml-3 text-blue-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
