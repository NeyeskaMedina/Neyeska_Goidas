import React, { useContext, useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { UserContext } from '../context/UserContext';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { addLikeBack } from '../apiBack/postBackend.js';

export const Google = ({ openGoogle, handleCloseGoogle, openModal }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false); 
    const [nameError, setNameError] = useState(false);
    const [helperText, setHelperText] = useState(''); 
    const {send, setSend} = useContext(UserContext);
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    
    useEffect(() => {
        if (openModal) {
            handleCloseGoogle();  // Llama a la función de cierre cuando se presione la "X" del modal principal
        }
    }, [openModal]);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email); 
    };
    const validateName = (name) => {
        const regex = /^[a-zA-Z\s]+$/;
        const res = regex.test(name) && name.length > 4;
        return res;
    }


    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setEmailError(!validateEmail(emailValue.trim())); 
    };
    const handleNameChange = (e) => {
        const nameValue = e.target.value;
        setName(nameValue);      
        setNameError(!validateName(nameValue.trim())); 
    };
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modalGoogle')) {
            handleCloseGoogle();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email.trim()) && !validateName(name.trim())) {
            setEmailError(true);
            setHelperText('Invalid email');
        } else {
            setEmailError(false);
            setHelperText('');
            const date = {
                name,
                email,
                check
            }
            
            console.log('Correo válido:', email);
             // Aquí puedes agregar la lógica adicional al hacer submit
             try {
                const response = await addLikeBack({date})
                
                if(response.loading === true){
                    handleCloseGoogle();
                    setSend(true);
                    localStorage.setItem("token", response.token, response.useAut);
                }else{
                    setHelperText('User already sent us like')
                    setSend(false)
                }
             } catch (error) {
                console.error("Error al enviar datos a la base:", error);
                setHelperText('Ocurrió un error al procesar tu solicitud. Inténtalo nuevamente.');
             }
        }
    };
    const isButtonDisabled = emailError || nameError || email === "" || name === "";

    return (
        <Box onClick={handleClickOutside} className={`modalGoogle ${openGoogle ? 'show' : ''}`}>
            <Box className="modalGoogle-content">
            <h1 className='xlh1'>¡Send your like!</h1>
                <Box sx={{ marginBottom: '2vh' }} className="modalGoogle-headers">
                    <FcGoogle size={100} />
                </Box>
                <form>
                    {/* Campo de correo electrónico */}
                    <TextField
                        id="outlined-basic"
                        label="Email"
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
                        label="Full name"
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
                            marginTop: '0.5rem',
                            marginBottom: '25px'
                        }}
                    >
                        {helperText}
                    </Typography>
                    <Box>
                        <FormGroup>
                            <FormControlLabel 
                                onChange={(e) => setCheck(e.target.checked)}
                                control={<Checkbox sx={{color: 'ActiveBorder'}} />} 
                                label="Select if you want me to send you my updated projects and promotions in web development." />
                        </FormGroup>
                

                    </Box>
                    {/* Botón para enviar */}
                    <Button
                        onClick={handleSubmit}
                        variant="outlined"
                        disabled={isButtonDisabled ? true : false} // Botón deshabilitado si el correo es inválido
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
                        Send
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Google;

