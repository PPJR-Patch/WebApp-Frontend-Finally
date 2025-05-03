'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useMainStore from '@/store/mainStore';

export default function Province() {
    const router = useRouter();
    const [selectedProvince, setSelectedProvince] = useState('');
    const { setUserData, userData } = useMainStore();

    const handleStartClick = () => {
        if (selectedProvince) {
            setUserData({ province: selectedProvince });
            router.push('/personalpage/livingDuration');
        } else {
            alert('กรุณาเลือกจังหวัด');
        }
    }

    const provinces = [
        "กระบี่", "กรุงเทพมหานคร", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี",
        "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง",
        "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์",
        "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์",
        "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พะเยา", "พังงา", "พัทลุง", "พิจิตร",
        "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร",
        "แม่ฮ่องสอน", "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี", "ลพบุรี",
        "ลำปาง", "ลำพูน", "เลย", "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ",
        "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี",
        "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ",
        "อุดรธานี", "อุตรดิตถ์", "อุทัยธานี", "อุบลราชธานี"
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredProvinces = provinces.filter(province =>
        province.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
            <div className="max-w-2xl w-full text-center space-y-5">
                {/* Doctor Character */}
                <div className="relative">
                    <img
                        src="/images/10.png"
                        alt="Province"
                        className="w-70 mx-auto"
                    />

                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-green-800">
                        เลือกจังหวัดที่คุณอาศัยอยู่
                    </h1>
                </div>

                {/* Province Select */}
                <div className="mb-[10px] relative">
                    {showSuggestions && searchTerm && (
                        <div className="absolute bottom-full w-60 mb-1 bg-white border-2 border-[#165B33] rounded-2xl max-h-60 overflow-y-auto">
                            {filteredProvinces.map((province) => (
                                <div
                                    key={province}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                                    onClick={() => {
                                        setSearchTerm(province);
                                        setSelectedProvince(province);
                                        setShowSuggestions(false);
                                    }}
                                >
                                    {province}
                                </div>
                            ))}
                        </div>
                    )}
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="พิมพ์เพื่อค้นหาจังหวัด"
                        className="w-60 px-4 py-3 rounded-2xl border-2 border-[#165B33] focus:border-[#124a29] focus:outline-none text-lg text-center appearance-none cursor-pointer text-black"
                    />
                </div>

                {/* Start Button */}
                <div className="mb-[10px]">
                    <button
                        onClick={() => handleStartClick(1)}
                        className="bg-[#165B33] hover:bg-[#124a29] text-white px-10 py-4 rounded-full transition-all cursor-pointer hover:transform hover:-translate-y-1 w-60 text-lg"
                    >
                        ถัดไป
                    </button>
                </div>



            </div>
        </div>
    );
}