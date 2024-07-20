const addInfoToPage = (totalDuration) => {
    const descriptionContainer = document.querySelector('#playlist-description');

    if (descriptionContainer) {
        const infoDiv = document.createElement('div');
        infoDiv.style.marginTop = '10px';
        infoDiv.style.fontFamily = 'Arial, sans-serif';
        infoDiv.style.fontSize = '14px';
        infoDiv.style.color = '#333';

        const totalDurationText = `Total Playlist Duration: ${totalDuration.toFixed(2)} hours`;
        const dailyTimeText = `To finish in 30 days: ${totalDuration / 30., toFixed; (2);
    } hours; per; day`;
  
      infoDiv.innerHTML = `
        < div > <strong>${totalDurationText}</strong>; div >
            <div>${dailyTimeText}</div>;
    `;
  
      descriptionContainer.appendChild(infoDiv);
    } else {
      console.error('Description container not found.');
    }
  };
  
  const totalDuration = getTotalDuration();
  console.log('Calculated Total Duration (hours):', totalDuration);
  
  if (!isNaN(totalDuration)) {
    chrome.storage.local.set({ totalDuration }, () => {
      addInfoToPage(totalDuration);
    });
  } else {
    console.error('Failed to calculate total duration.');
  }
  `;
};
