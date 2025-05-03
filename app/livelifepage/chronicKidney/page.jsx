'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function ChronicKidney() {
    const router = useRouter();
    const { setUserData } = useMainStore();

    const handleStartClick = (e) => {
        setUserData({ chronicKidney: e });
        router.push('/livelifepage/diseaseFamily');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/16.png"
                        alt="ChronicKidney"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        คุณมีโรคไตเรื้อรังหรือไม่
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#df3b3b] hover:bg-[#c93535] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ไม่เป็น
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#28b123] hover:bg-[#229c1d] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        เป็น
                    </button>
                </div>

            </div>
        </div>
    );
}