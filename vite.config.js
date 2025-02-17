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
        call: './src/pages/call.html',
        registration: './src/pages/registration.html',
        news: './src/pages/news.html'
      }
    }
  }
})