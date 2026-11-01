export default function Page() {
  const items = [
    {code:"SACI", name:"SACIDATURU EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"MONOCH", name:"MONOCHROME EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"LOLY", name:"LOLY EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"MORAN", name:"MORAN EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"MACA", name:"MACA EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"TERA", name:"TERA EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"GOLD", name:"GOLDEN EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"MAROON", name:"MAROON EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"ALWI", name:"ALWI EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"TUMB", name:"TUMBUK EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"TAR", name:"TAR EXCLUSIVE", price:149000, oldPrice:350000},
    {code:"YUR", name:"YURI EXCLUSIVE", price:149000, oldPrice:350000},
  ];
  return (
    <main style={{padding:16, fontFamily:'sans-serif'}}>
      <h1 style={{fontWeight:'bold', fontSize:24, marginBottom:12}}>SAYIDO EXCLUSIVE - 12 TEMPLATE</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
        {items.map(i=>(
          <div key={i.code} style={{border:'1px solid #ddd', borderRadius:12, padding:12}}>
            <div style={{background:'#000', color:'#fff', display:'inline-block', padding:'2px 6px', borderRadius:4, fontSize:12}}>{i.code}</div>
            <div style={{marginTop:8, fontWeight:'bold'}}>{i.name}</div>
            <div style={{color:'red', fontSize:12, textDecoration:'line-through'}}>Rp {i.oldPrice.toLocaleString()}</div>
            <div style={{fontWeight:'bold'}}>Rp {i.price.toLocaleString()}</div>
            <div style={{marginTop:6, background:'red', color:'white', display:'inline-block', padding:'2px 8px', borderRadius:20, fontSize:11}}>350% OFF</div>
          </div>
        ))}
      </div>
    </main>
  )
}
