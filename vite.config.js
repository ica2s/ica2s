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
        committee:'committee/index.html',
        call: 'call/index.html',
        registration: 'registration/index.html',
        guidelines: 'guidelines/index.html',
        updates: 'updates/index.html'
      }
    }
  }
})