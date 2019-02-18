
const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

let codigo = document.querySelector('code').textContent;

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

// comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

// Renderização
document.querySelector('code').innerHTML = codigo;
