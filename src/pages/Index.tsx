import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary/80">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-8 tracking-tight">
            СОХРАНИ
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            «Сохрани» – удобный способ позаботиться о воспоминаниях и предать им 
            незабываемый окрас с помощью нашей платформы
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {/* Храни */}
          <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Icon name="Database" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Храни</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Фото, документы, аудио и видео в одном месте
              </p>
            </CardContent>
          </Card>

          {/* Собери */}
          <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 animate-scale-in [animation-delay:0.1s]">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Icon name="BookOpen" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Собери</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Семейную летопись за пару кликов
              </p>
            </CardContent>
          </Card>

          {/* Защити */}
          <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 animate-scale-in [animation-delay:0.2s]">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Защити</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Воспоминания от потери — навсегда
              </p>
            </CardContent>
          </Card>

          {/* Покажи */}
          <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 animate-scale-in [animation-delay:0.3s]">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Icon name="Eye" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Покажи</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Детям и внукам, как жили их предки
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300">
            Начать сохранять воспоминания
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-float [animation-delay:1s] hidden lg:block"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full animate-float [animation-delay:2s] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Index;