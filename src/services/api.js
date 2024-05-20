import axios from 'axios'

const api = axios.create ({
    baseURL: 'https://api.themovidedb.org/3',
    params:{
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: 'pt-BR',
    }
})

export default api;