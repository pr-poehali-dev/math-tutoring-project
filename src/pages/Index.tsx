import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
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

          {/* Detailed Curriculum */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-montserrat font-bold text-gray-800 mb-8 text-center">
              Подробная программа курса - 25 уроков
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Урок 1 */}
              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 1</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Обыкновенные дроби</li>
                    <li>• Десятичные дроби</li>
                    <li className="text-orange-600 font-semibold">• Практика</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Урок 2 */}
              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 2</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Смежные и вертикальные углы</li>
                    <li>• Признаки равенства треугольников</li>
                    <li>• Медиана, биссектриса, высота</li>
                    <li>• Равнобедренный треугольник</li>
                    <li>• Параллельные прямые</li>
                    <li>• Сумма углов треугольника</li>
                    <li>• Внешний угол треугольника</li>
                    <li>• Свойства прямоугольных треугольников</li>
                    <li className="text-turquoise-600 font-semibold">• Практика</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Урок 3 */}
              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 3</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Неравенство треугольников</li>
                    <li>• Расстояние от точки до прямой</li>
                    <li>• Хорда, окружность, радиус, касательная, секущая</li>
                    <li>• Теорема о радиусе и о касательной</li>
                    <li>• Свойства диаметров и хорд окружности</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Уроки 4-6 */}
              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 4</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Линейные уравнения</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 5</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Параллелограмм (определение и его свойства)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 6</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Линейная функция и обратная пропорциональность</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Уроки 7-9 */}
              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 7</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Трапеция</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 8</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Степень с натуральным и целым показателем</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 9</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Повторяем темы по геометрии</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Уроки 10-12 */}
              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 10</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Прямоугольник, ромб, квадрат</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 11</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Вероятность</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 12</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Площадь фигур</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Уроки 13-15 */}
              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 13</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Квадратные корни</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 14</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Теорема Пифагора</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 15</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Квадратные уравнения</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Уроки 16-18 */}
              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 16</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Повторяем темы по алгебре</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 17</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Подобные треугольники</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-turquoise-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 18</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Линейные неравенства</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Урок 19 */}
              <Card className="border border-orange-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="font-montserrat text-lg text-orange-600">Урок 19</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                    <li>• Тригонометрия</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Финальные уроки 20-25 */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h5 className="text-xl font-montserrat font-bold text-gray-800 mb-6 text-center">
                Заключительный этап - подготовка к экзамену
              </h5>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-gradient-to-r from-orange-400 to-turquoise-400 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-montserrat text-lg bg-gradient-to-r from-orange-600 to-turquoise-600 bg-clip-text text-transparent">Урок 20</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                      <li>• Центральный угол</li>
                      <li>• Вписанный угол</li>
                      <li>• Описанная окружность</li>
                      <li>• Вписанная окружность</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-300 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-montserrat text-lg text-orange-600">Урок 21</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                      <li className="font-semibold text-orange-600">• Решаем пробник</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-turquoise-300 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 22</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                      <li>• Окружность и круг</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-300 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-montserrat text-lg text-orange-600">Урок 23</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                      <li>• Квадратичная функция и квадратичные неравенства</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-turquoise-300 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-montserrat text-lg text-turquoise-600">Урок 24</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                      <li className="font-semibold text-turquoise-600">• Решаем пробник</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gradient-to-r from-orange-400 to-turquoise-400 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-montserrat text-lg bg-gradient-to-r from-orange-600 to-turquoise-600 bg-clip-text text-transparent">Урок 25</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm font-open-sans text-gray-700 space-y-1">
                      <li className="font-semibold bg-gradient-to-r from-orange-600 to-turquoise-600 bg-clip-text text-transparent">• Решаем пробник и разбираем все вопросы</li>
                    </ul>
                  </CardContent>
                </Card>
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
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Имя
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Возраст
                    </label>
                    <Input placeholder="Сколько лет" type="number" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                    Email
                  </label>
                  <Input placeholder="example@email.com" type="email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                    Текущий уровень по математике
                  </label>
                  <Textarea placeholder="Расскажите о ваших знаниях, трудностях, целях" />
                </div>
                
                <Separator />
                
                <div className="text-center space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-turquoise-500 hover:from-orange-600 hover:to-turquoise-600 text-white font-open-sans text-lg px-8 py-3">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-500 font-open-sans">
                    Я отвечу в течение 24 часов
                  </p>
                </div>
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