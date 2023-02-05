import Image from "next/image";
import Link from "../../../../components/common/link";

const DefaultHeaderMiddle = () => {
  return (
    <div className="header__middle">
      <div className="header__item item item-big text-blue">
        <div className="header__item-text item-text">
          <div className="header__item-title item-title">Tel —</div>
          <div className="header__item-subtitle item-subtitle">
            портал для интерактивного изучения татарского языка с использованием методов геймификации
          </div>
        </div>
        <div className="header__item-button item-button">
          <Link path={"/chatbot"} className="header__item-link item-link">
            <i className="st-link"></i>
            <span>Открыть чат-бот</span>
          </Link>
        </div>
        <div className="header__item-img item-img">
          <Image
            src={"/icons/book.png"}
            alt={"boy"}
            layout={"responsive"}
            width={480}
            height={360}
          />
        </div>
      </div>
    </div>
  )
}

export default DefaultHeaderMiddle;