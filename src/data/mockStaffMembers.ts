import type { StaffMember } from '~/types';
import avatar1 from '~/assets/images/avatar/sample-avatar-1.png';
import avatar2 from '~/assets/images/avatar/sample-avatar-2.png';
import avatar3 from '~/assets/images/avatar/sample-avatar-3.png';
import avatar4 from '~/assets/images/avatar/sample-avatar-4.png';

export const staffMembers: StaffMember[] = [
  {
    name: 'امیر',
    title: 'توسعه‌دهنده ارشد و مشاور فنی',
    description: 'امیر با تخصص عمیق در فلاتر، راهنمای فنی پروژه‌های پیچیده و چالش‌برانگیز است',
    image: { src: avatar1, alt: 'امیر' },
  },
  {
    name: 'سارا',
    title: 'مسئول آموزش و منتورینگ',
    description: 'سارا با تجربه غنی در آموزش، مسیر یادگیری را برای اعضای جامعه هموار می‌کند',
    image: { src: avatar2, alt: 'سارا' },
  },
  {
    name: 'هادی',
    title: 'مدیر کافه فلاتر',
    description: 'هادی با برنامه‌ریزی دقیق، کافه فلاتر را به یک رویداد منظم و ارزشمند تبدیل کرده است',
    image: { src: avatar3, alt: 'هادی' },
  },
  {
    name: 'پرهام',
    title: 'مسئول رسانه‌های اجتماعی',
    description: 'پرهام با خلاقیت و نوآوری، حضور ما را در شبکه‌های اجتماعی مدیریت می‌کند',
    image: { src: avatar4, alt: 'پرهام' },
  },
];
