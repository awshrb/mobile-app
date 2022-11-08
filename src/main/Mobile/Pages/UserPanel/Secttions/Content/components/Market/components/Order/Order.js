import React, {useEffect, useState} from "react";
import classes from "./Order.module.css";
import {useTranslation} from "react-i18next";
import AccordionBox from "../../../../../../../../../../components/AccordionBox/AccordionBox";
import {connect} from "react-redux";
import BuyOrder from "./components/BuyOrder/BuyOrder";
import SellOrder from "./components/SellOrder/SellOrder";


const Order = (props) => {

    const {t} = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    const data = [
        {id: 1, title: t("buy"), body: <BuyOrder />},
        {id: 2, title: t("sell"), body: <SellOrder />},
    ];

    useEffect(() => {
        if (props.selectedSellOrder.amount) {
            setActiveTab(1);
        }
    }, [props.selectedSellOrder]);

    useEffect(() => {
        if (props.selectedBuyOrder.amount) {
            setActiveTab(0);
        }
    }, [props.selectedBuyOrder]);

    return (
        <div className={`width-100 ${classes.container}  card-bg card-border`}>
            <AccordionBox
                title={t("orders.title")}
                safari={classes.safariFlexSize}
                content={data}
                activeTab={activeTab}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSellOrder: state.exchange.activePairOrders.selectedSellOrder,
        selectedBuyOrder: state.exchange.activePairOrders.selectedBuyOrder,
    };
};
export default connect(mapStateToProps, null)(Order);
