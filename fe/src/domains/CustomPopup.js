import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { tableBody,tableHeader } from "./zone/wgt_Depotwise_TableData";
import RuleComponent from "../components/RuleComponent";
const CustomPopup = (props) => {
  
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  
  const getDealer = () => {
    const dealer = props.dealerData.find((item) => item.id === props.selectedDealer);
    if(dealer) {
      return "/" + dealer.name;
    } else {
      return "";
    }
  }
  const getZone = () => {
    const zone =  props.zoneData.find((item) => item.id === props.selectedZone[props.selectedZoneType])
    if(zone){
      return  zone.name ;
    }
    else{
      return "";
    }
  }
  const getDepo = () => {
    const depo =  props.depoData.find((item) => item.id === props.selectedDepo[props.selectedDepoType])
    if(depo){
      return "/" + depo.name
    }
    else{
      return "";
    }
  }

  const getSales = () => {
    const sale =  props.plansData.find((item) => item.id === props.selectedSales[props.selectedSalesType])
    if(sale){
      return "/" + sale.name
    }
    else{
      return "";
    }
  }

  const getTerriotry = () => {
    const terriotry = props.territoryData.find((item) => item.id === props.selectedTerritory[props.selectedTerritoryType]);
    if(terriotry) {
      return "/" + terriotry.name;
    } else {
      return "";
    }
  }

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{props.title}  </h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>
        {getZone()}
        {getSales()} 
        {getDepo()} 
        {getTerriotry()}
        {getDealer()}
        </div>
        {< RuleComponent tableHeader={tableHeader} tableData={tableBody} />}
      </div>
      
      
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomPopup;
