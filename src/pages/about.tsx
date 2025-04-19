import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Временные данные для галереи
const galleryImages = [
  { id: 1, src: '/images/lake1.jpg', alt: 'Озеро Михайлына', title: 'Панорама озера' },
  { id: 2, src: '/images/lake2.jpg', alt: 'Рыбалка на озере', title: 'Утренняя рыбалка' },
  { id: 3, src: '/images/fish1.jpg', alt: 'Карп', title: 'Трофейный карп' },
  { id: 4, src: '/images/fish2.jpg', alt: 'Щука', title: 'Щука из озера' },
  { id: 5, src: '/images/facility1.jpg', alt: 'Беседки у озера', title: 'Комфортные беседки' },
  { id: 6, src: '/images/facility2.jpg', alt: 'Причал', title: 'Причал для рыбалки' },
];

const AboutPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setCurrentImage(imageId);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === currentImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setCurrentImage(galleryImages[newIndex].id);
  };

  return (
    <>
      <Head>
        <title>О водоеме | Озеро Михайлына</title>
        <meta name="description" content="Информация о рыболовном водоеме Озеро Михайлына, его истории, экосистеме и правилах посещения" />
      </Head>

      <main className="mt-16">
        {/* Хедер с изображением */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/lake-header.jpg" 
              alt="Озеро Михайлына" 
              layout="fill" 
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">О водоеме</h1>
            <p className="text-xl text-white max-w-2xl">
              Узнайте больше о нашем уникальном рыболовном водоеме, его истории и обитателях
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Навигационные вкладки */}
          <div className="mb-12 flex flex-wrap border-b border-gray-200">
            <Link href="/" className="mr-8 py-4 text-gray-500 hover:text-primary">
              Главная
            </Link>
            <Link href="/about" className="mr-8 py-4 text-primary border-b-2 border-primary font-medium">
              О водоеме
            </Link>
            <Link href="/pricing" className="mr-8 py-4 text-gray-500 hover:text-primary">
              Цены
            </Link>
            <Link href="/contact" className="py-4 text-gray-500 hover:text-primary">
              Контакты
            </Link>
          </div>

          {/* История и описание */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">История и описание</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Озеро Михайлына - рыболовный водоем, созданный в естественной котловине более 50 лет назад. 
                  Живописный уголок природы, расположенный в экологически чистом районе, за эти годы стал 
                  настоящей жемчужиной для любителей рыбалки и отдыха на природе.
                </p>
                <p className="text-gray-600 mb-4">
                  Площадь водоема составляет около 20 гектаров, с максимальной глубиной до 12 метров. 
                  Благодаря грамотной планировке и обустройству, озеро идеально подходит как для профессиональных 
                  рыболовов, так и для начинающих.
                </p>
                <p className="text-gray-600">
                  С 2010 года наш водоем находится под управлением профессиональных ихтиологов, 
                  которые обеспечивают регулярное зарыбление и поддержание оптимального баланса экосистемы. 
                  Мы гордимся тем, что создали идеальные условия для роста и развития различных видов рыб.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/lake-history.jpg" 
                    alt="История озера Михайлына" 
                    width={500}
                    height={350}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Виды рыб */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Обитатели озера</h2>
            <p className="text-gray-600 mb-8">
              В нашем озере обитают различные виды рыб. Мы регулярно проводим зарыбление, чтобы обеспечить 
              отличный улов для наших гостей. Вот основные виды рыб, которых вы можете поймать у нас:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src="/images/carp.jpg" 
                    alt="Карп" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Карп</h3>
                  <p className="text-gray-600">
                    Наша главная гордость - крупные карпы весом до 15 кг. 
                    Регулярное зарыбление обеспечивает стабильный улов этой сильной и умной рыбы.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src="/images/pike.jpg" 
                    alt="Щука" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Щука</h3>
                  <p className="text-gray-600">
                    Хищница наших вод, достигающая внушительных размеров. 
                    Лов щуки особенно удачен весной и осенью, но встретить ее можно круглый год.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src="/images/catfish.jpg" 
                    alt="Сом" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Сом</h3>
                  <p className="text-gray-600">
                    Настоящий трофей для любого рыбака. В нашем озере водятся сомы весом до 30 кг, 
                    представляющие серьезный вызов даже для опытных рыболовов.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Инфраструктура */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Инфраструктура</h2>
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Наш водоем оборудован всем необходимым для комфортной рыбалки и отдыха:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Удобные оборудованные места для рыбалки с мостиками</li>
                  <li>Беседки для отдыха с мангалами</li>
                  <li>Парковка для автомобилей</li>
                  <li>Санитарные зоны</li>
                  <li>Прокат рыболовного оборудования</li>
                  <li>Магазин с наживками и снастями</li>
                  <li>Услуги профессионального инструктора</li>
                </ul>
                <p className="text-gray-600">
                  Мы постоянно работаем над улучшением инфраструктуры, чтобы сделать ваш отдых 
                  максимально комфортным и запоминающимся.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/infrastructure.jpg" 
                    alt="Инфраструктура озера" 
                    width={500}
                    height={350}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Правила */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Правила посещения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Разрешается:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ловля рыбы на две удочки (снасти) одновременно</li>
                  <li>Использование собственного рыболовного снаряжения</li>
                  <li>Отдых в специально оборудованных зонах</li>
                  <li>Приготовление пищи на мангалах в беседках</li>
                  <li>Фотографирование и съемка видео</li>
                  <li>Отпускать пойманную рыбу обратно (принцип "поймал-отпусти")</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Запрещается:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Использование сетей и других запрещенных снастей</li>
                  <li>Разведение костров вне специально отведенных мест</li>
                  <li>Оставление мусора на территории водоема</li>
                  <li>Купание в водоеме</li>
                  <li>Нахождение на территории в нетрезвом состоянии</li>
                  <li>Порча имущества и природных объектов</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Галерея */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Галерея</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition hover:scale-[1.03]"
                  onClick={() => openLightbox(image.id)}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    layout="fill" 
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition-opacity flex items-end">
                    <div className="p-4 w-full bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Лайтбокс для галереи */}
        {currentImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 focus:outline-none"
              onClick={closeLightbox}
            >
              ✕
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 focus:outline-none"
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              {currentImage !== null && (
                <Image 
                  src={galleryImages.find(img => img.id === currentImage)?.src || ''}
                  alt={galleryImages.find(img => img.id === currentImage)?.alt || ''}
                  width={1000}
                  height={700}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 focus:outline-none"
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default AboutPage; 