let botonMood = document.getElementById('boton');
let backHeader = document.getElementById('back-header');
let backMain = document.getElementById('back-main');
let botonImg = document.getElementById('boton-img');
let closeXImage = document.getElementById('close-x-image');
let botonText = document.getElementById('boton-text');
let closeXText = document.getElementById('close-x-text');
let icon = document.getElementById('icon');
let modo = 'oscuro';
let sectionImagen = document.getElementById('section-imagen');
let sectionTexto = document.getElementById('section-texto');
// Images: url, img desktop
let inputImage = document.getElementById('input-image');
let image = document.getElementById('image');
let inputImageUrl = document.getElementById('input-image-url');
// Change background Blend Mode
let color = document.getElementById('color');
let containerImg = document.getElementById('container-img');
let hexaColor = document.getElementById('hexa-color');
let blendModeFilter = document.getElementById('blendModeFilter');
// Filters
let filterBrightness = document.getElementById('filter-brightness');
let filterOpacity = document.getElementById('filter-opacity');
let filterContrast = document.getElementById('filter-contrast');
let filterBlur = document.getElementById('filter-blur');
let grayscale = document.getElementById('grayscale');
let filterSepia = document.getElementById('filter-sepia');
let filterHue = document.getElementById('filter-hue');
let filterSaturate = document.getElementById('filter-saturate');
let filterNegative = document.getElementById('filter-negative');
let buttonResetFilter = document.getElementById('button-reset-filter');
// Section Text
// Top text
let topText = document.getElementById('top-text');
let inputTopText = document.getElementById('input-top-text');
let notTopText = document.getElementById('not-top-text');
// Bottom text
let bottomText = document.getElementById('bottom-text');
let inputBottomText = document.getElementById('input-bottom-text');
let notBottomText = document.getElementById('not-bottom-text');
// Family
let fontFamilyP = document.getElementById('font-family-p');
// Font Size
let fontSize = document.getElementById('font-size');
// Align Text
let textAlignLeft = document.getElementById('text-align-left');
let textAlignCenter = document.getElementById('text-align-center');
let textAlignRight = document.getElementById('text-align-right');
// Color text and back
let colorP = document.getElementById('color-p');
let colorBackP = document.getElementById('color-back-p');
let hexaColorP = document.getElementById('hexa-color-p');
let hexaColorBack = document.getElementById('hexa-color-back');
// Background transparent
let backgroundTransparent = document.getElementById('background-transparent');
// Contorn
let contornoPNone = document.getElementById('contorno-p-none');
let contornoPLight = document.getElementById('contorno-p-light');
let contornoPDark = document.getElementById('contorno-p-dark');
// Space - padding
let paddingP = document.getElementById('padding-p');
// line-height
let lineHeightP = document.getElementById('line-height-p');

// Open and close window of image section
botonImg.addEventListener('click', ()=>{
  console.log("aqui1----")
  sectionImagen.classList.toggle("oculto");
});
closeXImage.addEventListener('click', ()=>{
  console.log("aqui2----")
  sectionImagen.classList.toggle("oculto");
});

// Open and close window of text section
botonText.addEventListener('click', ()=>{
  sectionTexto.classList.toggle("oculto");
});

closeXText.addEventListener('click', ()=>{
  sectionTexto.classList.toggle("oculto");
});

// Mood light and dark
botonMood.addEventListener('click', () => {
    if (modo === 'claro'){
        backHeader.style.backgroundColor = '#140e21';
        backMain.style.background = '#140e21';
        boton.style.color = 'var(--blue)';
        boton.style.backgroundColor = '#f5e4af';
        botonImg.style.color = 'var(--blue)';
        botonImg.style.backgroundColor = '#f5e4af';
        botonText.style.color = 'var(--blue)';
        botonText.style.backgroundColor = '#f5e4af';
        botonText.style.color = 'var(--blue)';
        icon.className = 'fa-solid fa-sun';
        modo = 'oscuro';
    } else {
        backHeader.style.backgroundColor = '#f5e4af';
        backMain.style.background = '#f5e4af';
        boton.style.color = 'var(--green)';
        boton.style.backgroundColor = '#181b2c';
        botonImg.style.color = 'var(--green)';
        botonImg.style.backgroundColor = '#181b2c';
        botonText.style.color = 'var(--green)';
        botonText.style.backgroundColor = '#181b2c';
        icon.className = 'fa-solid fa-moon';
        modo = 'claro';
    }
});

// Aside
inputImageUrl.addEventListener('input', ()=> {
  // image.src = inputImageUrl.value;
  // containerImg.style.backgroundImage = 'url("haku.jpg")';
  containerImg.style.backgroundImage = `url("${inputImageUrl.value}")`;
});

// function imageLocal() {
//   containerImg.style.backgroundImage = `url("${inputImage.value}")`;
// }

// inputImage.addEventListener('change', ()=> {
//   imageLocal().readAsDataURL;
// });

//Background Blend Mode
color.addEventListener('input', ()=> {
  hexaColor.textContent = color.value;
  aplyBlendMode();
});

