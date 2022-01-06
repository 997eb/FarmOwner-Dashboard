import React from "react";
import { FormControlLabel, } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { fetchPalmsData } from "../../../API";
import '../content.css'

class PalmTable extends React.Component {

  state = {
    dataL: [],
    checked: false,
    unChecked: false,
    infected: false,
  }

  async componentDidMount() {
    await fetchPalmsData().then((res) => {
      const data = res.data.result.palms

      this.setState({ dataL: data });
      console.log(this.state.dataL)

    }).catch((error) => {
      console.error(error)
    })

  }

  getMuiTheme = () => createMuiTheme({


    overrides: {
      MuiTableCell: {
        body: {
          color: 'black',
        },
      },

     
      MUIDataTableBodyCell: {
        stackedCommon: {
            '@media (max-width:959.95px)': { 
            
                height: "50px",
             
            },
      },
    },

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
      MuiInputLabel: {
        root: {
          color: "#00c15a",
          "&$focused": {
            color: "#00c15a"
          }
        },
      },

      MuiFormControlLabel:{
        root:{
        marginLeft: '0px'
      }
    },
    }
  });

  render() {
    const columns = 
   
      ["Palm Type",
      
      {
        name: "Palm Status",
        options: {
          filter: false,
        
          customBodyRender: (value, updateValue) => (
            
              <FormControlLabel
                value={value}
                control={<p className={value =="Checked" ? 'checked' : 
                value =="Unchecked" ? 'unchecked' : "infected"}>{value} </p>}
                onChange={event => updateValue(event.target.value)}
              />
          )
          }
      }, "Palm Gender", "Palm age", "Trunk Size (in cm)", "irrigation Method", "Compost Type", "isInfected"]


    const data = this.state.dataL.map((item) =>

      [
        item.palmType.value,
        item.palmStatus.value,
        item.palmGender.value,
        item.age,
        item.trunkSize,
        item.irrigationMethod.value,
        item.compostType.value,
        item.isInfected.toString(),

      ],
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
          title={"Palm Table"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>

    );
  }
}
export default PalmTable;
