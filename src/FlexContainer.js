import React from 'react';
import './FlexContainer.css';
import Gambar1 from './assets/gambar1.jpg';
import Gambar2 from './assets/gambar2.jpg';
import Gambar3 from './assets/gambar3.jpg';
import Gambar4 from './assets/gambar4.jpg';
import Gambar5 from './assets/gambar5.jpg';

function FlexContainer() {
    return (
        <div>
            <h1>Choose your favorite coach!</h1>
            <div className='flex-container'>
                <div className='flex-item'>
                    <img src={Gambar1} alt="Coach 1" className="gambar-kecil" />
                    <p>Coach 1</p>
                </div>
                <div className='flex-item'>
                    <img src={Gambar2} alt="Coach 2" className="gambar-kecil" />
                    <p>Coach 2</p>
                </div>
                <div className='flex-item'>
                    <img src={Gambar3} alt="Coach 3" className="gambar-kecil" />
                    <p>Coach 3</p>
                </div>
                <div className='flex-item'>
                    <img src={Gambar4} alt="Coach 4" className="gambar-kecil" />
                    <p>Coach 4</p>
                </div>
                <div className='flex-item'>
                    <img src={Gambar5} alt="Coach 5" className="gambar-kecil" />
                    <p>Coach 5</p>
                </div>
                {/* Tambahkan item dan gambar-gambar lain di sini */}
            </div>
        </div>
    );
}

export default FlexContainer;
