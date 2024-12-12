import React from 'react';

export function VideoSection() {
  return (
    <section className="mt-16 container mx-auto px-6">
      <h3 className="text-2xl font-orbitron text-center text-white mb-8">
        Product Showcases
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="video-container">
          <div style={{position:'relative', width:'100%', height:'0px', paddingBottom:'56.250%'}}>
            <iframe 
              allow="fullscreen" 
              allowFullScreen 
              height="100%" 
              src="https://streamable.com/e/p3ezft?nocontrols=1" 
              width="100%" 
              style={{
                border:'none',
                width:'100%',
                height:'100%',
                position:'absolute',
                left:'0px',
                top:'0px',
                overflow:'hidden'
              }}
            />
          </div>
        </div>
        <div className="video-container">
          <div style={{position:'relative', width:'100%', height:'0px', paddingBottom:'56.250%'}}>
            <iframe 
              allow="fullscreen" 
              allowFullScreen 
              height="100%" 
              src="https://streamable.com/e/0nl82m?nocontrols=1" 
              width="100%" 
              style={{
                border:'none',
                width:'100%',
                height:'100%',
                position:'absolute',
                left:'0px',
                top:'0px',
                overflow:'hidden'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}