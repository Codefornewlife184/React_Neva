import React from 'react';

const Catalog = () => {
  return (
    <div>
      <div style={{ maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24 }}>
        <iframe
          src="assets/images/catalog/katalog.pdf"
          title="Katalog PDF"
          width="100%"
          height="700px"
          style={{ border: 'none', borderRadius: 8 }}
        />
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <a href="assets/katalog.pdf" download className="btn btn-primary">
            PDF Olarak İndir
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catalog;