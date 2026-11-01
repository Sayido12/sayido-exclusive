export default function Home(){
  const items = ["SACI","MONOCH","LOLY","MORAN","MACA","TERA","GOLD","MAROON","ALLUR","TULIP","NAVY","SAGE"];
  return (
    <div style={{padding:20, fontFamily:"sans-serif"}}>
      <h1 style={{textAlign:"center", fontWeight:900, fontSize:28}}>SAYIDO EXCLUSIVE - 57% OFF - FIXED!</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12, maxWidth:900, margin:"20px auto"}}>
        {items.map(x=>(
          <div key={x} style={{background:"white", border:"1px solid #ddd", borderRadius:12, padding:12, textAlign:"center"}}>
            <div style={{background:"#0F172A", color:"white", padding:"40px 0", borderRadius:8, fontWeight:800}}>{x}</div>
            <div style={{marginTop:8, fontWeight:700}}>{x}</div>
            <div>149k <span style={{background:"red", color:"white", padding:"2px 6px", borderRadius:10, fontSize:12}}>57% OFF</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}
