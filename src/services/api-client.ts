import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'227a02acfbe54a2aa4d1d75c9c31d1aa'
    }
})
