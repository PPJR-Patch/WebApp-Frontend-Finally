'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Home() {
  const router = useRouter();
  const { userData, resultDiabetesData, resultHypertentionData, resetUserData, resetResultDiabetesData, resetResultHypertentionData } = useMainStore();

  useEffect(() => {
    resetUserData();
    resetResultDiabetesData();
    resetResultHypertentionData();
    console.log(userData);
    console.log(resultDiabetesData);
    console.log(resultHypertentionData);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-2xl w-full text-center space-y-5">
        {/* Doctor Character */}
        <div className="relative">
          <img
            src="/images/1.png"
            alt="doctor"
            className="w-110 mx-auto"
          />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-green-800">
            แบบทดสอบประเมินความเสี่ยง
          </h1>
          <h2 className="text-2xl font-bold text-green-800">
            กลุ่มโรคคาร์ดิโอเมตาบอลิก
          </h2>
        </div>

        {/* Start Button */}
        <button
          onClick={() => router.push('/personalpage')}
          className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-55 text-lg"
        >
          เริ่มทำแบบทดสอบ
        </button>
      </div>
    </div>
  );
}
