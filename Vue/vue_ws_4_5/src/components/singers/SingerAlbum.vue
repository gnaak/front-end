<template>
    <div class="album">
      <h2 class="album-title">앨범 명</h2>
      <ul class="song-list">
        <li class="song">노래 1</li>
        <li class="song">노래 2</li>
        <li class="song">노래 3</li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .album {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .album-title {
    font-size: 18px;
    color: #333;
    margin: 0;
  }
  
  .song-list {
    list-style: none;
    padding: 0;
  }
  
  .song {
    font-size: 14px;
    margin: 5px 0;
    color: #555;
  }
  </style>
  