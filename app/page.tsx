export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 900, fontSize: '32px' }}>SAYIDO EXCLUSIVE - 12 TEMPLATE</h1>
      <p style={{ textAlign: 'center', color: '#64748B' }}>Versi Baru Sudah Update - 57% OFF</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', maxWidth: '1000px', margin: '20px auto' }}>
        {['SACI','MONOCH','LOLY','MORAN','MACA','TERA','GOLD','MAROON','ALLUR','TULIP','NAVY','SAGE'].map(id => (
          <div key={id} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ background: '#0F172A', color: 'white', padding: '40px 0', borderRadius: '8px', fontWeight: 800 }}>{id}</div>
            <div style={{ marginTop: '10px', fontWeight: 800, fontSize: '13px' }}>{id} EXCLUSIVE</div>
            <div style={{ marginTop: '6px' }}><span style={{ textDecoration: 'line-through', color: '#94A3B8', fontSize: '12px' }}>Rp 350.000</span><span style={{ fontWeight: 800, marginLeft: '8px' }}>Rp 149.000</span><span style={{ background: '#EF4444', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', marginLeft: '6px' }}>57% OFF</span></div>
            <a href="https://wa.me/6281234567890" style={{ display: 'block', marginTop: '10px', background: '#0F172A', color: 'white', padding: '8px', borderRadius: '8px', textDecoration: 'none', fontSize: '12px' }}>Pesan Sekarang</a>
          </div>
        ))}
      </div>
    </main>
  )
}
