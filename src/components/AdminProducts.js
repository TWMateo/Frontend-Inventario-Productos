import React, { useState } from 'react';
import UseFetch from '../useFetch'

const AdminProducts = () => {
    const [idProducto, setIdProducto] = useState()
    const [prodConsultado, setProdConsultado] = useState()
    const actualizacionProd = {
        id_prod:"",
        pro_stock:"",
        pro_valor_iva:""
    }

    const handlerCambiarIdProducto = (event) => {
        setIdProducto(event.target.value)
    }

    const handlerNuevosCamposProd = (event) =>{
        const { name, value } = event.target
        actualizacionProd['id_prod'] = idProducto
        switch(name){
            case 'pro_stock':
                actualizacionProd['pro_stock']=value;
                //LINEAS QUE EVITAN LA ACTUALIZACION
                //setStockProd(value);
                break;
            case 'pro_valor_iva':
                actualizacionProd['pro_valor_iva']=value
                //setIvaProd(value);
                break
            default:
                console.log('Opcion invalida')
                break;
        }
        console.log(actualizacionProd)
    }

    const buscarProductoById = async () =>{
        const producto = await UseFetch('/productos/id', `${idProducto}`)
        setProdConsultado(Object.values(producto))
        //setStockProd(Object.values(producto)[7])
        console.log(prodConsultado)
    }

    const actualizarProductosById = async () =>{
        const response = await UseFetch('/updateProducto',null,'put',actualizacionProd)
        alert('Producto con id '+idProducto+' a sido actualizado.')
        //buscarProductoById()
    }
    return (
        <div className='bg-white relative flex flex-col gap-3 rounded-md'>
            <div className='bg-blue-300 origin-left flex gap-3 rounded-lg border-2 p-4'>
                <div className='w-1/2 flex flex-col gap-3 ml-8'>
                    <div className='m-1'>
                        <h2>Código de Producto:</h2>
                        <div className='flex flex-row gap-2'>
                            <input type='text' name='pro_id' className='w-4/5 cursor-pointer rounded-md mt-3 border-2 hover:border-black duration-200' placeholder=' Ingrese el codigo' value={idProducto} onChange={handlerCambiarIdProducto} />
                            <div className='bg-white rounded-md mt-3 w-1/5 flex justify-center border-2 hover:border-black duration-200 cursor-pointer' onClick={buscarProductoById} >Buscar</div>
                        </div>
                    </div>
                    <div>
                        <h2>Lista de productos:</h2>
                        <select className='mt-3 cursor-pointer rounded-md w-full'>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className='container bg-white w-full rounded-md h-full'>
                        <img src={`${prodConsultado ? `${prodConsultado[6]}` : ''}`} className='h-80 w-90 object-contain' alt=''></img>
                    </div>
                </div>
                <div className='bg-white mr-4 ml-5 rounded-md w-1/2'>
                    <div className='m-4'>
                        <h1 >Nombre producto: </h1>
                        <input className='rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[1]}` : 'Nombre'}`}></input>
                    </div>
                    <div className='m-4'>
                        <h1 >Descripción producto: </h1>
                        <input className='rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[2]}` : 'Descripción'}`}></input>
                    </div>
                    <div className='m-4'>
                        <h1 >Valor iva: </h1>
                        <input type='text' name='pro_valor_iva' className='rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[3]}` : 'IVA'}`} onChange={handlerNuevosCamposProd}/>
                    </div>
                    <div className='m-4'>
                        <h1 >Precio: </h1>
                        <input className='rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[4]}` : 'Precio compra'}`}></input>
                    </div>
                    <div className='m-4'>
                        <h1 >Precio venta: </h1>
                        <input className='rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[5]}` : 'Precio venta'}`}></input>
                    </div>
                    <div className='m-4'>
                        <h1 >Stock: </h1>
                        <input className='rounded-md border-2 hover:border-black duration-200' type='text' name='pro_stock' placeholder={`${prodConsultado ? `${prodConsultado[7]}` : 'Cantidad'}`}  onChange={handlerNuevosCamposProd}></input>
                    </div>
                    <div className='m-4'>
                        <div className='bg-blue-300 rounded-md p-1 border-2 flex justify-center hover:border-black duration-200' onClick={actualizarProductosById}>Actualizar</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AdminProducts;