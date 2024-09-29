import style from "./Hero.module.css";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { RxRocket } from "react-icons/rx";
import Button from "../Button/Button";

const Hero = () => {
  console.log("component HERO just re-rendered" + Math.random());
  const onBtnClick = (btnName) =>
    console.log(`User clicked ${btnName} button, this is from Child value`);

  const inputLog = (e) => console.log(`${e.target.name} : ${e.target.value} `);
  const onDetailSubmit = (e) => {
    e.preventDefault();   

    console.log(`${e.target[0].name} : ${e.target[0].value} `);
    console.log(`${e.target[1].name} : ${e.target[1].value} `);
    console.log(`${e.target[2].name} : ${e.target[2].value} `);
    console.log(`${e.target[3].name} : ${e.target[3].value} `);
    console.log(`${e.target[4].name} : ${e.target[4].value} `);
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
            ></input>
            <input
              name="lastName"
              className={style.lname}
              placeholder="Last Name"
            ></input>
          </div>
          <input
            name="phone"
            className={style.phone}
            placeholder="Phone"
          ></input>
          <input
            name="email"
            className={style.email}
            placeholder="Email"
          ></input>
          <input
            name="msg"
            className={style.message}
            placeholder="Message"
          ></input>
         
          <Button
            type="submit"
            text="Submit"
            icon={<RxRocket />}
            btnPrimary={true}
          />
        </form>
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
