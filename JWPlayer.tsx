'use client'

import React, { useEffect, useRef } from 'react';
import jwplayer from 'jwplayer';

interface JWPlayerProps {
  url: string;
  type: 'mpd' | 'hls';
  keyId?: string;
  key?: string;
}

const JWPlayer: React.FC<JWPlayerProps> = ({ url, type, keyId, key }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const player = jwplayer(playerRef.current);

    const playerConfig: jwplayer.Configuration = {
      playlist: [{
        file: url,
        type: type === 'mpd' ? 'dash' : 'hls'
      }],
      width: '100%',
      height: '100%',
      autostart: true
    };

    if (type === 'mpd' && keyId && key) {
      playerConfig.drm = {
        clearkey: {
          keyId,
          key
        }
      };
    }

    player.setup(playerConfig);

    return () => {
      player.remove();
    };
  }, [url, type, keyId, key]);

  return <div ref={playerRef} />;
};

export default JWPlayer;

