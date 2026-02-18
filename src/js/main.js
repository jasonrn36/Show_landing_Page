AOS.init();

const dataEvento = new Date("Dec 20, 2026, 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);
    console.log("diasAteOEvento", diasAteOEvento);
    console.log("horasAteOEvento", horasAteOEvento);
    console.log("minutosAteOEvento", minutosAteOEvento);
    console.log("segundosAteOEvento", segundosAteOEvento);

    document.getElementById("contador").innerHTML = `${diasAteOEvento} d, ${horasAteOEvento} h, ${minutosAteOEvento} m ${segundosAteOEvento} s`;
}, 1000);