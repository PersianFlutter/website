import type { CafeFlutterItem } from '~/types';

export const pastCafeFlutterEvents: CafeFlutterItem[] = [
  {
    number: 34,
    status: 'completed',
    image: {
      src: '/images/events/cafe-flutter-34.jpg',
      alt: 'کافه فلاتر شماره 34',
    },
    speakers: [
      {
        name: 'علیرضا تقی‌زاده',
        title: 'بررسی اصول SOLID و مزیت‌های آن',
        image: {
          src: '/images/speakers/alireza-taghizadeh.jpg',
          alt: 'علیرضا تقی‌زاده',
        },
      },
      {
        name: 'امیر حسین',
        title: 'معماری تمیز در فلاتر',
        image: {
          src: '/images/speakers/amir-hossein.jpg',
          alt: 'امیر حسین',
        },
      },
    ],
    dateTime: new Date('2023-08-21T20:00:00'),
    youtubeLink: 'https://youtube.com/watch?v=cafe-flutter-34',
  },
  {
    number: 33,
    status: 'completed',
    image: {
      src: '/images/events/cafe-flutter-33.jpg',
      alt: 'کافه فلاتر شماره 33',
    },
    speakers: [
      {
        name: 'محمد رضایی',
        title: 'مدیریت State در فلاتر',
        image: {
          src: '/images/speakers/mohammad-rezaei.jpg',
          alt: 'محمد رضایی',
        },
      },
    ],
    dateTime: new Date('2023-08-14T20:00:00'),
    youtubeLink: 'https://youtube.com/watch?v=cafe-flutter-33',
  },
  {
    number: 32,
    status: 'completed',
    image: {
      src: '/images/events/cafe-flutter-32.jpg',
      alt: 'کافه فلاتر شماره 32',
    },
    speakers: [
      {
        name: 'زهرا محمدی',
        title: 'انیمیشن‌ها در فلاتر',
        image: {
          src: '/images/speakers/zahra-mohammadi.jpg',
          alt: 'زهرا محمدی',
        },
      },
      {
        name: 'علی کریمی',
        title: 'بهینه‌سازی عملکرد در فلاتر',
        image: {
          src: '/images/speakers/ali-karimi.jpg',
          alt: 'علی کریمی',
        },
      },
    ],
    dateTime: new Date('2023-08-07T20:00:00'),
    youtubeLink: 'https://youtube.com/watch?v=cafe-flutter-32',
  },
];

export const upcomingCafeFlutterEvent: CafeFlutterItem = {
  number: 35,
  status: 'upcoming',
  image: {
    src: '/images/events/cafe-flutter-35.jpg',
    alt: 'کافه فلاتر شماره 35',
  },
  speakers: [
    {
      name: 'سارا احمدی',
      title: 'تست‌نویسی در فلاتر',
      image: {
        src: '/images/speakers/sara-ahmadi.jpg',
        alt: 'سارا احمدی',
      },
    },
    {
      name: 'مهدی حسینی',
      title: 'CI/CD در پروژه‌های فلاتر',
      image: {
        src: '/images/speakers/mahdi-hosseini.jpg',
        alt: 'مهدی حسینی',
      },
    },
  ],
  dateTime: new Date('2023-09-28T20:00:00'),
  googleMeetLink: 'https://meet.google.com/cafe-flutter-35',
  googleCalendarLink: 'https://calendar.google.com/event?id=cafe-flutter-35',
};
