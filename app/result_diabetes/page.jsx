'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Diabetes() {
    const router = useRouter();
    const { resultDiabetesData } = useMainStore();

    const handleClickBack = () => {
        console.log(resultDiabetesData);
        router.push('/result');
    }

    const result_diabetes = {
        no_risk: "ผลประเมินระบุว่าคุณไม่มีปัจจัยเสี่ยงที่ชัดเจนในการเกิดโรคเบาหวานในขณะนี้ ซึ่งหมายความว่าร่างกายของคุณยังสามารถควบคุมระดับน้ำตาลในเลือดได้ดี อย่างไรก็ตาม การดูแลสุขภาพให้สมดุลด้วยการเลือกรับประทานอาหารที่มีประโยชน์ ออกกำลังกายสม่ำเสมอ และตรวจสุขภาพเป็นระยะ จะช่วยรักษาสุขภาพและป้องกันโรคเบาหวานในระยะยาว",
        risk: "ผลประเมินแสดงว่าคุณอาจมีปัจจัยที่เพิ่มโอกาสในการเป็นโรคเบาหวาน เช่น น้ำหนักเกิน ระดับน้ำตาลในเลือดสูง ประวัติครอบครัว หรือพฤติกรรมการใช้ชีวิตที่ไม่เหมาะสม แม้ว่าคุณยังไม่ได้เป็นเบาหวาน แต่การปรับพฤติกรรม เช่น ควบคุมอาหาร ออกกำลังกาย และตรวจสุขภาพสม่ำเสมอ จะช่วยลดความเสี่ยงและป้องกันการเกิดโรคในอนาคตได้",
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">

            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/86.png"
                        alt="Diabetes"
                        className="w-70 mx-auto rounded-2xl"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระดับความเสี่ยง<br />
                        ในการเกิดโรคเบาหวาน
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