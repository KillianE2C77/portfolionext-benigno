let styles = {
  bgblack: "bg-black w-screen h-40",
  bgblacksmooth: "bg-customBlack-blackdark  w-auto h-24",
  bordergold: "border border-yellow-500",
  bgwhite: "bg-white",
  navbarflex:
    "flex flex-rows justify-center lg:flex lg:flex-rows lg:justify-center lg:items-center lg:h-full",
  navbargrid: "grid grid-rows grid-rows-1 lg:grid lg:grid-rows-1",
  navbarpadding: "m-4",
  navbartext: "uppercase text-white lg:text-2xl lg:font-semibold ",
};

const Navbar = () => {
  return (
    // Navbar

    <div className={styles.navbargrid}>
      <div className={styles.bgblacksmooth}>
        <div className={styles.navbarflex}>
          <div className={styles.navbartext}>
            <ul
              className={styles.navbarflex}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <li className="mr-16 mt-4 px-10 py-5  uppercase font-semibold tracking-wider leading-none hover:text-blue-600 font-Orbitron ">
                <a href="#">A propos</a>
              </li>
              <li className="mr-16 mt-4 px-10 py-5  uppercase font-semibold tracking-wider leading-none hover:text-blue-600 font-Orbitron">
                <a href="#">Experience</a>
              </li>
              <li className="mr-16 mt-4 px-10 py-5  uppercase font-semibold tracking-wider leading-none hover:text-blue-600 font-Orbitron">
                <a href="#">Projet</a>
              </li>
              <li className="mr-16 mt-4 px-10 py-5  uppercase font-semibold tracking-wider leading-none hover:text-blue-600 font-Orbitron">
                <a href="#">Contacte</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
