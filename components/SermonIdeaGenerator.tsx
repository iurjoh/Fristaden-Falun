

import React, { useState, useCallback } from 'react';
import { generateSermonIdea } from '../services/geminiService';

interface SermonOutline {
  title: string;
  points: { pointTitle: string; description: string }[];
  verses: string[];
  error?: string;
}

const SermonIdeaGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [outline, setOutline] = useState<SermonOutline | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError('');
    setOutline(null);

    try {
      const resultJson = await generateSermonIdea(topic);
      const parsedResult = JSON.parse(resultJson);
      if (parsedResult.error) {
        setError(parsedResult.error);
      } else {
        setOutline(parsedResult);
      }
    } catch (err) {
      setError('An unexpected error occurred while parsing the result. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [topic]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
      <h3 className="text-2xl md:text-3xl font-bold text-church-blue font-serif mb-2">Sermon Idea Generator</h3>
      <p className="text-church-gray mb-6 max-w-xl mx-auto">A creative tool for pastors and leaders, powered by AI.</p>
      
      <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
        <label htmlFor="sermon-topic" className="sr-only">Sermon Topic</label>
        <input
          type="text"
          id="sermon-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic, e.g., 'Hope'"
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow"
          disabled={isLoading}
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-church-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Idea'
          )}
        </button>
      </div>

      {error && <p role="alert" className="text-red-500 mt-4">{error}</p>}

      {outline && !outline.error && (
        <div role="status" className="mt-8 text-left bg-church-light-gray p-6 rounded-lg animate-fade-in max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold font-serif text-church-blue mb-4">{outline.title}</h4>
          <div className="space-y-4 mb-6">
            {outline.points.map((point, index) => (
              <div key={index}>
                <h5 className="font-semibold text-lg text-church-gray">{index + 1}. {point.pointTitle}</h5>
                <p className="pl-5 text-church-gray">{point.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h5 className="font-semibold text-lg text-church-gray mb-2">Key Verses:</h5>
            <ul className="list-disc list-inside text-church-gray space-y-1">
              {outline.verses.map((verse, index) => (
                <li key={index}><span className="font-medium">{verse}</span></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SermonIdeaGenerator;