import axios from 'axios';

const API_BASE_URL = "http://localhost:5252/api/";

// Configura axios
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepta las peticiones para agregar el token si está disponible.
api.interceptors.request.use((config) => {
    // const token = localStorage.getItem('token');

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwianRpIjoiNjY3MTI3ZDUtOTk5YS00NjA3LWI1MTQtMWI4YWFmYWQ5NTg3IiwiaWF0IjoxNzMyOTExOTUwLCJleHAiOjE3MzI5MTc5NTAsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODYiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDg2In0.DdubbVmJdpBIQRfo3Ir3UJYW7fQMgC5k4vL4J45KKWM";

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
