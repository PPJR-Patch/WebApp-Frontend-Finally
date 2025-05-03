'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Systolic() {
    const router = useRouter();
    const { setUserData } = useMainStore();

    const handleStartClick = (e) => {
        setUserData({ systolic: e });
        router.push('/healthpage/diastolic');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/68.png"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระบุค่าความดัน (ตัวบน)
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ต่ำกว่า 90
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        90 - 130
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(3)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        130 ขึ้นไป
                    </button>
                </div>
            </div>
        </div>
    );
}