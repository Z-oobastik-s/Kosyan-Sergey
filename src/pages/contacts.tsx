import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ContactsPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      // In a real app, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitError('Не удалось отправить сообщение. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Контакты | Озеро Михайлына</title>
        <meta name="description" content="Свяжитесь с нами для получения информации о рыбалке, бронировании или особых запросах." />
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

      <div className="bg-light-bg">
        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl max-w-2xl mb-6">
              Есть вопросы или хотите забронировать место для рыбалки? Мы всегда рады помочь!
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="#EBF4FF"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Отправить сообщение</h2>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                      <p>{submitError}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email адрес</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Номер телефона</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Ваше сообщение</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Отправка...</span>
                    ) : (
                      <span>Отправить сообщение</span>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Контактная информация</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Адрес</h3>
                    <p className="text-gray-600 mt-1">Киевская область, с. Михайловка,</p>
                    <p className="text-gray-600">ул. Лесная, 27</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Телефон</h3>
                    <p className="text-gray-600 mt-1">+380 99 123 45 67</p>
                    <p className="text-gray-600">+380 99 987 65 43</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">info@ozero-mikhailyna.com</p>
                    <p className="text-gray-600">booking@ozero-mikhailyna.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Режим работы</h3>
                    <p className="text-gray-600 mt-1">Понедельник - Пятница: 6:00 - 20:00</p>
                    <p className="text-gray-600">Суббота - Воскресенье: 5:00 - 22:00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1a91da] transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#E4405F] text-white p-3 rounded-full hover:bg-[#d33d59] transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FF0000] text-white p-3 rounded-full hover:bg-[#e60000] transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Как нас найти</h2>
            <div className="bg-white rounded-lg shadow-lg p-4 h-96 relative">
              <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-600">Здесь будет интерактивная карта.</p>
                  <p className="text-gray-600 text-sm mt-2">В рабочей версии интегрируйте Google Maps или другой картографический сервис.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Часто задаваемые вопросы</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Нужно ли бронировать место заранее?</h3>
                <p className="text-gray-600">Да, мы рекомендуем бронировать места минимум за 48 часов, особенно в пиковый сезон (май-сентябрь). Это гарантирует вам место и позволяет нам подготовиться к вашему приезду.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Какое снаряжение для рыбалки мне нужно привезти?</h3>
                <p className="text-gray-600">Вы можете не привозить никакого снаряжения! Мы предоставляем все необходимое для рыбалки в наших пакетах услуг, включая удочки, катушки, снасти и наживку. Однако если вы предпочитаете использовать собственное снаряжение, вы можете его привезти.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Предоставляете ли вы услуги инструктора по рыбной ловле?</h3>
                <p className="text-gray-600">Да, у нас есть профессиональные инструкторы, которые могут помочь как начинающим, так и опытным рыбакам. Наши инструкторы знают все лучшие места для рыбалки и техники, чтобы максимально увеличить ваши шансы на хороший улов.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Что происходит в случае плохой погоды?</h3>
                <p className="text-gray-600">Безопасность — наш приоритет. Если погодные условия считаются небезопасными для рыбалки, мы перенесем вашу резервацию без дополнительной оплаты. Мы внимательно следим за прогнозами погоды и свяжемся с вами за 24 часа, если потребуется перенос.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы испытать незабываемые эмоции от рыбалки?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Свяжитесь с нами сегодня, чтобы забронировать место для рыбалки или узнать больше о наших услугах. Наша команда готова помочь вам спланировать незабываемый отдых.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="bg-white text-primary hover:bg-accent/10 font-bold py-3 px-8 rounded-lg transition duration-300">
                Забронировать
              </Link>
              <a href="tel:+380991234567" className="bg-transparent hover:bg-secondary border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Позвонить нам
              </a>
            </div>
          </div>
        </div>
      </div>
      
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
    </>
  );
};

export default ContactsPage; 