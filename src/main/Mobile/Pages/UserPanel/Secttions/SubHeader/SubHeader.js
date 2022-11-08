import React, {Fragment, useEffect, useState} from "react";
import classes from "./SubHeader.module.css";
import Icon from "../../../../../../components/Icon/Icon";
import {Route, Routes} from "react-router-dom";
import * as RoutesName from "../../../../Routes/routes";
import MarketHeader from "../Header/components/MarketHeader/MarketHeader";
import ProtectedRoute from "../../../../../../components/ProtectedRoute/ProtectedRoute";
import WalletHeader from "../Header/components/WalletHeader/WalletHeader";
import SettingsHeader from "../Header/components/SettingsHeader/SettingsHeader";
import MarketSubHeader from "./components/MarketSubHeader/MarketSubHeader";
import WalletSubHeader from "./components/WalletSubHeader/WalletSubHeader";
import SettingsSubHeader from "./components/SettingsSubHeader/SettingsSubHeader";
import {activeOrderLayout} from "../../../../../../store/actions/global";

const SubHeader = (props) => {

    const [expand, setExpand] = useState(false)

    /*useEffect(() => {
        return () => {
            setExpand(true)
        }
    }, []);*/

    const content = () => {
        /*if (expand) {
            return <div className={`container column jc-between ai-center ${classes.container1} pt-1 px-5`}>






                <Icon iconName="icon-dot-3 fs-01 flex" customClass={`${classes.thisIcon} py-05`} onClick={()=>setExpand(false)}/>

            </div>
        }*/
     /*   if (!expand) {
            return <div className={`container flex ai-center jc-center ${classes.expand}`}>
                <Icon iconName="icon-dot-3 fs-01 flex" customClass={`${classes.thisIcon}`} onClick={()=>setExpand(true)}/>



            </div>
        }*/

        return <div className={`width-100 column ai-center jc-center position-relative ${classes.container}`}>

            {expand && <div className={`width-100 column position-absolute ${classes.content} py-1 px-2`}>
                <Routes>
                    <Route path={RoutesName.MarketRelative + "/*"} element={
                        <MarketSubHeader/>
                    }/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path={RoutesName.WalletRelative+"/:id/:path/*"} element={
                            <WalletSubHeader/>

                        }/>
                        <Route path={RoutesName.SettingsRelative+"/*"} element={
                            <SettingsSubHeader/>
                        }/>
                    </Route>
                </Routes>
                <Icon iconName="icon-dot-3 fs-01 flex jc-center ai-center" customClass={`${classes.thisIcon} py-05`} onClick={()=>setExpand(false)}/>
            </div>}

            <Icon iconName="icon-dot-3 fs-01 flex" customClass={`${classes.thisIcon}`} onClick={()=>setExpand(true)}/>
        </div>
    }


    return (
        content()
    );

};


export default SubHeader;