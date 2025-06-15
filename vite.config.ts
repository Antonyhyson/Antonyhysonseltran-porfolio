import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Antonyhysonseltran-portfolio/', // <--- ADD OR UPDATE THIS LINE
  plugins: [react()],
  server: {
    host: true, // This allows the server to be accessed from network interfaces
    port: 5173, // Or your preferred port
  },
  build: {
    outDir: 'dist', // Ensures build output goes to 'dist'
  },
});
```
