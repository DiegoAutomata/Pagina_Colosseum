import { doc, setDoc } from 'firebase/firestore';
import { db } from './config';

/**
 * @typedef {Object} FormData
 * @property {string} fullName
 * @property {string} phone
 * @property {string} instagram
 */

/**
 * @typedef {Object} SaveFormResponse
 * @property {boolean} success
 * @property {string} [id]
 * @property {string} [error]
 */

const sanitizeId = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
};

/**
 * @param {FormData} formData
 * @param {boolean} hasOnlyFans
 * @returns {Promise<SaveFormResponse>}
 */
export const saveFormData = async (formData, hasOnlyFans) => {
  try {
    // Generar un ID único usando timestamp y nombre sanitizado
    const timestamp = new Date().getTime();
    const sanitizedName = sanitizeId(formData.fullName);
    const documentId = `modelo_${sanitizedName}_${timestamp}`;
    
    console.log('Intentando guardar datos con ID:', documentId);

    // Preparar los datos para Firestore
    const dataToSave = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      instagram: formData.instagram.trim(),
      hasOnlyFans: hasOnlyFans ? "SI" : "NO",
      createdAt: new Date().toISOString(),
      timestamp: timestamp
    };

    // Guardar datos en Firestore
    await setDoc(doc(db, 'formularios', documentId), dataToSave);

    console.log('Documento guardado con ID:', documentId);
    return { success: true, id: documentId };
  } catch (error) {
    console.error('Error al guardar en Firestore:', error);
    return { 
      success: false, 
      error: error.message || 'Error al guardar los datos. Por favor, intenta de nuevo.'
    };
  }
};
