'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Occupation() {
    const router = useRouter();
    const { setUserData, userData } = useMainStore();

    const handleStartClick = (occupation) => {
        setUserData({ occupation: occupation });
        router.push('/personalpage/exertionOccupation');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/8.png"
                        alt="Occupation"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระบุอาชีพ
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-70 text-lg"
                    >
                        ว่างงาน
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-70 text-lg"
                    >
                        เกษตรกร
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(3)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-70 text-lg"
                    >
                        ลูกจ้างที่ไม่ใช่องค์กรภาครัฐ
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(4)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-70 text-lg"
                    >
                        ลูกจ้างที่เป็นองค์กรภาครัฐ
                    </button>
                </div>


            </div>
        </div>
    );
}