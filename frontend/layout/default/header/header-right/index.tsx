const DefaultHeaderRight = () => {
  return (
    <div className="header__right">
      <div className="header__item item text-white bg-pink">
        <div className="header__item-text item-text">
          <div className="header__item-name item-name">ХӘЗЕР ЭФИРДА:</div>
          <div className="header__item-live item-live">Габдулла Тукай. Шүрәле.</div>
          <div className="header__item-soon item-soon">Илдус Әхмәтҗан укый — 11.30</div>
        </div>
        <div className="header__item-button item-button">
          <a href="https://saf-radio.ru/" target="_blank" rel="nofollow noreferrer noopener"
             className="header__item-link item-link">
            <i className="st-link st-link-light"></i>
            <span>Саф - балалар радиосы</span>
          </a>
          <div className="header__item-icon item-icon">
            <i className="st-music-string"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultHeaderRight;