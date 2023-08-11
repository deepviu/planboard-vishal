import React from 'react'

const DealerTable = () => {
    return (
        <div>
            <table className="w3-table table-bordered "  >
                <thead>
                    <tr>
                        <th> Dealer(s)
                        </th>
                        <th> LY<br /> FY 22-23 </th>
                        <th> Weightage <br /> FY 23-24  </th>
                        <th> Target (%)  <br /> FY 23-24 </th>
                        <th> YTD (%) <br /> August  </th>
                    </tr>
                </thead>
                <tbody>

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





                </tbody>

            </table>
        </div>
    )
}

export default DealerTable