import Image from "next/image";
// import metacode from "@src/assets/Image/metacode.png";
// import code from "@src/assets/Image/code.jpg";
// import htmlcss from "@src/assets/Image/htmlcss.jpg";
// import js from "@src/assets/Image/js.jpg";
import jss from "@src/assets/img/jss.png";
// import csss from "@src/assets/Image/csss.png";
import html from "@src/assets/img/html.png";
// import w from "@src/assets/Image/w.jpg";
// import html from "@src/assets/Image/html.png";
import css from "@src/assets/img/css.png";
import wordpress from "@src/assets/img/wordpress.jpg";

let styles = {
  //Border
  bordera: "border-b-2 border-[#70542c]",
  borderb: "border-b-2 border-[#70542c]",
  aproposborder: "bg-gradient-to-r from-indigo-500 w-8 h-1 pl-96",
  aproposborder2: "bg-gradient-to-r from-indigo-500 w-8 h-1",
  aproposborder3: "bg-gradient-to-r from-indigo-500 w-8 h-1 pl-96",
  shadow: "lg:shadow-2xl lg:shadow-indigo-500/90",

  //Padding/Magin
  pl: "pl-96 pt-2",
  pl2: "pt-28",
  // pl3: "pt-8",

  //Titre
  prestitle:
    "uppercase text-yellow-500 text-center lg:text-red-500 lg:items-center",
  prestext:
    "text-white text-center pb-8 lg:text-5xl lg:font-semibold lg:pt-16 z-10 lg:text-blue-300",
  prestext2: "text-white text-center lg:font-semibold z-10",
  presgrid: "grid grid-cols-1",
  presflex: "flex h-96 flex-row justify-center lg:h-full lg:items-center ",
  preshr:
    "border-dashed border-2 border-black lg:border-dashed lg:border-2 lg:border-white",
  colorpres:
    "w-screen h-70 bg-gradient-to-b from-blue-800 via-black-50 bg-gray-800",
  imagepres:
    "z-0 bg-customBlack-blacklightdark shadow-lg shadow-black-500/50 lg:bg-customBlack-blacklightdark lg:shadow-lg lg:shadow-black-500/50",

  // A propos
  title:
    "uppercase text-yellow-500 text-center lg:text-4xl lg:text-blue-300 font-semibold",
  apropostext:
    "text-white text-center pb-8 lg:text-blue-300 lg:text-xl lg:italic",
  apropostext2: "text-white text-center lg:text-customGold-goldpure",
  aproposgrid: "grid grid-cols-2",
  aproposflex:
    "flex flex-row justify-center lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-full bg-customBlack-blackdark bg-gradient-to-t from-blue-800 via-black-50 bg-gray-800",
  aproposhr:
    "border-dashed border-2 border-black lg:border-dashed lg:border-2 lg:border-white",
  colorapropos:
    "w-screen h-70 bg-customBlack-blackdark bg-gradient-to-r from-blue-800 via-black-50 bg-gray-800",
  aproposborderfin: "border-b-2 border-[#21b3d2]",

  // Skills
  titleskills: "uppercase text-yellow-500 text-center",
  skillstext: "text-white text-center pb-8",
  skillsext2: "text-white text-center",
  skillsgrid: "grid grid-cols-1",
  skillsflex: "flex flex-row justify-center",
  skillshr: "border-dashed border-2 border-yellow-600",
  colorskills:
    "w-screen h-52 bg-customBlack-blackdark lg:h-96 lg:bg-gradient-to-b from-blue-800 via-black-50 bg-gray-800",
  skillscolor:
    "inline-block bg-slate-500 m-2 text-white p-1 list-none text-lg ",
  skilljs:
    "bg-customBlack-blacklightdark bg-gradient-to-t from-blue-800 via-blue-800 bg-gray-800",
  skillmargin: "lg:p-8",

  // EXPERIENCE
  titleexperience:
    "uppercase text-customBlack-whitepure font-semibold text-center",
  titleannee: "uppercase font-bold lg:text-blue-300 text-center ",
  experiencetext: " lg:text-blue-300 text-center pb-8",
  experienceext2: " lg:text-blue-300 text-center",
  experiencegrid: "grid grid-rows-1",
  experiencegridcols3: "grid grid-rows-3",
  experienceflex: "flex flex-col",
  experiencehr: "border-dashed border-2 border-yellow-600",
  colorexperience:
    "w-screen h-screen bg-customBlack-blackdark bg-gradient-to-t from-blue-800 via-black-50 bg-gray-800",
  experiencecolor:
    "flex justify-center inline-block border-b-2 border-blue-800 m-2 text-white p-1 list-none text-lg ",
  experienceblock1:
    "w-80 h-50 bg-gradient-to-b from-blue-700 via-=black-50 bg-gray-800 outline outline-offset-2 outline-1",
  experienceblock2:
    "w-80 h-50 bg-gradient-to-b from-blue-700 via-=black-50 bg-gray-800 mt-14 outline outline-offset-2 outline-1",
  experienceblock3:
    "w-80 h-50 bg-gradient-to-b from-blue-700 via-=black-50 bg-gray-800 mt-14 outline outline-offset-2 outline-1",
  experienceblockflex: "flex justify-center",

  // Projet
  titleproject: "uppercase lg:text-white m-5 text-center text-lg font-black",
  projecttext: " text-customBlack-blackpure text-center pb-8",
  projecttext2:
    "text-customBlack-whitepure text-center text-base font-semibold p-6",
  projectgrid: "grid grid-rows-1 lg:grid lg:grid-rows-1",
  projectgridcols3: "grid grid-rows-3 lg:grid lg:grid-rows-1",
  projectflex: "flex flex-col lg:flex lg:flex-row",
  projecthr: "border-dashed border-2 border-yellow-600",
  colorproject:
    "w-screen h-1/3 bg-gradient-to-b from-blue-800 via-black-50 bg-gray-800",
  projectcolor:
    "flex justify-center inline-block border-b-2 border-indigo-500 m-2 text-white p-1 list-none text-lg",
  projectblock1:
    "w-96 h-50 bg-customRed-redpure shadow-lg shadow-red-500/50  outline outline-offset-2 outline-1",
  projectblock2:
    "w-96 h-50 bg-green-800 shadow-lg shadow-green-500/50 outline outline-offset-2 outline-1 m-12",
  projectblock3:
    "w-96 h-50 bg-customRed-redpure shadow-lg shadow-red-500/50  outline outline-offset-2 outline-1",
  projectblockflex: "flex flex-col justify-center items-center",

  projectpictureflex: "flex flex-row justify-center",
  projectpicturecolor:
    "inline-block bg-customGrey-graypure m-2 text-customBlack-whitepure p-1 list-none text-lg rounded leading-none font-black p-1.5",
  imagemazebank: "bg-customBlack-blacklightdark shadow-lg shadow-black-500/50",
  imagemazemetacode: "bg-green-800 shadow-lg shadow-green-500/50",
  hover:
    "hover:opacity-1 hover:bg-black hover:ease-in active:bg-white focus:outline-none",
};
const Content = () => {
  return (
    <>
      <div className={styles.presgrid}>
        <div className={styles.shadow}>
          <div className={styles.presflex}>
            <div className={styles.colorpres}>
              {/* <div className={styles.imagepres}>
              <Image src={code} alt="logo" height="805" width="2000" /> */}
              <div>
                <p className={styles.prestext}>Benigno Killian</p>
                <p className={styles.prestext}>Développeur Web</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <section class="text-gray-600 body-font bg-gradient-to-t from-blue-800 via-black-50 bg-gray-800">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl lg:text-blue-300 font-medium title-font mb-2 md:w-2/5 ">
            A propos
          </h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base lg:text-blue-300">
              A la sortie du cursus scolaire, j'ai décidé de poursuivre mes
              études afin de devenir un développeur web dans le domaine du
              Front-End. Pour ce faire, j'ai un stage à réaliser pour la péruide
              du 09 janvier au 03 mars 2023.
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-gradient-to-b from-blue-800 via-black-50 bg-gray-800">
        <h1 className={styles.title}>compétences</h1>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={html}
                  width="500"
                  height="500"
                />
                <span class="inline-flex"></span>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={css}
                  width="500"
                  height="500"
                />
                <div class="w-full">
                  <span class="inline-flex"></span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={jss}
                />
                <div class="w-full">
                  <span class="inline-flex"></span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={wordpress}
                />
                <div class="w-full">
                  <span class="inline-flex"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.experienceflex}>
        <div className={styles.colorexperience}>
          <div className={styles.pl2}>
            <h1 className={styles.title}>experience</h1>
            <div className={styles.pl}>
              <div className={styles.aproposborder}></div>
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                  <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      1
                    </div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-[#C27385] mb-1 text-xl">
                          BAC Systèmes numériques (2021-2022)
                        </h2>
                        {/* text */}
                        <p class="leading-relaxed lg:text-blue-300">eazeaea</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      2
                    </div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-[#C27385] mb-1 text-xl">
                          E2C Meaux - Formation pré-qualifiante (2022)
                        </h2>
                        <p class="leading-relaxed text-blue-300">
                          VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                          Kinfolk bespoke try-hard cliche palo santo offal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      3
                    </div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="5" r="3"></circle>
                          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-[#C27385] mb-1 text-xl">
                          Access Code School Meaux - Développeur web et web
                          mobile (2022-2023)
                        </h2>
                        <p class="leading-relaxed text-blue-300">
                          VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                          Kinfolk bespoke try-hard cliche palo santo offal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      4
                    </div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-[#C27385] mb-1 text-xl">
                          Neptune
                        </h2>
                        <p class="leading-relaxed text-blue-300">
                          VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                          Kinfolk bespoke try-hard cliche palo santo offal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectflex}>
        <div className={styles.colorproject}>
          <h1 className={styles.title}>project</h1>
          <div className={styles.pl}>
            <div className={styles.aproposborder}></div>
          </div>

          <div className={styles.projectcolor}></div>
          <div className={styles.projectgridcols3}>
            <div className={styles.projectblockflex}>
              <div className={styles.hover}>
                <div className={styles.projectblock1}>
                  <div className={styles.imagemazebank}>
                    {/* <Image src={logo} alt="logo" height="175" width="400" /> */}
                  </div>

                  <h2 className={styles.titleproject}>
                    Maze Bank - Site banquaire
                  </h2>

                  <div className={styles.projectpictureflex}>
                    <ul>
                      <li className={styles.projectpicturecolor}>
                        <a href="#">html</a>
                      </li>
                      <li className={styles.projectpicturecolor}>
                        <a href="#">css</a>
                      </li>
                      <li className={styles.projectpicturecolor}>
                        <a href="#">javascript</a>
                      </li>
                    </ul>
                  </div>

                  <p className={styles.projecttext2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius illo aspernatur nam qui commodi vero error voluptate
                    optio amet minus iure esse molestias mollitia perferendis
                    explicabo aut, reiciendis nulla ipsam?
                    <button
                      type="button"
                      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Voir
                    </button>
                  </p>
                </div>
              </div>

              <div className={styles.projectblock2}>
                <div className={styles.imagemazebank}>
                  {/* <Image src={metacode} alt="logo" height="175" width="400" /> */}
                </div>

                <h2 className={styles.titleproject}>
                  Maze Bank - Site banquaire
                </h2>

                <div className={styles.projectpictureflex}>
                  <ul>
                    <li className={styles.projectpicturecolor}>
                      <a href="#">html</a>
                    </li>
                    <li className={styles.projectpicturecolor}>
                      <a href="#">css</a>
                    </li>
                    <li className={styles.projectpicturecolor}>
                      <a href="#">javascript</a>
                    </li>
                  </ul>
                </div>

                <p className={styles.projecttext2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  illo aspernatur nam qui commodi vero error voluptate optio
                  amet minus iure esse molestias mollitia perferendis explicabo
                  aut, reiciendis nulla ipsam?
                  <button
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Voir
                  </button>
                </p>
              </div>

              <div className={styles.projectblock1}>
                <div className={styles.imagemazebank}>
                  {/* <Image src={logo} alt="logo" height="175" width="400" /> */}
                </div>

                <h2 className={styles.titleproject}>
                  Maze Bank - Site banquaire
                </h2>

                <div className={styles.projectpictureflex}>
                  <ul>
                    <li className={styles.projectpicturecolor}>
                      <a href="#">html</a>
                    </li>
                    <li className={styles.projectpicturecolor}>
                      <a href="#">css</a>
                    </li>
                    <li className={styles.projectpicturecolor}>
                      <a href="#">javascript</a>
                    </li>
                  </ul>
                </div>

                <p className={styles.projecttext2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  illo aspernatur nam qui commodi vero error voluptate optio
                  amet minus iure esse molestias mollitia perferendis explicabo
                  aut, reiciendis nulla ipsam?
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Voir
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
