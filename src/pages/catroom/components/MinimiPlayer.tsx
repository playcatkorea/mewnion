import { useState, useRef, useEffect } from 'react';

interface Track {
  title: string;
  artist: string;
  duration: string;
  url: string;
}

export default function MinimiPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(50);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 무료 로열티 프리 음악 URL 예시 (실제로는 자체 음악 파일을 사용)
  const tracks: Track[] = [
    {
      title: '별이 빛나는 밤',
      artist: '캣츠 뮤직',
      duration: '3:24',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      title: '고양이의 왈츠',
      artist: '냥냥 앙상블',
      duration: '2:58',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      title: '따뜻한 햇살',
      artist: '뮤직박스',
      duration: '4:12',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
      title: '꿈속의 정원',
      artist: '캣츠 뮤직',
      duration: '3:45',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    }
  ];

  // 오디오 초기화
  useEffect(() => {
    audioRef.current = new Audio(tracks[currentTrack].url);
    audioRef.current.volume = volume / 100;

    const audio = audioRef.current;

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
      handleNext();
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [currentTrack]);

  // 볼륨 변경
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // 재생/일시정지 상태 동기화
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.error('재생 실패:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/30 shadow-lg">
      {/* 미니미 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
            <i className="ri-music-2-fill text-white text-sm"></i>
          </div>
          <span className="text-white font-bold text-sm">🎵 미니미</span>
        </div>
        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="text-purple-300 hover:text-white transition-colors text-xs"
        >
          <i className={`ri-${showPlaylist ? 'arrow-up' : 'list'}-s-line`}></i>
        </button>
      </div>

      {/* 현재 재생 중인 곡 정보 */}
      <div className="bg-black/30 rounded-lg p-2 mb-3">
        <div className="flex items-start space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded flex items-center justify-center flex-shrink-0">
            {isPlaying ? (
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-3 bg-white animate-pulse"></div>
                <div className="w-0.5 h-4 bg-white animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-0.5 h-3 bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            ) : (
              <i className="ri-music-fill text-white text-lg"></i>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium text-xs truncate">
              {tracks[currentTrack].title}
            </div>
            <div className="text-purple-300 text-xs truncate">
              {tracks[currentTrack].artist}
            </div>
          </div>
        </div>

        {/* 재생 바 */}
        <div className="mt-2">
          <div className="w-full h-1 bg-purple-800/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-300"
              style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-purple-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{duration > 0 ? formatTime(duration) : tracks[currentTrack].duration}</span>
          </div>
        </div>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex items-center justify-center space-x-3 mb-3">
        <button
          onClick={handlePrev}
          className="w-7 h-7 bg-purple-700/50 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-colors text-white"
        >
          <i className="ri-skip-back-mini-fill text-sm"></i>
        </button>
        <button
          onClick={handlePlayPause}
          className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all shadow-lg text-white"
        >
          <i className={`ri-${isPlaying ? 'pause' : 'play'}-fill text-base`}></i>
        </button>
        <button
          onClick={handleNext}
          className="w-7 h-7 bg-purple-700/50 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-colors text-white"
        >
          <i className="ri-skip-forward-mini-fill text-sm"></i>
        </button>
      </div>

      {/* 볼륨 조절 */}
      <div className="flex items-center space-x-2">
        <i className="ri-volume-down-line text-purple-300 text-xs"></i>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="flex-1 h-1 bg-purple-800/50 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-pink-400 [&::-webkit-slider-thumb]:to-purple-400"
        />
        <i className="ri-volume-up-line text-purple-300 text-xs"></i>
      </div>

      {/* 재생목록 */}
      {showPlaylist && (
        <div className="mt-3 pt-3 border-t border-purple-500/30 max-h-32 overflow-y-auto">
          <div className="space-y-1">
            {tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => setCurrentTrack(index)}
                className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                  currentTrack === index
                    ? 'bg-purple-600/50 text-white'
                    : 'bg-purple-800/30 text-purple-300 hover:bg-purple-700/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <i className={`ri-${currentTrack === index && isPlaying ? 'music-2' : 'music'}-fill text-xs flex-shrink-0`}></i>
                    <div className="text-xs truncate">{track.title}</div>
                  </div>
                  <div className="text-xs text-purple-400 ml-2">{track.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
