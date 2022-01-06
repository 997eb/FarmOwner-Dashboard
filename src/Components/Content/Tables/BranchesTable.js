import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { fetchBranchesData } from "../../../API";

class PalmTable extends React.Component {



  state = {
    dataL: [],
  } //API Information ...

  async componentDidMount() {

    // const fetchedData = await fetchBranchesData();
    await fetchBranchesData().then((res) => {
      const data = res.data.result.farmBranches
      this.setState({ dataL: data });
    })
      .catch((error) => {
        console.error(error)
      })

  }

  getMuiTheme = () => createMuiTheme({
    overrides: {

      MUIDataTableHeadCell: {
        fixedHeaderCommon: {
          fontWeight: '1000',
          color: 'rgb(54,122,62)',
          fontSize: 'larger',
        },
      },

      MuiPaper: {
        elevation4: {
          boxShadow: '10px 10px 66px -119px rgba(227,227,227,1)',

        },
      },

         
      MUIDataTableBodyCell: {
        stackedCommon: {
            '@media (max-width:959.95px)': { 
            
                height: "50px",
             
            },
      },
    },
      MUIDataTableToolbar: {
        icon: {
          '&:hover': {
            color: '#00c15a',
          },
        },
        iconActive: {
          color: '#00c15a',
        },
      },
      MUIDataTableViewCol: {

        checkboxRoot: {
          color: '#00c15a',
        },
        checked: {
          color: '#00c15a !important',
        },

      },

      MuiInput: {
        underline: {

          '&:after': {
            borderBottom: '2px solid #00c15a',
            color: '#00c15a',
          },

        },
      },

      MuiChip: {
        root: {
          backgroundColor: '#00c15a',
          color: '#ffffff',
        },
        deleteIcon: {
          width: 0,
        },
      },

      MuiButton: {
        textPrimary: {
          color: '#00c15a',
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
    }
  });

  //check
  //.MUIDataTableViewCol-checkboxRoot-111.MUIDataTableViewCol-checked-112
  render() {
    const columns = ["Id", "Branch Name", "Branch address"];

    const data = this.state.dataL.map((item) =>

      [item.id, item.name, item.address],
    );
    
    const options = {

      download: false,
      print: false,
      filterType: "dropdown",
      responsive: "stacked",
      rowsPerPage: 10,
      selectableRows: false,

    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={"Branches Table"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}
export default PalmTable;