import axios from 'axios';

let jwtToken = localStorage.getItem('jwt');
if (jwtToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    console.log('JTW TOKEN exists');
}

export default axios;