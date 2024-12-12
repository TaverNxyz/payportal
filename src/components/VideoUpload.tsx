import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface Video {
  url: string;
  title: string;
}

export function VideoUpload() {
  const [videos, setVideos] = useState<Video[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newVideos = Array.from(files).map(file => ({
      url: URL.createObjectURL(file),
      title: file.name
    }));

    setVideos(prev => [...prev, ...newVideos]);
  };

  return (
    <div className="mt-8 container mx-auto px-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-orbitron text-white">Product Showcases</h3>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 
                     transition-colors duration-300 font-orbitron text-sm flex items-center gap-2"
        >
          <Upload size={16} />
          Add Video
        </button>
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        multiple
        className="hidden"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <div style={{position:'relative', width:'100%', height:'0px', paddingBottom:'56.250%'}}>
              <video
                src={video.url}
                controls
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: 0,
                  top: 0
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}