'use client';

import { useRouter } from 'next/navigation';

export default function PersonalPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/3.png"
                        alt="personal"
                        className="w-80 mx-auto"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        คำถาม : ข้อมูลพื้นฐาน
                    </h1>
                </div>

                {/* Start Button */}
                <button
                    onClick={() => router.push('/personalpage/sex')}
                    className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                >
                    เริ่มตอบคำถาม
                </button>
            </div>
        </div>
    );
}