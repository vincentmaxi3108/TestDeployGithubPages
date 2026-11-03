import React, { useState } from 'react';

function TambahKurang() {
  const [hitung, setHitung] = useState(0);

  return (
    <div>
      <h2>Penambahan dan Pengurangan</h2>
      <h2>Hasil Hitungan: {hitung}</h2>
      <button onClick={() => setHitung(hitung + 1)}>Tambah</button>
      <button onClick={() => setHitung(hitung - 1)}>Kurang</button>
    </div>
  );
}

export default TambahKurang;