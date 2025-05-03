'use client';
import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function SocialTime() {

    const router = useRouter();
    const { setUserData } = useMainStore();

    const handleStartClick = (e) => {

        setUserData({ socialTime: e });;
        router.push('/eatpage');

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/23.png"
                        alt="SocialTime"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        เวลาที่ใช้สื่อออนไลน์ (ชั่วโมงต่อวัน)
                    </h1>
                </div>

                {/* Start Button */}

                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-65 text-lg"
                    >
                        น้อยกว่า 3 ชั่วโมง ต่อวัน
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-65 text-lg"
                    >
                        3 - 4 ชั่วโมง ต่อวัน
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(3)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-65 text-lg"
                    >
                        4 ชั่วโมง ขึ้นไป
                    </button>
                </div>

            </div>
        </div>
    );
}