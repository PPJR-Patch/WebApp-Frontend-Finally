'use client';

import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Evidence() {
    const router = useRouter();
    const { setUserData, userData, resetUserData } = useMainStore();

    const handleClickSuccess = () => {
        // resetUserData();
        router.push('/creators');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/90.png"
                        className="w-70 mx-auto rounded-2xl"
                    />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        ข้อมูลสนับสนุน
                    </h1>
                </div>

                <div className="space-y-3 text-black text-left">
                    <p>
                        Web Application นี้ถูกพัฒนาขึ้นเพื่อใช้ทำนายความเสี่ยงของโรคคาร์ดิโอเมแทบอลิก ซึ่งประกอบด้วย โรคเบาหวาน และ โรคความดันโลหิตสูง โดยอ้างอิงจากฐานข้อมูลโครงการอาสาจุฬาภรณ์ ราชวิทยาลัยจุฬาภรณ์ ซึ่งรวบรวมข้อมูลระหว่าง ตุลาคม 2565 - มิถุนายน 2567 รวมทั้งสิ้น 867 รายการ ซึ่งก่อนทำการฝึกฝนโมเดล ข้อมูลถูกปรับปรุงเพื่อแก้ปัญหา Class Imbalance โดยใช้วิธี SMOTE สำหรับโรคเบาหวาน และใช้วิธี ADASYN สำหรับโรคความดันโลหิตสูง
                    </p>
                    <p>
                        <b>การแบ่งชุดข้อมูล</b><br />
                        แบ่งเป็น Train-Test Set (80:20)<br />
                        • 80% ใช้สำหรับการฝึกฝน (Training) และปรับค่าพารามิเตอร์ (Validation)<br />
                        • 20% ใช้สำหรับทดสอบ (Testing) ใช้เทคนิค Stratified K-Fold Cross-Validation (k = 5) เพื่อช่วยให้โมเดลมีความแม่นยำและเสถียรยิ่งขึ้น
                    </p>
                    <p>
                        <b>การเปรียบเทียบประสิทธิภาพของโมเดล</b><br />
                        เพื่อให้ได้โมเดลที่มีประสิทธิภาพสูงสุด เราได้ทดสอบและเปรียบเทียบโมเดล Machine Learning ทั้งหมด 6 โมเดล ได้แก่ K-Nearest Neighbors (KNN), Support Vector Machines (SVM), Random Forest (RF), Extreme Gradient Boosting (XGBoost), Light Gradient Boosting Machine (LightGBM) และ Neural Network (NN) ซึ่งผลลัพธ์พบว่า โมเดล <b>Extreme Gradient Boosting (XGBoost)</b> มีประสิทธิภาพสูงสุดในการทำนายความเสี่ยงของโรคคาร์ดิโอเมแทบอลิก โดยตารางด้านล่างแสดงค่าประสิทธิภาพของโมเดลในแต่ละตัวชี้วัด
                    </p>
                    <img
                        src="/images/90-1.jpg"
                        className="mx-auto" />
                    <p>
                        <b>ประสิทธิภาพของโมเดลที่เลือก</b><br />
                        โรคเบาหวาน <br />
                        โมเดลที่ใช้คือ Extreme Gradient Boosting (XGBoost) ซึ่งจากตารางแสดงค่าประสิทธิภาพของโมเดลในแต่ละตัวชี้วัดสามารถวิเคราะห์ผลลัพธ์ ได้ดังนี้ <br />
                        • โมเดลนี้มีค่า Recall สูงถึง 90% ซึ่งหมายความว่า สามารถตรวจจับผู้ป่วยเบาหวานได้อย่างแม่นยำ <br />
                        • ค่า AUC = 0.94 แสดงถึงความสามารถในการแยกผู้ป่วยเบาหวานออกจากกลุ่มที่มีสุขภาพดีได้ดี <br />
                        • ค่า Accuracy 92% หมายความว่าโมเดลสามารถทำนายได้ถูกต้อง 92% ของข้อมูลทั้งหมดที่ใช้ทดสอบ <br />
                        โรคความดันโลหิตสูง <br />
                        โมเดลที่ใช้คือ Extreme Gradient Boosting (XGBoost) ซึ่งจากตารางแสดงค่าประสิทธิภาพของโมเดลในแต่ละตัวชี้วัดสามารถวิเคราะห์ผลลัพธ์ ได้ดังนี้ <br />
                        • โมเดลนี้มีค่า Recall สูงถึง 86% แสดงให้เห็นถึง ความสามารถในการตรวจจับผู้ป่วยโรคความดันโลหิตสูงได้ดี <br />
                        • ค่า AUC = 0.78 แสดงถึง ความสามารถในการแยกกลุ่มเสี่ยงออกจากกลุ่มปกติได้ในระดับที่น่าเชื่อถือ <br />
                        • ค่า Accuracy 75% หมายความว่าโมเดลสามารถทำนายได้ถูกต้อง 75% ของข้อมูลทั้งหมดที่ใช้ทดสอบ
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