/* كتشاف تلقائي للصور حتى لو الصيغة مختلفة (jpg, png, webp, etc) */
function placeholderFor(name, color){
  const initial = (name || "?").trim().charAt(0);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <rect width='100%' height='100%' fill='${color}'/>
    <text x='50%' y='54%' font-family='Tajawal,Arial' font-size='90' font-weight='900'
      fill='rgba(255,255,255,0.85)' text-anchor='middle'>${initial}</text>
  </svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

function attachImageFallback(imgEl, name, color){
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  const originalSrc = imgEl.src;
  const basePath = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
  
  let attemptIndex = 0;
  
  function tryNextExtension(){
    if(attemptIndex < extensions.length){
      imgEl.src = basePath + '.' + extensions[attemptIndex];
      attemptIndex++;
    } else {
      imgEl.src = placeholderFor(name, color);
      imgEl.onerror = null;
    }
  }
  
  imgEl.onerror = tryNextExtension;
}
