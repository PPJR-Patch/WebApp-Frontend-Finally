'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function LivingDuration() {
    const router = useRouter();
    const [year, setYear] = useState('');
    const { setUserData, userData } = useMainStore();

    const handleStartClick = () => {
        if (!year) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        } else {
            setUserData({ livingDuration: year });
            router.push('/livelifepage');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/11.png"
                        alt="LivingDuration"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        คุณอาศัยอยู่ในชุมชนนี้มานานแค่ไหน(ปี)
                    </h1>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-green-800">
                        ระบุระยะเวลา (ปี)
                    </h2>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        min="0"
                        className="w-60 px-4 py-3 rounded-2xl border-2 border-[#165B33] focus:border-[#124a29] focus:outline-none text-lg text-center appearance-none cursor-pointer text-black"
                        placeholder="กรอกจำนวนปี"
                    />
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ถัดไป
                    </button>
                </div>

            </div>
        </div>
    );
}