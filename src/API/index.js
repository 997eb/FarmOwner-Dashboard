import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';
const GhallahUrl = 'https://ghallahstagingapi.herokuapp.com/api';


export const fetchBranchesData = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/FarmBranch?FarmId=${localStorage.getItem('farmId')}`, {
        headers: {
            'Authorization': AuthStr
        }

     
    })
     return promise
};

export const fetchPalmsData = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);
    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchAjwa = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmTypeCode=1`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchSukkari = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmTypeCode=2`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchSafwai = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmTypeCode=3`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchUnCheckedPalms = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmStatusCode=1`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchCheckedPalms = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmStatusCode=2`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchEmployees = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Account`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};


export const fetchTasks = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Checklist`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchInfectedPalms = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);

    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmStatusCode=3`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchUnKnownPalms = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmStatusCode=4`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

export const fetchSagei = async () => {

    const auth = localStorage.getItem('auth')
    const AuthStr = 'Bearer '.concat(auth);
    console.log(AuthStr);


    var promise = await axios.get(`https://ghallahstagingapi.herokuapp.com/api/Palm?UserId=${localStorage.getItem('userId')}&FarmId=${localStorage.getItem('farmId')}&PalmTypeCode=4`, {
        headers: {
            'Authorization': AuthStr
        }
     
    })
     return promise
};

////////////////////////////////////////// Dummy Data ////////////////////////////////////////// 

export const fetchData = async (picker) => {

    let changeableUrl = url;
    console.log("you are here")

    if (picker) {
        changeableUrl = `${url}/countries/${picker}`;
        console.log("you are here1")

    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate }


    } catch (error) {
        console.log("you are here3")

        console.log(error)
    }

};
export const fetchDataPie = async () => {


    let changeableUrl = `${url}/countries/USA`;


    try {
        const { data: { confirmed, recovered, deaths } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths }


    } catch (error) {
        console.log("you are here3")
        console.log(error)
    }

};


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
};


export const fetchMonthsPicker = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}

