import React, { useState } from "react"
import TerritoryTable from "../../components/TerritoryTable";
import { Wgt_Territory_Data } from "../zone/Wgt_Territory_Data";
import CustomPopupModal from "../../components/CustomPopupModal";
const Territory = () => {
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => { setVisibility(e); };




    return (
        <div className="main  w3-border">

            <div className="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">
                <div class="w3-col l9 m6 s6 ">

                    <span className="w3-small h6" >

                        North  /  Delhi-Naraina  /  H05 /
                        <i className="w3-text-gray" > Dealer # UT7584J8 </i>
                    </span>

                    <br />

                    <span className="w3-large" > [ Shanti Paints - Rohtak ]
                        <span className=" w3-text-gray w3-opacity">
                            <span className="  w3-text-gray ">  <b> [v.1 : <u className=" w3-text-red" >  4.0 Cr. </u> ] </b>
                            </span>
                            <span className="  w3-text-gray  "> [v.2 :  <u className=" w3-text-red" > 4.5 Cr. + 0.1%</u> ] <i className="fa fa-unlock w3-text-red" > </i>
                            </span>
                        </span>
                    </span>
                    <br />    <br />

                    <span className=" btn btn-sm w3-small text-left w3-text-red " > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>

                    <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)}   > <i className="fa fa-gear" ></i>   Set Rules </span>

                    <span className="  btn btn-sm w3-text-gray  w3-small " > <i className="fa fa-pencil" ></i>  Edit Manually </span>


                </div>
                <div class="w3-col l3 m3 s6 w3-right">
                    <form>
                        <select className="form-control " >
                            <option value=""> Sales Plan </option>
                            <option value="All"> OS / OD / Collection Plan </option>
                            <option value="All"> Activity Plan </option>
                        </select>
                    </form>
                </div>
                {<TerritoryTable tableData={Wgt_Territory_Data} />}

            </div>
            <CustomPopupModal
                onClose={popupCloseHandler}
                show={visibility}
                title="Configure Rules "
            />
        </div>
    )
}

export default Territory 