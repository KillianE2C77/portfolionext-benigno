import Image from "next/image";
import logo from "@src/assets/img/mazebank.png";
import metacode from "@src/assets/img/metacode.png";
import code from "@src/assets/img/code.jpg";
// import htmlcss from "@src/assets/img/htmlcss.jpg";
import js from "@src/assets/img/js.jpg";
import jss from "@src/assets/img/jss.png";
import csss from "@src/assets/img/csss.png";
import htmlcss2 from "@src/assets/img/htmlcss2.png";
import w from "@src/assets/img/w.jpg";
import unknown from "@src/assets/img/unknown.png";
import unknown2 from "@src/assets/img/unknown2.png";
import jsk from "@src/assets/img/jsk.svg";

let styles = {
  //Border
  bordera: "border-b-2 border-[#70542c]",
  borderb: "border-b-2 border-[#70542c]",
  aproposborder: "bg-gradient-to-r from-indigo-500 w-8 h-1 pl-96",
  aproposborder2: "bg-gradient-to-r from-indigo-500 w-8 h-1",
  aproposborder3: "bg-gradient-to-r from-indigo-500 w-8 h-1 pl-96",

  //Padding/Magin
  pl: "pl-96 pt-2",
  pl2: "pt-28",
  // pl3: "pt-8",

  //Titre
  prestitle:
    "uppercase text-yellow-500 text-center lg:text-red-500 lg:items-center",
  prestext:
    "text-white text-center pb-8 lg:text-5xl lg:font-semibold lg:pt-16 z-10",
  prestext2: "text-white text-center lg:font-semibold z-10",
  presgrid: "grid grid-cols-1",
  presflex: "flex h-96 flex-row justify-center lg:h-full lg:items-center",
  preshr:
    "border-dashed border-2 border-black lg:border-dashed lg:border-2 lg:border-white",
  colorpres:
    "w-screen h-70 bg-customGold-goldpure outline outline-offset-2 outline-1",
  imagepres:
    "z-0 bg-customBlack-blacklightdark shadow-lg shadow-black-500/50 lg:bg-customBlack-blacklightdark lg:shadow-lg lg:shadow-black-500/50",

  // A propos
  title:
    "uppercase text-yellow-500 text-center lg:text-4xl lg:text-[#00BFFF] font-semibold",
  apropostext:
    "text-white text-center pb-8 lg:text-[#6495ED] lg:text-xl lg:italic",
  apropostext2: "text-white text-center lg:text-customGold-goldpure",
  aproposgrid: "grid grid-cols-2",
  aproposflex:
    "flex flex-row justify-center lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-full bg-customBlack-blackdark",
  aproposhr:
    "border-dashed border-2 border-black lg:border-dashed lg:border-2 lg:border-white",
  colorapropos: "w-screen h-70 bg-customBlack-blackdark",
  aproposborderfin: "border-b-2 border-[#21b3d2]",

  // Skills
  titleskills: "uppercase text-yellow-500 text-center",
  skillstext: "text-white text-center pb-8",
  skillsext2: "text-white text-center",
  skillsgrid: "grid grid-cols-1",
  skillsflex: "flex flex-row justify-center",
  skillshr: "border-dashed border-2 border-yellow-600",
  colorskills: "w-screen h-52 bg-customBlack-blackdark lg:h-96",
  skillscolor: "inline-block bg-slate-500 m-2 text-white p-1 list-none text-lg",
  skilljs: "bg-customBlack-blacklightdark  lg:bg-customBlack-blacklightdark",
  skillmargin: "lg:p-8",

  // EXPERIENCE
  titleexperience:
    "uppercase text-customBlack-whitepure font-semibold text-center",
  titleannee: "uppercase font-bold text-customBlack-blackpure text-center ",
  experiencetext: " text-customBlack-blackpure text-center pb-8",
  experienceext2: " text-customBlack-blackpure text-center",
  experiencegrid: "grid grid-rows-1",
  experiencegridcols3: "grid grid-rows-3",
  experienceflex: "flex flex-col",
  experiencehr: "border-dashed border-2 border-yellow-600",
  colorexperience: "w-screen h-screen bg-customBlack-blackdark",
  experiencecolor:
    "flex justify-center inline-block border-b-2 border-[#70542c] m-2 text-white p-1 list-none text-lg",
  experienceblock1:
    "w-80 h-50 bg-customGold-goldpure outline outline-offset-2 outline-1",
  experienceblock2:
    "w-80 h-50 bg-customGold-goldpure mt-14 outline outline-offset-2 outline-1",
  experienceblock3:
    "w-80 h-50 bg-customGold-goldpure mt-14 outline outline-offset-2 outline-1",
  experienceblockflex: "flex justify-center",

  // Projet
  titleproject: "uppercase text-white m-5 text-center text-lg font-black",
  projecttext: " text-customBlack-blackpure text-center pb-8",
  projecttext2:
    "text-customBlack-whitepure text-center text-base font-semibold p-6",
  projectgrid: "grid grid-rows-1 lg:grid lg:grid-rows-1",
  projectgridcols3: "grid grid-rows-3 lg:grid lg:grid-rows-1",
  projectflex: "flex flex-col lg:flex lg:flex-row",
  projecthr: "border-dashed border-2 border-yellow-600",
  colorproject: "w-screen h-1/3 bg-customBlack-blackdark",
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
        <div className={styles.presflex}>
          <div className={styles.colorpres}>
            <div className={styles.imagepres}>
              <Image src={code} alt="logo" height="805" width="2000" />
              <div>
                <p className={styles.prestext}>Benigno Killian</p>
                <p className={styles.prestext}>Développeur Web</p>
                <div className={styles.aproposborderfin}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aproposgrid}>
        <div className={styles.aproposflex}>
          <div className={styles.colorapropos}>
            <div className={styles.pl}>
              <h1 className={styles.title}>A Propos!</h1>
              <div className={styles.aproposborder}></div>
            </div>
          </div>
        </div>

        <div className={styles.aproposflex}>
          <div className={styles.colorapropos}>
            {/* <h1 className={styles.title}>A Propos!</h1> */}

            <p className={styles.apropostext}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              illo aspernatur nam qui commodi vero error voluptate optio amet
              minus iure esse molestias mollitia perferendis explicabo aut,
              reiciendis nulla ipsam?
            </p>

            <p className={styles.apropostext}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              illo aspernatur nam qui commodi vero error voluptate optio amet
              minus iure esse molestias mollitia perferendis explicabo aut,
              reiciendis nulla ipsam?
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aproposborderfin}></div>

      <div className={styles.skillssgrid}>
        <div className={styles.skillsflex}>
          <div className={styles.colorskills}>
            <div className={styles.pl3}>
              <h1 className={styles.title}>Skills</h1>

              <div className={styles.skillsflex}>
                <div className={styles.skilljs}>
                  <ul>
                    <li className={styles.skillscolor}>
                      <a href="#">Html</a>
                    </li>
                    <Image src={unknown} alt="logo" height="120" width="120" />
                    <div className={styles.skillmargin}></div>
                    <li className={styles.skillscolor}>
                      <a href="#">Css</a>
                    </li>
                    <Image src={unknown2} alt="logo" height="120" width="120" />
                    <li className={styles.skillscolor}>
                      <a href="#">Javascript</a>
                    </li>
                    <Image src={jsk} alt="logo" height="120" width="120" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.experienceflex}>
        <div className={styles.colorexperience}>
          <div className={styles.pl2}>
            <h1 className={styles.title}>experience</h1>
            <div className={styles.pl}>
              <div className={styles.aproposborder}></div>
            </div>
          </div>
          <div className={styles.experiencecolor}></div>
          <h3 className={styles.titleannee}>2022 - 2023</h3>
          <div className={styles.experiencegridcols3}>
            <div className={styles.experienceblockflex}>
              <div className={styles.experienceblock1}>
                <h3 className={styles.titleexperience}>A Propos!</h3>
                <h4 className={styles.titleexperience}>A Propos!</h4>
                <p className={styles.experienceext2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  illo aspernatur nam qui commodi vero error voluptate optio
                  amet minus iure esse molestias mollitia perferendis explicabo
                  aut, reiciendis nulla ipsam?
                </p>

                {/* <h3 className={styles.titleannee}>2022 - 2023</h3> */}

                <div className={styles.experienceblock2}>
                  <h3 className={styles.titleexperience}>
                    ACS (Access Code School)
                  </h3>
                  <h4 className={styles.titleexperience}>Formation!</h4>
                  <p className={styles.experienceext2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius illo aspernatur nam qui commodi vero error voluptate
                    optio amet minus iure esse molestias mollitia perferendis
                    explicabo aut, reiciendis nulla ipsam?
                  </p>

                  {/* <h3 className={styles.titleannee}>2022 - 2023</h3> */}
                  <div className={styles.experienceblock3}>
                    <h3 className={styles.titleexperience}>A Propos!</h3>
                    <h4 className={styles.titleexperience}>A Propos!</h4>
                    <p className={styles.experienceext2}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eius illo aspernatur nam qui commodi vero error voluptate
                      optio amet minus iure esse molestias mollitia perferendis
                      explicabo aut, reiciendis nulla ipsam?
                    </p>
                  </div>
                </div>
              </div>
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
                    <Image src={logo} alt="logo" height="175" width="400" />
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
                  </p>
                </div>
              </div>

              <div className={styles.projectblock2}>
                <div className={styles.imagemazebank}>
                  <Image src={metacode} alt="logo" height="175" width="400" />
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
                </p>
              </div>

              <div className={styles.projectblock1}>
                <div className={styles.imagemazebank}>
                  <Image src={logo} alt="logo" height="175" width="400" />
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
