import axios from "axios";
axios.defaults.baseURL = 'https://localhost:7235/'
//axios.defaults.baseURL = 'http://desktop-tju9dof:8001/'
axios.defaults.headers.post['content-type'] = 'application/json'
axios.defaults.withCredentials = true;
axios.create({
    headers:{
        "Acces-Control-Allow-Origin":"*",
        "Acces-Control-Allow-Credentials":false         
    }
});
axios.interceptors.request.use((config) =>{
    return config;
    }, function(error){
        return Promise.reject(error)    
});
axios.interceptors.response.use((response) => {
    const {data} = response;
    if (data && data.isValid === false){
        return Promise.reject(data)
    }
    return data;
    }, function(error){
        return Promise.reject(error);
});
export default {
    install(app){
        app.provide('GET', (path) => axios.get(path))
        app.provide('POST', (path, payload) =>{
            // if (payload (payload) === 'string'){
            //     return axios.post(path, `"${payload}"`);                
            // }else {
            return axios.post(path,payload)
            // }
        });
        app.provide('PostFiles', (path, formData) => {
            return axios.post(path, formData,{headers: {'Content-Type':'multipart/form-data'}})
        });
        app.provide('Download', (path) => axios({
            url: path,
            method: GET,
            responseType: 'blob'
        }));
    }
}

