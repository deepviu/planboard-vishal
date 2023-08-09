
import { useEffect, useState, useContext } from "react";  
import { Navigate, Link, useNavigate } from "react-router-dom";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import CustomPopup from "../CustomPopup";

import Wgt_Depotwise_Ui from "./Wgt_Depotwise_Ui";
import {Wgt_Depotwise_Data} from "./Wgt_Depotwise_Data";

import Wgt_Territory_Ui from "./Wgt_Territory_Ui"
import {Wgt_Territory_Data} from "./Wgt_Territory_Data"

import { rolePermission, zoneData } from "../../auth/middleware";


const Zone = () => {  

  const [selectedZone, setSelectedZone] = useState(0);
  const [filteredZones, setFilteredZones] = useState([]);

  useEffect(() => {
    const permissions = rolePermission()?.permissions;
    if (permissions) {
      const filteredZoness = zoneData.filter((item) =>
        permissions.includes(item.id)
      );
      setFilteredZones(filteredZoness);
      setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
    }
  }, []);


const handleZoneChange = (e) => { 
    setSelectedZone(parseInt(e.target.value, 10));
  };




const [visibility, setVisibility] = useState(false); 
const popupCloseHandler = (e) => { setVisibility(e); };  

    return (
        <div className=" main "> 

          <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top w3-white ">  

            <div class="w3-col l3 m4 s12 ">  
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
              <form>
            <select className="form-control" value={selectedZone}  onChange={handleZoneChange}>
              <option value=""> Select Zone </option>
              {filteredZones.map((item) => (
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


            <div class="w3-col l3 m4 s12   w3-hide "> 
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br /> 
               <form>
                <select className="form-control" >
                    <option value="">-Select Depot -- </option>
                    <option value="All">Depot : Ambala</option> 
                    <option value="All" selected >Depot : Delhi-Naraina </option> 
                    <option value="Jalandhar">Depot : Jalandhar</option> 
                    <option value="Jalandhar"> .. </option> 
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
       
              <div class="w3-col l2 m3 s3 "> 
                 <span className="h5" > 
                  {zoneData.find((item) => item.id == selectedZone)?.name} 
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
                  <select className="form-control" > 
                      <option value="North" selected > North </option> 
                      <option value="South">South </option> 
                      <option value="East"> East </option> 
                      <option value="West"> West </option> 
                      <option value="West"> ...  </option> 
                  </select>
                </form>  
            </div> 


            <div class="w3-col l3 m4 s12   w3-hide "> 
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br /> 
               <form>
                <select className="form-control" >
                    <option value="">-Select Depot -- </option>
                    <option value="All">Depot : Ambala</option> 
                    <option value="All" selected >Depot : Delhi-Naraina </option> 
                    <option value="Jalandhar">Depot : Jalandhar</option> 
                    <option value="Jalandhar"> .. </option> 
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

                 <span className="w3-large" > <b>  {zoneData.find((item) => item.id == selectedZone)?.name}  </b>  /   <i className="w3-text-gray" > All Depot's  Plan    </i>  
              <span className="  w3-text-gray ">  <b> [v.1 : <u className=" w3-text-red" > 126.0 Cr. </u> ] </b>  </span> 
               <span className="  w3-text-gray  ">  [v.2 :  <u className=" w3-text-red" > 128.5 Cr. + 1.7%</u> ] <i className="fa fa-unlock w3-text-red" > </i> </span>  
               </span>  
              <br />    


               <span className=" btn btn-sm w3-small text-left w3-text-red "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>


                <span className=" btn btn-sm w3-small text-left "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i>   Set Rules </span>

               <span className="  btn btn-sm w3-text-gray  w3-small "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span>  


            </div>

            <div class="w3-col l3 m3 s6 w3-right">  
               <form>
                <select className="form-control " >
                    <option value=""> Sales Plan </option>
                    <option value="All"> OS / OD / Collection Plan </option> 
                    <option value="All"> Activity Plan </option>  
                    <option value="All"> Other </option> 
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

                {Wgt_Depotwise_Data.map(data=>(
            <Wgt_Depotwise_Ui key={data.id} data={data}/>
            ))}   

            </table>
          </div> 

            <div class="w3-row w3-padding-16">
           </div>   

          <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">  

       
            <div class="w3-col l3 m4 s12 ">  
            <span className="w3-small h6 w3-text-gray"> Zone </span> <br />
               <form>
                <select className="form-control" > 
                    <option value="North" selected > North </option> 
                    <option value="South">South </option> 
                    <option value="East"> East </option> 
                    <option value="West"> West </option> 
                    <option value="West"> ...  </option> 
                </select>
            </form>  
            </div> 


            <div class="w3-col l3 m4 s12 "> 
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br /> 
               <form>
                <select className="form-control " >
                    <option value="">-Select Depot -- </option>
                    <option value="All">Depot : Ambala</option> 
                    <option value="All" selected >Depot : Delhi-Naraina </option> 
                    <option value="Jalandhar">Depot : Jalandhar</option> 
                    <option value="Jalandhar"> .. </option> 
                </select>
            </form>  
            </div>  
                 <div class="w3-col l3 m4 s12 w3-hide ">  
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

            <div class="w3-col l9 m6 s12 ">  

                <span className="w3-large" > {zoneData.find((item) => item.id == selectedZone)?.name}  /  <b> Delhi-Naraina</b>  /  <i className="w3-text-gray" > All Territory's  Plan    </i>  
              <span className="  w3-text-gray " >  <b> [v.1 : <u className=" w3-text-red" > 12.0 Cr. </u> ] </b>  </span> 
               <span className="  w3-text-gray ">  [v.2 :  <u className=" w3-text-red" > 13.5 Cr. + 1.7%</u> ]  <i className="fa fa-unlock w3-text-red" > </i> </span>  
               </span>  
              <br />   

               <span className=" btn btn-sm w3-small text-left w3-text-red "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span> 

                <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i> Set Rules </span>

               <span className="  btn btn-sm w3-text-gray  w3-small "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span> 
            </div> 

            <div class="w3-col l3 m3 s12 w3-right">  
               <form>
                <select className="form-control " >
                    <option value=""> Sales Plan </option>
                    <option value="All"> OS / OD / Collection Plan </option> 
                    <option value="All"> Activity Plan </option>  
                    <option value="All"> Other </option> 
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

                {Wgt_Territory_Data.map(data=>(
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
                <select className="form-control" > 
                    <option value="North" selected > North </option> 
                    <option value="South">South </option> 
                    <option value="East"> East </option> 
                    <option value="West"> West </option> 
                    <option value="West"> ...  </option> 
                </select>
            </form>  
            </div> 


            <div class="w3-col l3 m4 s12 "> 
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br /> 
               <form>
                <select className="form-control " >
                    <option value="">-Select Depot -- </option>
                    <option value="All">Depot : Ambala</option> 
                    <option value="All" selected >Depot : Delhi-Naraina </option> 
                    <option value="Jalandhar">Depot : Jalandhar</option> 
                    <option value="Jalandhar"> .. </option> 
                </select>
            </form>  
            </div>  
                 <div class="w3-col l3 m4 s12 ">  
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

                 <span className="w3-large" > {zoneData.find((item) => item.id == selectedZone)?.name}   /  Delhi-Naraina  /  H05 / <i className="w3-text-gray" > All Dealers's  Plan    </i>  
              <span className="  w3-text-gray ">  
              <b> [v.1 : <u className=" w3-text-red" >  4.0 Cr. </u> ] </b>  </span> 
               <span className="  w3-text-gray  "> 
               [v.2 :  <u className=" w3-text-red" > 4.5 Cr. + 0.1%</u> ]  <i className="fa fa-unlock w3-text-red" > </i> </span>  
               </span>  
              <br />  

               <span className=" btn btn-sm w3-small text-left w3-text-red "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span> 

                <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i> Set Rules </span>

               <span className="  btn btn-sm w3-text-gray  w3-small " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span> 
            </div> 

            <div class="w3-col l3 m3 s6 w3-right">  
               <form>
                 <select className="form-control " >
                    <option value=""> Sales Plan </option>
                    <option value="All"> OS / OD / Collection Plan </option> 
                    <option value="All"> Activity Plan </option>  
                    <option value="All"> Other </option> 
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
                <select className="form-control" > 
                    <option value="North" selected > North </option> 
                    <option value="South">South </option> 
                    <option value="East"> East </option> 
                    <option value="West"> West </option> 
                    <option value="West"> ...  </option> 
                </select>
            </form>  
            </div> 


            <div class="w3-col l3 m4 s12 "> 
            <span className="w3-small h6 w3-text-gray"> Depot </span> <br /> 
               <form>
                <select className="form-control " >
                    <option value="">-Select Depot -- </option>
                    <option value="All">Depot : Ambala</option> 
                    <option value="All" selected >Depot : Delhi-Naraina </option> 
                    <option value="Jalandhar">Depot : Jalandhar</option> 
                    <option value="Jalandhar"> .. </option> 
                </select>
            </form>  
            </div>  
                 <div class="w3-col l3 m4 s12 ">  
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


                 <div class="w3-col l3 m4 s12 ">  
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

              <span className="w3-large" > {zoneData.find((item) => item.id == selectedZone)?.name}  /  Delhi-Naraina  /  H05 / <i className="w3-text-gray" > Dealer </i>  
              <span className="  w3-text-gray ">  <b> [v.1 : <u className=" w3-text-red" >  4.0 Cr. </u> ] </b>  </span> 
               <span className="  w3-text-gray  "> [v.2 :  <u className=" w3-text-red" > 4.5 Cr. + 0.1%</u> ] <i className="fa fa-unlock w3-text-red" > </i> </span>  
               </span>  
              <br />  

              <span className="w3-large" > [ Shanti Paints - Rohtak ]    
              <span className=" w3-text-gray w3-opacity">  [Sales Plan ]</span>  
              </span> 
              <br />  

               <span className=" btn btn-sm w3-small text-left w3-text-red "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span> 

                <span className=" btn btn-sm w3-small text-left "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i>   Set Rules </span>

               <span className="  btn btn-sm w3-text-gray  w3-small "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span> 
            </div> 

            <div class="w3-col l3 m3 s6 w3-right">  
               <form>
                 <select className="form-control " >
                    <option value=""> Sales Plan </option>
                    <option value="All"> OS / OD / Collection Plan </option> 
                    <option value="All"> Activity Plan </option>  
                    <option value="All"> Other </option> 
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
        title="Configure Rules " >
        <hr />


          
      </CustomPopup>  

        </div>
    ) 
} 
export default Zone 