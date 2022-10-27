let styles = {
  bgblack: "bg-black w-screen h-40",
  bgblacksmooth: "bg-customBlack-blackdark w-auto h-24",
  bordergold: "border border-yellow-500",
  bgwhite: "bg-white",
  navbarflex: "flex flex-row justify-center",
  navbargrid: "grid grid-cols-1",
  navbartext: "uppercase text-white",
  logo: "h-auto w-20 w-40",
};

const Navbar = () => {
  return (
    // Navbar
    <div className={styles.navbargrid}>
      <div className={styles.bgblacksmooth}>
        <div className={styles.bordergold}>
          <div className={styles.navbarflex}>
            <ul className={styles.navbartext}>
              <li>
                <a href="#">A propos</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Projet</a>
              </li>
              <li>
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
