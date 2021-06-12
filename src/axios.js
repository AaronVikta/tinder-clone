import axios from 'axios';

const instance = axios.create({
    baseURL: "https://aaronvikta-tinder.herokuapp.com/"
})


export default instance;