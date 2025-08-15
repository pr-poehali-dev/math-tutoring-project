import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [currentLesson, setCurrentLesson] = useState(1);

  const lessons = [
    {
      id: 1,
      title: "Урок 1",
      color: "orange",
      topics: [
        "Обыкновенные дроби",
        "Десятичные дроби",
        "Практика"
      ]
    },
    {
      id: 2,
      title: "Урок 2",
      color: "turquoise",
      topics: [
        "Смежные и вертикальные углы",
        "Признаки равенства треугольников",
        "Медиана, биссектриса, высота",
        "Равнобедренный треугольник",
        "Параллельные прямые",
        "Сумма углов треугольника",
        "Внешний угол треугольника",
        "Свойства прямоугольных треугольников",
        "Практика"
      ]
    },
    {
      id: 3,
      title: "Урок 3",
      color: "orange",
      topics: [
        "Неравенство треугольников",
        "Расстояние от точки до прямой",
        "Хорда, окружность, радиус, касательная, секущая",
        "Теорема о радиусе и о касательной",
        "Свойства диаметров и хорд окружности"
      ]
    },
    {
      id: 4,
      title: "Урок 4",
      color: "turquoise",
      topics: ["Линейные уравнения"]
    },
    {
      id: 5,
      title: "Урок 5",
      color: "orange",
      topics: ["Параллелограмм (определение и его свойства)"]
    },
    {
      id: 6,
      title: "Урок 6",
      color: "turquoise",
      topics: ["Линейная функция и обратная пропорциональность"]
    },
    {
      id: 7,
      title: "Урок 7",
      color: "orange",
      topics: ["Трапеция"]
    },
    {
      id: 8,
      title: "Урок 8",
      color: "turquoise",
      topics: ["Степень с натуральным и целым показателем"]
    },
    {
      id: 9,
      title: "Урок 9",
      color: "orange",
      topics: ["Повторяем темы по геометрии"]
    },
    {
      id: 10,
      title: "Урок 10",
      color: "turquoise",
      topics: ["Прямоугольник, ромб, квадрат"]
    },
    {
      id: 11,
      title: "Урок 11",
      color: "orange",
      topics: ["Вероятность"]
    },
    {
      id: 12,
      title: "Урок 12",
      color: "turquoise",
      topics: ["Площадь фигур"]
    },
    {
      id: 13,
      title: "Урок 13",
      color: "orange",
      topics: ["Квадратные корни"]
    },
    {
      id: 14,
      title: "Урок 14",
      color: "turquoise",
      topics: ["Теорема Пифагора"]
    },
    {
      id: 15,
      title: "Урок 15",
      color: "orange",
      topics: ["Квадратные уравнения"]
    },
    {
      id: 16,
      title: "Урок 16",
      color: "turquoise",
      topics: ["Повторяем темы по алгебре"]
    },
    {
      id: 17,
      title: "Урок 17",
      color: "orange",
      topics: ["Подобные треугольники"]
    },
    {
      id: 18,
      title: "Урок 18",
      color: "turquoise",
      topics: ["Линейные неравенства"]
    },
    {
      id: 19,
      title: "Урок 19",
      color: "orange",
      topics: ["Тригонометрия"]
    },
    {
      id: 20,
      title: "Урок 20",
      color: "gradient",
      topics: [
        "Центральный угол",
        "Вписанный угол",
        "Описанная окружность",
        "Вписанная окружность"
      ]
    },
    {
      id: 21,
      title: "Урок 21",
      color: "orange",
      topics: ["Решаем пробник"]
    },
    {
      id: 22,
      title: "Урок 22",
      color: "turquoise",
      topics: ["Окружность и круг"]
    },
    {
      id: 23,
      title: "Урок 23",
      color: "orange",
      topics: ["Квадратичная функция и квадратичные неравенства"]
    },
    {
      id: 24,
      title: "Урок 24",
      color: "turquoise",
      topics: ["Решаем пробник"]
    },
    {
      id: 25,
      title: "Урок 25",
      color: "gradient",
      topics: ["Решаем пробник и разбираем все вопросы"]
    }
  ];

  const nextLesson = () => {
    setCurrentLesson(prev => prev < 25 ? prev + 1 : 1);
  };

  const prevLesson = () => {
    setCurrentLesson(prev => prev > 1 ? prev - 1 : 25);
  };

  const goToLesson = (lessonId: number) => {
    setCurrentLesson(lessonId);
  };

  const currentLessonData = lessons.find(lesson => lesson.id === currentLesson);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-turquoise-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Calculator" className="text-orange-500" size={32} />
            <h1 className="text-2xl font-montserrat font-bold text-gray-800">МатемаТика</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="text-gray-700 hover:text-orange-500 font-open-sans">Главная</a>
            <a href="#program" className="text-gray-700 hover:text-orange-500 font-open-sans">Программа</a>
            <a href="#prizes" className="text-gray-700 hover:text-orange-500 font-open-sans">Призы</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 font-open-sans">О преподавателе</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 font-open-sans">Контакты</a>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-turquoise-100 text-turquoise-700 font-open-sans">
              Подготовка к ОГЭ по математике
            </Badge>
            <h2 className="text-5xl font-montserrat font-bold text-gray-800 leading-tight">
              Математика с 
              <span className="text-orange-500"> призами</span> до 
              <span className="text-turquoise-500"> 25.000₽</span>
            </h2>
            <p className="text-xl text-gray-600 font-open-sans leading-relaxed">
              Я студент ДВФУ и репетитор математики. Провожу занятия в группах по 12 человек, 2 раза в неделю. 
              Доказываю теоремы, показываю практическое применение и рассказываю историю математики.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans px-8">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-open-sans px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/7649e570-5720-46a5-a462-a6c359209c0e.jpg" 
              alt="Математические формулы и символы" 
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg">
              <Icon name="TrendingUp" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-orange-500">12</div>
              <div className="text-gray-600 font-open-sans">учеников в группе</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-turquoise-500">2</div>
              <div className="text-gray-600 font-open-sans">занятия в неделю</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-orange-500">1</div>
              <div className="text-gray-600 font-open-sans">час занятие</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-turquoise-500">25К</div>
              <div className="text-gray-600 font-open-sans">максимальный приз</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-gradient-to-r from-orange-50 to-turquoise-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Программа подготовки к ОГЭ
            </h3>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Полная программа подготовки до мая с теорией, практикой и историческим контекстом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-orange-500" size={24} />
                </div>
                <CardTitle className="font-montserrat text-xl">Теория и доказательства</CardTitle>
                <CardDescription className="font-open-sans">
                  Изучаем теоремы с полными доказательствами, а не просто заучиваем формулы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="text-turquoise-500" size={24} />
                </div>
                <CardTitle className="font-montserrat text-xl">Практическое применение</CardTitle>
                <CardDescription className="font-open-sans">
                  Показываю, как математические знания применяются в реальной жизни
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-turquoise-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-gray-700" size={24} />
                </div>
                <CardTitle className="font-montserrat text-xl">Исторический контекст</CardTitle>
                <CardDescription className="font-open-sans">
                  Рассказываю историю появления математических концепций и их влияние
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Interactive Curriculum Carousel */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-montserrat font-bold text-gray-800 mb-8 text-center">
              Подробная программа курса - 25 уроков
            </h4>
            
            {/* Current Lesson Display */}
            <div className="max-w-2xl mx-auto mb-8">
              {currentLessonData && (
                <Card className={`border-2 transition-all duration-300 ${
                  currentLessonData.color === 'orange' 
                    ? 'border-orange-300 shadow-orange-100' 
                    : currentLessonData.color === 'turquoise'
                    ? 'border-turquoise-300 shadow-turquoise-100'
                    : 'border-gradient-to-r from-orange-400 to-turquoise-400'
                } shadow-lg hover:shadow-xl`}>
                  <CardHeader className="pb-3">
                    <CardTitle className={`font-montserrat text-2xl text-center ${
                      currentLessonData.color === 'orange'
                        ? 'text-orange-600'
                        : currentLessonData.color === 'turquoise'
                        ? 'text-turquoise-600'
                        : 'bg-gradient-to-r from-orange-600 to-turquoise-600 bg-clip-text text-transparent'
                    }`}>
                      {currentLessonData.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-base font-open-sans text-gray-700 space-y-2">
                      {currentLessonData.topics.map((topic, index) => (
                        <li key={index} className={`${
                          topic.includes('Практика') || topic.includes('пробник')
                            ? currentLessonData.color === 'orange'
                              ? 'text-orange-600 font-semibold'
                              : currentLessonData.color === 'turquoise'
                              ? 'text-turquoise-600 font-semibold'
                              : 'bg-gradient-to-r from-orange-600 to-turquoise-600 bg-clip-text text-transparent font-semibold'
                            : ''
                        }`}>
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <Button
                onClick={prevLesson}
                variant="outline"
                size="lg"
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                <Icon name="ChevronLeft" size={20} />
                Предыдущий
              </Button>
              
              <div className="text-center">
                <span className="text-lg font-montserrat font-semibold text-gray-600">
                  {currentLesson} / 25
                </span>
              </div>

              <Button
                onClick={nextLesson}
                variant="outline"
                size="lg"
                className="border-turquoise-300 text-turquoise-600 hover:bg-turquoise-50"
              >
                Следующий
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>

            {/* Lesson Number Grid */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 max-w-4xl mx-auto">
              {lessons.map((lesson) => (
                <Button
                  key={lesson.id}
                  onClick={() => goToLesson(lesson.id)}
                  variant={currentLesson === lesson.id ? "default" : "outline"}
                  size="sm"
                  className={`w-12 h-12 p-0 text-sm font-montserrat font-semibold transition-all duration-200 ${
                    currentLesson === lesson.id
                      ? lesson.color === 'orange'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : lesson.color === 'turquoise'
                        ? 'bg-turquoise-500 hover:bg-turquoise-600 text-white'
                        : 'bg-gradient-to-r from-orange-500 to-turquoise-500 hover:from-orange-600 hover:to-turquoise-600 text-white'
                      : lesson.color === 'orange'
                      ? 'border-orange-300 text-orange-600 hover:bg-orange-50'
                      : lesson.color === 'turquoise'
                      ? 'border-turquoise-300 text-turquoise-600 hover:bg-turquoise-50'
                      : 'border-gradient-to-r from-orange-300 to-turquoise-300 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-turquoise-50'
                  }`}
                >
                  {lesson.id}
                </Button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex justify-between text-sm font-open-sans text-gray-500 mb-2">
                <span>Прогресс просмотра программы</span>
                <span>{Math.round((currentLesson / 25) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-turquoise-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentLesson / 25) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Система призов и мотивации
            </h3>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              За результат более 25 баллов на ОГЭ — ценный приз до 25.000 рублей!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Dumbbell" size={32} />
                </div>
                <CardTitle className="font-montserrat text-2xl text-orange-700">Для спортсменов</CardTitle>
                <CardDescription className="font-open-sans text-lg">
                  Премиальное спортивное питание и аксессуары
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-orange-600 mb-2">до 25.000₽</div>
                  <p className="font-open-sans text-orange-600">при результате 25+ баллов</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-turquoise-200 bg-gradient-to-br from-turquoise-50 to-turquoise-100">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-turquoise-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shirt" size={32} />
                </div>
                <CardTitle className="font-montserrat text-2xl text-turquoise-700">Для модниц</CardTitle>
                <CardDescription className="font-open-sans text-lg">
                  Сертификаты в популярные магазины одежды
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-turquoise-600 mb-2">до 25.000₽</div>
                  <p className="font-open-sans text-turquoise-600">при результате 25+ баллов</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={32} />
                </div>
                <CardTitle className="font-montserrat text-2xl text-purple-700">Универсальные</CardTitle>
                <CardDescription className="font-open-sans text-lg">
                  Электроника, книги, курсы по интересам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-purple-600 mb-2">до 25.000₽</div>
                  <p className="font-open-sans text-purple-600">при результате 25+ баллов</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-gradient-to-r from-orange-500 to-turquoise-500 text-white p-8 rounded-2xl">
              <CardContent className="p-0">
                <Icon name="Target" className="mx-auto text-white mb-4" size={48} />
                <h4 className="text-2xl font-montserrat font-bold mb-2">Цель — 25+ баллов на ОГЭ</h4>
                <p className="font-open-sans text-lg opacity-90">
                  Каждый балл приближает к желанному призу. Мотивация через результат!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 font-open-sans">
                О преподавателе
              </Badge>
              <h3 className="text-4xl font-montserrat font-bold text-gray-800">
                Студент ДВФУ с большим опытом
              </h3>
              <p className="text-lg text-gray-600 font-open-sans leading-relaxed">
                Я учусь на первом курсе Дальневосточного федерального университета и уже несколько лет 
                помогаю школьникам готовиться к ОГЭ по математике. Мой подход — не просто дать формулы, 
                а объяснить суть, показать красоту математики и ее практическое применение.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-orange-500" size={20} />
                  <span className="font-open-sans">Работа в группах до 12 человек</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BookOpen" className="text-turquoise-500" size={20} />
                  <span className="font-open-sans">Доказательства теорем и выводы формул</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-orange-500" size={20} />
                  <span className="font-open-sans">Исторический контекст математических открытий</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Lightbulb" className="text-turquoise-500" size={20} />
                  <span className="font-open-sans">Практическое применение в жизни</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/2f0403d9-c3d4-4255-a534-e4d78a6d8c3e.png" 
                  alt="Преподаватель математики - студент ДВФУ" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-turquoise-500 text-white p-4 rounded-full shadow-lg">
                  <Icon name="GraduationCap" size={24} />
                </div>
              </div>
              
              <Card className="bg-white shadow-lg p-6 mt-8">
                <CardContent className="p-0">
                  <div className="text-center space-y-3">
                    <h4 className="text-lg font-montserrat font-bold text-gray-800">
                      Современный подход к обучению
                    </h4>
                    <p className="font-open-sans text-gray-600 text-sm">
                      Сочетаю классические методы с современными технологиями и мотивационными системами
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Запись на занятия
            </h3>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Начни подготовку к ОГЭ уже сегодня. Заполни форму, и я свяжусь с тобой для уточнения деталей
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-center">
                  Форма записи
                </CardTitle>
                <CardDescription className="text-center font-open-sans">
                  Все поля обязательны для заполнения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mldlvpgz"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                        Имя
                      </label>
                      <Input name="name" placeholder="Введите ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                        Возраст
                      </label>
                      <Input name="age" placeholder="Сколько лет" type="number" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Телефон
                    </label>
                    <Input name="phone" placeholder="+7 (999) 123-45-67" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Email
                    </label>
                    <Input name="email" placeholder="example@email.com" type="email" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Текущий уровень по математике
                    </label>
                    <Textarea name="message" placeholder="Расскажите о ваших знаниях, трудностях, целях" required />
                  </div>
                  
                  <Separator />
                  
                  <div className="text-center space-y-4">
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-turquoise-500 hover:from-orange-600 hover:to-turquoise-600 text-white font-open-sans text-lg px-8 py-3">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    <p className="text-sm text-gray-500 font-open-sans">
                      Я отвечу в течение 24 часов
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <Icon name="Phone" className="text-orange-500 mx-auto mb-4" size={32} />
                <h4 className="font-montserrat font-bold text-lg mb-2">Телефон</h4>
                <p className="font-open-sans text-gray-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <Icon name="Mail" className="text-turquoise-500 mx-auto mb-4" size={32} />
                <h4 className="font-montserrat font-bold text-lg mb-2">Email</h4>
                <p className="font-open-sans text-gray-600">tutor@mathematics.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <Icon name="MapPin" className="text-purple-500 mx-auto mb-4" size={32} />
                <h4 className="font-montserrat font-bold text-lg mb-2">Местоположение</h4>
                <p className="font-open-sans text-gray-600">Владивосток, ДВФУ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Calculator" className="text-orange-500" size={24} />
              <h1 className="text-xl font-montserrat font-bold">МатемаТика</h1>
            </div>
            <p className="font-open-sans text-gray-300 max-w-2xl mx-auto">
              Репетиторство по математике для школьников с системой мотивации через призы. 
              Подготовка к ОГЭ с историческим контекстом и практическим применением.
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="Phone" className="mr-2" size={16} />
                Связаться
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="Mail" className="mr-2" size={16} />
                Написать
              </Button>
            </div>
            <Separator className="my-6 bg-gray-700" />
            <p className="text-sm text-gray-400 font-open-sans">
              © 2024 МатемаТика. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;