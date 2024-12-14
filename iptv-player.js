'use client'

import { useState } from 'react'
import { channels, Channel } from './utils/channelData'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Volume2, VolumeX, Maximize } from 'lucide-react'
import JWPlayer from './components/JWPlayer'

export default function IPTVPlayer() {
  const [currentChannel, setCurrentChannel] = useState<Channel>(channels[0])
  const [isMuted, setIsMuted] = useState(false)

  const handleChannelChange = (channel: Channel) => {
    setCurrentChannel(channel)
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-3/4 bg-black relative">
        <JWPlayer
          url={currentChannel.streamUrl}
          type={currentChannel.type}
          keyId={currentChannel.keyId}
          key={currentChannel.key}
        />
        <div className="absolute bottom-4 left-4 flex space-x-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => {
              const player = jwplayer();
              player.setMute(!player.getMute());
              setIsMuted(player.getMute());
            }}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => {
              const player = jwplayer();
              player.setFullscreen(!player.getFullscreen());
            }}
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Channels</h2>
        <div className="space-y-2">
          {channels.map((channel) => (
            <Card
              key={channel.id}
              className={`cursor-pointer ${
                currentChannel.id === channel.id ? 'bg-primary text-primary-foreground' : ''
              }`}
              onClick={() => handleChannelChange(channel)}
            >
              <CardContent className="flex items-center p-4">
                <img src={channel.logo} alt={channel.name} className="w-10 h-10 mr-4" />
                <span>{channel.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

