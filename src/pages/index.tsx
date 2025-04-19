import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Главная | Озеро Михайлына</title>
        <meta name="description" content="Озеро Михайлына — идеальное место для комфортного отдыха и рыбалки." />
      </Head>
      
      <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Озеро Михайлына</div>
          
          <nav className="hidden md:flex space-x-6 text-white">
            <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
            <Link href="/fishing" className="hover:text-accent transition-colors">Рыбалка</Link>
            <Link href="/booking" className="hover:text-accent transition-colors">Бронирование</Link>
            <Link href="/gallery" className="hover:text-accent transition-colors">Галерея</Link>
            <Link href="/contacts" className="hover:text-accent transition-colors">Контакты</Link>
          </nav>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10" />
          <div className="absolute inset-0 bg-[url('/images/lake-hero.jpg')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-20 flex flex-col justify-center items-center h-full text-white text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Озеро Михайлына — комфортный отдых и рыбалка
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Приезжайте насладиться природой и поймать свой трофей
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/booking" className="bg-accent text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-accent/90 transition-colors">
                Забронировать
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Fishing Prices */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Стоимость рыбалки</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light-bg rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-[url('/images/day-fishing.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Дневная рыбалка</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Стоимость:</span>
                    <span className="text-lg font-bold text-primary">600 грн/день</span>
                  </div>
                  <p className="mb-4">Рыбалка с 6:00 до 20:00. Включает возможность ловли разнообразной рыбы со своим снаряжением.</p>
                  <Link href="/booking" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors inline-block">
                    Забронировать
                  </Link>
                </div>
              </div>
              
              <div className="bg-light-bg rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-[url('/images/night-fishing.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Ночная рыбалка</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Стоимость:</span>
                    <span className="text-lg font-bold text-primary">800 грн/ночь</span>
                  </div>
                  <p className="mb-4">Рыбалка с 20:00 до 6:00. Идеально для ловли карпа и сома. Особая атмосфера ночной рыбалки.</p>
                  <Link href="/booking" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors inline-block">
                    Забронировать
                  </Link>
                </div>
              </div>
              
              <div className="bg-light-bg rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-[url('/images/vip-fishing.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">VIP-рыбалка</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Стоимость:</span>
                    <span className="text-lg font-bold text-primary">1200 грн/день</span>
                  </div>
                  <p className="mb-4">Лучшие места, личный инструктор, аренда беседки, приготовление улова. Максимальный комфорт!</p>
                  <Link href="/booking" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors inline-block">
                    Забронировать
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/fishing" className="text-lg text-primary font-medium hover:underline">
                Подробнее о рыбалке и снаряжении →
              </Link>
            </div>
          </div>
        </section>
        
        {/* Fish Types */}
        <section className="py-20 bg-light-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Рыба которая клюет у нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="h-40 bg-[url('/images/carp.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="font-bold mb-2 text-xl">Карп</h3>
                <p>Средний вес: 2-5 кг</p>
                <p>Рекордный улов: 9 кг</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="h-40 bg-[url('/images/pike.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="font-bold mb-2 text-xl">Щука</h3>
                <p>Средний вес: 1-3 кг</p>
                <p>Рекордный улов: 6 кг</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="h-40 bg-[url('/images/catfish.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="font-bold mb-2 text-xl">Сом</h3>
                <p>Средний вес: 5-15 кг</p>
                <p>Рекордный улов: 25 кг</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="h-40 bg-[url('/images/bream.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                <h3 className="font-bold mb-2 text-xl">Лещ</h3>
                <p>Средний вес: 0.5-2 кг</p>
                <p>Рекордный улов: 3.5 кг</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Equipment Rental */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Аренда снаряжения</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="h-64 bg-[url('/images/equipment.jpg')] bg-cover bg-center rounded-lg mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">Всё необходимое для идеальной рыбалки</h3>
                <p className="mb-4">У нас вы можете арендовать качественные снасти и оборудование, чтобы ваша рыбалка была максимально комфортной и результативной.</p>
                <p className="mb-4">Наши инструкторы помогут вам подобрать снасти под конкретную рыбу и условия ловли.</p>
              </div>
              
              <div>
                <div className="bg-light-bg p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-primary">Прайс на аренду снаряжения</h4>
                  <ul className="divide-y">
                    <li className="py-3 flex justify-between">
                      <span>Удочка карповая с катушкой</span>
                      <span className="font-bold">150 грн/день</span>
                    </li>
                    <li className="py-3 flex justify-between">
                      <span>Спиннинг с катушкой</span>
                      <span className="font-bold">200 грн/день</span>
                    </li>
                    <li className="py-3 flex justify-between">
                      <span>Садок</span>
                      <span className="font-bold">50 грн/день</span>
                    </li>
                    <li className="py-3 flex justify-between">
                      <span>Подсак</span>
                      <span className="font-bold">50 грн/день</span>
                    </li>
                    <li className="py-3 flex justify-between">
                      <span>Стул рыболовный</span>
                      <span className="font-bold">80 грн/день</span>
                    </li>
                    <li className="py-3 flex justify-between">
                      <span>Палатка</span>
                      <span className="font-bold">150 грн/день</span>
                    </li>
                    <li className="py-3 flex justify-between">
                      <span>Полный комплект снаряжения</span>
                      <span className="font-bold">500 грн/день</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking */}
        <section className="py-20 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Забронировать место для рыбалки</h2>
              <p className="text-lg mb-8">Не упустите возможность отлично провести время и поймать трофейную рыбу на нашем озере. Забронируйте место для рыбалки прямо сейчас!</p>
              <Link href="/booking" className="bg-accent text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-accent/90 transition-colors inline-block">
                Забронировать
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Контакты</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">Телефон:</h4>
                      <p>+380 99 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">Email:</h4>
                      <p>info@ozero-mikhailyna.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-bold">Адрес:</h4>
                      <p>Киевская область, с. Михайловка, ул. Лесная, 27</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-xl font-bold mb-4">Режим работы</h3>
                <ul className="space-y-2">
                  <li>Понедельник - Пятница: 6:00 - 20:00</li>
                  <li>Суббота - Воскресенье: 5:00 - 22:00</li>
                  <li className="pt-4 text-accent font-medium">Ночная рыбалка по предварительной записи</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>© Озеро Михайлына 2021-2025. Все права защищены.</div>
            <div className="mt-4 md:mt-0">
              <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
                Админ-панель
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default HomePage; 