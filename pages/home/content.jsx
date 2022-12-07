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
import mazebank from "@src/assets/img/mazebank.png";
// import code from "@src/assets/img/code.jpg";
import photokillian from "@src/assets/img/photokillian.jpg";
// import github from "@src/assets/img/github.png";
import wordpress from "@src/assets/img/wordpress.jpg";
import wordpress2 from "@src/assets/img/wordpress.jpg";
import metacode from "@src/assets/img/metacode.png";
import boutique from "@src/assets/img/boutique.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

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
    "uppercase text-yellow-500 text-center lg:text-4xl lg:text-blue-300 font-semibold relative backdrop-filter backdrop-blur-lg bg-black/50 font-Orbitron",
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
    "w-screen h-1/3 bg-gradient-to-b from-blue-800 via-black-50 bg-gray-800 p-52",
  projectcolor:
    "flex justify-center inline-block border-b-2 border-indigo-500 m-2 text-white p-1 list-none text-lg",
  projectblock1: "w-96 h-50 bg-blue-500 shadow-lg shadow-red-500/50 ",
  projectblock2:
    "w-96 h-50 bg-green-800 shadow-lg shadow-green-500/50 outline outline-offset-2 outline-1 m-12",
  projectblock3:
    "w-96 h-50 bg-customRed-redpure shadow-lg shadow-red-500/50  outline outline-offset-2 outline-1",
  projectblockflex: "flex flex-col justify-center items-center",

  projectpictureflex: "flex flex-row justify-center",
  projectpicturecolor:
    "inline-block bg-blue-500 m-2 text-white p-1 list-none text-lg rounded leading-none font-black p-1.5 font-Orbitron",
  projectpicturecolor2:
    "inline-block bg-blue-500 m-2 text-white p-1 list-none text-lg rounded leading-none font-black p-1.5 font-Orbitron",
  imagemazebank: "bg-customBlack-blacklightdark shadow-lg shadow-black-500/50",
  imagemetacode: "bg-green-800 shadow-lg shadow-green-400/50",
  imageboutique: "bg-pink-700 shadow-lg shadow-pink-500/50",
  hover:
    "hover:opacity-1 hover:bg-black hover:ease-in active:bg-white focus:outline-none",
};

