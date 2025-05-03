'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Fat() {
    const router = useRouter();
    const { userData, resultDiabetesData, resultHypertentionData } = useMainStore();

    const handleClickSuccess = () => {
        console.log(userData);
        // resetUserData();
        router.push('/evidence');
    }

    const result_diabetes = {
        no_risk: "คุณยังไม่มีปัจจัยเสี่ยงที่ชัดเจน แต่ควรดูแลสุขภาพต่อไปด้วยการรับประทานอาหารที่เหมาะสม ออกกำลังกาย และตรวจสุขภาพเป็นประจำ เพื่อป้องกันโรคในอนาคต",
        risk: "คุณมีปัจจัยที่อาจเพิ่มโอกาสในการเป็นโรคเบาหวาน ควรปรับพฤติกรรมโดยควบคุมน้ำหนัก ลดอาหารหวาน ออกกำลังกายสม่ำเสมอ และตรวจสุขภาพเป็นระยะ เพื่อลดความเสี่ยงและป้องกันโรค",
    };

    const result_pressure = {
        no_risk: 'คุณยังไม่มีปัจจัยเสี่ยงที่ชัดเจน แต่ควรรักษาสุขภาพต่อไปด้วยการควบคุมอาหาร ออกกำลังกาย และตรวจสุขภาพเป็นระยะ เพื่อป้องกันโรคในอนาคต',
        risk: 'คุณมีปัจจัยที่อาจเพิ่มโอกาสเกิดโรคความดันโลหิตสูง ควรลดอาหารเค็ม ออกกำลังกาย จัดการความเครียด และตรวจสุขภาพสม่ำเสมอ เพื่อลดความเสี่ยงและป้องกันโรค',
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/92.png"
                        alt="Fat"
                        className="w-70 mx-auto rounded-2xl"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        สรุปผลการประเมิน
                    </h1>
                </div>

                <div className="space-y-2 mb-8">
                    <h1 className="text-xl font-bold text-green-800">
                        <span className='text-lg font-normal text-black'>ผลการประเมิน </span>
                        โรคเบาหวาน
                    </h1>
                    <img
                        src={resultDiabetesData.risk_percentage >= 50 ? "/images/risk.png" : "/images/no-risk.png"}
                        alt={resultDiabetesData.risk_percentage >= 50 ? "High" : "Low"}
                        className="w-55 mx-auto rounded-2xl"
                    />
                    <p className='text-black'>
                        {resultDiabetesData.risk_percentage >= 50 ? result_diabetes.risk : result_diabetes.no_risk}
                    </p>
                </div>

                <div className="space-y-2">
                    <h1 className="text-xl font-bold text-green-800">
                        <span className='text-lg font-normal text-black'>ผลการประเมิน </span>
                        โรคความดัน
                    </h1>
                    <img
                        src={resultHypertentionData.risk_percentage >= 50 ? "/images/risk.png" : "/images/no-risk.png"}
                        alt={resultHypertentionData.risk_percentage >= 50 ? "High" : "Low"}
                        className="w-55 mx-auto rounded-2xl"
                    />
                    <p className='text-black'>
                        {resultHypertentionData.risk_percentage >= 50 ? result_pressure.risk : result_pressure.no_risk}
                    </p>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleClickSuccess()}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ถัดไป
                    </button>
                </div>

            </div>
        </div>
    );
}