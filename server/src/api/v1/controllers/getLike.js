import { 
    getLikeDB 
} from "../models/users.js";

const getLike = async (req, res) => {
    try {
        const cantLike = await getLikeDB();
        return res.status(200).json({ cantLike : cantLike });
    } catch (error) {
        const errorFound = [
            { status: 500, message: "Error interno del servidor GET" },
        ];
    return res
    .status(errorFound[0]?.status || 500 )
    .json({ error: errorFound[0]?.message || "Error interno del servidor GET" });
    }
}

export {
    getLike
}