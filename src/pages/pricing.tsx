import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Типы тарифов
interface PricingTier {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

// Оборудование для аренды
interface Equipment {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
}

// Дополнительные услуги
interface AdditionalService {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
}

// Данные о тарифах
const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: 'Базовый',
    description: 'Идеально для коротких рыбалок или новичков',
    price: 500,
    duration: 'до 6 часов',
    features: [
      'Рыбалка с берега или мостика',
      'Использование 1 удочки',
      'Доступ к зоне отдыха',
      'Парковка автомобиля',
    ],
  },
  {
    id: 2,
    name: 'Стандарт',
    description: 'Самый популярный выбор для комфортной рыбалки',
    price: 1000,
    duration: '12 часов',
    features: [
      'Рыбалка с берега или мостика',
      'Использование 2 удочек',
      'Доступ к зоне отдыха',
      'Парковка автомобиля',
      'Использование мангала',
      'Корзина дров',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Премиум',
    description: 'Максимальный комфорт и удобство для настоящих ценителей',
    price: 2500,
    duration: '24 часа',
    features: [
      'Рыбалка с берега или мостика',
      'Использование 3 удочек',
      'Аренда беседки',
      'Парковка автомобиля',
      'Использование мангала',
      'Корзина дров',
      'Набор для шашлыка',
      'Консультация рыболовного эксперта',
    ],
  },
];

// Данные о снаряжении для аренды
const equipments: Equipment[] = [
  {
    id: 1,
    name: 'Удочка поплавочная',
    price: 200,
    unit: 'день',
    image: '/images/fishing-rod.jpg',
  },
  {
    id: 2,
    name: 'Удочка карповая',
    price: 350,
    unit: 'день',
    image: '/images/carp-rod.jpg',
  },
  {
    id: 3,
    name: 'Спиннинг',
    price: 300,
    unit: 'день',
    image: '/images/spinning.jpg',
  },
  {
    id: 4,
    name: 'Садок',
    price: 150,
    unit: 'день',
    image: '/images/landing-net.jpg',
  },
  {
    id: 5,
    name: 'Подсак',
    price: 100,
    unit: 'день',
    image: '/images/keep-net.jpg',
  },
  {
    id: 6,
    name: 'Стул рыболовный',
    price: 100,
    unit: 'день',
    image: '/images/fishing-chair.jpg',
  },
];

// Данные о дополнительных услугах
const additionalServices: AdditionalService[] = [
  {
    id: 1,
    name: 'Аренда беседки',
    description: 'Комфортабельная беседка на 8 человек с мангалом',
    price: 1000,
    unit: 'день',
  },
  {
    id: 2,
    name: 'Профессиональный инструктор',
    description: 'Обучение и сопровождение опытным рыболовом',
    price: 500,
    unit: 'час',
  },
  {
    id: 3,
    name: 'Чистка рыбы',
    description: 'Профессиональная чистка вашего улова',
    price: 200,
    unit: 'кг',
  },
  {
    id: 4,
    name: 'Копчение рыбы',
    description: 'Приготовление рыбы в нашей коптильне',
    price: 300,
    unit: 'кг',
  },
  {
    id: 5,
    name: 'Прокат лодки',
    description: 'Резиновая лодка для двух человек',
    price: 500,
    unit: 'день',
  },
];

const PricingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Цены | Озеро Михайлына</title>
        <meta name="description" content="Тарифы и цены на рыбалку, аренду оборудования и дополнительные услуги на рыболовном водоеме 'Озеро Михайлына'" />
      </Head>

      <main className="mt-16">
        {/* Хедер с изображением */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/pricing-header.jpg" 
              alt="Цены на рыбалку" 
              layout="fill" 
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Цены и тарифы</h1>
            <p className="text-xl text-white max-w-2xl">
              Доступные предложения для индивидуальной и групповой рыбалки на нашем водоеме
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Навигационные вкладки */}
          <div className="mb-12 flex flex-wrap border-b border-gray-200">
            <Link href="/" className="mr-8 py-4 text-gray-500 hover:text-primary">
              Главная
            </Link>
            <Link href="/about" className="mr-8 py-4 text-gray-500 hover:text-primary">
              О водоеме
            </Link>
            <Link href="/pricing" className="mr-8 py-4 text-primary border-b-2 border-primary font-medium">
              Цены
            </Link>
            <Link href="/contact" className="py-4 text-gray-500 hover:text-primary">
              Контакты
            </Link>
          </div>

          {/* Основные тарифы */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Тарифы на рыбалку</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Выберите подходящий тариф и наслаждайтесь рыбалкой в комфортных условиях на нашем живописном водоеме
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.id} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] ${
                    tier.popular ? 'border-2 border-primary relative' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 rounded-bl-lg font-medium">
                      Популярный
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 h-12 mb-6">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{tier.price} ₽</span>
                      <span className="text-gray-500">/{tier.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-primary">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        tier.popular 
                          ? 'bg-primary text-white hover:bg-primary-dark' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Забронировать
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 mt-1 text-blue-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Важная информация</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Цены действительны на будние и выходные дни</li>
                    <li>Дети до 12 лет в сопровождении взрослых – бесплатно</li>
                    <li>При групповом посещении (от 5 человек) – скидка 10%</li>
                    <li>В случае плохой погоды бронь можно перенести на другую дату</li>
                    <li>Для постоянных клиентов действует программа лояльности</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Аренда снаряжения */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Аренда снаряжения</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Забыли снасти дома или хотите попробовать что-то новое? У нас вы можете арендовать всё необходимое для рыбалки
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipments.map((equipment) => (
                <div key={equipment.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                  <div className="w-1/3 relative">
                    <Image 
                      src={equipment.image} 
                      alt={equipment.name} 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{equipment.name}</h3>
                    <div className="text-primary font-medium mb-2">
                      {equipment.price} ₽/{equipment.unit}
                    </div>
                    <button className="text-sm py-1 px-3 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">
                      Добавить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                * Для аренды снаряжения требуется залог, который возвращается при сдаче оборудования в исправном состоянии
              </p>
            </div>
          </section>

          {/* Дополнительные услуги */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Дополнительные услуги</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Сделайте свою рыбалку еще более комфортной и запоминающейся с нашими дополнительными услугами
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-4 px-6 text-left text-gray-700 font-medium">Услуга</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-medium">Описание</th>
                    <th className="py-4 px-6 text-right text-gray-700 font-medium">Стоимость</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {additionalServices.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-800 font-medium">{service.name}</td>
                      <td className="py-4 px-6 text-gray-600">{service.description}</td>
                      <td className="py-4 px-6 text-right text-primary font-medium">
                        {service.price} ₽/{service.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Скидки и акции */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-primary-light to-primary rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/5 p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Специальные предложения</h2>
                  <p className="text-white/90 mb-6">
                    Воспользуйтесь нашими специальными предложениями и акциями, чтобы сэкономить на любимом хобби
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-bold mb-1">Скидка 20% в будние дни</h3>
                      <p>При посещении водоема с понедельника по четверг</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-bold mb-1">Именинникам скидка 30%</h3>
                      <p>При предъявлении документа в течение недели до и после дня рождения</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h3 className="font-bold mb-1">Приведи друга</h3>
                      <p>Скидка 10% вам и вашему другу при первом посещении</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/5 relative">
                  <Image 
                    src="/images/special-offer.jpg" 
                    alt="Специальные предложения" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Вопросы и ответы */}
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Часто задаваемые вопросы</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ответы на самые популярные вопросы о ценах и правилах посещения
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Нужно ли бронировать место заранее?</h3>
                <p className="text-gray-600">
                  Да, для гарантированного места на водоеме рекомендуем бронировать за 2-3 дня, 
                  особенно в выходные и праздничные дни. Бронь можно оформить по телефону или на нашем сайте.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Можно ли оплатить услуги картой?</h3>
                <p className="text-gray-600">
                  Да, мы принимаем оплату наличными и банковскими картами. 
                  Также возможна предоплата при бронировании через сайт.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Что входит в стоимость базового тарифа?</h3>
                <p className="text-gray-600">
                  В базовый тариф входит пребывание на территории водоема, использование одной удочки, 
                  доступ к зоне отдыха и парковка автомобиля. Дополнительные услуги оплачиваются отдельно.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Можно ли привезти свою еду и напитки?</h3>
                <p className="text-gray-600">
                  Да, вы можете привезти свои продукты и напитки. На территории есть беседки с мангалами, 
                  где вы можете приготовить шашлык или другие блюда. Также у нас работает кафе, 
                  где можно заказать готовые блюда.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Есть ли система "Поймал-отпустил"?</h3>
                <p className="text-gray-600">
                  Да, у нас поддерживается принцип "Поймал-отпустил". Вы можете отпустить пойманную рыбу обратно в водоем. 
                  Если же вы хотите забрать улов с собой, действуют определенные ограничения по весу, которые зависят от выбранного тарифа.
                </p>
              </div>
            </div>
          </section>

          {/* CTA блок */}
          <section>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Готовы отправиться на рыбалку?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Забронируйте место прямо сейчас и получите незабываемые впечатления от рыбалки на озере Михайлына.
                Мы гарантируем отличный улов и комфортный отдых!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Забронировать
                </button>
                <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg shadow transition-colors">
                  Связаться с нами
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PricingPage; 