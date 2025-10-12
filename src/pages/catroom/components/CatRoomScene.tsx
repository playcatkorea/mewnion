
import { useEffect, useRef, useState } from 'react';

interface Cat {
  id: number;
  x: number;
  y: number;
  type: 'black' | 'orange' | 'white';
  mood: 'happy' | 'playful' | 'sleepy' | 'hungry';
  activity: 'sitting' | 'walking' | 'sleeping' | 'playing';
  health: number;
  happiness: number;
  hunger: number;
  energy: number;
}

interface Furniture {
  id: number;
  type: string;
  x: number;
  y: number;
}

interface OnlineUser {
  id: string;
  username: string;
  color: string;
  x: number;
  y: number;
}

interface RoomData {
  playerPosition: { x: number; y: number };
  cats: Cat[];
  furniture: Furniture[];
}

interface CatRoomSceneProps {
  roomData: RoomData;
  setRoomData: (data: RoomData) => void;
  selectedCat: number | null;
  setSelectedCat: (id: number | null) => void;
  isDecorating: boolean;
  onlineUsers: OnlineUser[];
  onRemoveFurniture?: (id: number) => void;
}

export default function CatRoomScene({
  roomData,
  setRoomData,
  selectedCat,
  setSelectedCat,
  isDecorating,
  onlineUsers,
  onRemoveFurniture
}: CatRoomSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [playerDirection, setPlayerDirection] = useState<'left' | 'right'>('right');
  const [animationFrame, setAnimationFrame] = useState(0);
  const [selectedFurniture, setSelectedFurniture] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // 픽셀 아트 스타일 캐릭터 그리기 함수들
  const drawPlayer = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    const pixelSize = 3;
    const walkCycle = Math.floor(animationFrame / 8) % 4;

    // 더 사람다운 플레이어 픽셀 데이터 (18x20)
    const playerPixels = [
      '000000HHHHHH000000',  // 머리 윗부분
      '00000HHHHHHHH00000',
      '0000HHHHHHHHHH0000',
      '000HHHBBHHBBHHH000',  // 얼굴 (눈)
      '000HHHHHHHHHHHHH00',
      '000HHHHMMMHHHHH000',  // 입
      '0000HHHHHHHHH0000',   // 턱
      '00000SSSSSSS00000',   // 목
      '0000SSSSSSSSS0000',   // 어깨
      '000SSSSSSSSSSS000',   // 몸통 상단
      '000SSSSSSSSSSS000',
      '000SSSSSSSSSSS000',
      '000SSSSSSSSSSS000',   // 몸통
      '0000SSSSSSSSS0000',
      '00000PPPPPPP00000',   // 바지 상단
      '00000PPP0PPP00000',   // 바지 분리
      '00000PPP0PPP00000',
      '00000PPP0PPP00000',
      '00000BBB0BBB00000',   // 신발
      '00000BBB0BBB00000'
    ];

    // 색상 매핑 (더 자연스럽게)
    const colors: { [key: string]: string } = {
      '0': 'transparent',
      'H': '#3D2817',  // 자연스러운 갈색 머리
      'B': '#1A1A1A',  // 검정 (눈, 신발)
      'M': '#E89EB3',  // 자연스러운 입술색
      'S': '#F5D5C0',  // 자연스러운 살색
      'P': '#4A7BA7'   // 진한 청바지색
    };

    // 그림자
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.ellipse(x + 27, y + 62, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    playerPixels.forEach((row, rowIndex) => {
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const pixel = row[colIndex];
        if (pixel !== '0') {
          ctx.fillStyle = colors[pixel];
          const flipX = playerDirection === 'left' ? (17 - colIndex) : colIndex;

          // 걷기 애니메이션 오프셋
          let offsetY = 0;
          if (walkCycle === 1 || walkCycle === 3) {
            offsetY = rowIndex > 14 ? 2 : 0;
          }

          ctx.fillRect(
            x + flipX * pixelSize,
            y + rowIndex * pixelSize + offsetY,
            pixelSize,
            pixelSize
          );
        }
      }
    });

    // 얼굴 디테일 (눈동자)
    ctx.fillStyle = '#FFFFFF';
    const eyeY = y + 3 * pixelSize;
    if (playerDirection === 'right') {
      ctx.fillRect(x + 5 * pixelSize + 1, eyeY + 1, 1, 1);
      ctx.fillRect(x + 9 * pixelSize + 1, eyeY + 1, 1, 1);
    } else {
      ctx.fillRect(x + 7 * pixelSize + 1, eyeY + 1, 1, 1);
      ctx.fillRect(x + 11 * pixelSize + 1, eyeY + 1, 1, 1);
    }

    // 옷 디테일 (버튼)
    ctx.fillStyle = '#2C2C2C';
    ctx.fillRect(x + 8 * pixelSize, y + 10 * pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x + 8 * pixelSize, y + 12 * pixelSize, pixelSize, pixelSize);
  };

  // 온라인 유저 그리기
  const drawOnlineUser = (ctx: CanvasRenderingContext2D, user: OnlineUser) => {
    const pixelSize = 2;

    // 사람 모양 픽셀 데이터 (12x14 - 더 작은 버전)
    const userPixels = [
      '0000HHHH0000',  // 머리
      '000HHHHHH000',
      '00HBBHHBBH00',  // 얼굴 (눈)
      '00HHHMMHHH00',  // 입
      '000HHHHHH000',
      '0000SSSS0000',  // 목
      '000SSSSSS000',  // 어깨
      '00SSSSSSSS00',  // 몸통
      '00SSSSSSSS00',
      '000PPP0PPP00',  // 바지
      '000PPP0PPP00',
      '000BBB0BBB00',  // 신발
      '000BBB0BBB00'
    ];

    // 색상 매핑
    const colors: { [key: string]: string } = {
      '0': 'transparent',
      'H': '#5D4037',  // 머리
      'B': '#212121',  // 눈, 신발
      'M': '#F48FB1',  // 입
      'S': '#FFCCBC',  // 살색
      'P': '#64B5F6'   // 바지
    };

    // 그림자
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.beginPath();
    ctx.ellipse(user.x + 12, user.y + 28, 8, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 사람 그리기
    userPixels.forEach((row, rowIndex) => {
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const pixel = row[colIndex];
        if (pixel !== '0') {
          ctx.fillStyle = colors[pixel];
          ctx.fillRect(
            user.x + colIndex * pixelSize,
            user.y + rowIndex * pixelSize,
            pixelSize,
            pixelSize
          );
        }
      }
    });

    // 유저 색상으로 옷 칠하기 (개성)
    ctx.fillStyle = user.color;
    ctx.globalAlpha = 0.6;
    ctx.fillRect(user.x + 6, user.y + 14, 12, 8);
    ctx.globalAlpha = 1;

    // 유저 이름 표시
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.font = 'bold 9px Arial';
    ctx.strokeText(user.username, user.x - 5, user.y - 5);
    ctx.fillText(user.username, user.x - 5, user.y - 5);

    // 온라인 표시 (초록 점)
    ctx.fillStyle = '#00FF00';
    ctx.beginPath();
    ctx.arc(user.x + 22, user.y + 2, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  const drawCat = (ctx: CanvasRenderingContext2D, cat: Cat) => {
    const pixelSize = 3;
    const animOffset = Math.sin(animationFrame * 0.1 + cat.id) * 3;
    const tailWag = Math.sin(animationFrame * 0.15 + cat.id) * 5;
    const breathe = Math.sin(animationFrame * 0.05) * 0.5;

    // 고양이 색상 (더 생동감 있게)
    const catColors: { [key: string]: { main: string; dark: string; light: string } } = {
      black: { main: '#2C2C2C', dark: '#1A1A1A', light: '#4A4A4A' },
      orange: { main: '#FF8C42', dark: '#E67A32', light: '#FFB366' },
      white: { main: '#FAFAFA', dark: '#E8E8E8', light: '#FFFFFF' }
    };

    const colors = catColors[cat.type];

    // 향상된 고양이 몸체 픽셀 아트 (더 크고 디테일함)
    const catPixels = [
      '000EE00EE000',  // 귀
      '00EEEEEEE000',  // 머리 윗부분
      '00EEMMMEE000',  // 얼굴
      '0EEMMMMEE000',  // 얼굴 중간
      '0EEEMMMEE000',  // 얼굴 아래
      '0EEEEEEEEE00',  // 몸통 시작
      'EEEEEEEEEE00',  // 몸통
      'EEEEEEEEEE00',  // 몸통
      '0EEEEEEEE000',  // 몸통 끝
      '00EE00EE0000'   // 발
    ];

    // 움직임에 따른 Y 오프셋
    const yOffset = cat.activity === 'walking' ? animOffset : breathe;

    // 그림자
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.ellipse(cat.x + 18, cat.y + 32 + yOffset, 15, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // 고양이 본체
    catPixels.forEach((row, rowIndex) => {
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const pixel = row[colIndex];
        let fillColor = colors.main;

        if (pixel === 'E') {
          fillColor = colors.main;
        } else if (pixel === 'M') {
          fillColor = colors.light;
        } else {
          continue;
        }

        ctx.fillStyle = fillColor;
        ctx.fillRect(
          cat.x + colIndex * pixelSize,
          cat.y + rowIndex * pixelSize + yOffset,
          pixelSize,
          pixelSize
        );
      }
    });

    // 고양이 눈
    ctx.fillStyle = '#000000';
    ctx.fillRect(cat.x + 4 * pixelSize, cat.y + 2 * pixelSize + yOffset, pixelSize, pixelSize);
    ctx.fillRect(cat.x + 7 * pixelSize, cat.y + 2 * pixelSize + yOffset, pixelSize, pixelSize);

    // 눈 하이라이트
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(cat.x + 4 * pixelSize + 1, cat.y + 2 * pixelSize + yOffset, 1, 1);
    ctx.fillRect(cat.x + 7 * pixelSize + 1, cat.y + 2 * pixelSize + yOffset, 1, 1);

    // 코
    ctx.fillStyle = '#FF69B4';
    ctx.fillRect(cat.x + 5 * pixelSize + 1, cat.y + 3 * pixelSize + yOffset, pixelSize, pixelSize);

    // 귀 안쪽 (핑크)
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(cat.x + 3 * pixelSize + 1, cat.y + 1 * pixelSize + yOffset, 1, 2);
    ctx.fillRect(cat.x + 8 * pixelSize + 1, cat.y + 1 * pixelSize + yOffset, 1, 2);

    // 고양이 꼬리 (흔들림 효과 강화)
    const tailSegments = 5;
    for (let i = 0; i < tailSegments; i++) {
      const tailX = cat.x - (i + 1) * pixelSize * 1.5 + Math.sin(animationFrame * 0.2 + cat.id + i * 0.5) * tailWag;
      const tailY = cat.y + 5 * pixelSize + yOffset + Math.cos(animationFrame * 0.2 + i * 0.3) * 2;

      ctx.fillStyle = i % 2 === 0 ? colors.main : colors.dark;
      ctx.fillRect(tailX, tailY, pixelSize * 1.5, pixelSize * 1.5);
    }

    // 선택된 고양이 표시
    if (selectedCat === cat.id) {
      ctx.strokeStyle = '#f6b73c';
      ctx.lineWidth = 2;
      ctx.strokeRect(cat.x - 5, cat.y - 5 + yOffset, 7 * pixelSize + 10, 6 * pixelSize + 10);
    }

    // 기분 표시 이모지
    const moodEmojis: { [key: string]: string } = {
      happy: '😸',
      playful: '😺',
      sleepy: '😴',
      hungry: '🍽️'
    };

    ctx.font = '16px Arial';
    ctx.fillText(moodEmojis[cat.mood], cat.x, cat.y - 10 + yOffset);

    // 상태 바 표시 (선택된 고양이만)
    if (selectedCat === cat.id) {
      const barWidth = 40;
      const barHeight = 4;
      const barY = cat.y + 20 + yOffset;
      
      // 건강도 바
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(cat.x - 5, barY, barWidth, barHeight);
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(cat.x - 5, barY, (barWidth * cat.health) / 100, barHeight);
      
      // 행복도 바
      ctx.fillStyle = '#666666';
      ctx.fillRect(cat.x - 5, barY + 6, barWidth, barHeight);
      ctx.fillStyle = '#FFFF00';
      ctx.fillRect(cat.x - 5, barY + 6, (barWidth * cat.happiness) / 100, barHeight);
    }
  };

  const drawFurniture = (ctx: CanvasRenderingContext2D, furniture: Furniture) => {
    const pixelSize = 4;
    const glow = Math.sin(animationFrame * 0.05) * 0.1 + 0.9;
    const wheelRotation = (animationFrame * 2) % 360;

    // 가구별 색상과 모양 (심플하게)
    const furnitureData: { [key: string]: { pixels: string[] } } = {
      cat_tower: {
        pixels: [
          '0BBB0',
          '0BBB0',
          'BBBBB',
          '0DDD0',
          '0DDD0',
          'DDDDD'
        ]
      },
      cat_wheel: {
        pixels: [
          '0WWW0',
          'WCCCW',
          'WCCCW',
          'WCCCW',
          '0WWW0',
          '0DDD0'
        ]
      },
      sofa: {
        pixels: [
          'B0000B',
          'SSSSSS',
          'SSSSSS',
          'DDDDDD'
        ]
      },
      bookshelf: {
        pixels: [
          'BBBB',
          'RGRG',
          'BBBB',
          'GRBR',
          'BBBB',
          'DDDD'
        ]
      },
      plant: {
        pixels: [
          '0GG0',
          'GGGG',
          '0GG0',
          '0BB0',
          '0BB0',
          'BBBB'
        ]
      },
      lamp: {
        pixels: [
          '0YY0',
          'YYYY',
          '0WW0',
          '0WW0',
          'WWWW'
        ]
      },
      cat_bed: {
        pixels: [
          'PPPP',
          'P00P',
          'P00P',
          'PPPP'
        ]
      },
      scratching_post: {
        pixels: [
          '0BB0',
          '0BB0',
          '0BB0',
          '0BB0',
          'DDDD'
        ]
      },
      food_bowl: {
        pixels: [
          '0RR0',
          'RRRR',
          'RRRR',
          '0RR0'
        ]
      },
      toy_ball: {
        pixels: [
          '0RR0',
          'RRRR',
          'RBBR',
          '0RR0'
        ]
      },
      tunnel: {
        pixels: [
          'GGGGG',
          'G000G',
          'G000G',
          'GGGGG'
        ]
      }
    };

    const data = furnitureData[furniture.type];
    if (!data) return;

    // 그림자
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(
      furniture.x + 5,
      furniture.y + data.pixels.length * pixelSize + 2,
      data.pixels[0].length * pixelSize,
      5
    );

    // 색상 매핑
    const colorMap: { [key: string]: string } = {
      'B': '#8B4513',  // 갈색
      'D': '#654321',  // 어두운 갈색
      'S': '#4A90E2',  // 소파 블루
      'G': '#228B22',  // 초록
      'R': '#DC143C',  // 빨간색
      'Y': '#FFD700',  // 노란 조명
      'W': '#C0C0C0',  // 회색/흰색
      'C': '#87CEEB',  // 하늘색 (캣휠)
      'P': '#FFB6C1',  // 핑크 (침대)
      '0': 'transparent'
    };

    // 선택된 가구 하이라이트
    if (selectedFurniture === furniture.id && isDecorating) {
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      const width = data.pixels[0].length * pixelSize;
      const height = data.pixels.length * pixelSize;
      ctx.strokeRect(furniture.x - 5, furniture.y - 5, width + 10, height + 10);
    }

    data.pixels.forEach((row, rowIndex) => {
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const pixel = row[colIndex];
        if (pixel === '0') continue;

        ctx.fillStyle = colorMap[pixel] || '#CCCCCC';

        // 램프에 발광 효과
        if (furniture.type === 'lamp' && pixel === 'Y') {
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#FFD700';
          ctx.globalAlpha = glow;
        }

        ctx.fillRect(
          furniture.x + colIndex * pixelSize,
          furniture.y + rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );

        // 리셋
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    });

    // 하이라이트 추가
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(
      furniture.x + pixelSize,
      furniture.y + pixelSize,
      pixelSize,
      pixelSize
    );
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 클리어
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 그라데이션 배경
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#E6E6FA');
    bgGradient.addColorStop(0.5, '#DDA0DD');
    bgGradient.addColorStop(1, '#E6E6FA');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 벽지 패턴 (하트 무늬)
    ctx.fillStyle = 'rgba(255, 182, 193, 0.2)';
    for (let x = 0; x < canvas.width; x += 40) {
      for (let y = 20; y < canvas.height - 100; y += 40) {
        ctx.font = '20px Arial';
        ctx.fillText('♡', x, y);
      }
    }

    // 바닥 타일 (체크무늬)
    const tileSize = 25;
    for (let x = 0; x < canvas.width; x += tileSize) {
      for (let y = canvas.height - 80; y < canvas.height; y += tileSize) {
        if (((x / tileSize) + (y / tileSize)) % 2 === 0) {
          ctx.fillStyle = '#DDA0DD';
        } else {
          ctx.fillStyle = '#E6B8E6';
        }
        ctx.fillRect(x, y, tileSize, tileSize);
      }
    }

    // 벽 장식 (상단 테두리)
    const wallGradient = ctx.createLinearGradient(0, 0, 0, 25);
    wallGradient.addColorStop(0, '#9370DB');
    wallGradient.addColorStop(1, '#BA55D3');
    ctx.fillStyle = wallGradient;
    ctx.fillRect(0, 0, canvas.width, 25);

    // 벽 장식 무늬
    ctx.fillStyle = '#FFD700';
    for (let x = 10; x < canvas.width; x += 30) {
      ctx.fillRect(x, 8, 3, 10);
    }

    // 바닥 테두리
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, canvas.height - 5, canvas.width, 5);

    // 창문 (왼쪽 위)
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(30, 40, 80, 80);
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 40, 80, 80);
    ctx.strokeRect(30, 80, 80, 1);
    ctx.strokeRect(68, 40, 1, 80);

    // 햇살 효과
    ctx.fillStyle = 'rgba(255, 255, 200, 0.3)';
    ctx.beginPath();
    ctx.moveTo(110, 120);
    ctx.lineTo(200, 300);
    ctx.lineTo(150, 300);
    ctx.closePath();
    ctx.fill();

    // 액자 (오른쪽 위)
    ctx.fillStyle = '#FFE4C4';
    ctx.fillRect(canvas.width - 100, 50, 70, 70);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 5;
    ctx.strokeRect(canvas.width - 100, 50, 70, 70);
    ctx.font = '30px Arial';
    ctx.fillText('🐱', canvas.width - 80, 95);

    // 가구 그리기
    roomData.furniture.forEach(furniture => {
      drawFurniture(ctx, furniture);
    });

    // 온라인 유저들 그리기
    onlineUsers.forEach(user => {
      drawOnlineUser(ctx, user);
    });

    // 고양이들 그리기
    roomData.cats.forEach(cat => {
      drawCat(ctx, cat);
    });

    // 플레이어 그리기
    drawPlayer(ctx, roomData.playerPosition.x, roomData.playerPosition.y);

    setAnimationFrame(prev => prev + 1);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [roomData, onlineUsers]);

  // 고양이 자동 움직임
  useEffect(() => {
    const interval = setInterval(() => {
      setRoomData(prev => ({
        ...prev,
        cats: prev.cats.map(cat => {
          if (cat.activity === 'walking') {
            const newX = cat.x + (Math.random() - 0.5) * 20;
            const newY = cat.y + (Math.random() - 0.5) * 10;
            return {
              ...cat,
              x: Math.max(20, Math.min(580, newX)),
              y: Math.max(50, Math.min(320, newY))
            };
          }
          return cat;
        })
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [setRoomData]);

  // 키보드 입력 처리
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const speed = 10;
      let newX = roomData.playerPosition.x;
      let newY = roomData.playerPosition.y;

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          newX = Math.max(0, newX - speed);
          setPlayerDirection('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          newX = Math.min(550, newX + speed);
          setPlayerDirection('right');
          break;
        case 'ArrowUp':
        case 'w':
        case 'W':
          newY = Math.max(0, newY - speed);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          newY = Math.min(320, newY + speed);
          break;
      }

      if (newX !== roomData.playerPosition.x || newY !== roomData.playerPosition.y) {
        setRoomData(prev => ({
          ...prev,
          playerPosition: { x: newX, y: newY }
        }));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [roomData.playerPosition, setRoomData]);

  // 캔버스 마우스 다운
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (isDecorating) {
      // 가구 클릭 확인
      for (let i = roomData.furniture.length - 1; i >= 0; i--) {
        const furniture = roomData.furniture[i];
        const furnitureData: { [key: string]: number } = {
          cat_tower: 28, cat_wheel: 32, sofa: 32, bookshelf: 24,
          plant: 20, lamp: 20, cat_bed: 24, scratching_post: 20,
          food_bowl: 16, toy_ball: 20, tunnel: 28
        };
        const width = furnitureData[furniture.type] || 24;
        const height = furnitureData[furniture.type] || 24;

        if (x >= furniture.x && x <= furniture.x + width &&
            y >= furniture.y && y <= furniture.y + height) {
          setSelectedFurniture(furniture.id);
          setDragging(true);
          setDragOffset({ x: x - furniture.x, y: y - furniture.y });
          return;
        }
      }
      setSelectedFurniture(null);
    } else {
      // 고양이 클릭 감지
      const clickedCat = roomData.cats.find(cat =>
        x >= cat.x && x <= cat.x + 36 &&
        y >= cat.y && y <= cat.y + 30
      );

      if (clickedCat) {
        setSelectedCat(selectedCat === clickedCat.id ? null : clickedCat.id);
      } else {
        // 플레이어 이동
        setRoomData(prev => ({
          ...prev,
          playerPosition: { x: x - 30, y: y - 30 }
        }));
      }
    }
  };

  // 캔버스 마우스 이동
  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging || !selectedFurniture || !isDecorating) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    setRoomData(prev => ({
      ...prev,
      furniture: prev.furniture.map(f =>
        f.id === selectedFurniture
          ? { ...f, x: Math.max(10, Math.min(x - dragOffset.x, 550)), y: Math.max(30, Math.min(y - dragOffset.y, 350)) }
          : f
      )
    }));
  };

  // 캔버스 마우스 업
  const handleCanvasMouseUp = () => {
    setDragging(false);
  };

  // 우클릭으로 가구 삭제
  const handleCanvasContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    if (!isDecorating || !selectedFurniture || !onRemoveFurniture) return;

    if (window.confirm('이 가구를 삭제하시겠습니까?')) {
      onRemoveFurniture(selectedFurniture);
      setSelectedFurniture(null);
    }
  };

  return (
    <div className="space-y-3">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className={`w-full border-2 border-purple-500/30 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg ${
          isDecorating ? 'cursor-move' : 'cursor-pointer'
        }`}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
        onMouseLeave={handleCanvasMouseUp}
        onContextMenu={handleCanvasContextMenu}
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-purple-300 gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="flex items-center">
            <i className="ri-gamepad-line mr-1"></i>
            WASD / 방향키 이동
          </span>
          <span className="flex items-center">
            <i className="ri-mouse-line mr-1"></i>
            클릭 선택
          </span>
        </div>
        <div className="flex items-center space-x-1.5">
          <i className="ri-team-line text-sm"></i>
          <span className="text-xs">온라인:</span>
          <div className="flex -space-x-1">
            {onlineUsers.slice(0, 3).map((user) => (
              <div
                key={user.id}
                className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: user.color }}
                title={user.username}
              >
                {user.username.charAt(0)}
              </div>
            ))}
            {onlineUsers.length > 3 && (
              <div className="w-5 h-5 bg-gray-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">
                +{onlineUsers.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
