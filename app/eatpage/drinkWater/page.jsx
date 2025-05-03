'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function DrinkWater() {
    const router = useRouter();
    const { setUserData } = useMainStore();

    const handleStartClick = (e) => {
        setUserData({ drinkWater: e });
        router.push('/lifepage');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/37.png"
                        alt="drinkWater"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        คุณดื่มน้ำวันละกี่แก้ว
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        1 - 2 แก้ว
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        3 - 5 แก้ว
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(3)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        6 - 8 แก้ว
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(4)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        มากกว่า 8 แก้ว
                    </button>
                </div>

            </div>
        </div>
    );
}