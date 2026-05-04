import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    sitemap({
      hostname: 'https://squirkle-website.vercel.app'
    })
  ],
  base: process.env.VITE_BASE_PATH || "/react-portfolio"
  
})
