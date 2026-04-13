import { useState } from "react";
import { LoginForm } from "../components/LoginForm.jsx";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm.jsx";
 
const AuthPage = () => {
    const [isForgot, setIsForgot] = useState(false);
 
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
 
                <div className="flex justify-center mb-6">
                    <img
                        src="/src/assets/img/kinal_sports.png"
                        alt="kinal Sport"
                        className="h-20 w-auto"
                    />
                </div>
 
                <div className="text-center mb-6">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {isForgot ? "Recuperar Contraseña" : "Bienvenido de Nuevo"}
                    </h1>
 
                    <p className="text-gray-600 text-base max-w-md mx-auto">
                        {isForgot
                            ? "Ingresa tu correo electrónico para restablecer tu contraseña"
                            : "Inicia sesión ADMIN para acceder a tu cuenta"}
                    </p>
                </div>
 
                {isForgot ? (
                    <ForgotPasswordForm onSwitch={() => setIsForgot(false)} />
                ) : (
                    <LoginForm onForgot={() => setIsForgot(true)} />
                )}
 
            </div>
        </div>
    );
};

export  {AuthPage};