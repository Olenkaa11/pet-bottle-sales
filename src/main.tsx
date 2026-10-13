import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { initLinkGoals } from '@/lib/metrika'

initLinkGoals();
createRoot(document.getElementById("root")!).render(<App />);