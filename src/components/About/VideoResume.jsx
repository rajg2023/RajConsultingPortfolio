import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

const VideoResume = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Video Resume</h2>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
          <div className="aspect-video relative bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <div className="text-center text-white">
              <Play size={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Introduction</h3>
              <p className="text-blue-100">Click to play my video resume</p>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              
              <div className="flex items-center space-x-3">
                <Volume2 size={20} className="text-white" />
                <Maximize size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3">What You'll Learn</h4>
            <ul className="space-y-2 text-blue-800">
              <li>• My professional journey</li>
              <li>• Key achievements & projects</li>
              <li>• Technical expertise demo</li>
              <li>• Leadership philosophy</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Video Topics</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• QA & Testing Expertise</li>
              <li>• SDET Best Practices</li>
              <li>• Data Analytics Insights</li>
              <li>• Team Leadership Stories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResume;
