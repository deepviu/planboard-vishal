
import { useState, useEffect } from "react";
import "../../App.css";



import 'reactjs-popup/dist/index.css';

import CustomPopup from "../CustomPopup";



import axios from 'axios'

import { Wgt_Territory_Data } from "./Wgt_Territory_Data"

import TerritoryTable from "../../components/TerritoryTable";
import DepotTable from "../../components/DepotTable";
import DealerTable from "../../components/DealerTable";
import SalesTable from "../../components/SalesTable";
import Depot from "../depot/Depot";



const Zone = () => {


  

  const [selectedZoneType, setSelectedZoneType] = useState('zone1');
  const [selectedDepoType, setSelectedDepoType] = useState('depo');
  const [selectedTerritoryType, setSelectedTerritoryType] = useState('territory');
  const [selectedSalesType, setSelectedSalesType] = useState('Sales');
  const [showZoneData, setShowZoneData] = useState(false)
  const [showDepoData, setShowDepoData] = useState(false)
  const [showTerriotryData, setShowTerriotryData] = useState(false)
  const [showDealer, setShowDealer] = useState(false)
  const [salesPlanData, setSalesPlanData] = useState([]);

  const [selectedZone, setSelectedZone] = useState({
    zone1: 0,
    zone2: 0,
    zone3: 0,
    zone4: 0,
    zone5: 0
  });

  const [selectedDepo, setSelectedDepo] = useState({
    depo1: 0,
    depo2: 0,
    depo3: 0
  })

  const [selectedTerritory, setSelectedTerriotry] = useState({
    territory1: 0,
    territory2: 0,
    territory3: 0,

  })

  const [selectedDealer, setSelectedDealer] = useState(0)

  const [selectedSales, setSelectedSales] = useState({
    sale1: 0,
    sale2: 0,
    sale3: 0,
    sale4: 0
  })

  const [store, setStore] = useState([]);

  const getZoneArea = async () => {

    const gotData = await axios.get("http://localhost:5500/api/get-zone-area");
    const newsData  = await gotData.data;
    setStore(newsData);

  };


    const [zone, setZone] = useState([]);

    const getDipoArea = async () => {
      const gotDipoData = await axios.get(
        "http://localhost:5500/api/get-north-depo"
      );
      const DipoData = await gotDipoData.data;
      setZone(DipoData);
    };




    const [terriotry, setTerriotry] = useState([]);

    const getTerriotry = async () => {
      const gotTerriotry = await axios.get(
        "http://localhost:5500/api/get-north-terriotry"
      );
      const terriotryData = await gotTerriotry.data;
      setTerriotry(terriotryData);
    };


        const [dealer, setDealer] = useState([]);

        const getDealer = async () => {
          const gotDealer = await axios.get(
            "http://localhost:5500/api/get-north-dealer"
          );
          const dealerData = await gotDealer.data;
          setDealer(dealerData);
        };

    
        const fetchSalesData = async () => {
          const response = await axios.get(
            `http://localhost:5500/api/get-north-plans`
          );
          const newData = await response.data;
          setSalesPlanData(newData);
        };


  const handleSalesChange = (e) => {
    setSelectedSalesType(e.target.name)
    setSelectedSales({ ...selectedSales, [e.target.name]: parseInt(e.target.value, 10) });
  }

  const handleTerriotryChange = (e) => {
    setSelectedTerritoryType(e.target.name)
    setSelectedTerriotry({ ...selectedTerritory, [e.target.name]: parseInt(e.target.value, 10) });
    setShowTerriotryData(true)
  }

  const handleDepoChange = (e) => {
    setSelectedDepoType(e.target.name)
    setSelectedDepo({ ...selectedDepo, [e.target.name]: parseInt(e.target.value, 10) });
    setShowDepoData(true)
  }

  const handleDealerChange = (e) => {

    setSelectedDealer(parseInt(e.target.value, 10))
    setShowDealer(true)
  }


  const handleZoneChange = (e) => {

    setSelectedZoneType(e.target.name)
    setSelectedZone({ ...selectedZone, [e.target.name]: parseInt(e.target.value, 10) });
    setShowZoneData(true)


  };

  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => { setVisibility(e); };

  useEffect(() =>  {
   getZoneArea();
   getDipoArea();
   getTerriotry();
   getDealer();
   fetchSalesData();
  },[])

  



  return (
    <>
      <div className=" main ">
        <div class="w3-row w3-padding-16"></div>

        <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top w3-white w3-round-large  boxing">
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
            <form>
              <select
                className="form-control"
                name="zone1"
                value={selectedZone.zone1}
                onChange={handleZoneChange}
              >
                <option value=""> Select Zone </option>
                {store.map((item) => (
                  <option value={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="w3-clear">
            {" "}
            <hr />
          </div>

          <div class="w3-col l2 m3 s3 ">
            <span className="h5">
              {showZoneData ? (
                store.find((item) => item.id === selectedZone.zone1)?.name
              ) : (
                <>North</>
              )}
            </span>
            <hr className="hr1" />
            <span className="w3-text-red w3-small h6">
              <i className="fa fa-lock w3-text-red"></i> Locked
            </span>
          </div>

          <div class="w3-col l2 m3 s3 w3-center">
            <span className="w3-text-gray"> LY 22-23 </span>
            <hr className="hr1" />
            <span className=" ">90</span> Cr.
          </div>

          <div class="w3-col l4 m3 s3 w3-center">
            <span className="w3-text-gray"> Target 23-24 </span>
            <hr className="hr1" />

            <span className=" ">
              <span className="  w3-text-gray ">
                {" "}
                <b>
                  {" "}
                  [v.1 : <u className=" w3-text-red">
                    {" "}
                    126.0 Cr. (26%){" "}
                  </u> ]{" "}
                </b>{" "}
              </span>

              <span className="  w3-text-gray  ">
                {" "}
                [v.2 : <u className=" w3-text-red"> 128.5 Cr. + 1.7%</u> ]{" "}
                <i className="fa fa-unlock w3-text-red"> </i>{" "}
              </span>
            </span>
          </div>

          <div class="w3-col l3 m3 s3 w3-center">
            <span className="w3-text-gray"> YTD August 23 </span>
            <hr className="hr1" />
            <span className=" ">36 </span> Cr.
            <i className="w3-text-gray"> (12%) </i>
          </div>
        </div>

        <div class="w3-row w3-padding-16"></div>

        <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white w3-round-large  boxing">
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
            <form>
              <select
                className="form-control"
                name="zone2"
                value={selectedZone.zone2}
                onChange={handleZoneChange}
              >
                <option value=""> Select Zone </option>
                {store.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div class="w3-col l3 m4 s12   w3-hide ">
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
            <form>
              <select
                className="form-control"
                name="depo1"
                value={selectedDepo.depo1}
                onChange={handleDepoChange}
              >
                <option value="">-Select Depot </option>
                {zone.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="w3-clear">
            {" "}
            <hr />
          </div>

          <div class="w3-col l9 m6 s6 ">
            <span className="w3-large">
              {" "}
              <b>
                {" "}
                {showZoneData ? (
                  store.find((item) => item.id === selectedZone.zone2)?.name
                ) : (
                  <>North</>
                )}{" "}
              </b>{" "}
              / <i className="w3-text-gray"> All Depot's Plan </i>
              <span className="  w3-text-gray ">
                {" "}
                <b>
                  {" "}
                  [v.1 : <u className=" w3-text-red"> 126.0 Cr. </u> ]{" "}
                </b>{" "}
              </span>
              <span className="  w3-text-gray  ">
                {" "}
                [v.2 : <u className=" w3-text-red"> 128.5 Cr. + 1.7%</u> ]{" "}
                <i className="fa fa-unlock w3-text-red"> </i>{" "}
              </span>
            </span>
            <br />

            <span
              className=" btn btn-sm w3-small text-left w3-text-red "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
            </span>

            <span
              className=" btn btn-sm w3-small text-left "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-gear"></i> Set Rules{" "}
            </span>

            <span
              className="  btn btn-sm w3-text-gray  w3-small "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-pencil"></i> Edit Manually{" "}
            </span>
          </div>

          <div class="w3-col l3 m3 s6 w3-right">
            <form>
              <select
                className="form-control"
                name="sale1"
                value={selectedSales.sale1}
                onChange={handleSalesChange}
              >
                <option value=""> Sales Plan </option>
                {salesPlanData.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <DepotTable />
        </div>

        <div class="w3-row w3-padding-16"></div>

        <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white w3-round-large  boxing">
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
            <form>
              <select
                className="form-control"
                name="zone3"
                value={selectedZone.zone3}
                onChange={handleZoneChange}
              >
                <option value=""> Select Zone </option>
                {store.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
            <form>
              <select
                className="form-control"
                name="depo1"
                value={selectedDepo.depo1}
                onChange={handleDepoChange}
              >
                <option value="">-Select Depot -- </option>
                {zone.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    Depo:- {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div class="w3-col l3 m4 s12 w3-hide ">
            <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
            <form>
              <select
                className="form-control"
                name="territory1"
                value={selectedTerritory.territory1}
                onChange={handleTerriotryChange}
              >
                <option value="">-Select Territory -- </option>
                {terriotry.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="w3-clear">
            {" "}
            <hr />
          </div>

          <div class="w3-col l9 m6 s12 ">
            <span className="w3-large">
              {showZoneData ? (
                store.find((item) => item.id === selectedZone.zone3)?.name
              ) : (
                <>North</>
              )}
              /{" "}
              <b>
                {showDepoData ? (
                  zone.find((item) => item.id === selectedDepo.depo1)?.name
                ) : (
                  <>Delhi-Naraina</>
                )}{" "}
              </b>
              / <i className="w3-text-gray"> All Territory's Plan </i>
              <span className="  w3-text-gray ">
                {" "}
                <b>
                  {" "}
                  [v.1 : <u className=" w3-text-red"> 12.0 Cr. </u> ]{" "}
                </b>{" "}
              </span>
              <span className="  w3-text-gray ">
                {" "}
                [v.2 : <u className=" w3-text-red"> 13.5 Cr. + 1.7%</u> ]{" "}
                <i className="fa fa-unlock w3-text-red"> </i>{" "}
              </span>
            </span>
            <br />

            <span
              className=" btn btn-sm w3-small text-left w3-text-red "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
            </span>

            <span
              className=" btn btn-sm w3-small text-left "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-gear"></i> Set Rules{" "}
            </span>

            <span
              className="  btn btn-sm w3-text-gray  w3-small "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-pencil"></i> Edit Manually{" "}
            </span>
          </div>

          <div class="w3-col l3 m3 s12 w3-right">
            <form>
              <select
                className="form-control"
                name="sale2"
                value={selectedSales.sale2}
                onChange={handleSalesChange}
              >
                <option value=""> Sales Plan </option>
                {salesPlanData.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <TerritoryTable />
        </div>

        <div class="w3-row w3-padding-16"></div>

        <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white w3-round-large  boxing">
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
            <form>
              <select
                className="form-control"
                name="zone4"
                value={selectedZone.zone4}
                onChange={handleZoneChange}
              >
                <option value=""> Select Zone </option>
                {store.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
            <form>
              <select
                className="form-control"
                name="depo2"
                value={selectedDepo.depo2}
                onChange={handleDepoChange}
              >
                <option value="">-Select Depot -- </option>
                {zone.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
            <form>
              <select
                className="form-control"
                name="territory2"
                value={selectedTerritory.territory2}
                onChange={handleTerriotryChange}
              >
                <option value="">-Select Territory -- </option>
                {terriotry.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="w3-clear">
            {" "}
            <hr />
          </div>

          <div class="w3-col l9 m6 s6 ">
            <span className="w3-large">
              {" "}
              {showZoneData ? (
                store.find((item) => item.id === selectedZone.zone4)?.name
              ) : (
                <>North</>
              )}
              /{" "}
              {showDepoData ? (
                zone.find((item) => item.id === selectedDepo.depo2)?.name
              ) : (
                <>Delhi-Naraina</>
              )}
              /{" "}
              {showTerriotryData ? (
                terriotry.find(
                  (item) => item.id === selectedTerritory.territory2
                )?.name
              ) : (
                <>H05</>
              )}{" "}
              /<i className="w3-text-gray"> All Dealers's Plan </i>
              <span className="  w3-text-gray ">
                <b>
                  {" "}
                  [v.1 : <u className=" w3-text-red"> 4.0 Cr. </u> ]{" "}
                </b>{" "}
              </span>
              <span className="  w3-text-gray  ">
                [v.2 : <u className=" w3-text-red"> 4.5 Cr. + 0.1%</u> ]{" "}
                <i className="fa fa-unlock w3-text-red"> </i>{" "}
              </span>
            </span>
            <br />

            <span
              className=" btn btn-sm w3-small text-left w3-text-red "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
            </span>

            <span
              className=" btn btn-sm w3-small text-left "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-gear"></i> Set Rules{" "}
            </span>

            <span
              className="  btn btn-sm w3-text-gray  w3-small "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-pencil"></i> Edit Manually{" "}
            </span>
          </div>

          <div class="w3-col l3 m3 s6 w3-right">
            <form>
              <select
                className="form-control"
                name="sale3"
                value={selectedSales.sale3}
                onChange={handleSalesChange}
              >
                <option value=""> Sales Plan </option>
                {salesPlanData.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <DealerTable />
        </div>

        <div class="w3-row w3-padding-16"></div>

        <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white w3-round-large  boxing">
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
            <form>
              <select
                className="form-control"
                name="zone5"
                value={selectedZone.zone5}
                onChange={handleZoneChange}
              >
                <option value=""> Select Zone </option>
                {store.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br />
            <form>
              <select
                className="form-control"
                name="depo3"
                value={selectedDepo.depo3}
                onChange={handleDepoChange}
              >
                <option value="">-Select Depot -- </option>
                {zone.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Territory </span> <br />
            <form>
              <select
                className="form-control"
                name="territory3"
                value={selectedTerritory.territory3}
                onChange={handleTerriotryChange}
              >
                <option value="">-Select Territory -- </option>
                {terriotry.map((item) => (
                  <option value={item?.id} key={item?.id} selected>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div class="w3-col l3 m4 s12 ">
            <span className="w3-small h6 w3-text-gray"> Dealer </span> <br />
            <form>
              <select
                className="form-control"
                name="dealer"
                value={selectedDealer}
                onChange={handleDealerChange}
              >
                <option value=""> Sales Plan </option>
                {dealer.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="w3-clear">
            {" "}
            <hr />
          </div>

          <div class="w3-col l9 m6 s6 ">
            <span className="w3-large">
              {" "}
              {showZoneData ? (
                store.find((item) => item.id === selectedZone.zone5)?.name
              ) : (
                <>North</>
              )}
              /{" "}
              {showDepoData ? (
                zone.find((item) => item.id === selectedDepo.depo3)?.name
              ) : (
                <>Delhi-Naraina</>
              )}
              /{" "}
              {showTerriotryData ? (
                terriotry.find(
                  (item) => item.id === selectedTerritory.territory3
                )?.name
              ) : (
                <>H05</>
              )}
              / <i className="w3-text-gray"> Dealer </i>
              <span className="  w3-text-gray ">
                {" "}
                <b>
                  {" "}
                  [v.1 : <u className=" w3-text-red"> 4.0 Cr. </u> ]{" "}
                </b>{" "}
              </span>
              <span className="  w3-text-gray  ">
                {" "}
                [v.2 : <u className=" w3-text-red"> 4.5 Cr. + 0.1%</u> ]{" "}
                <i className="fa fa-unlock w3-text-red"> </i>{" "}
              </span>
            </span>
            <br />

            <span className="w3-large">
              {showDealer ? (
                dealer.find((item) => item.id === selectedDealer)?.name
              ) : (
                <>Shanti Paints - Rohtak</>
              )}
              <span className=" w3-text-gray w3-opacity"> [Sales Plan ]</span>
            </span>
            <br />

            <span
              className=" btn btn-sm w3-small text-left w3-text-red "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
            </span>

            <span
              className=" btn btn-sm w3-small text-left "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-gear"></i> Set Rules{" "}
            </span>

            <span
              className="  btn btn-sm w3-text-gray  w3-small "
              onClick={(e) => setVisibility(!visibility)}
            >
              {" "}
              <i className="fa fa-pencil"></i> Edit Manually{" "}
            </span>
          </div>

          <div class="w3-col l3 m3 s6 w3-right">
            <form>
              <select
                className="form-control"
                name="sale4"
                value={selectedSales.sale4}
                onChange={handleSalesChange}
              >
                <option value=""> Sales Plan </option>
                {salesPlanData.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <SalesTable />
        </div>

        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          zoneData={store}
          selectedZone={selectedZone}
          selectedDealer={selectedDealer}
          selectedDepo={selectedDepo}
          selectedDepoType={selectedDepoType}
          dealerData={dealer}
          territoryData={terriotry}
          plansData={salesPlanData}
          depoData={zone}
          selectedTerritory={selectedTerritory}
          selectedTerritoryType={selectedTerritoryType}
          selectedSales={selectedSales}
          selectedSalesType={selectedSalesType}
          selectedZoneType={selectedZoneType}
          title="Configure Rules "
        />
      </div>
    </>
  );
}
export default Zone 