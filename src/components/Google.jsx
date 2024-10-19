import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { UserContext } from '../context/UserContext';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { addLikeBack } from '../apiBack/postBackend.js';

export const Google = ({ openGoogle, handleCloseGoogle }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false); // Estado para gestionar si hay un error
    const [nameError, setNameError] = useState(false);
    const [helperText, setHelperText] = useState(''); // Mensaje de ayuda
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para deshabilitar botón
    const {send, setSend} = useContext(UserContext);
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    
    // Función de validación de correo
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email); // Devuelve true si el correo es válido
    };
    const validateName = (name) => {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name); // Devuelve true si el nombre es válido
    }

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
    const handleNameChange = (e) => {
        const nameValue = e.target.value;
        setName(nameValue);

        if (validateName(nameValue)  && nameValue.length > 4 ) {
            setIsButtonDisabled(false); // Habilitar botón si el nombre es válido
            setNameError(false);
            setHelperText('');
        } else {
            setIsButtonDisabled(true); // Deshabilitar botón si el nombre es inválido
            setHelperText('Introduzca un nombre valido');
            setNameError(true);
        }
    }
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modalGoogle')) {
            handleCloseGoogle();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email) && !validateName(name)) {
            setEmailError(true);
            setHelperText('Correo electrónico no válido');
        } else {
            setEmailError(false);
            setHelperText('');
            const date = {
                name,
                email,
                check
            }
            console.log(date);
            
            console.log('Correo válido:', email);
             // Aquí puedes agregar la lógica adicional al hacer submit
             try {
                const response = await addLikeBack({date})
                console.log(response.loading);
                
                if(response.loading === true){
                    handleCloseGoogle();
                    setSend(true);
                    localStorage.setItem("token", response.token, response.useAut);
                }else{
                    setHelperText('Usuario ya nos envio like')
                    setSend(false)
                }
             } catch (error) {
                console.error("Error al enviar datos a la base:", error);
                setHelperText('Ocurrió un error al procesar tu solicitud. Inténtalo nuevamente.');
             }
        }
    };

    return (
        <Box onClick={handleClickOutside} className={`modalGoogle ${openGoogle ? 'show' : ''}`}>
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
                    <TextField
                        id="outlined-basic"
                        label="Nombre Completo"
                        variant="outlined"
                        error={nameError}
                        value={name}
                        onChange={handleNameChange} // Maneja el cambio de nombre
                        sx={{
                            marginTop: '20px',
                            borderRadius: '20px',
                            width: '100%', // Ajusta el ancho completo del campo
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: nameError ? 'red' : 'white', // Borde blanco
                                    borderRadius: '20px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Borde blanco al hacer hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: nameError ? 'red' : 'rgb(0, 123, 255)', // Borde azul cuando está enfocado
                                },
                            },
                            // Estilo para el texto dentro del input
                            '& .MuiOutlinedInput-input': {
                                color: 'white', // Texto del input en blanco
                            },
                            // Estilo para el label
                            '& .MuiInputLabel-root': {
                                color: nameError ? 'red' : 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: nameError ? 'red' : 'rgb(0, 123, 255)',
                            },
                        }}
                    />
                    {/* Mensaje de ayuda con label */}
                    <Typography 
                        sx={{ 
                            color: helperText !== "" ? 'red' : 'transparent', // Rojo si hay error
                            fontSize: '1rem', 
                            marginTop: '0.5rem' 
                        }}
                    >
                        {helperText}
                    </Typography>
                    <Box>
                        <FormGroup>
                            <FormControlLabel 
                                onChange={(e) => setCheck(e.target.checked)}
                                control={<Checkbox />} 
                                label="Selecciona si deseas que te envie mis projectos actualizados y promociones en el desarrollo web." />
                        </FormGroup>
                

                    </Box>
                    {/* Botón para enviar */}
                    <Button
                        onClick={handleSubmit}
                        variant="outlined"
                        disabled={isButtonDisabled} // Botón deshabilitado si el correo es inválido
                        sx={{
                            borderRadius: '20px',
                            padding: '5px',
                            fontSize: '20px',
                            marginTop: '30px',
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

