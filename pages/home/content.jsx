import Image from "next/image";
import logo from "@src/assets/img/mazebank.png";
import metacode from "@src/assets/img/metacode.png";

let styles = {
  title: "uppercase text-yellow-500 text-center",
  apropostext: "text-white text-center pb-8",
  apropostext2: "text-white text-center",
  aproposgrid: "grid grid-cols-1",
  aproposflex: "flex flex-row justify-center",
  aproposhr: "border-dashed border-2 border-black",
  colorapropos:
    "w-screen h-70 bg-customGold-goldpure outline outline-offset-2 outline-1",

  titleskills: "uppercase text-yellow-500 text-center",
  skillstext: "text-white text-center pb-8",
  skillsext2: "text-white text-center",
  skillsgrid: "grid grid-cols-1",
  skillsflex: "flex flex-row justify-center",
  skillshr: "border-dashed border-2 border-yellow-600",
  colorskills: "w-screen h-52 bg-customBlack-blackdark",
  skillscolor: "inline-block bg-slate-500 m-2 text-white p-1 list-none text-lg",

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

  titleproject: "uppercase text-white m-5 text-center text-lg font-black",
  projecttext: " text-customBlack-blackpure text-center pb-8",
  projecttext2:
    "text-customBlack-whitepure text-center text-base font-semibold p-6",
  projectgrid: "grid grid-rows-1",
  projectgridcols3: "grid grid-rows-3",
  projectflex: "flex flex-col",
  projecthr: "border-dashed border-2 border-yellow-600",
  colorproject: "w-screen h-screen bg-customBlack-blackdark",
  projectcolor:
    "flex justify-center inline-block border-b-2 border-indigo-500 m-2 text-white p-1 list-none text-lg",
  projectblock1:
    "w-96 h-50 bg-customRed-redpure shadow-lg shadow-red-500/50  outline outline-offset-2 outline-1",
  projectblock2:
    "w-96 h-50 bg-green-800 shadow-lg shadow-green-500/50  outline outline-offset-2 outline-1",
  projectblock3:
    "w-96 h-50 bg-customRed-redpure shadow-lg shadow-red-500/50  outline outline-offset-2 outline-1",
  projectblockflex: "flex justify-center",

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
      <div className={styles.aproposgrid}>
        <div className={styles.aproposflex}>
          <div className={styles.colorapropos}>
            <div className={styles.aproposhr}>
              <h1 className={styles.title}>A Propos!</h1>
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
      </div>

      <div className={styles.skillssgrid}>
        <div className={styles.skillsflex}>
          <div className={styles.colorskills}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.skillsflex}>
              <ul>
                <li className={styles.skillscolor}>
                  <a href="#">Html</a>
                </li>
                <li className={styles.skillscolor}>
                  <a href="#">Css</a>
                </li>
                <li className={styles.skillscolor}>
                  <a href="#">Javascript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.experienceflex}>
        <div className={styles.colorexperience}>
          <h1 className={styles.title}>experience</h1>
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