document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');

    dropdownButton.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    const player = document.getElementById('player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const songListElement = document.getElementById('song-list');
    const songCover = document.getElementById('song-cover');
    const searchInput = document.getElementById('search-bar');
    const seekSlider = document.getElementById('seek-slider');
    const currentTimeSpan = document.getElementById('current-time');
    const songDurationSpan = document.getElementById('song-duration');

    const songs = [
        { title: 'Ola Olaala', artist: 'Karunya, Ranina Reddy', src: 'songs/song1.mp3', cover: 'covers/cover1.jpg' },
        { title: 'Rooba Rooba', artist: 'Shail Hada, Chinmayi', src: 'songs/song2.mp3', cover: 'covers/cover1.jpg' },
        {
            title: 'Hello Rammante',
            artist: 'Vijay Prakash',
            src: 'songs/song3.mp3',
            cover: 'covers/cover1.jpg'
        },
        {
            title: 'Marana Mass',
            artist: 'Anirudh Ravichander',
            src: 'songs/song4.mp3',
            cover: 'covers/cover2.jpg'
        },
        {
            title: 'Ata kavala Pata Kavala',
            artist: 'Sukhwinder Singh',
            src: 'songs/song5.mp3',
            cover: 'covers/cover3.jpg'
        },
        {
            title: 'Chammak Challo',
            artist: 'Akon, Hamsika Iyer',
            src: 'songs/song6.mp3',
            cover: 'covers/cover4.jpg'
        },
        {
            title: 'Jingidi',
            artist: 'Venkatesh',
            src: 'songs/song7.mp3',
            cover: 'covers/cover5.jpg'
        },
        {
            title: 'Jai Jai Shivashankar',
            artist: 'Benny Deyal, Vishal Dadlani',
            src: 'songs/song8.mp3',
            cover: 'covers/cover6.jpg'
        },
        {
            title: 'Chaila Chaila',
            artist: 'KK, Chiranjeevi',
            src: 'songs/song9.mp3',
            cover: 'covers/cover7.jpg'
        },
        {
            title: 'Badtameez Dil',
            artist: 'Pritam, Benny Deyal',
            src: 'songs/song10.mp3',
            cover: 'covers/cover8.jpg'
        },
        {
            title: 'Bang Bang Bangkok',
            artist: 'Devi Sri Prasad',
            src: 'songs/song 11.mp3',
            cover: 'covers/cover9.jpg'
        },
        {
            title: 'Armadham',
            artist: 'unknown, ff',
            src: 'songs/song 12.mp3',
            cover: 'covers/cover10.jpeg'
        },
        {
            title: 'Illuminati',
            artist: 'unknown, ff',
            src: 'songs/song 13.mp3',
            cover: 'covers/cover11.jpeg'
        },
        {
            title: 'Kanulanu Thaake',
            artist: 'Arjit singh, Anup rubens',
            src: 'songs/song 14.mp3',
            cover: 'covers/cover12.jpeg'
        },
        {
            title: 'Maya',
            artist: 'Arjit singh, pritam',
            src: 'songs/song 15.mp3',
            cover: 'covers/cover13.jpeg'
        },
        {
            title: 'Nenu Nenuga',
            artist: 'Sp charan, DSP',
            src: 'songs/song 16.mp3',
            cover: 'covers/cover14.jpeg'
        },
        {
            title: 'O priyatama',
            artist: 'SPB , DSP',
            src: 'songs/song 17.mp3',
            cover: 'covers/cover15.jpeg'
        },
        {
            title: 'Unnamata cheppanivu',
            artist: 'SPB, DSP',
            src: 'songs/song 18.mp3',
            cover: 'covers/cover15.jpeg'
        },
        {
            title: 'Kutty Kudiye',
            artist: 'Unknown, Unknown',
            src: 'songs/song 19.mp3',
            cover: 'covers/cover16.jpeg'
        },
        {
            title: 'Mathapithakkale',
            artist: 'Unknown, ff',
            src: 'songs/song 20.mp3',
            cover: 'covers/cover10.jpeg'
        },
        {
            title: 'Sajni re',
            artist: 'Arjit singh, pritam',
            src: 'songs/song 21.mp3',
            cover: 'covers/cover17.jpeg'
        },
        {
            title: 'Satranga',
            artist: 'Arjit singh, Pritam',
            src: 'songs/song 23.mp3',
            cover: 'covers/cover18.jpeg'
        }
        // Add more songs as needed
    ];

    let currentSongIndex = 0;

    function loadSong(song) {
        player.src = song.src;
        songCover.src = song.cover;
        document.getElementById('song-title').innerText = song.title;
        document.getElementById('song-artist').innerText = song.artist;
    }

    function displaySongs(filteredSongs) {
        songListElement.innerHTML = '';
        filteredSongs.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerText = song.title + ' - ' + song.artist;
            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(song);
                player.play();
                playBtn.innerText = 'pause';
            });
            songListElement.appendChild(li);
        });
    }

    displaySongs(songs);

    playBtn.addEventListener('click', function() {
        if (player.paused) {
            player.play();
            playBtn.innerText = 'pause';
        } else {
            player.pause();
            playBtn.innerText = 'play_arrow';
        }
    });

    prevBtn.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        player.play();
        playBtn.innerText = 'pause';
    });

    nextBtn.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        player.play();
        playBtn.innerText = 'pause';
    });

    volumeSlider.addEventListener('input', function() {
        player.volume = volumeSlider.value;
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query));
        displaySongs(filteredSongs);
    });

    // Load the initial song
    loadSong(songs[currentSongIndex]);

    // Function to update the playback time of the audio element
    function seekSong() {
        // Calculate the new playback time based on the slider's value
        const newTime = player.duration * (seekSlider.value / 100);
        // Update the current playback time of the audio element
        player.currentTime = newTime;
    }

    // Add an event listener to the seek slider
    seekSlider.addEventListener('input', seekSong);

    // Function to update the seeker position based on the current playback time
    function updateSeeker() {
        // Calculate the percentage of the song played
        const percentage = (player.currentTime / player.duration) * 100;
        // Update the value of the seek slider
        seekSlider.value = percentage;
        
        // Update current time and song duration display
        currentTimeSpan.textContent = formatTime(player.currentTime);
        songDurationSpan.textContent = formatTime(player.duration);
        // Check if the song has finished playing
        if (player.currentTime === player.duration) {
            // Move to the next song
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(songs[currentSongIndex]);
            player.play();
            playBtn.innerText = 'pause';
        }

    }

    // Function to handle seeking when the user interacts with the slider
    function seekSong() {
        // Calculate the new playback time based on the slider's value
        const newTime = player.duration * (seekSlider.value / 100);
        // Update the current playback time of the audio element
        player.currentTime = newTime;
    }

    // Add an event listener to the seek slider
    seekSlider.addEventListener('input', seekSong);

    // Add an event listener to the audio element to continuously update the seeker position
    player.addEventListener('timeupdate', updateSeeker);
    
    // Function to format time in MM:SS format
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const repeatBtn = document.getElementById('repeat-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');

    // Functionality for repeat button
    repeatBtn.addEventListener('click', function() {
        // Toggle repeat mode
        player.loop = !player.loop;
        // Update button style based on repeat mode
        repeatBtn.classList.toggle('active', player.loop);
    });

    // Functionality for shuffle button
    shuffleBtn.addEventListener('click', function() {
        // Shuffle the songs array or perform any desired action
        // Add your shuffle logic here
        console.log('Shuffle button clicked');
    });
});