blendModeFilter.addEventListener('change', ()=> {
  
  containerImg.style.backgroundImage =  aplyBlendMode();
});

function aplyBlendMode() {
  if (blendModeFilter.value == 'ninguno'){
    containerImg.style.backgroundBlendMode = 'normal';
  } else if (blendModeFilter.value == 'aclarar'){
    containerImg.style.backgroundBlendMode = 'lighten';
  } else if (blendModeFilter.value == 'oscurecer'){
    containerImg.style.backgroundBlendMode = 'darken';
  } else if (blendModeFilter.value == 'diferencia'){
    containerImg.style.backgroundBlendMode = 'difference';
  } else if (blendModeFilter.value == 'luminucidad'){
    containerImg.style.backgroundBlendMode = 'luminosity';
  } else if (blendModeFilter.value == 'multiplicar'){
    containerImg.style.backgroundBlendMode = 'multiply';
  }

  containerImg.style.backgroundColor = color.value;
};

// Event filters
filterBrightness.addEventListener('input', ()=> {
  aplyFilter();
});

filterOpacity.addEventListener('input', ()=> {
  aplyFilter();
});

filterContrast.addEventListener('input', ()=> {
  aplyFilter();
});

filterBlur.addEventListener('input', ()=> {
  aplyFilter();
});

grayscale.addEventListener('input', ()=> {
  aplyFilter();
});

filterSepia.addEventListener('input', ()=> {
  aplyFilter();
});

filterHue.addEventListener('input', ()=> {
  aplyFilter();
});

filterSaturate.addEventListener('input', ()=> {
  aplyFilter();
});

filterNegative.addEventListener('input', ()=> {
  aplyFilter();
});

function aplyFilter() {
  filterAll = ` brightness(${filterBrightness.value}%)`;
  filterAll += ` opacity(${filterOpacity.value}%)`;
  filterAll += ` contrast(${filterContrast.value}%)`;
  filterAll += ` blur(${filterBlur.value}px)`;
  filterAll += ` grayscale(${grayscale.value}%)`;
  filterAll += ` sepia(${filterSepia.value}%)`;
  filterAll += ` hue-rotate(${filterHue.value}deg)`;
  filterAll += ` invert(${filterNegative.value}%)`;
  filterAll += ` saturate(${filterSaturate.value}%)`;

  containerImg.style.filter = filterAll;
};

buttonResetFilter.addEventListener('click', () =>{
  filterBrightness.value = 100;
  filterOpacity.value = 100;
  filterContrast.value = 100;
  filterBlur.value = 0;
  grayscale.value = 0;
  filterSepia.value = 0;
  filterHue.value = 0;
  filterNegative.value = 0;
  filterSaturate.value = 100;

  // Blend Mode
  blendModeFilter.value = 'ninguno';
  blendModeFilter.value == 'aclarar'
  blendModeFilter.value == 'oscurecer'
  blendModeFilter.value == 'diferencia'
  blendModeFilter.value == 'luminucidad'
  blendModeFilter.value == 'multiplicar'
  color.value = "#ffffff";
  hexaColor.textContent = color.value;
  aplyFilter();
  aplyBlendMode();
});

// Section Text
inputTopText.addEventListener('input', ()=> {
  topText.textContent = inputTopText.value;
});

notTopText.addEventListener('change', ()=> {
 if(notTopText.checked){
   topText.style.display = 'none';
   containerImg.style.height =  '45vh';
 } else {
   topText.style.display = 'block';
   containerImg.style.height =  '40vh';
}
  checkeo();
  checkeoTransparenText();
});

inputBottomText.addEventListener('input', ()=> {
  bottomText.textContent = inputBottomText.value;
});

notBottomText.addEventListener('change', ()=> {
 if(notBottomText.checked){
   bottomText.style.display = 'none';
   containerImg.style.height =  '45vh';
 } else {
   bottomText.style.display = 'block';
   containerImg.style.height =  '40vh';
}
  checkeo();
  checkeoTransparenText();
});

function checkeo(){
  if (notTopText.checked && notBottomText.checked){
    containerImg.style.height = '50vh';
  }
};

// Font family, size and text direction
fontFamilyP.addEventListener('change', ()=> {
  fontFamilyChange();
});

function fontFamilyChange(){
  if (fontFamilyP.value == 'impact'){
    bottomText.style.fontFamily = 'impact';
    topText.style.fontFamily = 'impact';
  } else if (fontFamilyP.value == 'arial'){
    bottomText.style.fontFamily = 'Arial';
    topText.style.fontFamily = 'Arial';
  } else if (fontFamilyP.value == 'arialBlack'){
    bottomText.style.fontFamily = 'Arial Black';
    topText.style.fontFamily = 'Arial Black';
  } else if (fontFamilyP.value == 'americanTypewriter'){
    bottomText.style.fontFamily = 'American Typewriter';
    topText.style.fontFamily = 'American Typewriter';
  } else if (fontFamilyP.value == 'andaleMono'){
    bottomText.style.fontFamily = 'andale mono';
    topText.style.fontFamily = 'andale mono';
  } else if (fontFamilyP.value == 'comicSans'){
    bottomText.style.fontFamily = 'Comic Sans MS';
    topText.style.fontFamily = 'Comic Sans MS';
  } else if (fontFamilyP.value == 'helvetica'){
    bottomText.style.fontFamily = 'Helvetica';
    topText.style.fontFamily = 'Helvetica';
  } else if (fontFamilyP.value == 'verdana'){
    bottomText.style.fontFamily = 'Verdana';
    topText.style.fontFamily = 'Verdana';
  } else if (fontFamilyP.value == 'timesNewRoman'){
    bottomText.style.fontFamily = 'Times New Roman';
    topText.style.fontFamily = 'Times New Roman';
  }
};

