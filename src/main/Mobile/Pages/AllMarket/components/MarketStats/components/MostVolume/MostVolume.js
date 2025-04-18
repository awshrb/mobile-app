import React from 'react';
import {images} from "../../../../../../../../assets/images";
import i18n from "i18next";
import {BN} from "../../../../../../../../utils/utils";
import {useTranslation} from "react-i18next";

const MostVolume = ({mostVolume}) => {

    const {t} = useTranslation();

    return (
        <>
            {/*<img src={images[mostVolume?.pairInfo?.baseAsset]}
                 alt={mostVolume?.pairInfo?.baseAsset}
                 title={mostVolume?.pairInfo?.baseAsset}
                 className={`img-md-plus`}/>
            <span>{t("currency." + mostVolume?.pairInfo?.baseAsset)}</span>
            <div className={`${i18n.language !== "fa" ? 'row-reverse' : 'row'} jc-center ai-center width-100 text-green`}>
                <span className={`${i18n.language !== "fa" ? 'mr-025' : 'ml-025'} fs-0-6`}>{mostVolume?.pairInfo?.quoteAsset}</span>
                <span className={`${i18n.language !== "fa" ? 'mL-025' : 'mr-025'} fs-01`}>{new BN(mostVolume?.volume).toFormat()} </span>
            </div>
            <div className={`row jc-center ai-center width-100 text-green`}>
                <span>% {new BN(mostVolume?.change).toFormat(2)}+</span>
            </div>*/}



            <div className={`column jc-center ai-start`}>
                <img  src={images[mostVolume?.pairInfo?.baseAsset]}
                      alt={mostVolume?.pairInfo?.baseAsset}
                      title={mostVolume?.pairInfo?.baseAsset}
                      className={`img-md-plus mb-05`}/>
                <span className={`mt-05`}>{t("currency." + mostVolume?.pairInfo?.baseAsset)}</span>
            </div>
            <div className={`column jc-end ai-center`}>
                <div className={`${i18n.language !== "fa" ? 'row-reverse' : 'row'} jc-end ai-center width-100 text-green mb-05`}>
                    <span className={`${i18n.language !== "fa" ? 'mr-025' : 'ml-025'} fs-0-6`}>{mostVolume?.pairInfo?.quoteAsset}</span>
                    <span className={`${i18n.language !== "fa" ? 'mL-025' : 'mr-025'} fs-01`}>{new BN(mostVolume?.volume).toFormat()}</span>
                </div>
            </div>


        </>
    );
};

export default MostVolume;
