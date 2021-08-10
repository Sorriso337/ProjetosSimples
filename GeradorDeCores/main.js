function cor() {
    
    let r = parseInt(Math.random() * 255);
    
    let g = parseInt(Math.random() * 255);
    
    let b = parseInt(Math.random() * 255);
    
    const cor = `rgba(${r}, ${g}, ${b})`;
    const titulo = document.getElementById('titulo')
    titulo.innerHTML = `A cor atual é: ${cor}`
    document.body.style.backgroundColor = cor
}

