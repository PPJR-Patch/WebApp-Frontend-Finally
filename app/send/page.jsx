'use client';

import { useRouter } from 'next/navigation';
import axiosService from '@/service/axiosService';
import useMainStore from '@/store/mainStore';

export default function Send() {
    const router = useRouter();
    const { setUserData, userData, setResultDiabetesData, setResultHypertentionData, resultDiabetesData, resultHypertentionData } = useMainStore();

    const handleStartClick = async () => {
        try {
            // 1. ยิง request ไปที่เส้นแรก (diabetes/predict)
            const diabetesResponse = await onReqDiabetesPredict();
            
            // 2. รับ session_id จากผลลัพธ์ของเส้นแรก
            const sessionId = diabetesResponse?.data?.session_id;
            
            if (!sessionId) {
                console.error('ไม่พบ session_id จากการทำนายเบาหวาน');
                return;
            }
            console.log("sessionId",sessionId)
            // 3. ส่ง session_id พร้อมกับ request ไปยังเส้นที่สอง (hypertention/predict)
            const hypertentionResponse = await onReqHypertentionPredict(sessionId);

            console.log("hypertentionResponse",hypertentionResponse)
            
            // นำทางไปหน้าผลลัพธ์
            router.push('/result');
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการประมวลผลคำขอ:', error);
        }
    }

    const onReqDiabetesPredict = async () => {
        try {
            const response = await axiosService.reqDiabetesPredict(userData);
            setResultDiabetesData(response.data);
            return response;
        } catch (error) {
            console.error('Error processing requests:', error);
        }
    };

    const onReqHypertentionPredict = async (sessionId) => {
        // เพิ่ม session_id เข้าไปในข้อมูลที่ส่งไป
        const dataWithSessionId = { ...userData, session_id: sessionId };
        
        const response = await axiosService.reqHypertentionPredict(dataWithSessionId);
        setResultHypertentionData(response.data);
        return response;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/83.png"
                        alt="Send"
                        className="w-70 mx-auto"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ตอบแบบสอบถามครบถ้วน
                    </h1>
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick()}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ส่งแบบสอบถาม
                    </button>
                </div>
            </div>
        </div>
    );
}