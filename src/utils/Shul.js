import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import './Shul.css';
const columns = [
  { name: 'שחרית', title: 'שחרית' },
  { name: 'מנחה', title: 'מנחה' },
  { name: 'ערבית', title: 'ערבית' },
];
function Shul(props) {
  const { arvit, mincha, shacharit, name } = props.shul
  const rows = [
    { שחרית: shacharit, מנחה: mincha, ערבית: arvit },
  ];
  // arvit: "צאת, 22:00"
  // id: 1
  // mincha: "שקיעה"
  // name: "בית הכנסת הגדול"
  // shacharit: 
  return (
    <div className='shul'>
      <h1>{name}</h1>
      <h2>adress</h2>
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </div>

    // <div className='shul'>
    //     <h1>שם בית הכנסת</h1>
    //     <h2>adress</h2>
    //     <table /*style="width:100%"*/>
    //         <tr>
    //             <th>שחרית</th>
    //             <th>מנחה</th>
    //             <th>ערבית</th>
    //         </tr>
    //         <tr>
    //             <td>7:00</td>
    //             <td>לפני שקיעה</td>
    //             <td>צאת</td>
    //         </tr>
    //         <tr>
    //             <td>900</td>
    //             <td>גדולה</td>
    //             <td>חצות</td>
    //         </tr>
    //     </table>    </div>
  );
}
export default Shul;