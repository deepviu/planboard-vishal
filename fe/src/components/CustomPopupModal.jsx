import React,{useState,useEffect} from 'react'
import PropTypes from "prop-types";
import popupStyles from "../domains/custom-popup.module.css";

import RuleComponent from './RuleComponent';



const CustomPopupModal = (props) => {
    const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
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
        
        </div>
        {< RuleComponent  />}
      </div>
      
      
    </div>
    )
}

CustomPopupModal.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CustomPopupModal