<script>
	import { onMount } from 'svelte';
	import io from 'socket.io-client';
  
	let isStreaming = false;
	let screenImage;
	let socket;
  
	onMount(() => {
		console.log('Tentando conectar ao socket...');
		socket = io();
		socket.on('connect', () => {
			console.log('Conectado ao socket!');
		});
		socket.on('connect_error', (error) => {
			console.error('Erro de conexão:', error);
		});
});
	async function startScreenCapture() {
	  try {
		const stream = await navigator.mediaDevices.getDisplayMedia({video: true});
		const videoTrack = stream.getVideoTracks()[0];
		const imageCapture = new ImageCapture(videoTrack);
  
		isStreaming = true;
  
		async function captureAndSend() {
		  if (!isStreaming) return;
		  const bitmap = await imageCapture.grabFrame();
		  const canvas = document.createElement('canvas');
		  canvas.width = bitmap.width;
		  canvas.height = bitmap.height;
		  const context = canvas.getContext('2d');
		  context.drawImage(bitmap, 0, 0);
		  const imageData = canvas.toDataURL('image/jpeg', 0.7);
		  socket.emit('screen-data', imageData);
		  requestAnimationFrame(captureAndSend);
		}
  
		captureAndSend();
	  } catch (err) {
		console.error("Erro ao capturar a tela:", err);
	  }
	}
  
	function stopScreenCapture() {
	  isStreaming = false;
	}
  
	$: if (socket) {
	  socket.on('screen-data', (data) => {
		if (screenImage) screenImage.src = data;
	  });
	}
  </script>
  
  <main>
	<h1>Espelhamento de Tela</h1>
	{#if isStreaming}
	  <button on:click={stopScreenCapture}>Parar Espelhamento</button>
	{:else}
	  <button on:click={startScreenCapture}>Iniciar Espelhamento</button>
	{/if}
	<img bind:this={screenImage} alt="Tela espelhada" />
  </main>
  
  <style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 240px;
	  margin: 0 auto;
	}
  
	img {
	  width: 100%;
	  height: auto;
	  background-color: black;
	  margin-top: 1em;
	}
  
	button {
	  margin-top: 1em;
	}
  </style>