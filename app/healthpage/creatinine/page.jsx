'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Creatinine() {
    const router = useRouter();
    const { setUserData, userData } = useMainStore();

    const handleStartClick = (e) => {
        setUserData({ creatinine: e });
        router.push('/healthpage/microalbumin');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/76.png"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        คุณมีค่าผลตรวจสุขภาพระดับครีอะตินิน (Creatinine) ที่ระดับไหน
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        {userData.sex == 1 ? "ต่ำกว่า 0.6" : "ต่ำกว่า 0.7"}
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        {userData.sex == 1 ? "0.6 ถึง 1.1" : "0.7 ถึง 1.3"}
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(3)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        {userData.sex == 1 ? "1.1 ขึ้นไป" : "1.3 ขึ้นไป"}
                    </button>
                </div>
            </div>
        </div>
    );
}