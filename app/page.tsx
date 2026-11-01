export default function Home(){
return <div style={{padding:20,fontFamily:'sans-serif',background:'#F8FAFC',minHeight:'100vh'}}>
<h1 style={{textAlign:'center',fontWeight:900}}>SAYIDO EXCLUSIVE - 12 TEMPLATE</h1>
<p style={{textAlign:'center'}}>Update Baru - 57% OFF - Sudah Fix</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:12,maxWidth:900,margin:'20px auto'}}>
{['SACI','MONOCH','LOLY','MORAN','MACA','TERA','GOLD','MAROON','ALLUR','TULIP','NAVY','SAGE'].map(x=>
<div key={x} style={{background:'white',border:'1px solid #ddd',borderRadius:12,padding:12,textAlign:'center'}}>
<div style={{background:'#0F172A',color:'white',padding:'30px 0',borderRadius:8,fontWeight:800}}>{x}</div>
<div style={{marginTop:8,fontWeight:700,fontSize:12}}>{x} EXCLUSIVE</div>
<div style={{marginTop:4,fontSize:11}}><span style={{textDecoration:'line-through',color:'#999'}}>350k</span><span style={{fontWeight:800,marginLeft:6}}>149k</span><span style={{background:'red',color:'white',padding:'2px 6px',borderRadius:10,marginLeft:4,fontSize:9}}>57% OFF</span></div>
</div>)}
</div>
</div>
}
