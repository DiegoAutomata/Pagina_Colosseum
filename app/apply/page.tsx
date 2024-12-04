"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { saveFormData } from "../../src/firebase/firestore"; // Importación directa, puedes cambiar a dinámica si lo prefieres

export default function ApplyPage() {
  const [formData, setFormData] = useState({ fullName: "", phone: "", instagram: "" });
  const [hasOnlyFans, setHasOnlyFans] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Efecto para manejar el temporizador del mensaje de éxito
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as HTMLFormControlsCollection & {
      fullName: HTMLInputElement;
      phone: HTMLInputElement;
      instagram: HTMLInputElement;
    };

    const newFormData = {
      fullName: formElements.fullName.value,
      phone: formElements.phone.value,
      instagram: formElements.instagram.value,
    };

    // Validación simple
    const newErrors: { [key: string]: string } = {};
    if (!newFormData.fullName.trim()) newErrors.fullName = "El nombre es requerido";
    if (!newFormData.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (hasOnlyFans === null) {
      alert("Por favor, indica si tienes cuenta de OnlyFans");
      setIsLoading(false);
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      console.log("Datos enviados a saveFormData:", newFormData, hasOnlyFans );
    
      const response = await saveFormData(newFormData, hasOnlyFans);
      console.log("Respuesta de Firestore:", response);
    
      if (response.success) {
        setIsSubmitted(true);
        setFormData({ fullName: "", phone: "", instagram: "" });
        setHasOnlyFans(null);
        setErrors({});
      } else {
        alert(`Error: ${response.error}`);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar el formulario. Por favor, intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

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
          {["fullName", "phone", "instagram"].map((field, idx) => (
            <div key={idx}>
              <input
                type="text"
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={
                  field === "fullName" ? "Nombre Completo" : field === "phone" ? "Número de Teléfono" : "Perfil De Instagram"
                }
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                  errors[field] ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-emerald-400"
                } transition-all outline-none text-white placeholder-gray-400`}
                required
              />
              {errors[field] && (
                <div className="mt-2 text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors[field]}</span>
                </div>
              )}
            </div>
          ))}
          <div>
            <p className="text-lg mb-3">¿Ya tienes una cuenta OnlyFans?</p>
            <div className="flex gap-4">
              {["Sí", "No"].map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHasOnlyFans(idx === 0)}
                  className={`flex-1 py-3 px-6 rounded-lg border ${
                    hasOnlyFans === (idx === 0) ? "bg-emerald-600 border-emerald-500 text-white" : "border-gray-700"
                  } transition-all`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.hasOnlyFans && (
              <div className="mt-2 text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.hasOnlyFans}</span>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold text-lg transition-all flex justify-center items-center"
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
