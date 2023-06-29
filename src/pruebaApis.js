import Axios from 'axios'

const pruebaApis = async () => {
    const baseUrl = 'https://gr2compras.000webhostapp.com/crear/factura';
    const JsonEnvio = {

        proveedor_id: "7",
        fecha_factura: "2023-01-03",
        tipo_pago: "CREDITO",
        fecha_vencimiento: "2023-01-03",
        total: "2",
        detalles: [
            {
                factura_id: "4",
                producto_id: "10",
                cantidad: "1",
                subtotal: "1",
                total: "1"
            },
            {
                factura_id: "4",
                producto_id: "20",
                cantidad: "1",
                subtotal: "1",
                total: "2"
            },
            {
                factura_id: "4",
                producto_id: "30",
                cantidad: "2",
                subtotal: "2",
                total: "2"
            }
        ]

    }

    const response = await Axios.post(baseUrl, JsonEnvio).catch(console.error())
    console.log(response)
    return response.data()
}

export default pruebaApis