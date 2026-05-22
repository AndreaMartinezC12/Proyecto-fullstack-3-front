import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientInfo from "../components/steps/ClientInfo";
import BuildCake from "../components/steps/BuildCake";
import Payment from "../components/steps/TotalPayment";
import RecipientInfo from "../components/steps/RecipientInfo";
import OrderReview from "../components/steps/OrderReview";
import axios from "axios";
import api from "../api/axios";

export default function CreateOrder(){
    const[step, setStep] = useState(1);
    const navigate = useNavigate();

    const[orderData, setOrderData] = useState({
        cliente:{
            nombre:"",
            email:"",
            telefono:""
        },

        destinatario: {
            nombre:"",
            calle:"",
            numero:"",
            colonia:"",
            fechaEntrega:"2026-05-20"
        },

        pastel:{
            tamano:"",
            pan:"",
            relleno:"",
            extras: "",
            betun:"",
            decoracion:""
        },

        pago: {
            metodo:"",
            total: 0
        }
    })

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () =>{
        setStep(step-1)
    }

    const handleClienteChange = (e) => {
        setOrderData({
            ...orderData,
            cliente: {
                ...orderData.cliente,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleDestinatarioChange = (e) => {
        setOrderData({
            ...orderData,
            destinatario: {
                ...orderData.destinatario,
                [e.target.name]: e.target.value
            }
        })
    }

    const handlePastelChange = (e) => {
        setOrderData({
            ...orderData,
            pastel: {
                ...orderData.pastel,
                [e.target.name]: e.target.value
            }
        })
    }

    const handlePagoChange = (e) => {
        setOrderData({
            ...orderData,
            pago: {
                ...orderData.pago,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async() => {
        console.log(orderData)
        /*CONNECTION TO EXPRESS*/
        // await axios.post(
        //     "http://localhost:3015/pedido",
        //     orderData
        // )
        
        await api.post(
            '/pedido',
            orderData
        )
        alert("Pedido creado");
    }

    return(
        <div>
            <button 
                onClick={()=>navigate("/mi-pedido")}
                className="home-button"
            >
            Volver al inicio
            </button>
            <h1>Nuevo pedido</h1>
            <h2>Paso {step} de 5</h2>

            {/* PASO 1: CLIENTE */}
            {step === 1 &&(
                <ClientInfo
                    cliente={orderData.cliente}
                    handleChange={handleClienteChange}
                    nextStep={nextStep}
                />
            )}

            {/* PASO 2: DESTINATARIO */}
            {step === 2 &&(
                <RecipientInfo
                    destinatario={orderData.destinatario}
                    handleChange={handleDestinatarioChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {/* PASO 3: PASTEL */}
            {step === 3 &&(
                <BuildCake
                    pastel={orderData.pastel}
                    handleChange={handlePastelChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {/* PASO 4: METODO DE PAGO */}
            {step === 4 &&(
                <Payment
                    pago={orderData.pago}
                    handleChange={handlePagoChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {/* PASO 5: RESUMEN */}
            {step === 5 &&(
                <OrderReview
                    orderData={orderData}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    )



}