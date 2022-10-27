let styles = {
  bgblacksmooth: "bg-black w-screen h-52",
  bordergold: "border border-yellow-500",
  footerflex: "flex flex-cols justify-center",
  footergrid: "grid grid-rows-3",
  footertext: "uppercase text-white text-center",
};

const Footer = () => {
  return (
    <footer>
      <div className={styles.footergrid}>
        <div className={styles.footerflex}>
          <div className={styles.bgblacksmooth}>
            <div className={styles.footertext}>
              <p>Copyright @blablabla</p>
              <p>eaze</p>
              <p>eaze</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
