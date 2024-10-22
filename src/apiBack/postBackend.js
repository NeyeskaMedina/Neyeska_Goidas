import axios from 'axios'
const URL = import.meta.env.VITE_URL_BACK;

const addLikeBack = async ({date}) =>{
    
    try {
        const response = await axios.post(`${URL}/users`, date, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al enviar like a server", err);
        return { response: [], error: "Error al enviar like a server", loading: false };
    }
}
export {
    addLikeBack,
}