const Content = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-b from-blue-800 via-black-50 bg-gray-300 h-screen ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 justify-center items-center text-center">
            <h1
              className="title-font sm:text-4xl lg:text-7xl mb-4 font-medium text-blue-200 recursive font-Orbitron"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              {" "}
              Benigno Killian
              <br className="hidden lg:inline-block text-blue-300 body-font font-Orbitron" />
              Développeur web Front End
            </h1>

            <div className="bg-gradient-to-r from-indigo-800 w-4/5 h-1"></div>
            <div className="flex justify-center items-center">
              <h2 className="title-font tracking-wider text-orange-300 font-semibold text-2xl font-Orbitron pt-8">
                Voir plus
              </h2>
            </div>

            <div className="flex justify-center items-center mt-4">
              <a href="https://www.linkedin.com/">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span class="font-Orbitron relative px-5 py-2.5 transition-all ease-in duration-75 bg-orange-400 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-white">
                    Mon CV
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gradient-to-t from-blue-800 via-black-50 bg-gray-800">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex justify-center items-center-m-4 relative backdrop-filter backdrop-blur-lg bg-black/50">
            <div className="lg:w-1/3 lg:mb-0 p-4 ">
              <div className="h-full text-center">
                <section id="apropos"></section>
                <Image
                  alt="testimonial"
                  className="w-10 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={photokillian}
                />

                <p className="leading-relaxed text-blue-300 text-2xl font-semibold font-Orbitron">
                  A la sortie du cursus scolaire, j`ai décidé de poursuivre mes
                  études afin de devenir un développeur web dans le domaine du
                  Front-End. Pour ce faire, j`ai un stage à réaliser pour la
                  péruide du 09 janvier au 03 mars 2023.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="title-font tracking-wider  text-[#C27385] font-semibold text-1xl font-Orbitron">
                  BENIGNO KILLIAN
                </h2>
                <section id="competences"></section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Compétences */}
      <section className="text-gray-600 body-font bg-gradient-to-b from-blue-800 via-black-50 bg-gray-800">
        <h1 className={styles.title}>compétences</h1>
        <div
          className="container px-5 py-24 mx-auto"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="flex flex-wrap m-4 backdrop-filter backdrop-blur-lg bg-white/20 ">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
            <div className="p-4 lg:w-1/4 md:w-1/2 ">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={html}
                  width="120"
                  height="150"
                />

                <span className="inline-flex"></span>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 "
                  src={css}
                  width="120"
                  height="150"
                />
                <div className="w-full">
                  <span className="inline-flex"></span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={jss}
                  width="120"
                  height="150"
                />
                <div className="w-full">
                  <span className="inline-flex"></span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={wordpress}
                  width="120"
                  height="150"
                /> */}
                <i class="fa-brands fa-wordpress"></i>
                <div className="w-full">
                  <span className="inline-flex"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.experienceflex}>
        <div className={styles.colorexperience}>
          <div className={styles.pl2}>
            <h1 className={styles.title} data-aos="fade-up">
              experience
            </h1>
            <section id="experience"></section>
            <div className={styles.pl}>
              <div className={styles.aproposborder}></div>

              <section
                className="text-gray-600 body-font"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div className="container px-5 py-24 mx-auto flex flex-wrap ">
                  <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto ">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center ">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      1
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>

                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-[#C27385] mb-1 text-xl font-Orbitron">
                          BAC Systèmes numériques (2021-2022)
                        </h2>
                        {/* text */}
                        <p className="leading-relaxed lg:text-blue-300">
                          Câblages électriques
                        </p>
                        <p className="leading-relaxed lg:text-blue-300">
                          Fibre optique
                        </p>
                        <p className="leading-relaxed lg:text-blue-300">
                          Culture web
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      2
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-[#C27385] mb-1 text-xl font-Orbitron">
                          E2C Meaux - Formation pré-qualifiante (2022)
                        </h2>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Initiation outils bureautiques
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Initiation au code
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      3
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="5" r="3"></circle>
                          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-[#C27385] mb-1 text-xl font-Orbitron">
                          Access Code School Meaux - Développeur web et web
                          mobile (2022-2023)
                        </h2>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Intégration d`une maquette + landing page
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Création d`un portfolio
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Création d`une agence web
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Création d`un site bancaire
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Création d`une boutique
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Création d`un blog
                        </p>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          Création d`un site de films
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      4
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-[#C27385] mb-1 text-xl">
                          ?
                        </h2>
                        <p className="leading-relaxed text-blue-300 font-Orbitron">
                          ?
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
          <section id="project"></section>
          <section
            className="text-gray-600 body-font"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative backdrop-filter backdrop-blur-lg bg-black/60">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-red-500 via-red-400 to-red-600 hover:opacity-70"></div>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 font-Orbitron">
                      MazeBank
                    </h1>
                    <div className={styles.projectblock1}>
                      <div className={styles.imagemazebank}>
                        <Image
                          src={mazebank}
                          alt="logo"
                          height="175"
                          width="400"
                        />
                      </div>
                    </div>
                    4
                    <p className="leading-relaxed mb-3 text-center text-white font-Orbitron">
                      Site banquaire
                    </p>
                    <div className={styles.projectpictureflex}>
                      <ul>
                        <li className={styles.projectpicturecolor}>
                          <a href="#">html</a>
                        </li>
                        <li className={styles.projectpicturecolor2}>
                          <a href="#">css</a>
                        </li>
                        <li className={styles.projectpicturecolor}>
                          <a href="#">javascript</a>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center mb-14 leading-none flex justify-center absolute bottom-0 left-0 w-full">
                      <a href="https://github.com/KillianE2C77/Mazee-bank/tree/dev">
                        <GitHubIcon alt="testimonial" />;
                      </a>
                      <a href="https://mazebankbng.netlify.app/">
                        <WebIcon alt="testimonial" />
                      </a>
                    </div>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 ">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative backdrop-filter backdrop-blur-lg bg-black/60">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-green-500 via-slate-100 to-green-500 hover:opacity-70"></div>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 font-Orbitron">
                      Metacode
                    </h1>
                    <div className={styles.projectblock1}>
                      <div className={styles.imagemetacode}>
                        <Image
                          src={metacode}
                          alt="logo"
                          height="175"
                          width="400"
                        />
                      </div>
                    </div>
                    <p className="leading-relaxed mb-3 text-center text-white font-Orbitron">
                      Site d`agence
                    </p>
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
                    <div className="text-center mb-14 leading-none flex justify-center absolute bottom-0 left-0 w-full">
                      <a href="https://github.com/MEGK-171/agence-web">
                        <GitHubIcon alt="testimonial" />;
                      </a>
                      <a href="https://meta-code.netlify.app/">
                        <WebIcon alt="testimonial" />
                      </a>
                    </div>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative backdrop-filter backdrop-blur-lg bg-black/60">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 font-Orbitron">
                      Boutique
                    </h1>
                    <div className={styles.projectblock1}>
                      <div className={styles.imageboutique}>
                        <Image
                          src={boutique}
                          alt="logo"
                          height="175"
                          width="400"
                        />
                      </div>
                    </div>

                    <p className="leading-relaxed mb-3 text-white font-Orbitron">
                      Boutique wordpress
                    </p>
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
                    <div className="text-center mb-14 leading-none flex justify-center absolute bottom-0 left-0 w-full">
                      <a href="https://metadev-mrp.fr/">
                        <GitHubIcon alt="testimonial" />;
                      </a>
                      <a href="https://metadev-mrp.fr/">
                        <WebIcon alt="testimonial" />
                      </a>
                    </div>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      {/* <Image
                        alt="testimonial"
                        className="w-full h-56 object-cover object-center mb-4"
                        src={github}
                      /> */}
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Content;
