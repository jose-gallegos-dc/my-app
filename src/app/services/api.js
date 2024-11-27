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

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwianRpIjoiYzFiY2Q3MzctYThhYi00NDRmLWE0ZjMtZTA5YWY3M2UwMmU4IiwiaWF0IjoxNzMyNzQ4MDg2LCJleHAiOjE3MzI3NTQwODYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODYiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDg2In0.br1L9Zh7yCot3X1ph77Cr3O6t4W3OtFGI-jrhNM40GU";

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
