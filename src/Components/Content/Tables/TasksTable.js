import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { fetchTasks } from "../../../API";
import { FormControlLabel, } from '@material-ui/core';


class PalmTable extends React.Component {


  state = {
    dataL: [],
  } //API Information ...

  async componentDidMount() {

    await fetchTasks().then((res) => {
      const data = res.data.result.checklists
      console.log(data)
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
      MuiFormControlLabel: {
        root: {
          marginLeft: '0px'
        }
      },
    }
  });


  render() {
    const columns = [

      {
        name: "Task Status",
        options: {
          filter: false,

          customBodyRender: (value, updateValue) => (

            <FormControlLabel
              value={value}
              control={<p className={value == "Checked" ? 'checked' : 'unchecked'}>{value} </p>}
              onChange={event => updateValue(event.target.value)}
            />
          )
        }
      }
      , "Done By", "Task Date", "Palm ID", "note"];

    const data = this.state.dataL.map((item) =>

      [
        item.palm.palmStatus.value,
        item.user.firstName + " " + item.user.lastName,
        item.updatedAt
        , item.palmId,
        "  hg"

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
          title={"Tasks Table"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}
export default PalmTable;

/*
TaskStatus :
palmStatus.value
DoneBy:
user.firstName + " " + lastName
TaskDate:
updatedAt
PalmNumber:
palmId
note: */


/*
{
  "success": true,
  "result": {
    "checklists": [
      {
        "id": 8,
        "createdAt": "2020-10-14T15:15:59.567452",
        "updatedAt": "0001-01-01T00:00:00",
        "checklistOrder": 1,
        "isInfected": true,
        "palmId": 24,
        "palm": {
          "id": 24,
          "createdAt": "2020-10-14T15:13:30.811205",
          "updatedAt": "0001-01-01T00:00:00",
          "palmOrder": 1,
          "age": 1,
          "qrCodeText": "24",
          "trunkSize": 1,
          "lastChecked": "0001-01-01T00:00:00",
          "farmBranchId": 10,
          "farmBranch": {


          },
          "userId": 5,
          "user": {

          },
          "palmTypeId": 1,
          "palmType": {

          },
          "palmGenderId": 1,
          "palmGender": {

          },
          "palmStatusId": 2,
          "palmStatus": {
            "lazyLoader": {},
            "code": 2,
            "value": "Checked",
            "id": 2,
            "createdAt": "2020-09-16T18:53:13.377465",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "compostTypeId": 1,
          "compostType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Organic",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.526093",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "irrigationMethodId": 1,
          "irrigationMethod": {
            "lazyLoader": {},
            "code": 1,
            "value": "Rated Immersion",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.408865",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "isInfected": true,
          "infectionTypeId": 1,
          "infectionType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Unspecified",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.462164",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "imageId": null,
          "qrCodeImageId": 8
        },
        "userId": 5,
        "user": {
          "id": 5,
          "createdAt": "2020-09-16T19:29:24.915711",
          "updatedAt": "0001-01-01T00:00:00",
          "email": "ebtsam@gmail.com",
          "phoneNumber": "589876797",
          "username": "som187",
          "firstName": "Ebtisam",
          "lastName": "Alkhuzai",
          "role": "Farm Owner",
          "token": null,
          "lastLogin": "2020-10-21T10:04:36.951659",
          "farmId": 1,
          "farm": {
            "id": 1,
            "createdAt": "2020-09-17T10:43:58.462061",
            "updatedAt": "0001-01-01T00:00:00",
            "name": "palm1",
            "address": "plakm1",
            "updateIntervalInHours": 0,
            "cityId": 1,
            "city": {
              "lazyLoader": {},
              "code": 1,
              "value": "Riyadh",
              "id": 1,
              "createdAt": "2020-09-16T18:53:13.676712",
              "updatedAt": "0001-01-01T00:00:00"
            },
            "imageId": null
          },
          "imageId": null
        },
        "lastEditedById": null,
        "lastEditedBy": null,
        "infectionTypeId": 1,
        "infectionType": {
          "lazyLoader": {},
          "code": 1,
          "value": "Unspecified",
          "id": 1,
          "createdAt": "2020-09-16T18:53:13.462164",
          "updatedAt": "0001-01-01T00:00:00"
        }
      },
      {
        "id": 9,
        "createdAt": "2020-10-21T10:09:34.966955",
        "updatedAt": "0001-01-01T00:00:00",
        "checklistOrder": 1,
        "isInfected": false,
        "palmId": 25,
        "palm": {
          "id": 25,
          "createdAt": "2020-10-21T10:09:02.580889",
          "updatedAt": "0001-01-01T00:00:00",
          "palmOrder": 1,
          "age": 1,
          "qrCodeText": "25",
          "trunkSize": 1,
          "lastChecked": "0001-01-01T00:00:00",
          "farmBranchId": 9,
          "farmBranch": {
            "id": 9,
            "createdAt": "2020-10-14T15:12:42.665722",
            "updatedAt": "0001-01-01T00:00:00",
            "name": "b1",
            "address": "makkah",
            "updateIntervalInHours": 0,
            "farmId": 1,
            "farm": {
              "id": 1,
              "createdAt": "2020-09-17T10:43:58.462061",
              "updatedAt": "0001-01-01T00:00:00",
              "name": "palm1",
              "address": "plakm1",
              "updateIntervalInHours": 0,
              "cityId": 1,
              "city": {
                "lazyLoader": {},
                "code": 1,
                "value": "Riyadh",
                "id": 1,
                "createdAt": "2020-09-16T18:53:13.676712",
                "updatedAt": "0001-01-01T00:00:00"
              },
              "imageId": null
            },
            "cityId": 58,
            "city": {
              "lazyLoader": {},
              "code": 3,
              "value": "Dammam",
              "id": 58,
              "createdAt": "2020-09-16T18:53:13.701874",
              "updatedAt": "0001-01-01T00:00:00"
            }
          },
          "userId": 13,
          "user": {
            "id": 13,
            "createdAt": "2020-10-19T22:29:57.212699",
            "updatedAt": "0001-01-01T00:00:00",
            "email": "f1@gmail.com",
            "phoneNumber": "0567898766",
            "username": "f1",
            "firstName": "Farmer1",
            "lastName": "ss",
            "role": "Farmer",
            "token": null,
            "lastLogin": "2020-10-21T10:07:16.278762",
            "farmId": 1,
            "farm": {
              "id": 1,
              "createdAt": "2020-09-17T10:43:58.462061",
              "updatedAt": "0001-01-01T00:00:00",
              "name": "palm1",
              "address": "plakm1",
              "updateIntervalInHours": 0,
              "cityId": 1,
              "city": {
                "lazyLoader": {},
                "code": 1,
                "value": "Riyadh",
                "id": 1,
                "createdAt": "2020-09-16T18:53:13.676712",
                "updatedAt": "0001-01-01T00:00:00"
              },
              "imageId": null
            },
            "imageId": null
          },
          "palmTypeId": 1,
          "palmType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Ajwa",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.267138",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "palmGenderId": 1,
          "palmGender": {
            "lazyLoader": {},
            "code": 1,
            "value": "Male",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.319477",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "palmStatusId": 2,
          "palmStatus": {
            "lazyLoader": {},
            "code": 2,
            "value": "Checked",
            "id": 2,
            "createdAt": "2020-09-16T18:53:13.377465",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "compostTypeId": 1,
          "compostType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Organic",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.526093",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "irrigationMethodId": 1,
          "irrigationMethod": {
            "lazyLoader": {},
            "code": 1,
            "value": "Rated Immersion",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.408865",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "isInfected": true,
          "infectionTypeId": 1,
          "infectionType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Unspecified",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.462164",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "imageId": null,
          "qrCodeImageId": 10
        },
        "userId": 13,
        "user": {
          "id": 13,
          "createdAt": "2020-10-19T22:29:57.212699",
          "updatedAt": "0001-01-01T00:00:00",
          "email": "f1@gmail.com",
          "phoneNumber": "0567898766",
          "username": "f1",
          "firstName": "Farmer1",
          "lastName": "ss",
          "role": "Farmer",
          "token": null,
          "lastLogin": "2020-10-21T10:07:16.278762",
          "farmId": 1,
          "farm": {
            "id": 1,
            "createdAt": "2020-09-17T10:43:58.462061",
            "updatedAt": "0001-01-01T00:00:00",
            "name": "palm1",
            "address": "plakm1",
            "updateIntervalInHours": 0,
            "cityId": 1,
            "city": {
              "lazyLoader": {},
              "code": 1,
              "value": "Riyadh",
              "id": 1,
              "createdAt": "2020-09-16T18:53:13.676712",
              "updatedAt": "0001-01-01T00:00:00"
            },
            "imageId": null
          },
          "imageId": null
        },
        "lastEditedById": null,
        "lastEditedBy": null,
        "infectionTypeId": null,
        "infectionType": null
      },
      {
        "id": 10,
        "createdAt": "2020-10-21T10:10:34.696697",
        "updatedAt": "0001-01-01T00:00:00",
        "checklistOrder": 2,
        "isInfected": true,
        "palmId": 25,
        "palm": {
          "id": 25,
          "createdAt": "2020-10-21T10:09:02.580889",
          "updatedAt": "0001-01-01T00:00:00",
          "palmOrder": 1,
          "age": 1,
          "qrCodeText": "25",
          "trunkSize": 1,
          "lastChecked": "0001-01-01T00:00:00",
          "farmBranchId": 9,
          "farmBranch": {
            "id": 9,
            "createdAt": "2020-10-14T15:12:42.665722",
            "updatedAt": "0001-01-01T00:00:00",
            "name": "b1",
            "address": "makkah",
            "updateIntervalInHours": 0,
            "farmId": 1,
            "farm": {
              "id": 1,
              "createdAt": "2020-09-17T10:43:58.462061",
              "updatedAt": "0001-01-01T00:00:00",
              "name": "palm1",
              "address": "plakm1",
              "updateIntervalInHours": 0,
              "cityId": 1,
              "city": {
                "lazyLoader": {},
                "code": 1,
                "value": "Riyadh",
                "id": 1,
                "createdAt": "2020-09-16T18:53:13.676712",
                "updatedAt": "0001-01-01T00:00:00"
              },
              "imageId": null
            },
            "cityId": 58,
            "city": {
              "lazyLoader": {},
              "code": 3,
              "value": "Dammam",
              "id": 58,
              "createdAt": "2020-09-16T18:53:13.701874",
              "updatedAt": "0001-01-01T00:00:00"
            }
          },
          "userId": 13,
          "user": {
            "id": 13,
            "createdAt": "2020-10-19T22:29:57.212699",
            "updatedAt": "0001-01-01T00:00:00",
            "email": "f1@gmail.com",
            "phoneNumber": "0567898766",
            "username": "f1",
            "firstName": "Farmer1",
            "lastName": "ss",
            "role": "Farmer",
            "token": null,
            "lastLogin": "2020-10-21T10:07:16.278762",
            "farmId": 1,
            "farm": {
              "id": 1,
              "createdAt": "2020-09-17T10:43:58.462061",
              "updatedAt": "0001-01-01T00:00:00",
              "name": "palm1",
              "address": "plakm1",
              "updateIntervalInHours": 0,
              "cityId": 1,
              "city": {
                "lazyLoader": {},
                "code": 1,
                "value": "Riyadh",
                "id": 1,
                "createdAt": "2020-09-16T18:53:13.676712",
                "updatedAt": "0001-01-01T00:00:00"
              },
              "imageId": null
            },
            "imageId": null
          },
          "palmTypeId": 1,
          "palmType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Ajwa",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.267138",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "palmGenderId": 1,
          "palmGender": {
            "lazyLoader": {},
            "code": 1,
            "value": "Male",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.319477",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "palmStatusId": 2,
          "palmStatus": {
            "lazyLoader": {},
            "code": 2,
            "value": "Checked",
            "id": 2,
            "createdAt": "2020-09-16T18:53:13.377465",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "compostTypeId": 1,
          "compostType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Organic",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.526093",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "irrigationMethodId": 1,
          "irrigationMethod": {
            "lazyLoader": {},
            "code": 1,
            "value": "Rated Immersion",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.408865",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "isInfected": true,
          "infectionTypeId": 1,
          "infectionType": {
            "lazyLoader": {},
            "code": 1,
            "value": "Unspecified",
            "id": 1,
            "createdAt": "2020-09-16T18:53:13.462164",
            "updatedAt": "0001-01-01T00:00:00"
          },
          "imageId": null,
          "qrCodeImageId": 10
        },
        "userId": 13,
        "user": {
          "id": 13,
          "createdAt": "2020-10-19T22:29:57.212699",
          "updatedAt": "0001-01-01T00:00:00",
          "email": "f1@gmail.com",
          "phoneNumber": "0567898766",
          "username": "f1",
          "firstName": "Farmer1",
          "lastName": "ss",
          "role": "Farmer",
          "token": null,
          "lastLogin": "2020-10-21T10:07:16.278762",
          "farmId": 1,
          "farm": {
            "id": 1,
            "createdAt": "2020-09-17T10:43:58.462061",
            "updatedAt": "0001-01-01T00:00:00",
            "name": "palm1",
            "address": "plakm1",
            "updateIntervalInHours": 0,
            "cityId": 1,
            "city": {
              "lazyLoader": {},
              "code": 1,
              "value": "Riyadh",
              "id": 1,
              "createdAt": "2020-09-16T18:53:13.676712",
              "updatedAt": "0001-01-01T00:00:00"
            },
            "imageId": null
          },
          "imageId": null
        },
        "lastEditedById": null,
        "lastEditedBy": null,
        "infectionTypeId": 1,
        "infectionType": {
          "lazyLoader": {},
          "code": 1,
          "value": "Unspecified",
          "id": 1,
          "createdAt": "2020-09-16T18:53:13.462164",
          "updatedAt": "0001-01-01T00:00:00"
        }
      }
    ]
  }
}

*/