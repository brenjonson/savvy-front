'use client';

import React from 'react';
import DesktopNavbar from '@/components/navbar/DesktopNavbar';
import MobileNavbar from '@/components/navbar/MobileNavbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FaQuestionCircle, FaServer, FaChartPie, FaKey } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <DesktopNavbar />
      <MobileNavbar />

      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#2F584F] to-[#8CA29D] bg-clip-text text-transparent mb-4">คำถามที่พบบ่อย</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับการใช้งาน Savvy</p>
          </div>

          <div className="space-y-8">
            {/* ความปลอดภัยของข้อมูล */}
            <Card className="bg-white border-gray-200  py-7">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2F584F] flex items-center">
                  <span className="bg-[#2F584F] text-white p-2 rounded-full mr-3"><FaServer className="text-xl" /></span>
                  ความปลอดภัยของข้อมูล
                </CardTitle>
                <CardDescription className="text-gray-600">คำถามเกี่ยวกับความปลอดภัยและความเป็นส่วนตัวของข้อมูล</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ข้อมูลอีเมลของฉันปลอดภัยหรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ใช่ เราใช้การเข้ารหัสระดับสูงและไม่เก็บรหัสผ่านอีเมลของคุณ เราแนะนำให้ใช้รหัสผ่านแอพแทนรหัสผ่านปกติเพื่อความปลอดภัยเพิ่มเติม</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">Savvy สามารถเข้าถึงอีเมลทั้งหมดของฉันได้หรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ระบบจะตรวจสอบเฉพาะอีเมลที่เกี่ยวข้องกับการเงินเท่านั้น และจะไม่อ่านหรือประมวลผลอีเมลส่วนตัวของคุณ เราให้ความสำคัญกับความเป็นส่วนตัวของคุณเป็นอันดับแรก</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ข้อมูลทางการเงินของฉันจะถูกแชร์กับบุคคลที่สามหรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ไม่ เราไม่แชร์ข้อมูลส่วนตัวหรือข้อมูลทางการเงินของคุณกับบุคคลที่สาม ข้อมูลทั้งหมดจะถูกเก็บไว้อย่างปลอดภัยในระบบของเรา</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* การใช้งานทั่วไป */}
            <Card className="bg-white border-gray-200  py-7">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2F584F] flex items-center">
                  <span className="bg-[#2F584F] text-white p-2 rounded-full mr-3"><FaChartPie className="text-xl" /></span>
                  การใช้งานทั่วไป
                </CardTitle>
                <CardDescription className="text-gray-600">คำถามเกี่ยวกับการใช้งานพื้นฐานของแพลตฟอร์ม</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันสามารถเพิ่มรายการค่าใช้จ่ายด้วยตนเองได้หรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ได้ คุณสามารถเพิ่มรายการค่าใช้จ่ายด้วยตนเองได้ในหน้า "แดชบอร์ด" โดยคลิกที่ปุ่ม "เพิ่มรายการใหม่" ระบบจะให้คุณกรอกรายละเอียดและเลือกหมวดหมู่ที่เหมาะสม</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันสามารถส่งออกข้อมูลได้หรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ได้ คุณสามารถส่งออกข้อมูลในรูปแบบ CSV หรือ PDF ได้จากหน้ารายงานต่างๆ เพียงคลิกที่ไอคอนส่งออกที่มุมขวาบนของรายงานที่คุณต้องการ</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันสามารถใช้ Savvy บนอุปกรณ์มือถือได้หรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ได้ Savvy มีแอพมือถือสำหรับทั้ง iOS และ Android ที่คุณสามารถดาวน์โหลดได้จาก App Store หรือ Google Play Store เพื่อจัดการการเงินของคุณได้ทุกที่ทุกเวลา</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* งบประมาณและการวางแผน */}
            <Card className="bg-white border-gray-200  py-7">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2F584F] flex items-center">
                  <span className="bg-[#2F584F] text-white p-2 rounded-full mr-3"><TbMoneybag className="text-xl" /></span>
                  งบประมาณและการวางแผน
                </CardTitle>
                <CardDescription className="text-gray-600">คำถามเกี่ยวกับการจัดการงบประมาณและการวางแผนทางการเงิน</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันสามารถตั้งเป้าหมายการออมได้หรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ได้ คุณสามารถตั้งเป้าหมายการออมในหน้า "การจัดการงบประมาณ" โดยคลิกที่ "เพิ่มเป้าหมายการออม" ระบบจะติดตามความคืบหน้าและแจ้งเตือนเมื่อคุณใกล้ถึงเป้าหมาย</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันจะได้รับการแจ้งเตือนเมื่อใกล้เกินงบประมาณหรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ใช่ ระบบจะส่งการแจ้งเตือนเมื่อคุณใช้งบประมาณไปแล้ว 80% และเมื่อเกินงบประมาณ คุณสามารถปรับแต่งการแจ้งเตือนได้ในหน้า "ตั้งค่า"</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันสามารถสร้างงบประมาณสำหรับหมวดหมู่ที่กำหนดเองได้หรือไม่?</p>
                    <p className="text-gray-600 text-sm mt-2">ได้ คุณสามารถสร้างหมวดหมู่ที่กำหนดเองและตั้งงบประมาณสำหรับหมวดหมู่เหล่านั้นได้ เพียงไปที่หน้า "การจัดการงบประมาณ" และเลือก "สร้างหมวดหมู่ใหม่"</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#8CA29D]">
                    <p className="font-medium text-[#2F584F]">ฉันสามารถดูรายงานการใช้จ่ายย้อนหลังได้นานแค่ไหน?</p>
                    <p className="text-gray-600 text-sm mt-2">คุณสามารถดูรายงานการใช้จ่ายย้อนหลังได้สูงสุด 12 เดือน สำหรับผู้ใช้แบบพรีเมียม สามารถเข้าถึงข้อมูลย้อนหลังได้ไม่จำกัด</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* เคล็ดลับการใช้งาน */}
            <Card className="bg-gradient-to-r from-[#f0f7f5] to-[#e8f0ee] border border-[#d0e0dc]  py-7">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2F584F] flex items-center">
                  <span className="text-amber-600 mr-2">💡</span> เคล็ดลับการใช้งาน Savvy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2F584F] mr-2">•</span>
                    <span>ตรวจสอบแดชบอร์ดเป็นประจำทุกวันเพื่อติดตามค่าใช้จ่ายและงบประมาณของคุณ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2F584F] mr-2">•</span>
                    <span>ใช้แอพมือถือ Savvy เพื่อบันทึกค่าใช้จ่ายทันทีที่เกิดขึ้น</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2F584F] mr-2">•</span>
                    <span>ตั้งค่าการแจ้งเตือนรายสัปดาห์เพื่อทบทวนค่าใช้จ่ายและปรับงบประมาณตามความเหมาะสม</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2F584F] mr-2">•</span>
                    <span>ใช้ฟีเจอร์การวิเคราะห์เพื่อดูแนวโน้มค่าใช้จ่ายและปรับปรุงนิสัยการใช้จ่ายของคุณ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;