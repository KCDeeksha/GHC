"use client";
import React ,{ useState} from 'react';
import { Provider } from 'react-redux';
import { store } from "@/redux/store";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const App = ({children}: {children: React.ReactNode}) => {
    const [showCart, setShowCart] = useState(false);
    
  return <Provider store={store}>
    <NavBar setShowCart={setShowCart}/>
    {children}
    <Footer />
  </Provider>
}

export default App
