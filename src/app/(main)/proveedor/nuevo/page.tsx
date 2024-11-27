'use client';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react';
import { api } from '@/app/services/api';

export default function Proveedor() {
    const [nombreProveedor, setNombreProveedor] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [estado, setEstado] = useState(''); // Para almacenar el nombre del estado
    const [estadoID, setEstadoID] = useState(''); // Para almacenar el ID del estado seleccionado
    const [municipio, setMunicipio] = useState('');
    const [celular, setCelular] = useState('');
    const [estados, setEstados] = useState([]); // Lista de estados
    const [ciudades, setCiudades] = useState([]); // Lista de ciudades/municipios
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    // const navigate = useNavigate();


    const supplierStore = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post('proveedores', {
                nombreProveedor,
                razonSocial,
                estado,
                municipio,
                celular
            });

            setSuccess(data.mensaje);
            setError(null);
        } catch (err) {
            console.log(err);

            // const { estatus, mensaje } = err.response.data;

            // setError(mensaje);
            // setSuccess(null);
        }
    };



    return (
        <div className="card">
            <span className="text-900 text-xl font-bold mb-4 block">Crear proveedor</span>
            <div className="grid">
                <div className="col-12 lg:col-2">
                    <div className="text-900 font-medium text-xl mb-3">Prueba</div>
                    <p className="m-0 p-0 text-600 line-height-3 mr-3">Esta es un prueba</p>
                </div>
                <form onSubmit={supplierStore}>
                    <div className="col-12 lg:col-10">
                        <div className="grid formgrid p-fluid">
                            <div className="field mb-4 col-12">
                                <label htmlFor="nickname" className="font-medium text-900">
                                    *Nombre
                                </label>
                                <InputText id="nickname" type="text" value={nombreProveedor} onChange={(e) => setNombreProveedor(e.target.value)} />
                            </div>
                            <div className="field mb-4 col-12">
                                <label htmlFor="bio" className="font-medium text-900">
                                    *Razón social
                                </label>
                                <InputTextarea id="bio" rows={3} autoResize></InputTextarea>
                            </div>
                            {/* <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="country" className="font-medium text-900">
                                *Estado
                            </label>
                            <Dropdown
                                inputId="country"
                                options={countries}
                                itemTemplate={itemTemplate}
                                onChange={(e) => setSelectedCountry(e.value)}
                                value={selectedCountry}
                                optionLabel="name"
                                filter
                                filterBy="name"
                                showClear
                                placeholder="Select a Country"
                            />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="country" className="font-medium text-900">
                                *Municipio
                            </label>
                            <Dropdown
                                inputId="country"
                                options={countries}
                                itemTemplate={itemTemplate}
                                onChange={(e) => setSelectedCountry(e.value)}
                                value={selectedCountry}
                                optionLabel="name"
                                filter
                                filterBy="name"
                                showClear
                                placeholder="Select a Country"
                            />
                        </div> */}
                            <div className="field mb-4 col-12 md:col-6">
                                <label htmlFor="city" className="font-medium text-900">
                                    *Teléfono celular
                                </label>
                                <InputText id="city" type="text" />
                            </div>
                            <div className="col-12">
                                <Button label="Crear proveedor" className="w-auto mt-3"></Button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}
