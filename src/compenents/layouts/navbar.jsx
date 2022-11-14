let styles = {
  bgblack: "bg-black w-screen h-40",
  bgblacksmooth: "bg-customBlack-blackdark w-auto h-24",
  bordergold: "border border-yellow-500",
  bgwhite: "bg-white",
  navbarflex:
    "flex flex-rows justify-center lg:flex lg:flex-rows lg:justify-center lg:items-center lg:h-full",
  navbargrid: "grid grid-rows grid-rows-1 lg:grid lg:grid-rows-1",
  navbarpadding: "m-4",
  navbartext: "uppercase text-white lg:text-2xl lg:font-semibold ",
  // border: "hover:border-y-4 border-white",
};

const Navbar = () => {
  return (
    // Navbar
    <div className={styles.navbargrid}>
      <div className={styles.bgblacksmooth}>
        <div className={styles.navbarflex}>
          <div className={styles.border}>
            <div className={styles.navbartext}>
              <ul className={styles.navbarflex}>
                <li className="mr-16 hover:border-y-4 hover:animate-bounce border-white ">
                  <a href="#">A propos</a>
                </li>
                <li className="mr-16 hover:border-y-4 border-white">
                  <a href="#">Experience</a>
                </li>
                <li className="mr-16">
                  <a href="#">Projet</a>
                </li>
                <li className="mr-16">
                  <a href="#">Contacte</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
