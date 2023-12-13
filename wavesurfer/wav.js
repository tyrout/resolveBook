var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#137a7f',
    progressColor: 'purple',
    //audioRate: 2,
    //splitChannels: true,
    //normalize: true,
});

wavesurfer.load('https://10.0.1.212:28443/temp/20231213/074e402a-a7ed-4e96-902c-2551e68c6b1e/20230911165731-244-0001-1103-E.WAV');

playstop = () => {
  if (wavesurfer.isPlaying()){  
    wavesurfer.setCurrentTime(0)
    wavesurfer.pause();
  }
  else{
    wavesurfer.play();
  }
};
  
