import { useState } from "react";
import LoginForm from "../components/LoginForm";

const AuthPage = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [isFrorgot, setIsFrorgot] = useState(false);

    return (
        <div className="min-h-screen flex-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-xl bg-white
             rounded-xl sahadow-lg border border-gray-200 p-6 
             md: p-10">             

                <div className="flex justify-center mb-6">
                    <img
                        src="/src/assets/img/kinal_sports.png"
                        alt="Kinal Sport"
                        className="h-20 w-auto"
                    />
                </div>

                <div className="text-center mb-6">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">

                        {isFrorgot
                            ? "Recuperar Contraseña"
                            : isLogin
                                ? "Bienvenido de Nuevo"
                                : "Crear Cuenta"
                        }

                    </h1>

                    <p className="text-gray-600 text-base max-w-md
              mx-auto">
                        {isFrorgot
                            ? "Ingresa tu correo electrónico para recuperar tu contraseña."
                            : isLogin
                                ? "Ingresa tu cuenta de administrador de kinal sports."
                                : "Registrarte como administrador de kinal Sports."
                        }
                    </p>

                </div>
                {isFrorgot
                ?"Formulario"
                :<LoginForm />

                }
                
            </div>
        </div>
    );
};

export { AuthPage };