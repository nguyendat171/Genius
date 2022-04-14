import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__title">Vietnam Office</div>
            <p>
              14F, APtower, Dien Bien Phu street, district 3, <br /> Ho Chi Minh
              city
            </p>
            <p>Business resigtration: 0315421202</p>
            <p>
              <span>Tel: 028-3520-2367</span>
              <span>sales@dkinno.com</span>
            </p>
            <p>Copyright 2021 DaouKiwoom Innocation C0., Ltd</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__title">Indonesia Office</div>
            <p>
              Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI
              Jakarta 12190, Indonsia
            </p>
            <p>Tel: +62-21-5082-0038</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__title">Korea Office</div>
            <p>
              5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si,
              Gyeonggi-do, Korea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
