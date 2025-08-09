import axios from 'axios'

const api=axios.create({
    baseURL:'/api/v1/auth'
})

export const googleAuth=(code)=>api.get(`/login?code=${code}`);