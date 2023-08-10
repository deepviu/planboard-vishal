import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { tableBody,tableHeader } from "./zone/wgt_Depotwise_TableData";
import RuleComponent from "../components/RuleComponent";
const CustomPopup = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  
  const getDealer = () => {
    const dealer = props.dealerData.find((item) => item.id === props.selectedDealer[props.selectedDealerType]);
    if(dealer) {
      return "/" + dealer.name;
    } else {
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
        {props.zoneData.find((item) => item.id === props.selectedZone[props.selectedZoneType])?.name}  
        / {props.depoData.find((item) => item.id === props.selectedDepo[props.selectedDepoType])?.name} 
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
