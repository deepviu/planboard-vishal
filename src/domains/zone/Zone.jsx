
import {  useState,  } from "react";



import 'reactjs-popup/dist/index.css';

import CustomPopup from "../CustomPopup";

import Wgt_Depotwise_Ui from "./Wgt_Depotwise_Ui";
import { Wgt_Depotwise_Data } from "./Wgt_Depotwise_Data";

import Wgt_Territory_Ui from "./Wgt_Territory_Ui"
import { Wgt_Territory_Data } from "./Wgt_Territory_Data"

import { rolePermission, zoneData,depoData ,territoryData , dealerData , plansData } from "../../auth/middleware";


const Zone = () => {

  const [selectedZoneType, setSelectedZoneType] = useState('zone1');
  const [selectedDepoType, setSelectedDepoType] = useState('depo');
  const [selectedTerritoryType, setSelectedTerritoryType] = useState('territory');
  const [selectedSalesType, setSelectedSalesType] = useState('Sales');
  const [selectedZone, setSelectedZone] = useState({
    zone1:0,
    zone2:0,
    zone3:0,
    zone4:0,
    zone5:0
  });

  const [selectedDepo, setSelectedDepo] = useState({
    depo1:0,
    depo2:0,
    depo3:0
  })

  const [selectedTerritory, setSelectedTerriotry] = useState({
    territory1:0,
    territory2:0,
    territory3:0,
    
  })

  const [selectedDealer, setSelectedDealer] = useState(0)
  const [selectedDealerType,setSelectedDealerType] = useState('dealer')
  const [selectedSales, setSelectedSales] = useState({
    sale1:0,
    sale2:0,
    sale3:0,
    sale4:0
  })
  

 const handleSalesChange = (e) => {
    setSelectedSalesType(e.target.name)
    setSelectedSales({...selectedSales,[e.target.name]:parseInt(e.target.value, 10)});
 }

 const handleTerriotryChange = (e) => {
  setSelectedTerritoryType(e.target.name)
  setSelectedTerriotry({...selectedTerritory,[e.target.name]:parseInt(e.target.value, 10)});
}

const handleDepoChange = (e) => {
  setSelectedDepoType(e.target.name)
  setSelectedDepo({...selectedDepo,[e.target.name]:parseInt(e.target.value, 10)});
}

const handleDealerChange = (e) => {
  setSelectedDealerType(e.target.name)
  setSelectedDealer(parseInt(e.target.value, 10))
}


  const handleZoneChange = (e) => {
    setSelectedZoneType(e.target.name)
    setSelectedZone({...selectedZone,[e.target.name]:parseInt(e.target.value, 10)});
  };

  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => { setVisibility(e); };

  console.log(rolePermission, "filteredZones12")
  console.log(selectedZone, "selectedZone")

  return (
    <div className=" main ">

      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top w3-white ">

        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
          <form>
            <select className="form-control" name="zone1" value={selectedZone.zone1} onChange={handleZoneChange}>
              <option value=""> Select Zone </option>
              {zoneData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12   w3-hide ">
          <span className="w3-small h6 w3-text-gray"> Depot  </span> <br />
          <form>
            
            
          </form>
        </div>
        <div class="w3-col l3 m4 s12  w3-hide ">
          <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
          <form>
            <select className="form-control " >
              <option value="">-Select Territory -- </option>
              <option value="All"> H04 </option>
              <option value="All" selected >H05 </option>
              <option value="Jalandhar">H06</option>
              <option value="Jalandhar"> .. </option>
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 w3-hide">
          <span className="w3-small h6 w3-text-gray"> Dealer </span> <br />
          <form>
            <select className="form-control "  >
              <option value="All" selected  > Shanti Paints  - Rohtak </option>
              <option value="All"> Kamal  Enterprise - Rohtak  </option>
              <option value="Jalandhar"> Shanti Paints - Jhajjar  </option>
              <option value="Jalandhar"> ..   </option>
            </select>
          </form>
        </div>

        <div className="w3-clear"> <hr /></div>

        <div class="w3-col l2 m3 s3 ">
          <span className="h5" >
            {zoneData.find((item) => item.id === selectedZone.zone1)?.name}
          </span>
          <hr className="hr1" />
          <span className="w3-text-red w3-small h6" >
            <i className="fa fa-lock w3-text-red" ></i> Locked
          </span>
        </div>

        <div class="w3-col l2 m3 s3 w3-center">
          <span className="w3-text-gray" > LY 22-23  </span>
          <hr className="hr1" />
          <span className=" " >90</span> Cr.
        </div>

        <div class="w3-col l4 m3 s3 w3-center">
          <span className="w3-text-gray" > Target 23-24 </span>
          <hr className="hr1" />

          <span className=" " >
            <span className="  w3-text-gray ">  <b> [v.1 : <u className=" w3-text-red" > 126.0 Cr.  (26%) </u> ] </b>  </span>

            <span className="  w3-text-gray  ">  [v.2 :  <u className=" w3-text-red" > 128.5 Cr. + 1.7%</u> ]  <i className="fa fa-unlock w3-text-red" > </i> </span>
          </span>


        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray" > YTD  August 23 </span>
          <hr className="hr1" />
          <span className=" " >36 </span> Cr.
          <i className="w3-text-gray" > (12%) </i>
        </div>

      </div>

      <div class="w3-row w3-padding-16">
      </div>



      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">


        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
          <form>
            <select className="form-control" name="zone2" value={selectedZone.zone2} onChange={handleZoneChange}>
              <option value=""> Select Zone </option>
              {zoneData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12   w3-hide ">
          <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
          <form>
          <select className="form-control" name="depo1" value={selectedDepo.depo1} onChange={handleDepoChange} >
              <option value="">-Select Depot  </option>
              {depoData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div class="w3-col l3 m4 s12  w3-hide ">
          <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
          <form>
            <select className="form-control " >
              <option value="">-Select Territory -- </option>
              <option value="All"> H04 </option>
              <option value="All" selected >H05 </option>
              <option value="Jalandhar">H06</option>
              <option value="Jalandhar"> .. </option>
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 w3-hide">
          <span className="w3-small h6 w3-text-gray"> Dealer </span> <br />
          <form>
            <select className="form-control " >
              <option value="All" selected  > Shanti Paints  - Rohtak </option>
              <option value="All"> Kamal  Enterprise - Rohtak  </option>
              <option value="Jalandhar"> Shanti Paints - Jhajjar  </option>
              <option value="Jalandhar"> ..   </option>
            </select>
          </form>
        </div>

        <div className="w3-clear"> <hr /></div>

        <div class="w3-col l9 m6 s6 ">

          <span className="w3-large" > <b>  {zoneData.find((item) => item.id === selectedZone.zone2)?.name}  </b>  /   <i className="w3-text-gray" > All Depot's  Plan    </i>
            <span className="  w3-text-gray ">  <b> [v.1 : <u className=" w3-text-red" > 126.0 Cr. </u> ] </b>  </span>
            <span className="  w3-text-gray  ">  [v.2 :  <u className=" w3-text-red" > 128.5 Cr. + 1.7%</u> ] <i className="fa fa-unlock w3-text-red" > </i> </span>
          </span>
          <br />


          <span className=" btn btn-sm w3-small text-left w3-text-red " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>


          <span className=" btn btn-sm w3-small text-left "
            onClick={(e) => setVisibility(!visibility)}
          > <i className="fa fa-gear" ></i>   Set Rules </span>

          <span className="  btn btn-sm w3-text-gray  w3-small " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span>


        </div>

        <div class="w3-col l3 m3 s6 w3-right">
          <form>
          <select className="form-control" name="sale1" value={selectedSales.sale1} onChange={handleSalesChange}>
              <option value=""> Sales Plan </option>
              {plansData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>

        <table class="w3-table table-stripped w3-white table-bordered ">

          <tr>
            <th> Depot  <br />
              <i className="w3-text-gray"> Trt.(6) , Dlr.(234) </i>
            </th>
            <th>LY <br /> FY 22-23 </th>
            <th> Weightage <br /> FY 23-24  </th>
            <th> Target (%)  <br /> FY 23-24 </th>
            <th> YTD (%) <br /> August  </th>
          </tr>

          {Wgt_Depotwise_Data.map(data => (
            <Wgt_Depotwise_Ui key={data.id} data={data} />
          ))}

        </table>
      </div>

      <div class="w3-row w3-padding-16">
      </div>

      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">


        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
          <form>
          <select className="form-control" name="zone3" value={selectedZone.zone3} onChange={handleZoneChange}>
              <option value=""> Select Zone </option>
              {zoneData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
          <form>
          <select className="form-control" name="depo1" value={selectedDepo.depo1} onChange={handleDepoChange} >
              <option value="">-Select Depot -- </option>
              {depoData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                 Depo:- {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div class="w3-col l3 m4 s12 w3-hide ">
          <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
          <form>
          <select className="form-control" name="territory1" value={selectedTerritory.territory1} onChange={handleTerriotryChange} >
              <option value="">-Select Territory -- </option>
              {territoryData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                 {item.name}
                </option>
              ))}
            </select>
            
          </form>
        </div>


        <div class="w3-col l3 m4 s12 w3-hide">
          <span className="w3-small h6 w3-text-gray"> Dealer </span> <br />
          <form>
            <select className="form-control " >
              <option value="All" selected  > Shanti Paints  - Rohtak </option>
              <option value="All"> Kamal  Enterprise - Rohtak  </option>
              <option value="Jalandhar"> Shanti Paints - Jhajjar  </option>
              <option value="Jalandhar"> ..   </option>
            </select>
          </form>
        </div>

        <div className="w3-clear"> <hr /></div>

        <div class="w3-col l9 m6 s12 ">

          <span className="w3-large" > {zoneData.find((item) => item.id === selectedZone.zone3)?.name}  /  <b> Delhi-Naraina</b>  /  <i className="w3-text-gray" > All Territory's  Plan    </i>
            <span className="  w3-text-gray " >  <b> [v.1 : <u className=" w3-text-red" > 12.0 Cr. </u> ] </b>  </span>
            <span className="  w3-text-gray ">  [v.2 :  <u className=" w3-text-red" > 13.5 Cr. + 1.7%</u> ]  <i className="fa fa-unlock w3-text-red" > </i> </span>
          </span>
          <br />

          <span className=" btn btn-sm w3-small text-left w3-text-red " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>

          <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i> Set Rules </span>

          <span className="  btn btn-sm w3-text-gray  w3-small " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span>
        </div>

        <div class="w3-col l3 m3 s12 w3-right">
          <form>
          <select className="form-control" name="sale2" value={selectedSales.sale2} onChange={handleSalesChange}>
              <option value=""> Sales Plan </option>
              {plansData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <table class="w3-table table-stripped w3-white table-bordered ">
          <tr>
            <th> Territory
            </th>
            <th>LY <br /> FY 22-23 </th>
            <th> Weightage <br /> FY 23-24  </th>
            <th> Target (%)  <br /> FY 23-24 </th>
            <th> YTD (%) <br /> August  </th>
          </tr>

          {Wgt_Territory_Data.map(data => (
            <Wgt_Territory_Ui key={data.id} data={data} />
          ))}

        </table>
      </div>

      <div class="w3-row w3-padding-16">
      </div>



      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">

        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
          <form>
          <select className="form-control" name="zone4" value={selectedZone.zone4} onChange={handleZoneChange}>
              <option value=""> Select Zone </option>
              {zoneData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
          <form>
          <select className="form-control" name="depo2" value={selectedDepo.depo2} onChange={handleDepoChange} >
              <option value="">-Select Depot -- </option>
              {depoData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
          <form>
          <select className="form-control" name="territory2" value={selectedTerritory.territory2} onChange={handleTerriotryChange} >
              <option value="">-Select Territory -- </option>
              {territoryData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                 {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 w3-hide">
          <span className="w3-small h6 w3-text-gray"> Dealer </span> <br />
          <form>
            <select className="form-control " >
              <option value="All" selected  > Shanti Paints  - Rohtak </option>
              <option value="All"> Kamal  Enterprise - Rohtak  </option>
              <option value="Jalandhar"> Shanti Paints - Jhajjar  </option>
              <option value="Jalandhar"> ..   </option>
            </select>
          </form>
        </div>

        <div className="w3-clear"> <hr /></div>

        <div class="w3-col l9 m6 s6 ">

          <span className="w3-large" > {zoneData.find((item) => item.id === selectedZone.zone4)?.name}   /  Delhi-Naraina  /  H05 / <i className="w3-text-gray" > All Dealers's  Plan    </i>
            <span className="  w3-text-gray ">
              <b> [v.1 : <u className=" w3-text-red" >  4.0 Cr. </u> ] </b>  </span>
            <span className="  w3-text-gray  ">
              [v.2 :  <u className=" w3-text-red" > 4.5 Cr. + 0.1%</u> ]  <i className="fa fa-unlock w3-text-red" > </i> </span>
          </span>
          <br />

          <span className=" btn btn-sm w3-small text-left w3-text-red " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>

          <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i> Set Rules </span>

          <span className="  btn btn-sm w3-text-gray  w3-small " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span>
        </div>

        <div class="w3-col l3 m3 s6 w3-right">
          <form>
          <select className="form-control" name="sale3" value={selectedSales.sale3} onChange={handleSalesChange}>
              <option value=""> Sales Plan </option>
              {plansData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <table class="w3-table table-stripped w3-white table-bordered ">
          <tr>
            <th> Dealer(s)
            </th>
            <th> LY<br /> FY 22-23 </th>
            <th> Weightage <br /> FY 23-24  </th>
            <th> Target (%)  <br /> FY 23-24 </th>
            <th> YTD (%) <br /> August  </th>
          </tr>

          <tr>
            <td> [ Shanti Paints - Rohtak ]
            </td>
            <td> 11 </td>
            <td> <i className="fa fa-gear" > </i> 4  </td>
            <td> <input className="" value="16" />  L (36%)  </td>
            <td> 3 (4%) </td>
          </tr>

          <tr>
            <td> [ Kamal  Enterprise - Rohtak  ] </td>
            <td> 112 </td>
            <td> <i className="fa fa-gear" > </i> 4  </td>
            <td> <input className="" value="16" />  L (36%)  </td>
            <td> 23 (4%) </td>
          </tr>


          <tr>
            <td> [ Shanti Paints - Jhajjar ] </td>
            <td> 12 L </td>
            <td> <i className="fa fa-gear" > </i> 4  </td>
            <td> <input className="" value="16" />  L (36%)  </td>
            <td> 6 (8%) </td>
          </tr>

        </table>

      </div>




      <div class="w3-row w3-padding-16">
      </div>



      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">



        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
          <form>
          <select className="form-control" name="zone5" value={selectedZone.zone5} onChange={handleZoneChange}>
              <option value=""> Select Zone </option>
              {zoneData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
          <form>
          <select className="form-control" name="depo3" value={selectedDepo.depo3} onChange={handleDepoChange} >
              <option value="">-Select Depot -- </option>
              {depoData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
          <form>
          <select className="form-control" name="territory3" value={selectedTerritory.territory3} onChange={handleTerriotryChange} >
              <option value="">-Select Territory -- </option>
              {territoryData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                  selected
                >
                 {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>


        <div class="w3-col l3 m4 s12 ">
          <span className="w3-small h6 w3-text-gray"> Dealer </span> <br />
          <form>
          <select className="form-control" name="dealer" value={selectedDealer} onChange={handleDealerChange}>
              <option value=""> Sales Plan </option>
              {dealerData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="w3-clear"> <hr /></div>

        <div class="w3-col l9 m6 s6 ">

          <span className="w3-large" > {zoneData.find((item) => item.id === selectedZone.zone5)?.name}  /  Delhi-Naraina  /  H05 / <i className="w3-text-gray" > Dealer </i>
            <span className="  w3-text-gray ">  <b> [v.1 : <u className=" w3-text-red" >  4.0 Cr. </u> ] </b>  </span>
            <span className="  w3-text-gray  "> [v.2 :  <u className=" w3-text-red" > 4.5 Cr. + 0.1%</u> ] <i className="fa fa-unlock w3-text-red" > </i> </span>
          </span>
          <br />

          <span className="w3-large" > [ Shanti Paints - Rohtak ]
            <span className=" w3-text-gray w3-opacity">  [Sales Plan ]</span>
          </span>
          <br />

          <span className=" btn btn-sm w3-small text-left w3-text-red " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>

          <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i>   Set Rules </span>

          <span className="  btn btn-sm w3-text-gray  w3-small " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span>
        </div>

        <div class="w3-col l3 m3 s6 w3-right">
          <form>
          <select className="form-control" name="sale4" value={selectedSales.sale4} onChange={handleSalesChange}>
              <option value=""> Sales Plan </option>
              {plansData.map((item) => (
                <option
                  value={item?.id}
                  key={item?.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <table class="w3-table table-stripped w3-white table-bordered ">
          <tr>
            <th> Dealer [ Shanti Paints - Rohtak ]
            </th>
            <th> LY<br /> FY 22-23 </th>
            <th> Weightage <br /> FY 23-24  </th>
            <th> Target (%)  <br /> FY 23-24 </th>
            <th> YTD (%) <br /> August  </th>
          </tr>

        </table>

      </div>





      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        zoneData={zoneData}
        selectedZone={selectedZone}
        selectedDealer={selectedDealer}
        selectedDepo={selectedDepo}
        selectedDepoType={selectedDepoType}
        dealerData={dealerData}
        territoryData={territoryData }
        plansData={plansData}
        depoData={depoData}
        selectedTerritory={selectedTerritory}
        selectedTerritoryType={selectedTerritoryType}
        selectedSalesType={selectedSalesType}
        selectedDealerType={selectedDealerType}
        selectedZoneType={selectedZoneType}
        title="Configure Rules " />
      <hr />




    </div>
  )
}
export default Zone 