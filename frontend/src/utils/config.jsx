const config = {
  NODE_ENV: import.meta.env.VITE_APP_NODE_ENV || import.meta.env.MODE, // Use the VITE_APP_NODE_ENV or fallback to Vite mode
  AdminBackendURL: import.meta.env.VITE_APP_BACKEND_URL,
  ClientBackendURL: import.meta.env.VITE_APP_CLIENT_BACKEND_URL,
  ImageBackendURL: import.meta.env.VITE_APP_IMAGE_BACKEND_URL,
  PDFImageBackendURL: import.meta.env.VITE_APP_PDF_IMAGE_BACKEND_URL,
};

export default config;
