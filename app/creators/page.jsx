'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Creators() {
    const router = useRouter();
    const { resetUserData, resetResultDiabetesData, resetResultHypertentionData } = useMainStore();

    const handleClickSuccess = () => {
        resetUserData();
        resetResultDiabetesData();
        resetResultHypertentionData();
        router.push('/');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/2.png"
                        className="w-70 mx-auto rounded-2xl"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ทีมผู้สร้าง
                    </h1>
                </div>

                <div className="space-y-3 text-black text-left">
                    <p>
                        ผู้พัฒนา Web Application นี้ ประกอบไปด้วย <br />
                        1. นางสาวพัชรพร แจ่มรัตน์ <br />
                        2. นางสาวฤทัยณัฐ แสงกุหลาบ <br />
                        3. นางสาวปฏิพร คงแป้น <br /><br />
                        ซึ่งเป็นนักศึกษาคณะวิศวกรรมคอมพิวเตอร์ สาขาวิทยาศาสตร์ข้อมูลสุขภาพ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี<br /><br />
                        โดยมีที่ปรึกษาโครงการ 3 ท่าน ประกอบไปด้วย<br />
                        1. รศ.ดร.พีรพล ศิริพงศ์วุฒิกร<br />
                        2. ผศ.ดร.วิริยะ มหิกุล<br />
                        3. อาจารย์ณภัทร ศรีเสริมโภค

                    </p>

                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleClickSuccess()}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        เสร็จสิ้น
                    </button>
                </div>

            </div>
        </div>
    );
}