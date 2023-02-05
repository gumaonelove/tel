import Image from "next/image";
import Link from "../../../../components/common/link";

const DefaultHeaderLeft = () => {
  return (
    <div className="header__left">
      <Link path={"/"} className="header__logo">
        <Image
          src={"/icons/logo.svg"}
          alt={"TelSafTatar"}
          layout={"responsive"}
          width={274}
          height={76}
        />
      </Link>
      <div className="header__left-text">
        изучение
        Татарского языка
        вместе с Tel by saf.tatar
      </div>
    </div>
  )
}

export default DefaultHeaderLeft;