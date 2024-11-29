'use client';
import { useRouter } from 'next/navigation';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react';
import { api } from '@/app/services/api';
import { Proveedores, Proveedor } from '@/app/types/Proveedor';

export default function Proveedores() {

    let emptySupplier: Proveedor = {
        proveedorID: 0,
        nombreProveedor: '',
        razonSocial: '',
        estado: '',
        municipio: '',
        celular: '',
    };

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const router = useRouter();
    const dt = useRef(null);
    const [suppliers, setSuppliers] = useState([]);
    const [supplier, setSupplier] = useState(emptySupplier);
    const [deleteProductDialog, setDeleteSupplierDialog] = useState(false);
    const toast = useRef(null);

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        // let _filters = { ...filters };
        // (_filters['global'] as any).value = value;
        // setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const getSuppliers = async () => {
        try {
            const { data } = await api.get('proveedores?numeroPagina=1&registrosPorPagina=10');

            console.log(data.data);


            setSuppliers(data.data);

            data.data as Proveedores;
        } catch (err) {
            console.log(err);

        }
    };

    const hideDeleteProductDialog = () => {
        setDeleteSupplierDialog(false);
    };


    const actionBodyTemplate = (Proveedores) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editSupplier(Proveedores)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteSupplier(Proveedores)} />
            </React.Fragment>
        );
    };

    const editSupplier = (Proveedor) => {
        router.push(`/proveedor/${Proveedor.proveedorID}/editar`)
    };

    const confirmDeleteSupplier = (Proveedor) => {
        setSupplier(Proveedor);
        setDeleteSupplierDialog(true);
    };

    const deleteSupplier = async () => {
        console.log(supplier);

        const { data } = await api.delete(`proveedores/${supplier.proveedorID}`);

        console.log(data);


        let _suppliers = suppliers.filter((val) => val.proveedorID !== supplier.proveedorID);

        setSuppliers(_suppliers);
        setDeleteSupplierDialog(false);
        setSupplier(emptySupplier);
    };

    useEffect(() => {
        getSuppliers();
    }, []);

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span className="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <i className="pi pi-search"></i>
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Global Search" className="w-full" />
            </span>
            <Button type="button" icon="pi pi-plus-circle" label="Nuevo proveedor" outlined className="w-full sm:w-auto flex-order-0 sm:flex-order-1" onClick={() => router.push('/proveedor/nuevo')} />
        </div>
    );

    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" text onClick={hideDeleteProductDialog} />
            <Button label="Sí" icon="pi pi-check" text onClick={deleteSupplier} />
        </>
    );

    return (
        <div className="card">
            <DataTable
                // ref={dt}
                value={suppliers}
                header={header}
                paginator
                rows={10}
                responsiveLayout="scroll"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                rowsPerPageOptions={[10, 25, 50]}
            // filters={filters}x
            >
                <Column field="nombreProveedor" header="Nombre"></Column>
                <Column field="celular" header="Celular"></Column>
                <Column field="municipio" header="Municipio"></Column>
                <Column field="Acciones" body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>

                {/* <Column field="name" header="Name" sortable body={nameBodyTemplate} headerClassName="white-space-nowrap" style={{ width: '25%' }}></Column> */}
                {/* <Column field="country.name" header="Country" sortable body={countryBodyTemplate} headerClassName="white-space-nowrap" style={{ width: '25%' }}></Column>
                <Column field="date" header="Join Date" sortable body={dateBodyTemplate} headerClassName="white-space-nowrap" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Created By" body={createdByBodyTemplate} headerClassName="white-space-nowrap" style={{ width: '25%' }} sortable></Column>
                <Column field="activity" header="Activity" body={activityBodyTemplate} headerClassName="white-space-nowrap" style={{ width: '25%' }} sortable></Column> */}
            </DataTable>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirmar" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {supplier && (
                        <span>
                            ¿Estás seguro de que quieres eliminar a <b>{supplier.nombreProveedor}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
