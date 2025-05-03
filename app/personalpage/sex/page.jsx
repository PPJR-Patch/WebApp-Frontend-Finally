'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Sex() {
    const router = useRouter();
    const { setUserData } = useMainStore();

    const handleSelectSex = async (sex) => {
        await setUserData({ sex: sex });
        router.push('/personalpage/age');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/4.png"
                        alt="sex"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระบุเพศ
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleSelectSex(1)}
                        className="bg-[#d6336c] hover:bg-[#b82c5c] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        เพศหญิง
                    </button>
                </div>
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleSelectSex(2)}
                        className="bg-[#007bff] hover:bg-[#0056b3] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        เพศชาย
                    </button>
                </div>
            </div>
        </div>
    );
}