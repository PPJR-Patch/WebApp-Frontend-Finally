'use client';

import { useRouter } from 'next/navigation';

export default function Fat() {
    const router = useRouter();

    const handleClickBack = () => {
        router.push('/result');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/88.png"
                        alt="Fat"
                        className="w-70 mx-auto rounded-2xl"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ระดับความเสี่ยง<br />
                        โรคไขมันในเลือดสูง
                    </h1>
                    <img
                        src="/images/low.png"
                        alt="Low"
                        className="w-55 mx-auto rounded-2xl"
                    />
                    <p className='text-black'>ระดับเสี่ยงต่ำ จะมีคอเลสเตอรอลรวมต่ำกว่า 200 มก./ดล.  คอเลสเตอรอลชนิดดี (HDL) มากกว่า 40 มก./ดล. สำหรับผู้ชาย และมากกว่า 50 มก./ดล. สำหรับผู้หญิง, คอเลสเตอรอลชนิดไม่ดี (LDL) ต่ำกว่า 100 มก./ดล.  และไตรกลีเซอไรด์ต่ำกว่า 150 มก./ดล. ในระดับนี้ถือว่าไขมันในเลือดอยู่ในเกณฑ์ปกติและไม่เสี่ยงต่อการเกิดโรคที่เกี่ยวข้องกับไขมันในเลือด หากดูแลสุขภาพให้ดี</p>
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