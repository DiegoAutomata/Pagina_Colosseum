"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ApplyPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/data', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error al obtener datos:', error.message);
        }
      }
    };
    fetchData();
  }, []);

  const [hasOnlyFans, setHasOnlyFans] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    instagram: ""
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      instagram: ""
    });
    setHasOnlyFans(null);
    setErrors({
      fullName: "",
      phone: ""
    });
  };

  const validateFullName = (name: string) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    if (!name) {
      return "Este campo es requerido";
    }
    if (!nameRegex.test(name)) {
      return "Debes colocar tu nombre completo";
    }
    if (name.length < 3) {
      return "El nombre es demasiado corto";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9\s()-]+$/;
    if (!phone) {
      return "Este campo es requerido";
    }
    if (!phoneRegex.test(phone)) {
      return "Tienes que colocar tu número de teléfono";
    }
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length < 8 || cleanedPhone.length > 15) {
      return "El número de teléfono debe tener entre 8 y 15 dígitos";
    }
    return "";
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "fullName") {
      const error = validateFullName(value);
      setErrors((prevErrors) => ({ ...prevErrors, fullName: error }));
    } else if (name === "phone") {
      const error = validatePhone(value);
      setErrors((prevErrors) => ({ ...prevErrors, phone: error }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullNameError = validateFullName(formData.fullName);
    const phoneError = validatePhone(formData.phone);

    if (!fullNameError && !phoneError && formData.fullName && formData.phone && formData.instagram && hasOnlyFans !== null) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      setIsSubmitted(true);
      resetForm();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setErrors({
        fullName: fullNameError,
        phone: phoneError
      });
    }
  };

  useEffect(() => {
    if (data) {
      setFormData(data); // Solo actualiza si los datos están disponibles
    }
  }, [data]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Link>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">¡Aplica Aquí Para Crear La Vida De Tus Sueños!</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nombre Completo"
              className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border transition-all outline-none text-white placeholder-gray-400 ${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"}`}
              required
            />
            {errors.fullName && (
              <div className="mt-2 text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Número de Teléfono"
              className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border transition-all outline-none text-white placeholder-gray-400 ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"}`}
              required
            />
            {errors.phone && (
              <div className="mt-2 text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone}</span>
              </div>
            )}
          </div>
          <div>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="Perfil De Instagram"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all outline-none text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <p className="text-lg mb-3">¿Ya tienes una cuenta OnlyFans?</p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setHasOnlyFans(true)}
                className={`flex-1 py-3 px-6 rounded-lg border transition-all ${hasOnlyFans === true ? "bg-emerald-600 border-emerald-500 text-white" : "border-gray-700 hover:border-emerald-400"}`}
              >
                Sí
              </button>
              <button
                type="button"
                onClick={() => setHasOnlyFans(false)}
                className={`flex-1 py-3 px-6 rounded-lg border transition-all ${hasOnlyFans === false ? "bg-emerald-600 border-emerald-500 text-white" : "border-gray-700 hover:border-emerald-400"}`}
              >
                No
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Enviar"}
          </button>
          {isSubmitted && (
            <div className="mt-4 py-2 px-4 bg-emerald-600/20 border border-emerald-500 rounded-lg flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>¡Tu solicitud ha sido enviada con éxito!</span>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}