fontSize.addEventListener('change', ()=> {
  topText.style.fontSize = `${fontSize.value}px`;
  bottomText.style.fontSize = `${fontSize.value}px`;
});

textAlignLeft.addEventListener('click', ()=> {
  topText.style.textAlign = `left`;
  bottomText.style.textAlign = `left`;
  checkeoTransparenText()
});
textAlignLeft.addEventListener('click', ()=> {
  bottomText.style.textAlign = `left`;
  checkeoTransparenText()
});
textAlignLeft.addEventListener('click', ()=> {
  topText.style.textAlign = `left`;
  checkeoTransparenText()
});

textAlignCenter.addEventListener('click', ()=> {
  topText.style.textAlign = 'center';
  bottomText.style.textAlign = 'center';
  checkeoTransparenText()
});
textAlignCenter.addEventListener('click', ()=> {
  topText.style.textAlign = 'center';
  checkeoTransparenText()
});
textAlignCenter.addEventListener('click', ()=> {
  bottomText.style.textAlign = 'center';
  checkeoTransparenText()
});

textAlignRight.addEventListener('click', ()=> {
  topText.style.textAlign = 'right';
  bottomText.style.textAlign = 'right';
  checkeoTransparenText()
});
textAlignRight.addEventListener('click', ()=> {
  topText.style.textAlign = 'right';
  checkeoTransparenText()
});
textAlignRight.addEventListener('click', ()=> {
  bottomText.style.textAlign = 'right';
  checkeoTransparenText()
});

// Color text and back
colorP.addEventListener('input', ()=> {
  hexaColorP.textContent = colorP.value;
  topText.value = "#181b2c";
  topText.style.color = colorP.value;
});

colorP.addEventListener('input', ()=> {
  hexaColorP.textContent = colorP.value;
  topText.value = "#181b2c";
  topText.style.color = colorP.value;
  bottomText.value = "#181b2c";
  bottomText.style.color = colorP.value;
});

colorBackP.addEventListener('input', ()=> {
  hexaColorBack.textContent = colorBackP.value;
  topText.value = "#181b2c";
  topText.style.backgroundColor = colorBackP.value;
  bottomText.value = "#181b2c";
  bottomText.style.backgroundColor = colorBackP.value;
});

backgroundTransparent.addEventListener('change', ()=> {
  checkeoTransparent();
  checkeoTransparenText();
});

function checkeoTransparent(){
  if (backgroundTransparent.checked){
    topText.style.backgroundColor = 'transparent';
    topText.style.position = 'absolute';
    topText.style.width = '90%';
    topText.style.zIndex = 1;
    bottomText.style.backgroundColor = 'transparent';
    bottomText.style.position = 'absolute';
    bottomText.style.width = '90%';
    bottomText.style.zIndex = 1;
    bottomText.style.bottom = '179px';
    containerImg.style.position = 'relative';
    containerImg.style.zIndex = 0;
    containerImg.style.height = '50vh';
  }else{
    topText.style.position = 'unset';
    bottomText.style.position = 'unset';
    containerImg.style.position = 'unset';
    topText.style.backgroundColor = 'none';
  }
};

function checkeoTransparenText(){
  console.log("dentro de checkeoTransparenText")
  if(backgroundTransparent.checked && notTopText.checked){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked && notTopText.checked){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked && notBottomText.checked==true){
  console.log("aca zzzz c 1");
    containerImg.style.height = '50vh';
  } else if(backgroundTransparent.checked && notBottomText.checked==false){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked==false){
    containerImg.style.height = '40vh';
    topText.style.backgroundColor = '#AE6BF2';
    bottomText.style.backgroundColor = '#AE6BF2';
  }
};

contornoPNone.addEventListener('click', ()=> {
  topText.style.textShadow = '0 0 transparent';
  bottomText.style.textShadow = '0 0 transparent';
});

contornoPLight.addEventListener('click', ()=> {
  topText.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
  bottomText.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
});

contornoPDark.addEventListener('click', ()=> {
  topText.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
  bottomText.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
});

paddingP.addEventListener('change', ()=> {
  topText.style.padding = `${paddingP.value}px 30px`;
  bottomText.style.padding = `${paddingP.value}px 30px`;
});

lineHeightP.addEventListener('change', ()=> {
  topText.style.lineHeight = lineHeightP.value;
    bottomText.style.lineHeight = lineHeightP.value;
});