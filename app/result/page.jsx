'use client';

import { useRouter } from 'next/navigation';

export default function Result() {
    const router = useRouter();

    const handleStartClick = (e) => {
        switch (e) {
            case 1:
                router.push('/result_diabetes');
                break;
            default:
                router.push('/result_pressure');
                break;
        }
    }

    const handleClickSummary = () => {
        router.push('/summary');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/85.png"
                        alt="Result"
                        className="w-70 mx-auto"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ผลการประเมินทั้งหมด
                    </h1>
                </div>

                {/* Start Button */}
                {/* Result Cards */}
                <div className="mb-[30px] space-y-2 p-3 rounded-2xl">
                    <img
                        src="/images/86.png"
                        className="w-70 mx-auto rounded-2xl"
                    />
                    <h1 className="text-2xl font-bold text-green-800">
                        โรคเบาหวาน
                    </h1>
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ดูผลประเมิน
                    </button>
                </div>

                <div className="mb-[30px] space-y-2 p-3 rounded-2xl">
                    <img
                        src="/images/87.png"
                        className="w-70 mx-auto rounded-2xl"
                    />
                    <h1 className="text-2xl font-bold text-green-800">
                        โรคความดัน
                    </h1>
                    <button
                        onClick={() => handleStartClick(2)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ดูผลประเมิน
                    </button>
                </div>

                <div className="mb-[10px]">
                    <button
                        onClick={() => handleClickSummary()}
                        className="bg-[#e56c4e] hover:bg-[#cc614b] text-white px-4 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        สรุปผล
                    </button>
                </div>

            </div>
        </div>
    );
}