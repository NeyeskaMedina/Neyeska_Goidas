import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { UserContext } from '../context/UserContext';

export const Google = ({ openGoogle, handleCloseGoogle }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false); // Estado para gestionar si hay un error
    const [helperText, setHelperText] = useState(''); // Mensaje de ayuda
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para deshabilitar botón
    const {send, setSend} = useContext(UserContext);

    // Función de validación de correo
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email); // Devuelve true si el correo es válido
    };

    // Manejar el cambio en el input
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (validateEmail(emailValue)) {
            setEmailError(false);
            setHelperText(''); // Limpiar mensaje de error si es válido
            setIsButtonDisabled(false); // Habilitar botón si el correo es válido
        } else {
            setEmailError(true);
            setHelperText('Correo electrónico no válido'); // Mostrar mensaje de error
            setIsButtonDisabled(true); // Deshabilitar botón si el correo es inválido
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError(true);
            setHelperText('Correo electrónico no válido');
            setSend(false)
        } else {
            setEmailError(false);
            setHelperText('');
            setSend(true);
            console.log('Correo válido:', email);
            handleCloseGoogle();
            // Aquí puedes agregar la lógica adicional al hacer submit
        }
    };

    return (
        <Box className={`modalGoogle ${openGoogle ? 'show' : ''}`}>
            <Box className="modalGoogle-content">
                <Box sx={{ marginBottom: '2vh' }} className="modalGoogle-headers">
                    <FcGoogle size={100} />
                </Box>
                <form>
                    {/* Campo de correo electrónico */}
                    <TextField
                        id="outlined-basic"
                        label="Correo electrónico"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange} // Maneja el cambio de email
                        error={emailError} // Muestra el error si el correo no es válido
                        sx={{
                            borderRadius: '20px',
                            width: '100%', // Ajusta el ancho completo del campo
                            '& .MuiOutlinedInput-root': {
                                color: 'white', // Color del texto en blanco
                                '& fieldset': {
                                    borderColor: emailError ? 'red' : 'white', // Borde en rojo si hay error
                                    borderRadius: '20px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Borde cuando se pasa el cursor
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: emailError ? 'red' : 'rgb(0, 123, 255)', // Borde azul si es válido
                                },
                                '& input': {
                                    color: 'white', // Texto del input en blanco
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: emailError ? 'red' : 'white', // Cambia el color del label si hay error
                                '&.Mui-focused': {
                                    color: emailError ? 'red' : 'rgb(0, 123, 255)', // Color del label en foco
                                },
                            },
                        }}
                    />
                    {/* Mensaje de ayuda con label */}
                    <Typography 
                        sx={{ 
                            color: emailError ? 'red' : 'transparent', // Rojo si hay error
                            fontSize: '0.9rem', 
                            marginTop: '0.5rem' 
                        }}
                    >
                        {helperText}
                    </Typography>

                    {/* Botón para enviar */}
                    <Button
                        onClick={handleSubmit}
                        variant="outlined"
                        disabled={isButtonDisabled} // Botón deshabilitado si el correo es inválido
                        sx={{
                            borderRadius: '20px',
                            padding: '5px',
                            fontSize: '20px',
                            marginTop: '20px',
                            width: '45%', // Botón ocupa el 100% del ancho
                            height: '56px', // Igual que el alto del TextField
                            border: isButtonDisabled ? '1px solid gray' : '1px solid white', // Bordes en gris si está deshabilitado
                            color: isButtonDisabled ? 'rgba(251, 242, 242, 0.4) !important' : 'white', // Texto gris si está deshabilitado
                            backgroundColor: isButtonDisabled ? 'rgba(255, 255, 255, 0.1)' : 'transparent', // Fondo claro si está deshabilitado
                            cursor: isButtonDisabled ? 'not-allowed' : 'pointer', // Cambia el cursor si está deshabilitado
                            '&:hover': {
                                backgroundColor: isButtonDisabled ? 'rgba(255, 255, 255, 0.1)' : 'white', // No cambia el fondo si está deshabilitado
                                color: isButtonDisabled ? 'gray' : 'black', // Texto oscuro al hacer hover si está habilitado
                                border: isButtonDisabled ? '1px solid gray' : 'none', // Sin bordes si está habilitado
                            },
                        }}
                    >
                        Enviar
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Google;

