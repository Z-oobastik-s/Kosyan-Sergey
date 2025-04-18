import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
  // We'll use hardcoded text for now until translations are properly set up
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'homepage.title': 'Главная',
      'homepage.description': 'Озеро Михайлына — идеальное место для комфортного отдыха и рыбалки.',
      'homepage.hero.title': 'Озеро Михайлына — комфортный отдых и рыбалка',
      'homepage.hero.subtitle': 'Приезжайте насладиться природой, вкусно поесть и поймать свой трофей',
      'homepage.services.title': 'Наши услуги',
      'homepage.services.fishing.title': 'Рыбалка и аренда снаряжения',
      'homepage.services.fishing.description': 'Богатый улов и все необходимое для комфортной рыбалки',
      'homepage.services.accommodation.title': 'Отдых (домики, беседка)',
      'homepage.services.accommodation.description': 'Уютные домики и беседки для вашего комфортного отдыха на природе',
      'homepage.services.cafe.title': 'Кафе',
      'homepage.services.cafe.description': 'Вкусные блюда из свежей рыбы и другие деликатесы в нашем кафе',
      'homepage.lakeFeatures.title': 'Характеристики озера',
      'homepage.lakeFeatures.area.title': 'Площадь',
      'homepage.lakeFeatures.area.value': '15 гектаров',
      'homepage.lakeFeatures.depth.title': 'Глубина',
      'homepage.lakeFeatures.depth.value': 'до 6 метров',
      'homepage.lakeFeatures.fish.title': 'Зарыбление',
      'homepage.lakeFeatures.fish.value': 'Постоянное',
      'homepage.lakeFeatures.environment.title': 'Экология',
      'homepage.lakeFeatures.environment.value': 'Чистая вода и природа',
      'homepage.history.title': 'История озера Михайлына',
      'homepage.history.description': 'Озеро Михайлына имеет богатую историю, которая уходит корнями в далекое прошлое. Изначально это был природный водоем, который со временем был облагорожен и превращен в идеальное место для рыбалки и отдыха...',
      'common.learnMore': 'Узнать больше',
      'common.readMore': 'Читать полностью'
    };
    return translations[key] || key;
  };

  return (
    <React.Fragment>
      <Head>
        <title>{t('homepage.title')} | Озеро Михайлына</title>
        <meta name="description" content={t('homepage.description')} />
      </Head>
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-screen">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-[url('/images/lake-hero.jpg')] bg-cover bg-center" />
          <div className="container-custom relative z-20 flex flex-col justify-center items-center h-full text-white text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('homepage.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('homepage.hero.subtitle')}
            </motion.p>
          </div>
        </section>
        
        {/* Services Cards */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">{t('homepage.services.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fishing Card */}
              <motion.div 
                className="bg-light-bg rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 bg-[url('/images/fishing.jpg')] bg-cover bg-center" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('homepage.services.fishing.title')}</h3>
                  <p className="mb-4">{t('homepage.services.fishing.description')}</p>
                  <a href="/fishing" className="btn-primary inline-block">{t('common.learnMore')}</a>
                </div>
              </motion.div>
              
              {/* Accommodation Card */}
              <motion.div 
                className="bg-light-bg rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 bg-[url('/images/cabins.jpg')] bg-cover bg-center" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('homepage.services.accommodation.title')}</h3>
                  <p className="mb-4">{t('homepage.services.accommodation.description')}</p>
                  <a href="/accommodation" className="btn-primary inline-block">{t('common.learnMore')}</a>
                </div>
              </motion.div>
              
              {/* Cafe Card */}
              <motion.div 
                className="bg-light-bg rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 bg-[url('/images/cafe.jpg')] bg-cover bg-center" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('homepage.services.cafe.title')}</h3>
                  <p className="mb-4">{t('homepage.services.cafe.description')}</p>
                  <a href="/cafe" className="btn-primary inline-block">{t('common.learnMore')}</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Lake Features Section */}
        <section className="py-20 bg-light-bg">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">{t('homepage.lakeFeatures.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-primary mb-4">💧</div>
                <h3 className="font-bold mb-2">{t('homepage.lakeFeatures.area.title')}</h3>
                <p>{t('homepage.lakeFeatures.area.value')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-primary mb-4">🌊</div>
                <h3 className="font-bold mb-2">{t('homepage.lakeFeatures.depth.title')}</h3>
                <p>{t('homepage.lakeFeatures.depth.value')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-primary mb-4">🐟</div>
                <h3 className="font-bold mb-2">{t('homepage.lakeFeatures.fish.title')}</h3>
                <p>{t('homepage.lakeFeatures.fish.value')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-primary mb-4">🏞️</div>
                <h3 className="font-bold mb-2">{t('homepage.lakeFeatures.environment.title')}</h3>
                <p>{t('homepage.lakeFeatures.environment.value')}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">{t('homepage.history.title')}</h2>
                <p className="mb-6">{t('homepage.history.description')}</p>
                <a href="/about" className="btn-primary inline-block">{t('common.readMore')}</a>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/images/history.jpg" alt="Historical photo of Михайлына lake" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

// Temporary disable server-side props for development
const getStaticProps = async ({ locale }: { locale?: string }) => {
  return {
    props: {
      // ...(await serverSideTranslations(locale || 'ru', ['common'])),
    },
  };
};

export { getStaticProps };
export default HomePage; 