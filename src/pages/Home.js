import React from 'react';

const Home = () => {
  const style = {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Arial, sans-serif', // Menambahkan properti fontFamily dengan nilai 'Arial'
  };

  return (
    <div style={style}>
      <h1>Welcome to Home Page</h1>
      <p><strong>Selamat Datang Di Restoran</strong></p>
      <p>kami memahami bahwa makanan bukan sekadar kebutuhan, tetapi juga pengalaman. Dengan bangga kami menghadirkan kepada Anda cita rasa yang tak terlupakan dalam suasana yang hangat dan bersahabat. restoran kami menggabungkan keahlian kuliner dengan sentuhan kreatif, menciptakan pengalaman kuliner yang luar biasa.</p>
    </div>
  );
};

export default Home;