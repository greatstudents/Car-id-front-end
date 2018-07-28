import axios from 'axios';

const BASE_URL = 'https://car-id.herokuapp.com';

export {getData, addData, deleteData, deleteAll};

function getData(number) {
    const options = "?number=" + number;
    const url = `${BASE_URL}/car`;
    return axios.get(url+options).then(response => response.data);
}

function addData(number, name) {
    const options = {
        number: number,
        name: name
    }
    const url = `${BASE_URL}/car`;
    return axios.post(url, options).then(response => response.data);
}

function deleteData(number) {
    const options={
        number:number
    }
    const url = `${BASE_URL}/car`;
    return axios.put(url,options).then(response => response.data);
}

function deleteAll() {
    const url = `${BASE_URL}/cars`;
    return axios.put(url).then(response => response.data);
}
