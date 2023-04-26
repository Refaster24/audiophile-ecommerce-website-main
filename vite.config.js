import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

const root = resolve(__dirname,'src')

const outDir = resolve(__dirname,'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main : resolve(__dirname,'index.html'),
        headphones : resolve(__dirname,'headphones.html'),
        speaker : resolve(__dirname,'speakers.html'),
        earphones : resolve(__dirname,'earphones.html'),
        checkout : resolve(__dirname,'checkout.html'),
        // 
        markOne : resolve(__dirname,'headphones/markOne.html'),
        markTwo : resolve(__dirname,'headphones/markTwo.html'),
        xx59 : resolve(__dirname,'headphones/xx59.html'),
        // 
        zx9 : resolve(__dirname,'speakers/zx9.html'),
        zx7 : resolve(__dirname,'speakers/zx7.html'),
        // 
        yx1 : resolve(__dirname,'earphones/yx1.html'),
      }
    }
  }
})
