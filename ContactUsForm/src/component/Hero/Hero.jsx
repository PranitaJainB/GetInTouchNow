import style from "./Hero.module.css";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { RxRocket } from "react-icons/rx";
import Button from "../Button/Button";
import { useState } from "react";

const Hero = () => {
  const [thanksMsg,setThanksMsg] = useState("") ;
  console.log("component HERO just re-rendered" + Math.random());
  const onBtnClick = (btnName) =>
    console.log(`User clicked ${btnName} button, this is from Child value`);

  const inputLog = (e) => console.log(`${e.target.name} : ${e.target.value} `);
  const onDetailSubmit = (e) => {
    e.preventDefault(); 
    let msg = `Thank you ${e.target[0].value}  ${e.target[1].value} for connecting with us`
    setThanksMsg(msg)
  };

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
        <form className={style.formBody} onSubmit={onDetailSubmit}>
          <div className={style.name}>
            <input
              name="firstName"
              className={style.fname}
              placeholder="First Name"
              onInput={inputLog}
              required
            ></input>
            <input
              name="lastName"
              className={style.lname}
              placeholder="Last Name"
              onInput={inputLog}
              required
            ></input>
          </div>
          <input
            name="phone"
            type="tel"
            className={style.phone}
            placeholder="Phone"
            onInput={(e)=>{
              e.target.value = e.target.value.replace(/[^0-9+-]/g, '');
              inputLog;}}
              required
              maxLength="15" 
          ></input>
          <input
            name="email"
            className={style.email}
            placeholder="Email"
            onInput={inputLog}
              required
          ></input>
          <input
            name="msg"
            className={style.message}
            placeholder="Message"
            onInput={inputLog}
              required
              minLength="10" 
          ></input>
         
          <Button
            type="submit"
            text="Submit"
            icon={<RxRocket />}
            btnPrimary={true}
          />
        </form>
        <div className="thanksMsg">{thanksMsg}</div>
        <div className={style.name}>
          <Button
            name="chatButton"
            text="Chat"
            icon={<IoChatboxEllipsesOutline />}
              onBtnClick={onBtnClick}
          />
          <Button
            name="callButton"
            text="Call"
            icon={<IoMdCall />}
             onBtnClick={onBtnClick}
          />
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
