import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const artworks = [
    {
      id: 1,
      image: "/img/72f8c26f-146b-4bea-bf76-42fbffc5be72.jpg",
      title: "Архетип I: Цифровая Душа",
      description: "Исследование границ между искусственным и человеческим",
      tools: ["MidJourney", "AI"]
    },
    {
      id: 2,
      image: "/img/5488d094-0674-455a-9e31-6b97d52ff46c.jpg",
      title: "Архетип II: Нейронная Трансформация",
      description: "Метафора сознания в эпоху машинного обучения",
      tools: ["Sora", "Neural Networks"]
    },
    {
      id: 3,
      image: "/img/898ae359-2d2b-4b82-bdf1-5dddae5e3cd7.jpg",
      title: "Архетип III: Синтез Эмоций",
      description: "Слияние искусственного интеллекта и человеческих чувств",
      tools: ["MidJourney", "Digital Art"]
    }
  ];

  const sections = [
    {
      id: 'intro',
      title: 'Введение',
      content: (
        <div className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-black via-gray-900 to-black text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}></div>
          </div>
          
          <div className="text-center z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-wide animate-fade-in">
              ARCHETYPE
            </h1>
            <h2 className="text-4xl md:text-6xl font-light mb-6 opacity-80 animate-fade-in" style={{animationDelay: '0.3s'}}>
              ALCHEMY
            </h2>
            
            <div className="w-24 h-0.5 bg-white mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}></div>
            
            <p className="text-xl md:text-2xl font-light mb-8 opacity-70 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.9s'}}>
              Архетипы души в эпоху ИИ
            </p>
            
            <p className="text-base md:text-lg mb-16 opacity-60 max-w-xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '1.2s'}}>
              Визуальная поэзия на границе искусственного и человеческого. 
              Исследование эмоций через призму нейронных сетей.
            </p>
            
            <Button 
              onClick={() => setCurrentSection(1)}
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-none animate-fade-in"
              style={{animationDelay: '1.5s'}}
            >
              Войти в галерею
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={24} className="text-white opacity-50" />
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'Галерея',
      content: (
        <div className="min-h-screen bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light mb-6 text-black">Галерея</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Каждая работа — это диалог между машиной и душой, 
                исследование архетипов через язык нейронных сетей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <Card key={artwork.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-black">{artwork.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{artwork.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {artwork.tools.map((tool, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'О проекте',
      content: (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-6 text-black">О проекте</h2>
              <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-light mb-6 text-black">Философия</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Архетипы души в эпоху ИИ" — это исследование того, как искусственный интеллект 
                  может стать инструментом для выражения глубинных человеческих эмоций и архетипов.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Каждая работа создается через диалог с нейронными сетями, где я направляю 
                  технологию к раскрытию метафор и символов, живущих в коллективном бессознательном.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Вдохновляюсь работами Roy Adin и Ramco, стремясь к созданию кинематографичных 
                  образов, которые говорят на языке сюрреализма и глубокой эмоциональности.
                </p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-black">Инструменты</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-black text-white">MidJourney</Badge>
                    <Badge className="bg-black text-white">Sora</Badge>
                    <Badge className="bg-black text-white">Neural Networks</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-black">Стиль</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Сюрреализм</Badge>
                    <Badge variant="outline">Метафора</Badge>
                    <Badge variant="outline">Кинематографичность</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-black">Будущее</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Планирую развитие в сторону продажи принтов, цифровых файлов и 
                    возможно NFT. Также рассматриваю создание интерактивных инсталляций.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Контакты',
      content: (
        <div className="min-h-screen bg-black text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-6">Контакты</h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>
            
            <div className="space-y-8">
              <p className="text-xl font-light opacity-80">
                Готов к сотрудничеству и новым проектам
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-none"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Icon name="Instagram" size={20} className="mr-2" />
                  Instagram
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-none"
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Email
                </Button>
              </div>
              
              <div className="mt-16 opacity-60">
                <p className="text-sm">
                  Все работы защищены авторским правом © 2024 Archetype Alchemy
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-light text-lg tracking-wide">
              ARCHETYPE ALCHEMY
            </div>
            <div className="flex space-x-8">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`text-sm transition-colors duration-200 ${
                    currentSection === index ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative">
        {sections[currentSection].content}
      </div>
    </div>
  );
};

export default Index;