import axios from 'axios';
const apiURL = ' https://my.api.mockaroo.com/employee.json?key=53b1b110';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.error(`${error.response.status}: ${error.response.statusText}`);
    });

export const api = {
    getEmployees: handleError(async () => {
        const res = await axios.get(apiURL);
        return res.data;
    })
};
