 
//FS - ATIVIDADES

 
//atividade 1:

const fs = require('fs')
const conteudo = fs.readFileSync('mensagem.txt', 'utf8')
console.log(conteudo)


// //atividade 2:

fs.writeFile('lyric.txt', 'Delightful Really delightful! I am the Globglogabgalab I love booksI am the Globglogabgalab El schwabboldabblewabble gabbleflebablabablab I’m full of Schwibbel, Glibberkind I am the yeast of thoughts and mind', (err)=>{
    if(err)throw(err)
})

// //atividade 3:
fs.appendFile('lyric.txt', 'Eu AMO LIVROSSS', (err)=>{
    if(err)throw(err)
})

// //atividade 4:

fs.copyFile('mensagem.txt', 'arquivo.txt', (err)=>{
    if(err)throw(err)
})

// //atividade 5:

fs.rename('arquivo.txt', 'copiaMensagem.txt', (err)=>{
    if(err)throw(err)
})

//atividade 6:
fs.unlink('dametucosita.txt', (err)=>{
if(err)throw(err)
console.log('APAGADO')
})

//atividade 7:

const arquivo = 'mensagem.txt'

if (fs.existsSync(arquivo)) {
  console.log('existe')
} else {
  console.log('não existe')
}



//PATH - ATIVIDADES

//atividade 1:

const path = require('path')
const meio = '/core_modules/exercicios/lyric.txt'

console.log(path.basename(meio))

// // atividade 3:

const caminho1 = 'exercicios'
const caminho2 = 'lyric.txt'
const caminhoResult = path.join('/','core_modules', caminho1, caminho2)
console.log(caminhoResult)

// //atividade 4:

console.log(path.normalize('/core_modules/../exercicios/lyric.txt'))



//OS - ATIVIDADES

const os = require('os')

//atividade 1:

console.log(os.type())

//atividade 2:

console.log(os.cpus())

//atividade 3:

console.log(os.freemem())

// //atividade 4:


console.log(os.userInfo())


// //atividade 6:

console.log(os.networkInterfaces())








