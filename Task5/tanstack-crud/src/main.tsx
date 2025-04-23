import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import GetDetails from './components/GetDetails.tsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
   <Provider store={store}>
  <Router>
    
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/getdetails' element={<GetDetails />} />
    </Routes>
  </Router>
   </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
