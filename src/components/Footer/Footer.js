import React from 'react';
import classes from './Footer.module.css'
import {useTranslation} from "react-i18next";
import {images} from "../../assets/images";

const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className={`width-100 column fs-0-6 flex jc-center ai-center py-3 ${classes.container}`}>
            <div className={`width-90 m-auto column jc-center ai-center text-center`}>
                <img className={`mb-1 img-lg-1`} src={images.opexLogoPlus} alt="logo"/>
                <p className={`mt-1`}>{t("footer.copyright")}</p>
            </div>
        </div>
    );
};

export default Footer;
