import { 
    insertLikeUsersDB,
    verifyUsersDB
} from "../models/users.js";
import 'dotenv/config'
import jwt from 'jsonwebtoken';

const newLike = async (req, res) => {
    const { name, email, check } = req.body;
    console.log(email, name);
    
    let autUser;
    try {
        const verify = await verifyUsersDB(email, name);
        console.log(verify.length);
        
        if (verify.length === 0) {
            autUser = await insertLikeUsersDB(name, email, check);
            console.log(autUser);
            const token = jwt.sign({ users: autUser.email }, process.env.JWT_SECRET, { expiresIn: "1hr" });
            return res.status(200).json({
                message: "Usuario y liked agregado con exito",
                code: 200,
                token,
                autUser
            });
        } else {            
            return res.status(400).json({ message: "Usuario ya existe" });
        }
    } catch (error) {
        const errorFound = [
            { status: 500, message: "Error interno del servidor" },
        ];
        console.error('Error al agregar proveedor', error);
        return res.status(errorFound[0]?.status || 500).json({ 
            error: errorFound[0]?.message || "Error al agregar like a DB" 
        });
    }
}

export {
    newLike
}