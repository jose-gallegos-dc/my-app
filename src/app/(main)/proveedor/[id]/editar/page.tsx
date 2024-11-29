'use client';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react';
import { api } from '@/app/services/api';
import { Proveedores, Proveedor } from '@/app/types/Proveedor';
import { useParams, useRouter } from 'next/navigation';

export default function ProveedorEdicion() {
    const [nombreProveedor, setNombreProveedor] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [selectedEstado, setSelectedEstado] = useState(null);
    const [selectedMunicipio, setSelectedMunicipio] = useState(null);
    const [celular, setCelular] = useState('');
    const [estados, setEstados] = useState([]); // Lista de estados
    const [ciudades, setCiudades] = useState([]); // Lista de ciudades/municipios
    const router = useRouter();

    const { id } = useParams();

    // const getSupplier = async () => {
    //     try {
    //         const { data } = await api.get(`proveedores/${id}`);
    //         const supplierData = data.data;

    //         console.log(supplierData);


    //         setNombreProveedor(supplierData.nombreProveedor);
    //         setRazonSocial(supplierData.razonSocial);
    //         setCelular(supplierData.celular);

    //         // Aquí encuentra el estadoID que corresponde al nombre del estado.
    //         const estadoSeleccionado = estados.find(est => est.nombre === supplierData.estado);
    //         setSelectedEstado(estadoSeleccionado);

    //         const ciudadSeleccionado = ciudades.find(ciu => ciu.nombre === supplierData.municipio);
    //         setSelectedMunicipio(ciudadSeleccionado);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const updateSupplier = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.put(`proveedores/${id}`, {
                nombreProveedor: nombreProveedor,
                razonSocial: razonSocial,
                estado: selectedEstado.nombre,
                municipio: selectedMunicipio.nombre,
                celular: celular
            });

            router.push('/proveedor');

        } catch (err) {
            console.log(err);
        }
    };

    const getEstados = async () => {
        try {
            const { data } = await api.get('estados');

            setEstados(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getCiudades = async () => {
        try {
            const { data } = await api.get(`ciudades/${selectedEstado.estadoID}`);
            setCiudades(data.data);

            console.log(data.data);


        } catch (err) {
            console.log(err);
        }
    };

    // Ejecuta la carga inicial de estados.
    useEffect(() => {
        getEstados();
    }, []);

    // Ejecuta la carga de ciudades cada vez que `estadoID` cambie.
    useEffect(() => {
        if (selectedEstado) {
            getCiudades();
        }
    }, [selectedEstado]);

    // Ejecuta la carga del proveedor al montar el componente
    // useEffect(() => {
    //     if (estados.length > 0) {
    //         getSupplier();
    //     }
    // }, [estados]);

    useEffect(() => {
        const loadSupplier = async () => {
            try {
                const { data } = await api.get(`proveedores/${id}`);
                const supplierData = data.data;

                setNombreProveedor(supplierData.nombreProveedor);
                setRazonSocial(supplierData.razonSocial);
                setCelular(supplierData.celular);

                // Encuentra y establece el estado preseleccionado
                const estadoSeleccionado = estados.find(est => est.nombre === supplierData.estado);
                setSelectedEstado(estadoSeleccionado);

                if (estadoSeleccionado) {
                    // Carga las ciudades del estado seleccionado
                    const ciudadesResponse = await api.get(`ciudades/${estadoSeleccionado.estadoID}`);
                    setCiudades(ciudadesResponse.data.data);

                    // Encuentra y establece el municipio preseleccionado
                    const ciudadSeleccionado = ciudadesResponse.data.data.find(
                        ciu => ciu.nombre === supplierData.municipio
                    );
                    setSelectedMunicipio(ciudadSeleccionado);
                }
            } catch (err) {
                console.log(err);
            }
        };

        if (estados.length > 0) {
            loadSupplier();
        }
    }, [estados]);


    return (
        <div className="card">
            <span className="text-900 text-xl font-bold mb-4 block">Editar proveedor</span>
            <div className="grid">
                <div className="col-12 lg:col-2">
                    <div className="text-900 font-medium text-xl mb-3">Prueba</div>
                    <p className="m-0 p-0 text-600 line-height-3 mr-3">Esta es un prueba</p>
                </div>
                <form onSubmit={updateSupplier}>
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
                                <InputTextarea id="bio" rows={3} autoResize value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)}></InputTextarea>
                            </div>

                            <div className="field mb-4 col-12 md:col-6">
                                <label htmlFor="estado" className="font-medium text-900">
                                    *Estado
                                </label>
                                <Dropdown
                                    inputId="estado"
                                    options={estados}
                                    // itemTemplate={itemTemplate}
                                    onChange={(e) => setSelectedEstado(e.value)}
                                    value={selectedEstado}
                                    optionLabel="nombre"
                                    filter
                                    filterBy="nombre"
                                    showClear
                                    placeholder="Selecciona un estado"
                                />
                            </div>

                            <div className="field mb-4 col-12 md:col-6">
                                <label htmlFor="estado" className="font-medium text-900">
                                    *Ciudad
                                </label>
                                <Dropdown
                                    inputId="ciudad"
                                    options={ciudades}
                                    // itemTemplate={itemTemplate}
                                    onChange={(e) => setSelectedMunicipio(e.value)}
                                    value={selectedMunicipio}
                                    optionLabel="nombre"
                                    filter
                                    filterBy="nombre"
                                    showClear
                                    placeholder="Selecciona una ciudad"
                                />
                            </div>

                            <div className="field mb-4 col-12 md:col-6">
                                <label htmlFor="telefono" className="font-medium text-900">
                                    *Teléfono celular
                                </label>
                                <InputText id="telefono" type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
                            </div>

                            <div className="col-12">
                                <Button type="submit" label="Actualizar proveedor" className="w-auto mt-3"></Button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}
