import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import api from "../../service/api"

const App = () => {
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')
    
    const getCep = async (event) => {
        const cep = event.target.value.replace(/[^0-9]/g, '');
        setCep(cep)
        if (cep.length === 8) {
            try {
                const response = await api.get(`/${cep}`)
                setCity(response.data.cidade)
                setState(response.data.estado)
                setAddress(response.data.logradouro)
            }catch (error) {
                console.error(error);
                }
            }
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="CEP"
                        value={cep}
                        onChange={getCep}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        value={city}
                        onChange={getCep}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="UF"
                        value={state}
                        onChange={getCep}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        value={address}
                        onChange={getCep}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Complemento"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
            </Box>
        </form>
    );
}

export default App