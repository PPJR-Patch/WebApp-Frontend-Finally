import axios from 'axios';

// สร้าง instance ของ axios แบบง่าย
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://web-vcxmmaxv8vg8.up-de-fra1-k8s-1.apps.run-on-seenode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

// เพิ่ม interceptor สำหรับจัดการ response error
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log("errorr",error)
        // จัดการ error ที่นี่   
        if (error.response) {
            // กรณีเซิร์ฟเวอร์ตอบกลับด้วย status code นอกเหนือจาก 2xx
            console.error('Response error:', error.response.data);
        } else if (error.request) {
            // กรณีที่ไม่ได้รับการตอบกลับจากเซิร์ฟเวอร์
            console.error('Request error:', error);
        } else {
            // กรณีอื่นๆ
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

const axiosService = {
    reqDiabetesPredict: (userData) => axiosInstance.post("/diabetes/predict", userData),
    reqHypertentionPredict: (userData) => axiosInstance.post("/hypertention/predict", userData),
    // เพิ่ม endpoint ใหม่สำหรับส่งข้อมูลทั้งสองชุดไปพร้อมกัน
    reqCombinedPredict: (userData) => axiosInstance.post("/combined/predict", userData),
};

export default axiosService;