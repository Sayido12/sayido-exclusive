"use client"
import { useState } from 'react'

const templates = [
  { id: 'SACI', name: 'SACIDATURU EXCLUSIVE', desc: 'Adat Jawa Elegan', color: '#0F172A' },
  { id: 'MONOCH', name: 'MONOCHROME EXCLUSIVE', desc: 'Minimalis Modern', color: '#111827' },
  { id: 'LOLY', name: 'LOLY EXCLUSIVE', desc: 'Romantis Floral', color: '#EC4899' },
  { id: 'MORAN', name: 'MORAN EXCLUSIVE', desc: 'Rustic Bohemian', color: '#9CAF88' },
  { id: 'MACA', name: 'MACA EXCLUSIVE', desc: 'Sage Natural', color: '#6B8E5A' },
  { id: 'TERA', name: 'TERA EXCLUSIVE', desc: 'Terracotta Warm', color: '#C17C5C' },
  { id: 'GOLD', name: 'GOLDEN EXCLUSIVE', desc: 'Luxury Gold', color: '#D4AF37' },
  { id: 'MAROON', name: 'MAROON EXCLUSIVE', desc: 'Deep Maroon', color: '#7F1D1D' },
  { id: 'ALLUR', name: 'ALLURE EXCLUSIVE', desc: 'Chic Allure', color: '#4F46E5' },
  { id: 'TULIP', name: 'TULIP EXCLUSIVE', desc: 'Soft Pastel', color: '#F472B6' },
  { id: 'NAVY', name: 'NAVY EXCLUSIVE', desc: 'Navy Elegance', color: '#1E3A8A' },
  { id: 'SAGE', name: 'SAGE EXCLUSIVE', desc: 'Sage Serenity', color: '#84A98C' },
]

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', color: '#0F172A' }}>
      {/* HEADER */}
      <header style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 20px', position: 'sticky', top: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 900, fontSize: '20px', letterSpacing: '-0.5px' }}>SAYIDO<span style={{ color: '#D4AF37' }}>.ID</span></div>
        <div style={{ fontSize: '12px', background: '#0F172A', color: 'white', padding: '6px 12px', borderRadius: '20px' }}>12 TEMPLATE READY</div>
      </header>

      {/* HERO */}
      <section style={{ background: '#E8F1F8', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 900, lineHeight: 1.1, margin: 0 }}>SAYIDO EXCLUSIVE<br/><span style={{ color: '#D4AF37' }}>- 12 TEMPLATE</span></h1>
        <p style={{ marginTop: '12px', color: '#475569' }}>Premium Undangan Digital • Fitur Lengkap • Edit Mudah</p>
        <div style={{ marginTop: '16px', display: 'inline-flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ background: 'white', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '8px', fontSize: '12px' }}>✅ RSVP & Ucapan</span>
          <span style={{ background: 'white', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '8px', fontSize: '12px' }}>✅ Musik & Galeri</span>
          <span style={{ background: 'white', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '8px', fontSize: '12px' }}>✅ Maps & Countdown</span>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {templates.map((t) => (
            <div key={t.id} onClick={() => setSelected(t.id)} style={{ background: 'white', borderRadius: '16px', border: selected === t.id ? '2px solid #0F172A' : '1px solid #E2E8F0', padding: '16px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ background: '#0F172A', color: 'white', fontSize: '10px', fontWeight: 800, padding: '4px 8px', borderRadius: '6px', letterSpacing: '1px' }}>{t.id}</span>
                <span style={{ background: '#EF4444', color: 'white', fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '20px' }}>57% OFF</span>
              </div>
              <div style={{ marginTop: '12px', height: '120px', borderRadius: '12px', background: `linear-gradient(135deg, ${t.color} 0%, #E8F1F8 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '24px', letterSpacing: '2px' }}>{t.id}</div>
              <h3 style={{ margin: '12px 0 4px 0', fontSize: '14px', fontWeight: 800 }}>{t.name}</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748B' }}>{t.desc}</p>
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', textDecoration: 'line-through', color: '#94A3B8' }}>Rp 350.000</span>
                <span style={{ fontWeight: 800, color: '#0F172A' }}>Rp 149.000</span>
              </div>
              <a href={`https://wa.me/6281234567890?text=Halo%20Sayido.id%20mau%20pesan%20${t.name}`} target="_blank" style={{ marginTop: '12px', display: 'block', textAlign: 'center', background: '#0F172A', color: 'white', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Pesan Sekarang →</a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '30px 20px', fontSize: '12px', color: '#94A3B8' }}>
        <p style={{ fontWeight: 700, color: '#0F172A' }}>Sayido.id • It&apos;s Time to Say I Do</p>
        <p>© 2026 Sayido Exclusive - All Templates Ready to Sell</p>
      </footer>
    </main>
  )
}
