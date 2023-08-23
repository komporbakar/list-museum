const API_MUSEUM = 'https://my-json-server.typicode.com/komporbakar/apiMuseum'

import axios from 'axios'
import React from 'react'

const axiosInstance = {
    museum: () =>  axios.get(API_MUSEUM +'/museum').then((res) =>  res.data).catch((err) => { console.log(err)}),
    detail: (id) => axios.get(`${API_MUSEUM}/museum/${id}`).then((res) => res.data).catch((err) => { console.log(err)}),
}

export default axiosInstance