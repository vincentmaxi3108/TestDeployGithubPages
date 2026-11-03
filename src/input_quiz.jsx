import React, { useState } from 'react';

function InputQuiz() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <div>
      <h2>Input Data</h2>
      <div>
        <label>Nama: </label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama ..."
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email ..."
        />
      </div>
      <div>
        <label>Alamat: </label>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan Alamat ..."
        />
      </div>

      <h3>Hasil Inputan:</h3>
      <p><b>Nama:</b> {nama}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Alamat:</b> {alamat}</p>
    </div>
  );
}

export default InputQuiz;