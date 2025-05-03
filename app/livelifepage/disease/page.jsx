'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useMainStore from '@/store/mainStore';

export default function Disease() {
  const router = useRouter();
  const { setUserData } = useMainStore();
  const [hasDisease, setHasDisease] = useState(null);
  const [diseaseName, setDiseaseName] = useState('');

  const handleNext = () => {
    setUserData({ chronicDisease: hasDisease === 'yes' ? diseaseName : 'none' });
    router.push('/livelifepage/coronaryArtery');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-2xl w-full text-center space-y-5">
        {/* Doctor Character */}
        <div className="relative">
          <img
            src="/images/93.png"
            alt="diseaseFamily"
            className="w-70 mx-auto"
          />
        </div>

        <h2 className="text-xl font-semibold text-green-800">
          คุณมีโรคประจำตัวหรือไม่?
        </h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => {
              setHasDisease('no');
              setDiseaseName('');
              handleNext();
            }}
            className="bg-[#df3b3b] hover:bg-[#c93535] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
          >
            ไม่มี
          </button>
          <button
            onClick={() => setHasDisease('yes')}
            className="bg-[#28b123] hover:bg-[#229c1d] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
          >
            มี
          </button>
        </div>

        {hasDisease === 'yes' && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="ระบุชื่อโรค..."
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
              className="border p-2 rounded-md placeholder:text-gray-700 text-black"
            />
            <button
              onClick={handleNext}
              className="ml-4 px-4 py-2 bg-green-700 text-white rounded-full"
              disabled={!diseaseName}
            >
              ถัดไป
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
