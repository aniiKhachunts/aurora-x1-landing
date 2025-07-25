import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import './styles/globals.css';
import { AnimatePresence } from 'framer-motion';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AnimatePresence mode="wait">
            <App />
        </AnimatePresence>
    </StrictMode>
)
