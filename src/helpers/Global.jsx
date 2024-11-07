const serverUrl = import.meta.env.VITE_APP_SERVER;

// Ruta del Backend desplegado
export const Global = {
  url: `${serverUrl}`
}


// Ruta del Backend en Local: se debe ejecutar el servidor del backend
/*
export const Global = {
    url: "http://localhost:3900/api/"
  }
*/