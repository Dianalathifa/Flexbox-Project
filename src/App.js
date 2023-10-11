import React from 'react';
import './App.css';
import ContohNavbar from './components/Navbar';
import ContohCard from './components/Card';
import FlexContainer from './FlexContainer';
import Footer from './components/Footer.js'; // Anda perlu membuat komponen Footer terlebih dahulu

function App() {
  return (
    <div className="App">
      <ContohNavbar /> {/* Tambahkan komponen Navbar */}
      <div className="content">
        <ContohCard /> {/* Tambahkan komponen Card atau konten lainnya */}
        <FlexContainer /> {/* Tambahkan konten lain jika diperlukan */}
      </div>
      <Footer /> {/* Tambahkan komponen Footer di sini */}
    </div>
  );
}

export default App;
