import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface LoginForm {
  username: string;
  password: string;
}

const AdminPanel: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check credentials
    if (form.username === 'Zoobastiks' && form.password === '242344') {
      setIsLoggedIn(true);
      setError(null);
      // Store authentication token
      localStorage.setItem('adminToken', 'admin-session-token');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminToken');
  };

  // Admin dashboard UI
  if (isLoggedIn) {
    return (
      <>
        <Head>
          <title>Административная панель | Озеро Михайлына</title>
        </Head>
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-primary shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">Административная панель</h1>
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Выйти
              </button>
            </div>
          </header>
          
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-64 mb-6 md:mb-0">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4 border-b">
                    <h2 className="font-bold text-lg">Меню</h2>
                  </div>
                  <nav className="p-2">
                    <button 
                      className={`w-full text-left p-3 rounded ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      Панель управления
                    </button>
                    <button 
                      className={`w-full text-left p-3 rounded ${activeTab === 'prices' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('prices')}
                    >
                      Цены
                    </button>
                    <button 
                      className={`w-full text-left p-3 rounded ${activeTab === 'fish' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('fish')}
                    >
                      Виды рыб
                    </button>
                    <button 
                      className={`w-full text-left p-3 rounded ${activeTab === 'equipment' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('equipment')}
                    >
                      Снаряжение
                    </button>
                    <button 
                      className={`w-full text-left p-3 rounded ${activeTab === 'bookings' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('bookings')}
                    >
                      Бронирования
                    </button>
                    <button 
                      className={`w-full text-left p-3 rounded ${activeTab === 'gallery' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('gallery')}
                    >
                      Галерея
                    </button>
                  </nav>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 md:ml-6">
                {activeTab === 'dashboard' && (
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold mb-6">Панель управления</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <div className="text-blue-600 font-bold text-lg">Бронирований сегодня</div>
                        <div className="text-3xl font-bold mt-2">5</div>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <div className="text-green-600 font-bold text-lg">Доход за неделю</div>
                        <div className="text-3xl font-bold mt-2">12,450 грн</div>
                      </div>
                      <div className="bg-yellow-100 p-4 rounded-lg">
                        <div className="text-yellow-600 font-bold text-lg">Онлайн-посетителей</div>
                        <div className="text-3xl font-bold mt-2">28</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">Последние бронирования</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Имя
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Дата
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Услуга
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Статус
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Иван Петренко</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">18.04.2025</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Дневная рыбалка</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Оплачено
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Михаил Сидорчук</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">19.04.2025</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">VIP-рыбалка</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Ожидает оплаты
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Александр Коваленко</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">20.04.2025</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Ночная рыбалка</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Оплачено
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'prices' && (
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold mb-6">Цены</h2>
                    
                    <form className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-4">Дневная рыбалка</h3>
                        <div className="flex items-center mb-2">
                          <label className="w-32">Стоимость:</label>
                          <input 
                            type="number" 
                            value="600" 
                            className="rounded border-gray-300 px-3 py-2 w-32"
                          />
                          <span className="ml-2">грн/день</span>
                        </div>
                        <div className="flex items-center">
                          <label className="w-32">Описание:</label>
                          <textarea 
                            className="rounded border-gray-300 px-3 py-2 w-full"
                            rows={3}
                            defaultValue="Рыбалка с 6:00 до 20:00. Включает возможность ловли разнообразной рыбы со своим снаряжением."
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold mb-4">Ночная рыбалка</h3>
                        <div className="flex items-center mb-2">
                          <label className="w-32">Стоимость:</label>
                          <input 
                            type="number" 
                            value="800" 
                            className="rounded border-gray-300 px-3 py-2 w-32"
                          />
                          <span className="ml-2">грн/ночь</span>
                        </div>
                        <div className="flex items-center">
                          <label className="w-32">Описание:</label>
                          <textarea 
                            className="rounded border-gray-300 px-3 py-2 w-full"
                            rows={3}
                            defaultValue="Рыбалка с 20:00 до 6:00. Идеально для ловли карпа и сома. Особая атмосфера ночной рыбалки."
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold mb-4">VIP-рыбалка</h3>
                        <div className="flex items-center mb-2">
                          <label className="w-32">Стоимость:</label>
                          <input 
                            type="number" 
                            value="1200" 
                            className="rounded border-gray-300 px-3 py-2 w-32"
                          />
                          <span className="ml-2">грн/день</span>
                        </div>
                        <div className="flex items-center">
                          <label className="w-32">Описание:</label>
                          <textarea 
                            className="rounded border-gray-300 px-3 py-2 w-full"
                            rows={3}
                            defaultValue="Лучшие места, личный инструктор, аренда беседки, приготовление улова. Максимальный комфорт!"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <button className="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition-colors">
                          Сохранить изменения
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Placeholder for other tabs */}
                {activeTab !== 'dashboard' && activeTab !== 'prices' && (
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold mb-6">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                    <p>Эта секция находится в разработке.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Login form UI
  return (
    <>
      <Head>
        <title>Вход в админ-панель | Озеро Михайлына</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Вход в админ-панель
            </h2>
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Имя пользователя
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Имя пользователя"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Пароль
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Пароль"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPanel; 