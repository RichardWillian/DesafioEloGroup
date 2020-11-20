import axios from 'axios'

export const http = axios.create({
    baseURL: 'url-da-api'
})