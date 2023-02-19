const video = document.querySelector('[data-video]');
const campoCamera = document.querySelector('[data-camera]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]')

const botaoIniciarVideo = document.querySelector('[data-video-botao]')
const botaoEnviar = document.querySelector('[data-enviar]');
let imagemURL = '';


botaoIniciarVideo.addEventListener('click', async function(){
    
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    
    botaoIniciarVideo.style.display = 'none'
    campoCamera.style.display = 'block'
    
    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
    imagemURL = canvas.toDataURL('image/jpeg');
    
    campoCamera.style.display = 'none';
    mensagem.style.display = 'block';

})


botaoEnviar.addEventListener('click', e => {
    const dados = localStorage.getItem('cadastro');
    const dadosObj = JSON.parse(dados);

    dadosObj.imgURL = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(dadosObj));

    window.location.href = '../pages/abrir-conta-form-3.html';
});