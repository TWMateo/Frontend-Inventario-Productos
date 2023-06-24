import React from 'react';
import ImgProd from '../assets/img/Switch_productos_nuevo.webp'

const AdminProducts = () => {
    return (
        <div className='bg-blue-300 relative flex flex-col gap-3 rounded-md'>
            <div className='flex mt-1 justify-center'>
                <h1 className='text-2xl'>Administración de Productos</h1>
            </div>
            <div className='origin-left m-2 flex gap-3'>
                <div className='w-1/2 flex flex-col gap-3 ml-8'>
                    <div className='m-1'>
                        <h2>Código de Producto:</h2>
                        <form className='flex flex-row gap-2'>
                            <input className='w-4/5 cursor-pointer rounded-md mt-3' placeholder=' Ingrese el codigo'></input>
                            <button className='bg-white rounded-md mt-3 w-1/5 border-2 hover:border-black duration-200'>Buscar</button>
                        </form>
                    </div>
                    <div>
                        <h2>Lista de productos:</h2>
                        <select className='mt-3 cursor-pointer rounded-md w-full'>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className='bg-white w-full rounded-md h-full'>
                        <img src={ImgProd} alt='Imagen Producto'></img>
                    </div>
                </div>
                <form className='bg-white mr-8 rounded-md gap-3 w-1/2'>
                    <div className='m-3'>
                        <h1 >Nombre producto: </h1>
                        <input placeholder='Switch'></input>
                    </div>
                    <div className='m-3'>
                        <h1 >Descripción producto: </h1>
                        <input placeholder='Bebida Alcohlica'></input>
                    </div>
                    <div className='m-3'>
                        <h1 >Valor valor iva: </h1>
                        <input placeholder='0'></input>
                    </div>
                    <div className='m-3'>
                        <h1 >Precio: </h1>
                        <input placeholder='1,5'></input>
                    </div>
                    <div className='m-3'>
                        <h1 >Precio venta: </h1>
                        <input placeholder='1,75'></input>
                    </div>
                    <div className='m-3'>
                        <h1 >Stock: </h1>
                        <input className='rounded-md border-2 border-black' placeholder='100'></input>
                    </div>
                    <div className='m-3'>
                        <button className='bg-blue-300 rounded-md p-1 border-2 hover:border-black duration-200'>Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminProducts;