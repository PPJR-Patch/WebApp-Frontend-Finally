'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Height() {

    const router = useRouter();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const { setUserData } = useMainStore();

    const handleStartClick = () => {
        if (!height || !weight) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        } else {
            setUserData({ height: height });
            setUserData({ weight: weight });
            router.push('/personalpage/occupation');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/6.png"
                        alt="Height"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระบุน้ำหนักและส่วนสูง
                    </h1>
                </div>
                <div className="space-y-2">
                    <h1 className="text-lg font-bold text-green-800">
                        ระบุน้ำหนัก (กก.)
                    </h1>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="0"
                        className="w-60 px-4 py-3 rounded-2xl border-2 border-[#165B33] focus:border-[#124a29] focus:outline-none text-lg text-center appearance-none cursor-pointer text-black"
                        placeholder="กรอกน้ำหนัก"
                    />
                </div>

                <div className="space-y-2">
                    <h1 className="text-lg font-bold text-green-800">
                        ระบุส่วนสูง (ซม.)
                    </h1>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        min="0"
                        className="w-60 px-4 py-3 rounded-2xl border-2 border-[#165B33] focus:border-[#124a29] focus:outline-none text-lg text-center appearance-none cursor-pointer text-black"
                        placeholder="กรอกส่วนสูง"
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