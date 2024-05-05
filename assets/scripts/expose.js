// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  
  /*When user select a horn from the drop down menu, the following should occur:
    The correct image should display
    The correct audio sound file should be set
  */
  const drop_menu = document.getElementById("horn-select");
  const following_image = document.querySelector("#expose img");
  const following_audio = document.querySelector("#expose audio");


  drop_menu.addEventListener('change', function() 
  {
    const choice = drop_menu.value;

    switch (choice) {
      case 'air-horn':
        following_image.src = 'assets/images/air-horn.svg'; 
        following_audio.src = 'assets/audio/air-horn.mp3'; 
        break;
      case 'car-horn':
        following_image.src = 'assets/images/car-horn.svg';
        following_audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        following_image.src = 'assets/images/party-horn.svg';
        following_audio.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        following_image.src = 'assets/images/no-image.png';
        following_audio.src = '';
        break;
    }
  });

  const volume_adjustment = document.getElementById("volume");
  const volume_display = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti(); 

  /**When you change the volume on the slider, the following should occur:
    At zero volume, the mute icon (level 0) should be displayed
    From 1 to < 33 volume the first volume level should be displayed
    From 33 to < 67 volume the second volume level should be displayed
    From 67 and up the third volume level should be displayed
    The correct volume icon should be set */

  volume_adjustment.addEventListener('input', function() 
  {
    const volume = parseInt(volume_adjustment.value, 10);
    if (volume === 0) 
    {
      volume_display.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volume < 33) 
    {
      volume_display.src = "assets/icons/volume-level-1.svg";
    } 
    else if (volume < 67) 
    {
      volume_display.src = "assets/icons/volume-level-2.svg";
    } 
    else 
    {
      volume_display.src = "assets/icons/volume-level-3.svg";
    }
    following_audio.volume = volume / 100;  
  });

  playButton.addEventListener('click', function() 
  {
    following_audio.play();  // Play the sound at the current volume
    
    if (drop_menu.value === 'party-horn') 
    {
      jsConfetti.addConfetti();  // Launch confetti if the party horn is selected
    }
  });
}