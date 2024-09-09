import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.formContainer}>
        <div className={style.formHeading}>
          <div className={style.formTitle}>Let’s connect constellations</div>
          <div className={style.formSubtitle}>
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </div>
        </div>
        <div className={style.formBody}>
          <div className={style.name}>
            <input className={style.fname} placeholder="First Name"></input>
            <input className={style.lname} placeholder="Last Name"></input>
          </div>
          <input className={style.email} placeholder="Email"></input>
          <input className={style.phone} placeholder="Phone"></input>
          <input className={style.message} placeholder="Message"></input>
          <button className={style.submit}>
            Send it to the moon{" "}
            <img
              src="./images/rocket.png"
              className={style.rocketImg}
              alt="Button Image"
            />
          </button>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img
          src="./images/astro.png"
          alt="img here"
          className={style.imageAstro}
        />
        <div></div>
        <div className={style.imageDesc}>
          <div className={style.imageDescQuote}>
            “Two lunar months revealed Earth's fragile beauty against vast
            silence, transforming my view of our place in the universe."
          </div>
          <div className={style.imageDescAuthor}>Irinel Traista</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
