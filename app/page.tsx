export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#E8F1F8',
      color: '#0F172A',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', margin: '0', fontWeight: '800' }}>Sayido.id</h1>
      <p style={{ fontSize: '20px', marginTop: '10px' }}>It&apos;s Time to Say I Do</p>
      <div style={{
        marginTop: '24px',
        background: '#fff',
        border: '2px solid #0F172A',
        borderRadius: '16px',
        padding: '16px 24px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <p style={{ fontWeight: '700' }}>✅ Build Success - Pondasi Siap!</p>
        <p style={{ fontSize: '14px', opacity: 0.7 }}>Siap pasang 100+ fitur Final Lock</p>
      </div>
    </main>
  )
}
