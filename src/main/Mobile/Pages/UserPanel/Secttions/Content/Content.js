import React, {useEffect} from "react";
import classes from "./Content.module.css";
import ScrollBar from "../../../../../../components/ScrollBar";
import {Navigate, Route, Routes} from "react-router-dom";
import * as RoutesName from "../../../../Routes/routes";
import {useTranslation} from "react-i18next";
import Wallet from "./components/Wallet/Wallet";
import Settings from "./components/Settings/Settings";
import ProtectedRoute from "../../../../../../components/ProtectedRoute/ProtectedRoute";
import {useSelector} from "react-redux";
import {Deposit, DepositRelative, MarketRelative} from "../../../../Routes/routes";
import Market from "./components/Market/Market";
import {activeOrderLayout} from "../../../../../../store/actions/global";

const Content = () => {



    const {t} = useTranslation();
    const defaultWallet = useSelector((state) => state.exchange.assets[0])

    const activeOrderLayout = useSelector((state) => state.global.activeOrderLayout)


    return (
        <div className={`container ${classes.container} ${activeOrderLayout && classes.activeOrderLayout} py-05`}>
            <ScrollBar>
                <Routes>
                    <Route path={RoutesName.MarketRelative + "/*"} element ={<Market/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path={RoutesName.WalletRelative+"/:id/:path/*"} element={<Wallet/>}/>
                        <Route path={RoutesName.SettingsRelative+"/*"} element={<Settings/>}/>
                    </Route>
                    <Route path="*" element ={
                        <div className="container flex ai-center jc-center"
                             style={{height: "70%"}}>
                            <h1>{t("comingSoon")}</h1>
                        </div>
                    }/>
                    <Route
                        path={RoutesName.WalletRelative}
                        element={<Navigate to={RoutesName.Wallet + "/" + defaultWallet + DepositRelative} replace />}
                    />

                    <Route
                        path={RoutesName.SettingsRelative}
                        element={<Navigate to={RoutesName.Security} replace />}
                    />
                </Routes>
            </ScrollBar>
        </div>
    );
};


export default Content;
