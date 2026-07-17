export const packages = [
  {name:'The Essential',slug:'essential',price:4500,meta:'1 setup · 3 hours',tag:'An effortless evening at home',tone:'plum'},
  {name:'The Social',slug:'social',price:8500,meta:'2 setups · 6 hours',tag:'Made for close company',tone:'gold'},
  {name:'Rooftop Afterglow',slug:'rooftop',price:12500,meta:'2 setups · 8 hours',tag:'City lights, elevated',tone:'amber'},
  {name:'The Night Edition',slug:'night',price:16500,meta:'3 setups · 12 hours',tag:'For nights worth remembering',tone:'night'},
  {name:'Birthday Lounge',slug:'birthday',price:22500,meta:'3 setups · 6 hours',tag:'Your occasion, beautifully hosted',tone:'rose'},
  {name:'Full-Day Experience',slug:'full-day',price:28000,meta:'4 setups · 24 hours',tag:'Unhurried hospitality',tone:'ivory'},
];
export const flavours = [
 {name:'Velora Signature',cat:'Signature blend',note:'Dark berry · mint · citrus',level:'Balanced'},
 {name:'Blue Mist',cat:'Fresh',note:'Blueberry · cool mint',level:'Smooth'},
 {name:'Mango Ice',cat:'Tropical',note:'Ripe mango · frost',level:'Vibrant'},
 {name:'Grape Mint',cat:'Fresh',note:'Black grape · garden mint',level:'Rich'},
 {name:'Passion Citrus',cat:'Citrus',note:'Passion fruit · lime zest',level:'Bright'},
 {name:'Double Apple',cat:'Classic',note:'Red apple · anise',level:'Bold'},
];
export const orders = [
 {ref:'VLR-2607-1842',customer:'Amina K.',experience:'Birthday Lounge',zone:'Elgon View',time:'Today, 7:00 PM',total:'KSh 22,500',status:'Awaiting confirmation'},
 {ref:'VLR-2607-1739',customer:'Brian M.',experience:'The Social',zone:'Pioneer',time:'Today, 5:30 PM',total:'KSh 10,200',status:'Out for delivery'},
 {ref:'VLR-2607-1688',customer:'Faith C.',experience:'Night Edition',zone:'Kapsoya',time:'Today, 8:00 PM',total:'KSh 18,900',status:'Preparing'},
 {ref:'VLR-2607-1591',customer:'Kevin T.',experience:'Full-Day Experience',zone:'Kimumu',time:'Today, 2:00 PM',total:'KSh 31,500',status:'Active'},
];
export const money=(n:number)=>`KSh ${n.toLocaleString('en-KE')}`;
