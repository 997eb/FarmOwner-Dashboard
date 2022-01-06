import React, {useState, iseEffect, useEffect} from 'react';
import {NativeSelect, FormControl} from  '@material-ui/core';
import {fetchMonthsPicker} from '../../../API'



const  Dpicker = ({handleDPickerChange}) => {

    const [fetchedPicker, setFetchedPicker] = useState([]);

    useEffect(() => {
        const fetchPicker = async () => {
            setFetchedPicker(await fetchMonthsPicker())
        }

        fetchPicker();

    },[setFetchedPicker]);

    
    return (
        <FormControl >
            <NativeSelect onChange={(e)=> handleDPickerChange(e.target.value)}>
                <option value={"Monday"}>Monday</option>
                {fetchedPicker.map((country,i) =>  <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Dpicker;