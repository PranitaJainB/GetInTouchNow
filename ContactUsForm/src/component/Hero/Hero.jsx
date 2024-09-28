import style from "./Hero.module.css";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { RxRocket } from "react-icons/rx";
import Button from "../Button/Button";

const Hero = () => {
  const onBtnClick = (btnName) =>    
    console.log(`User clicked ${btnName} button, this is from Child value`);
  
  const inputLog = (e) => 
    console.log(`${e.target.name} : ${e.target.value} `);
  

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
            <input name="firstName"  className={style.fname} placeholder="First Name" onInput={inputLog}></input>
            <input name="lastName" className={style.lname} placeholder="Last Name"></input>
          </div>
          <input className={style.email} placeholder="Email"></input>
          <input className={style.phone} placeholder="Phone"></input>
          <input className={style.message} placeholder="Message"></input>
          <Button name="submitButton" text="Submit" icon={<RxRocket />} btnPrimary={true} onBtnClick={onBtnClick}  />
          <div className={style.name}>
            <Button
            name="chatButton"
              text="Chat"
              icon={<IoChatboxEllipsesOutline />}
              onBtnClick={onBtnClick}
            />
            <Button name="callButton" text="Call" icon={<IoMdCall />} onBtnClick={onBtnClick} />
          </div>
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
          <div className={style.imageDescAuthor}>~ Irinel Traista</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
