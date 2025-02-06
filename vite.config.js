import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input:{
        main: 'index.html',
        committee:'./src/pages/committee.html',
        contact: './src/pages/contact.html'
      }
    }
  }
})