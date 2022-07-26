import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import * as Routes from "../../../../../../Routes/routes";


const WalletSubMenu = () => {

    const {path} = useParams()

    return (
        <div className={`container column jc-center ai-center my-5 `}>


            <NavLink
                className={({isActive}) =>
                    isActive ? "container row ai-center cursor-pointer position-relative px-1 py-05 " : "container row ai-center cursor-pointer position-relative px-1 py-05"
                }
                to={`${Routes.Wallet}/TBTC/${path}`}>

                TBTC

            </NavLink>

            <NavLink
                className={({isActive}) =>
                    isActive ? "container row ai-center cursor-pointer position-relative px-1 py-05 " : "container row ai-center cursor-pointer position-relative px-1 py-05"
                }
                to={`${Routes.Wallet}/TETH/${path}`}>

                TETH

            </NavLink>


        </div>
    );
};

export default WalletSubMenu;
