import { useEffect, useState, useContext } from "react";  
import { Navigate, Link, useNavigate } from "react-router-dom";

import Wgt_Zone_Ui from "./Wgt_Zone_Ui"
import {Wgt_Zone_Data} from "./Wgt_Zone_Data"

import Wgt_Statewise_Ui from "./Wgt_Statewise_Ui"
import {Wgt_Statewise_Data} from "./Wgt_Statewise_Data"

const National = () => {  

    // Set Select Zone 
    const [list_mst_Zone, setZone] = useState("North"); 
    const handleZoneSelect = (event) => {
    setZone(event.target.value)
    }


    return (
        <div className=" main "> 

            <div id="Wgt_Zone_Id" class="Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "> 
            
            {Wgt_Zone_Data.map(data=>(
            <Wgt_Zone_Ui key={data.id} data={data}/>
            ))}  
            
            </div> 

             <div className="w3-clear w3-padding-16">  </div> 

               <div id="Wgt_Zone_Id" class=" w3-leftbar w3-border-red Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "> 
            
           

    <div className="w3-padding-large" >  
      <div className="w3-clear ">  

      <div class="w3-col l3 m3 s6 ">  
              <span className=" w3-xlarge w3-left "> 
         <i className="fa fa-bar-chart "></i> North
        </span> 
            </div> 

        <div class="w3-col l3 m3 s6 w3-right">  
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

      </div> 


      <div className="w3-clear w3-padding">  </div>

       <div className="w3-col l3 m3 s12 ">
        <span className="w3-xxlarge"> 70</span> Cr. 
        <br /> 
        <span className="w3-small h6"> LLY 21-22  </span> 
        <br />  
        <span className="h6"> -- </span>
    </div> 

      <div className="w3-col l3 m3 s12 ">
        <span className="w3-xxlarge"> 90</span> Cr. 
        <br /> 
        <span className="w3-small h6"> LY  22-23  </span> 
        <br />  
        <span className="h6">21% </span>
    </div>

    <div className="w3-col l3 m3 s12 ">
        <span className="w3-xxlarge"> 126 </span> Cr.
        <br /> 
        <span className="w3-small h6"> FY 23-24 - Plan (V.1) </span>
        <br />  
        <span className="h6">26% </span>
    </div> 

      <div className="w3-col l3 m3 s12 ">
        <span className="w3-xxlarge"> 128.5 </span> Cr. <i className=" w3-text-red fa fa-lock"> </i>
        <br /> 
        <span className="w3-small h6"> FY 23-24 - Plan (V.2) </span>
        <br />  
        <span className="h6"> 26% </span>
    </div>  

    <div  id="mercury-north" class="w3-row w3-margin-top ">
      <span className="w3-small h4 w3-right"> 128.5 Cr. <i className="w3-text-blue fa fa-flag"></i> </span><br />
      <div id="mercury-bar-north" class="w3-grey">
        <div class="w3-container w3-red" style={{width:"65%"}} >  
        <span className="w3-small h6 " > YTD - Aug - </span>
        <span className="w3-small h6 " >  65 Cr. ( - 12% )  </span>
        </div> 
        <div class="w3-container w3-blue" style={{width:"75%"}} >  
        <span className="w3-small h6 " > Plan - Aug - 75 Cr.</span>
        </div>  
      </div> 
    </div> 

      <div  id="mom-north" class="w3-row w3-margin-top ">
      <span className="w3-small h4 ">FY 23-24 -  128.5 Cr. <i className="w3-text-blue fa fa-flag"></i> </span><br />
      <div id="mom-bar-north" class=" ">
      <table className="w3-table w3-stripped table-bordered" >
      <tr>
      <td className="w3-red" > Apr </td> 
      <td className="w3-teal" > May </td>
      <td className="w3-red" > Jun </td>
      <td className="w3-teal" > Jul </td>
      <td className="w3-red" > Aug </td>
      <td className="w3-gray" > Sep </td>
      <td className="w3-gray" > Oct </td>
      <td className="w3-gray" > Nov </td>
      <td className="w3-gray"> Dec </td>
      <td className="w3-gray"> Jan </td>
      <td className="w3-gray"> Feb </td>
      <td className="w3-gray"> Mar </td>
      </tr>  
       <tr>
      <td>  2.1% </td> 
      <td className="w3-text-teal" > ( 114.2% )  </td>
      <td className="w3-text-red"> ( 55.0% ) </td>
      <td className="w3-text-red"> +6.0% </td>
      <td className="w3-text-red"> +2.0% </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      </tr>  

      <tr>
      <td className="w3-text-gray"> 12 </td> 
      <td className="w3-text-gray"> 20  </td>
      <td className="w3-text-gray"> 15 </td>
      <td className="w3-text-gray"> 20 </td>
      <td className="w3-text-gray"> 30 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      <td className="w3-text-gray"> 0 </td>
      </tr>  

      <tr>
      <td className="w3-text-blue"> 10.3 </td> 
      <td className="w3-text-blue"> 10.0  </td>
      <td className="w3-text-blue"> 10.0 </td>
      <td className="w3-text-blue"> 10.1 </td>
      <td className="w3-text-blue"> 10.3 </td>
      <td className="w3-text-blue"> 10.7 </td>
      <td className="w3-text-blue"> 10.3 </td>
      <td className="w3-text-blue"> 10.6 </td>
      <td className="w3-text-blue"> 10.5 </td>
      <td className="w3-text-blue"> 10.3 </td>
      <td className="w3-text-blue"> 10.2 </td>
      <td className="w3-text-blue"> 10.1 </td>
      </tr>  


      </table> 
      </div> 
    </div> 



    </div>   
            </div> 


             <div className="w3-clear w3-padding-16"> </div> 


             <div id="Wgt_Segment_Id" class="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "> 
             
   <p className="h5 " > Market Segment Plan </p>  

     <div class="w3-row w3-margin-top ">
     <span className="w3-small h5 w3-text-gray">  Non Focus  </span><br />
    <div class="w3-grey">
      <div class="w3-container w3-center w3-padding w3-blue" style={{width:"25%"}} > 
      50%
      </div>
    </div>
     </div>

     <div class="w3-row w3-margin-top ">
     <span className="w3-small h5 w3-text-gray"> Focus </span> <br />
    <div class="w3-grey">
      <div class="w3-container w3-center w3-padding w3-indigo" style={{width:"75%"}} > 75% 
      </div>
    </div>
    </div>
 
  </div>

   <div className="w3-clear w3-padding-16"> </div> 

        <div id="Wgt_Segment_Id" class="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "> 
             
   <p className="h5 " >Product  Segment Plan </p>  

     <div class="w3-row w3-margin-top ">
     <span className="w3-small h5 w3-text-gray">  Enamel Base  </span><br />
    <div class="w3-grey">
      <div class="w3-container w3-center w3-padding w3-blue" style={{width:"35%"}} > 
      35%
      </div>
    </div>
     </div>

     <div class="w3-row w3-margin-top ">
     <span className="w3-small h5 w3-text-gray"> Water Base </span> <br />
    <div class="w3-grey">
      <div class="w3-container w3-center w3-padding w3-indigo" style={{width:"65%"}} > 65% 
      </div>
    </div>
    </div>
 
  </div>

            <div className="w3-clear w3-padding-16"> </div> 
              
            <div id="Wgt_State_Id" class="Wgt_State_Class w3-row w3-row-padding w3-margin-bottom w3-white "> 
            <div class="w3-col l12 m12 w3-margin-top w3-margin-bottom ">
              
             <div class="w3-col l2 m4 s8 "> 
            <form>
                <select className="form-control " value={list_mst_Zone} onChange={handleZoneSelect}>
                    <option value="">-Select Zone -- </option>
                    <option value="All">All </option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                </select>
            </form> 
            </div>  

            </div> 

           <div class="w3-col l12 m12 ">  
        <table class="w3-table w3-striped w3-white table-bordered "> 
         <tr>   
            <th> States <i className="w3-text-gray">(8) </i> </th>
            <th> LY-22-23 </th> 
            <th> Target (%) </th> 
            <th> Achieved  (%)</th> 
          </tr>   
            {Wgt_Statewise_Data.map(data=>(
            <Wgt_Statewise_Ui key={data.id} data={data}/>
            ))}  
        </table>
         </div>  
            </div>  

 
 



        </div>
    ) 
}  
export default National  