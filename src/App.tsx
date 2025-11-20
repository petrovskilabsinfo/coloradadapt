import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, Eye, Palette, Zap, Globe, Heart, Download, Play, ArrowRight, Monitor } from 'lucide-react';
import { translations, Language } from './translations';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { DonationBlock } from './components/DonationBlock';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const t = translations[currentLanguage];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const themeClasses = {
    background: isDarkTheme 
      ? 'bg-[#141414]' 
      : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50',
    text: isDarkTheme ? 'text-white' : 'text-gray-900',
    cardBg: isDarkTheme ? 'bg-slate-800/30' : 'bg-white/70',
    cardBorder: isDarkTheme ? 'border-slate-700/50' : 'border-purple-200/50',
    cardHover: isDarkTheme ? 'hover:bg-slate-800/50 hover:border-purple-500/30' : 'hover:bg-white/90 hover:border-purple-400/60',
    navBg: isDarkTheme ? 'bg-slate-900/80' : 'bg-white/80',
    navBorder: isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkTheme ? 'text-gray-400' : 'text-gray-500',
    orbColor1: isDarkTheme ? 'bg-purple-500/20' : 'bg-purple-400/30',
    orbColor2: isDarkTheme ? 'bg-cyan-500/20' : 'bg-cyan-400/30',
    orbColor3: isDarkTheme ? 'bg-blue-500/20' : 'bg-blue-400/30',
    gridPattern: isDarkTheme ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
    particleColor: isDarkTheme ? 'bg-cyan-400' : 'bg-purple-500',
    mouseFollower: isDarkTheme ? 'from-purple-500 to-cyan-500' : 'from-purple-600 to-pink-500',
    footerBorder: isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30'
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} relative overflow-hidden transition-all duration-700`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className={`absolute top-20 left-10 w-72 h-72 ${themeClasses.orbColor1} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute top-40 right-20 w-96 h-96 ${themeClasses.orbColor2} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-20 left-1/3 w-80 h-80 ${themeClasses.orbColor3} rounded-full blur-3xl animate-pulse delay-2000`}></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${themeClasses.gridPattern} 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${themeClasses.particleColor} rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${themeClasses.navBg} backdrop-blur-xl border-b ${themeClasses.navBorder} z-40 transition-all duration-700 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              {t.nav.brand}
            </div>
            <div className="flex items-center space-x-6">
              <ThemeToggle isDark={isDarkTheme} onToggle={() => setIsDarkTheme(!isDarkTheme)} />
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
                isDark={isDarkTheme}
              />
              <button 
                onClick={() => scrollToSection('privacy')}
                className={`${themeClasses.textSecondary} hover:text-purple-500 transition-all duration-300 font-medium relative group`}
              >
                {t.nav.privacy}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center px-6 pt-20 relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className={`text-6xl md:text-8xl font-bold ${themeClasses.text} mb-8 leading-tight`}>
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className={`text-2xl md:text-3xl ${themeClasses.textSecondary} mb-6 font-light`}>
            {t.hero.subtitle}
          </p>
          
          <p className={`text-lg ${themeClasses.textMuted} mb-12 max-w-4xl mx-auto leading-relaxed`}>
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="https://chromewebstore.google.com/detail/coloradapt/mdhhbgaeadiphmhbjkfmjcfahcahcbkg"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-10 py-5 bg-gradient-to-r ${isDarkTheme ? 'from-purple-600 to-blue-600' : 'from-purple-500 to-blue-500'} rounded-2xl font-semibold text-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden inline-block`}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                {t.hero.downloadBtn}
              </span>
              <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? 'from-purple-700 to-blue-700' : 'from-purple-600 to-blue-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('features')}
            className={`group ${themeClasses.textMuted} hover:text-purple-500 transition-all duration-300 flex items-center justify-center mx-auto animate-bounce`}
          >
            <span className="mr-2">{t.hero.learnBtn}</span>
            <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-32 px-6 relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-bold ${themeClasses.text} mb-8`}>
              {t.features.title}
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-4xl mx-auto leading-relaxed`}>
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: t.features.hdr.title, desc: t.features.hdr.description, color: isDarkTheme ? 'from-purple-500 to-blue-500' : 'from-purple-600 to-blue-600' },
              { icon: Palette, title: t.features.oled.title, desc: t.features.oled.description, color: isDarkTheme ? 'from-blue-500 to-cyan-500' : 'from-blue-600 to-cyan-600' },
              { icon: Shield, title: t.features.comfort.title, desc: t.features.comfort.description, color: isDarkTheme ? 'from-cyan-500 to-green-500' : 'from-cyan-600 to-green-600' },
              { icon: Zap, title: t.features.tone.title, desc: t.features.tone.description, color: isDarkTheme ? 'from-green-500 to-yellow-500' : 'from-green-600 to-yellow-600' },
              { icon: Globe, title: t.features.immersive.title, desc: t.features.immersive.description, color: isDarkTheme ? 'from-yellow-500 to-red-500' : 'from-yellow-600 to-red-600' },
              { icon: Heart, title: t.features.accessibility.title, desc: t.features.accessibility.description, color: isDarkTheme ? 'from-red-500 to-pink-500' : 'from-red-600 to-pink-600' },
              { icon: ArrowRight, title: t.features.movieStock.title, desc: t.features.movieStock.description, color: isDarkTheme ? 'from-pink-500 to-purple-500' : 'from-pink-600 to-purple-600' },
              { icon: Zap, title: t.features.technicalLuts.title, desc: t.features.technicalLuts.description, color: isDarkTheme ? 'from-indigo-500 to-blue-500' : 'from-indigo-600 to-blue-600' },
              { icon: Monitor, title: t.features.pipPiw.title, desc: t.features.pipPiw.description, color: isDarkTheme ? 'from-purple-500 to-pink-500' : 'from-purple-600 to-pink-600' }
            ].map((feature, index) => (
              <div key={index} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10`}>
                <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5' : 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${themeClasses.text} mb-4 group-hover:${isDarkTheme ? 'text-purple-300' : 'text-purple-600'} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className={`${themeClasses.textSecondary} leading-relaxed group-hover:${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`py-32 px-6 relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-bold ${themeClasses.text} mb-8`}>
              {t.videoSection.title}
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              {t.videoSection.subtitle}
            </p>
          </div>

          <div className={`relative max-w-4xl mx-auto rounded-3xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm p-4 group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500`}>
            {/* Decorative background */}
            <div className={`absolute inset-0 ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20">
              <iframe
                src="https://www.youtube.com/embed/bhksCWgTl4U?rel=0&modestbranding=1&showinfo=0"
                title="ColorAdapt - Visual Comfort Browser Extension Demo"
                className="absolute inset-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              
              {/* Play button overlay (optional decorative element) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Video info */}
            <div className="relative z-10 mt-6 text-center">
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-2 group-hover:bg-gradient-to-r group-hover:${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                {t.videoSection.demoTitle}
              </h3>
              <p className={`${themeClasses.textSecondary} group-hover:${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
                {t.videoSection.demoSubtitle}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Section */}
      <section className={`py-32 px-6 relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-bold ${themeClasses.text} mb-8`}>
              {t.whyChoose.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: t.whyChoose.privacy.title, desc: t.whyChoose.privacy.description },
              { title: t.whyChoose.certified.title, desc: t.whyChoose.certified.description },
              { title: t.whyChoose.vision.title, desc: t.whyChoose.vision.description },
              { title: t.whyChoose.future.title, desc: t.whyChoose.future.description }
            ].map((item, index) => (
              <div key={index} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-500 transform hover:-translate-y-1`}>
                <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5' : 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold ${themeClasses.text} mb-4 group-hover:bg-gradient-to-r group-hover:${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {item.title}
                  </h3>
                  <p className={`${themeClasses.textSecondary} leading-relaxed group-hover:${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`relative p-12 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/30' : 'bg-gradient-to-br from-white/80 to-purple-50/80 border-purple-300/40'} border backdrop-blur-sm`}>
            <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-purple-100/60 to-cyan-100/60'}`}></div>
            <div className="relative z-10 text-center">
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} bg-clip-text text-transparent mb-6`}>
                {t.whyChoose.crossPlatform.title}
              </h3>
              <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto leading-relaxed`}>
                {t.whyChoose.crossPlatform.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['macOS Safari', 'Chrome', 'Edge', 'Opera'].map((platform, index) => (
                  <span key={index} className={`px-6 py-3 rounded-full font-medium border transition-all duration-300 hover:scale-105 ${
                    index === 0 ? `${isDarkTheme ? 'bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30' : 'bg-purple-100/80 text-purple-700 border-purple-300/50 hover:bg-purple-200/80'}` :
                    index === 1 ? `${isDarkTheme ? 'bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30' : 'bg-blue-100/80 text-blue-700 border-blue-300/50 hover:bg-blue-200/80'}` :
                    index === 2 ? `${isDarkTheme ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30' : 'bg-cyan-100/80 text-cyan-700 border-cyan-300/50 hover:bg-cyan-200/80'}` :
                    `${isDarkTheme ? 'bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30' : 'bg-green-100/80 text-green-700 border-green-300/50 hover:bg-green-200/80'}`
                  }`}>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className={`py-32 px-6 relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-5xl font-bold text-center bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} bg-clip-text text-transparent mb-16`}>
            {t.privacy.title}
          </h2>
          
          <div className={`relative p-10 rounded-3xl ${themeClasses.cardBg} border ${isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30'} backdrop-blur-sm`}>
            <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5' : 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50'}`}></div>
            <div className="relative z-10 space-y-8">
              {[
                { icon: Shield, title: t.privacy.noData.title, desc: t.privacy.noData.description, color: isDarkTheme ? 'text-purple-400' : 'text-purple-600' },
                { icon: Globe, title: t.privacy.local.title, desc: t.privacy.local.description, color: isDarkTheme ? 'text-blue-400' : 'text-blue-600' },
                { icon: Heart, title: t.privacy.noSharing.title, desc: t.privacy.noSharing.description, color: isDarkTheme ? 'text-cyan-400' : 'text-cyan-600' },
                { icon: Zap, title: t.privacy.minimal.title, desc: t.privacy.minimal.description, color: isDarkTheme ? 'text-green-400' : 'text-green-600' },
                { icon: Eye, title: t.privacy.control.title, desc: t.privacy.control.description, color: isDarkTheme ? 'text-yellow-400' : 'text-yellow-600' }
              ].map((item, index) => (
                <div key={index} className={`group flex items-start space-x-6 p-6 rounded-2xl hover:${isDarkTheme ? 'bg-slate-700/30' : 'bg-purple-50/50'} transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-xl ${isDarkTheme ? 'bg-slate-700/50' : 'bg-white/80'} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-xl ${themeClasses.text} mb-3 group-hover:${isDarkTheme ? 'text-purple-300' : 'text-purple-600'} transition-colors duration-300`}>
                      {item.title}
                    </h3>
                    <p className={`${themeClasses.textSecondary} leading-relaxed group-hover:${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className={`py-32 px-6 relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-4xl mx-auto">
          <DonationBlock isDark={isDarkTheme} currentLanguage={currentLanguage} />
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 border-t ${themeClasses.footerBorder} relative z-10 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} bg-clip-text text-transparent`}>
              {t.footer.title}
            </h3>
            <p className={`${themeClasses.textMuted} max-w-2xl mx-auto text-lg`}>
              {t.footer.description}
            </p>
          </div>
          
          <div className={`border-t ${isDarkTheme ? 'border-slate-700' : 'border-purple-200'} pt-8`}>
            <p className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;