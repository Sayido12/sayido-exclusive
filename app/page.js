'use client'
import {useState} from 'react'
import {themes} from '../data/themes.js'

export default function Home(){
  const [q,setQ]=useState('')
  const f = themes.filter(t=>!q||t.name.toLowerCase().includes(q.toLowerCase())||t.slug.includes(q.toLowerCase()))
  return(
    <div style={{background:'#F8F5F0',minHeight:'100vh',fontFamily:'sans-serif'}}>
      <div style={{background:'#fff',padding:'12px',position:'sticky',top:0,borderBottom:'1px solid #eee',display:'flex',gap:'8px'}}>
        <b>Galeri Undangan Official</b>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari: SACI" style={{marginLeft:'auto',border:'1px solid #ddd',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}/>
        <a href="/admin" style={{fontSize:'11px',border:'1px solid #ccc',padding:'4px 8px',borderRadius:'6px'}}>Admin</a>
      </div>
      <div style={{textAlign:'center',fontSize:'10px',color:'#888',padding:'6px'}}>FITUR: TEMA EXCLUSIVE | HARGA CORET 350K->149K | SPILL ?spill=1</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',padding:'12px',maxWidth:'480px',margin:'0 auto'}}>
        {f.map(t=>(
          <div key={t.slug} style={{background:'#fff',borderRadius:'18px',overflow:'hidden',border:'1px solid #eee'}}>
            <div style={{background:'#F3F0EB',padding:'12px',position:'relative'}}>
              <div style={{width:'160px',height:'320px',margin:'0 auto',borderRadius:'32px',border:'6px solid black',background:t.color,display:'flex',alignItems:'center',justifyContent:'center',color:t.color==='#FFFFFF'?'#000':'#fff',flexDirection:'column'}}>
                <div style={{fontSize:'8px',letterSpacing:'2px'}}>THE WEDDING OF</div>
                <div style={{fontSize:'18px',fontWeight:'bold',marginTop:'4px'}}>{t.slug.toUpperCase()}</div>
                <div style={{width:'50px',height:'50px',borderRadius:'50%',background:'rgba(255,255,255,0.3)',marginTop:'12px'}}></div>
              </div>
              <div style={{position:'absolute',top:'8px',left:'8px',background:'#EF4444',color:'#fff',fontSize:'10px',padding:'2px 6px',borderRadius:'4px',fontWeight:'bold'}}>{t.label}</div>
            </div>
            <div style={{padding:'10px'}}>
              <div style={{fontSize:'12px',fontWeight:'bold'}}>{t.name}</div>
              <div style={{fontSize:'10px',color:'#888'}}>Gratis Template IG</div>
              <div style={{marginTop:'4px'}}><span style={{fontSize:'11px',textDecoration:'line-through',color:'#aaa'}}>Rp.350.000</span><span style={{fontSize:'13px',fontWeight:'bold',marginLeft:'6px'}}>Rp.149.000</span></div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6px',marginTop:'8px'}}>
                <a href={`/tema/${t.slug}`} style={{fontSize:'11px',background:'#1F3A2E',color:'#fff',padding:'6px',borderRadius:'6px',textAlign:'center',textDecoration:'none'}}>Lihat</a>
                <a href="#" style={{fontSize:'11px',background:'#fff',border:'1px solid #1F3A2E',color:'#1F3A2E',padding:'6px',borderRadius:'6px',textAlign:'center',textDecoration:'none'}}>Order</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
