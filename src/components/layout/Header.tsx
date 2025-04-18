import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  // Translation placeholders
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'navigation.fishing': 'Рыбалка',
      'navigation.accommodation': 'Отдых',
      'navigation.cafe': 'Кафе',
      'navigation.news': 'Новости',
      'navigation.gallery': 'Галерея',
      'navigation.contacts': 'Контакты',
      'navigation.fishingSubmenu.vip': 'VIP-рыбалка',
      'navigation.fishingSubmenu.instructor': 'Инструктор',
      'navigation.fishingSubmenu.corporate': 'Корпоратив',
      'navigation.fishingSubmenu.certificates': 'Сертификаты',
      'navigation.fishingSubmenu.lakeMap': 'Схема озера',
      'navigation.fishingSubmenu.prices': 'Цены',
      'navigation.fishingSubmenu.rules': 'Правила',
      'navigation.accommodationSubmenu.cabins': 'Домики',
      'navigation.accommodationSubmenu.gazebo': 'Беседка',
      'common.phone': 'Телефон',
      'common.email': 'Email'
    };
    return translations[key] || key;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+380 99 123 45 67</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@ozero-mikhailyna.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            <div className="flex space-x-2">
              <button className="text-sm font-medium">RU</button>
              <span>|</span>
              <button className="text-sm font-medium">UKR</button>
              <span>|</span>
              <button className="text-sm font-medium">EN</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Озеро Михайлына
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onClick={() => toggleSubmenu('fishing')}
              >
                <span>{t('navigation.fishing')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeSubmenu === 'fishing' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'fishing' && (
                <motion.div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/fishing/vip" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.vip')}
                  </Link>
                  <Link href="/fishing/instructor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.instructor')}
                  </Link>
                  <Link href="/fishing/corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.corporate')}
                  </Link>
                  <Link href="/fishing/certificates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.certificates')}
                  </Link>
                  <Link href="/fishing/lake-map" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.lakeMap')}
                  </Link>
                  <Link href="/fishing/prices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.prices')}
                  </Link>
                  <Link href="/fishing/rules" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.fishingSubmenu.rules')}
                  </Link>
                </motion.div>
              )}
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onClick={() => toggleSubmenu('accommodation')}
              >
                <span>{t('navigation.accommodation')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeSubmenu === 'accommodation' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'accommodation' && (
                <motion.div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/accommodation/cabins" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.accommodationSubmenu.cabins')}
                  </Link>
                  <Link href="/accommodation/gazebo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('navigation.accommodationSubmenu.gazebo')}
                  </Link>
                </motion.div>
              )}
            </div>
            
            <Link href="/cafe" className="text-gray-700 hover:text-primary transition-colors">
              {t('navigation.cafe')}
            </Link>
            
            <Link href="/news" className="text-gray-700 hover:text-primary transition-colors">
              {t('navigation.news')}
            </Link>
            
            <Link href="/gallery" className="text-gray-700 hover:text-primary transition-colors">
              {t('navigation.gallery')}
            </Link>
            
            <Link href="/contacts" className="text-gray-700 hover:text-primary transition-colors">
              {t('navigation.contacts')}
            </Link>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-2">
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                onClick={() => toggleSubmenu('fishing')}
              >
                <span>{t('navigation.fishing')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeSubmenu === 'fishing' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'fishing' && (
                <div className="bg-gray-50 py-2 px-4">
                  <Link href="/fishing/vip" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.vip')}
                  </Link>
                  <Link href="/fishing/instructor" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.instructor')}
                  </Link>
                  <Link href="/fishing/corporate" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.corporate')}
                  </Link>
                  <Link href="/fishing/certificates" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.certificates')}
                  </Link>
                  <Link href="/fishing/lake-map" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.lakeMap')}
                  </Link>
                  <Link href="/fishing/prices" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.prices')}
                  </Link>
                  <Link href="/fishing/rules" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.fishingSubmenu.rules')}
                  </Link>
                </div>
              )}
              
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                onClick={() => toggleSubmenu('accommodation')}
              >
                <span>{t('navigation.accommodation')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeSubmenu === 'accommodation' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'accommodation' && (
                <div className="bg-gray-50 py-2 px-4">
                  <Link href="/accommodation/cabins" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.accommodationSubmenu.cabins')}
                  </Link>
                  <Link href="/accommodation/gazebo" className="block py-2 text-sm text-gray-700 hover:text-primary">
                    {t('navigation.accommodationSubmenu.gazebo')}
                  </Link>
                </div>
              )}
              
              <Link href="/cafe" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {t('navigation.cafe')}
              </Link>
              
              <Link href="/news" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {t('navigation.news')}
              </Link>
              
              <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {t('navigation.gallery')}
              </Link>
              
              <Link href="/contacts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {t('navigation.contacts')}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 