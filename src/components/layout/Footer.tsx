import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  // Translation placeholders
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'footer.copyright': '© Озеро Михайлына 2021–2025',
      'footer.privacyPolicy': 'Политика конфиденциальности',
      'footer.termsOfService': 'Пользовательское соглашение',
      'common.phone': 'Телефон',
      'common.email': 'Email',
      'common.address': 'Адрес',
      'navigation.fishing': 'Рыбалка',
      'navigation.accommodation': 'Отдых',
      'navigation.cafe': 'Кафе',
      'navigation.news': 'Новости',
      'navigation.gallery': 'Галерея',
      'navigation.contacts': 'Контакты'
    };
    return translations[key] || key;
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Озеро Михайлына</h3>
            <p className="mb-4">Идеальное место для комфортного отдыха и рыбалки. Природа, чистый воздух, вкусная еда и трофейный улов!</p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fishing" className="hover:text-accent transition-colors">
                  {t('navigation.fishing')}
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="hover:text-accent transition-colors">
                  {t('navigation.accommodation')}
                </Link>
              </li>
              <li>
                <Link href="/cafe" className="hover:text-accent transition-colors">
                  {t('navigation.cafe')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent transition-colors">
                  {t('navigation.news')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  {t('navigation.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-accent transition-colors">
                  {t('navigation.contacts')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+380 99 123 45 67</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@ozero-mikhailyna.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Киевская область, с. Михайловка, ул. Лесная, 27</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Часы работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Понедельник - Пятница:</span>
                <span>8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота - Воскресенье:</span>
                <span>7:00 - 22:00</span>
              </li>
              <li className="mt-4 text-accent">Круглосуточная рыбалка по предварительной записи</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-primary-dark border-t border-gray-700 py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 