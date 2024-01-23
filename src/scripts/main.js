
const dataAniversario = new Date("Feb 04, 2024 19:00:00")
const timeStampDoAniversario = dataAniversario.getTime()

const contadorParaAniversario = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaAteAniversario = timeStampDoAniversario - timeStampAtual
    
    const diaEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteAniversario / diaEmMs) 
    const horasAteOEvento = Math.floor((distanciaAteAniversario % diaEmMs) / horasEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteAniversario % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteAniversario % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

},1000)