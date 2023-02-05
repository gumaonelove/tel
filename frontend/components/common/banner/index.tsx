import Image from "next/image";
import {FC} from "react";
import {IProps} from "./types";

const Banner: FC<IProps> = ({title, description, image, bgColor}) => {
  return (
    <div className="banner">
      <div className="banner__container container">
        <div className={`banner__content bg-${bgColor}`}>
          <div className="banner__title">{title}</div>
          <p className="banner__description">
            {description}
          </p>
          <div className="banner__img">
              <Image
                src={image}
                alt={"star"}
                layout={"responsive"}
                width={150}
                height={150}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;