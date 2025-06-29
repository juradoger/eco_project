import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FirebaseDB } from '../firebase/config';
import { uploadFileToFirebase } from './storage-service';

/**
 * Sube una imagen a la galería y guarda la información en Firestore
 * @param {File} file - El archivo que se desea subir
 * @param {Object} metadata - Metadatos del archivo (title, description, category, type, author, thumbnail)
 * @returns {Promise<Object>} - Información del item subido
 */
export const uploadGalleryImage = async (file, metadata) => {
  try {
    // Generar un nombre único para el archivo
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `gallery/${timestamp}_${Math.random().toString(36).substring(2)}.${fileExtension}`;
    
    // Subir archivo a Firebase Storage
    const downloadURL = await uploadFileToFirebase(file, fileName);
    
    // Crear el documento en Firestore
    const galleryItem = {
      title: metadata.title,
      description: metadata.description,
      category: metadata.category,
      type: metadata.type,
      author: metadata.author,
      thumbnail: metadata.thumbnail,
      downloadUrl: downloadURL,
      fileName: fileName,
      likes: 0,
      downloads: 0,
      shares: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    // Guardar en Firestore
    const docRef = await addDoc(collection(FirebaseDB, 'gallery'), galleryItem);
    
    return {
      id: docRef.id,
      ...galleryItem
    };
  } catch (error) {
    console.error('Error al subir imagen a la galería:', error);
    throw error;
  }
};

/**
 * Obtiene todos los items de la galería
 * @returns {Promise<Array>} - Array de items de la galería
 */
export const getGalleryItems = async () => {
  try {
    const { getDocs } = await import('firebase/firestore');
    const snapshot = await getDocs(collection(FirebaseDB, 'gallery'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener items de la galería:', error);
    throw error;
  }
};

/**
 * Actualiza los contadores de likes, downloads o shares de un item
 * @param {string} itemId - ID del item
 * @param {string} field - Campo a actualizar ('likes', 'downloads', 'shares')
 * @param {number} increment - Valor a incrementar (1 o -1)
 */
export const updateGalleryItemCount = async (itemId, field, increment) => {
  try {
    const { doc, updateDoc, increment: firestoreIncrement } = await import('firebase/firestore');
    const itemRef = doc(FirebaseDB, 'gallery', itemId);
    await updateDoc(itemRef, {
      [field]: firestoreIncrement(increment),
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error(`Error al actualizar ${field} del item:`, error);
    throw error;
  }
}; 