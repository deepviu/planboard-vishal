
import $ from "jquery"; 




const Profile = () => { 


    const openTab = (tab) => {   

    $("#tablink1").removeClass("  w3-border-red ");
    $("#tablink2").removeClass("  w3-border-red ");
    $("#tablink3").removeClass("  w3-border-red "); 

    $("#tab1").addClass(" w3-hide ");
    $("#tab2").addClass(" w3-hide ");
    $("#tab3").addClass(" w3-hide "); 

    $("#tablink"+tab+"").addClass(" w3-border-red "); 
    $("#tab"+tab+"").removeClass(" w3-hide "); 

    } 


    return (
        <div className="main w3-border"> 

          <div className="w3-container w3-white"> 

  <div className="w3-row w3-col l12">

    <a href="javascript:void(0)">
      <div id="tablink1"  className=" w3-col l4 m4 s4 w3-bottombar w3-hover-light-grey w3-padding" onClick={() => openTab('1')} >
      Account 
      </div>
    </a>

    <a href="javascript:void(0)" >
      <div id="tablink2" className=" w3-col l4 m4 s4  w3-bottombar w3-hover-light-grey w3-padding"  onClick={() => openTab('2')} >
      Profile 
      </div>
    </a>

    <a href="javascript:void(0)"  >
      <div id="tablink3" className=" w3-col l4 m4 s4  w3-bottombar w3-hover-light-grey w3-padding" onClick={() => openTab('3')} >
      Notifications 
      </div>
    </a>

  </div>

  <div id="tab1" className="w3-container w3-hide ">
    <h2>Account</h2> 
  </div>

  <div id="tab2" className="w3-container w3-hide ">
    <h2>Profile</h2> 
  </div>

  <div id="tab3" className="w3-container w3-hide ">
    <h2>Notifications</h2> 
  </div>
</div> 
        </div>
    ) 
}

export default Profile 