import Image from "next/image";
import { apple, google, bill } from "../public/assets";
import styles, { layout } from "@/app/style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Image
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          priority
        />
        <div
          className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full
        white__gradient"
        />
        <div
          className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full
        pink__gradient"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image
            src={apple}
            alt="apple-store"
            width={128}
            height={42}
            className="object-contain mr-5 cursor-pointer"
            priority
          />
          <Image
            src={google}
            alt="google-playstore"
            width={128}
            height={42}
            className="object-contain cursor-pointer"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
