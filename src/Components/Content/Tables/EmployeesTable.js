import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {fetchEmployees} from "../../../API";


class PalmTable extends React.Component {



  state = {
    dataL: [],
  } //API Information ...

  async componentDidMount() {

    await fetchEmployees().then((res) => {
      const data = res.data.result.users
      this.setState({ dataL: data });
    })
      .catch((error) => {
        console.error(error)
      })

  }

  getMuiTheme = () => createMuiTheme({
    overrides: {

      MUIDataTableHeadCell:{
        fixedHeaderCommon:{
          fontWeight: '1000',
          color: 'rgb(54,122,62)',
          fontSize: 'larger', 
        },
      },

         
      MUIDataTableBodyCell: {
        stackedCommon: {
            '@media (max-width:959.95px)': { 
            
                height: "50px",
             
            },
      },
    },
      MuiPaper:{
        elevation4:{
          boxShadow: '10px 10px 66px -119px rgba(227,227,227,1)',

        },
      },

      MUIDataTableToolbar:{
        icon:{
        '&:hover': {
          color:'#00c15a',
        },
      },
        iconActive:{
          color:'#00c15a',
        },
      },
            MUIDataTableViewCol:{

              checkboxRoot:{
                color:'#00c15a', 
              },
            checked:{
color:'#00c15a !important',
            },

  },

  MuiInput:{
    underline:{
      
      '&:after':{
        borderBottom:'2px solid #00c15a',
        color:'#00c15a',
      },

    },
  },

 

  MuiChip:{
    root:{
    backgroundColor:'#00c15a',
    color:'#ffffff',
    },
    deleteIcon:{
width:0,
    },
  },

  MuiButton:{
    textPrimary:{
color:'#00c15a',
    },
  },
  MuiInputLabel: { // Name of the component ⚛️ / style sheet
    root: { // Name of the rule
      color: "#00c15a",
      "&$focused": { // increase the specificity for the pseudo class
        color: "#00c15a"
      }
    },
  },
}});
  
  //check
  //.MUIDataTableViewCol-checkboxRoot-111.MUIDataTableViewCol-checked-112
  render() {
    const columns = ["Name", "User name", "Phone number", "Email", "Role"];

    const data = this.state.dataL.map((item) =>

    [item.firstName + " "+ item.lastName, item.username, item.phoneNumber, item.email , item.role],
  );
   

    const options = {
     
        download:false,
        print:false,
        filterType: "dropdown",
        responsive: "stacked",
        rowsPerPage: 10,
        selectableRows:false,

      };
  
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
      <MUIDataTable
        title={"Employees Table"}
        data={data}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
    );
  }
}
export default  PalmTable;