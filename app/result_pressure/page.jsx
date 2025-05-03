'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Pressure() {
    const router = useRouter();
    const { resultHypertentionData } = useMainStore();

    const handleClickBack = () => {
        console.log(resultHypertentionData);
        router.push('/result');
    }

    const result_pressure = {
        no_risk: 'ผลประเมินแสดงว่าคุณไม่มีปัจจัยเสี่ยงที่ชัดเจนเกี่ยวกับโรคความดันโลหิตสูงในขณะนี้ หมายความว่าระบบไหลเวียนโลหิตของคุณยังทำงานได้เป็นปกติ อย่างไรก็ตาม ควรดูแลสุขภาพให้ดีต่อไปโดยการควบคุมอาหาร ลดเค็ม ออกกำลังกาย และจัดการความเครียด เพื่อป้องกันความเสี่ยงที่อาจเกิดขึ้นในอนาคต',
        risk: 'ผลประเมินระบุว่าคุณอาจมีปัจจัยที่เพิ่มโอกาสในการเป็นโรคความดันโลหิตสูง เช่น น้ำหนักเกิน พฤติกรรมการบริโภคอาหารที่มีโซเดียมสูง ขาดการออกกำลังกาย ความเครียด หรือมีประวัติครอบครัวเกี่ยวกับโรคนี้ แม้ว่าคุณอาจยังไม่มีอาการ แต่ควรปรับพฤติกรรมเพื่อลดความเสี่ยง เช่น รับประทานอาหารที่มีประโยชน์ ลดเค็ม ออกกำลังกายอย่างสม่ำเสมอ และตรวจสุขภาพเป็นระยะ',
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/87.png"
                        alt="Pressure"
                        className="w-70 mx-auto rounded-2xl"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระดับความเสี่ยง<br />
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
                        onClick={() => handleClickBack()}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ย้อนกลับ
                    </button>
                </div>

            </div>
        </div>
    );
}