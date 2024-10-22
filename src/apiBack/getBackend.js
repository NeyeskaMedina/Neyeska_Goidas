import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const getLikes = async () => {
    try {
        const response = await axios.get(`${URL}/users`);
        
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al obtener likes", err);
        return { response: [], error: "Error al obtener likes", loading: false };
    }
}

export {
    getLikes
}
