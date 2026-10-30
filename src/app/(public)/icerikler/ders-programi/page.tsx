import React from 'react';
import { CourseScheduleView } from '@/components/views/CourseScheduleView';

export const metadata = {
  title: 'Özel Eylül Anaokulu Ders Programı | Kars',
  description: 'Özel Eylül Anaokulu 3, 4 ve 5 yaş grupları haftalık atölye, İngilizce ve gelişim ders programı.',
};

export default function CourseSchedulePage() {
  return <CourseScheduleView />;
}
