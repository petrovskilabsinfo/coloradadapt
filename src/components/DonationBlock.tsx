import React, { useState } from 'react';
import { Heart, Coffee, Zap, Star, Gift } from 'lucide-react';

interface DonationBlockProps {
  isDark: boolean;
  currentLanguage: string;
}

const donationTexts = {
  en: {
    title: "Support ColorAdapt Development",
    subtitle: "Help us bring better visual comfort to everyone",
    description: "Your support helps us continue developing ColorAdapt and adding new features for visual accessibility.",
    amounts: ["Buy me a coffee", "Support development", "Premium support", "Custom amount"],
    thankYou: "Thank you for your support! 💜",
    thankYouMessage: "Your contribution helps make ColorAdapt better for everyone!",
    poweredBy: "Powered by PayPal",
    enterAmount: "Enter amount",
    donateButton: "Donate"
  },
  ru: {
    title: "Поддержите разработку ColorAdapt",
    subtitle: "Помогите нам создавать лучший визуальный комфорт для всех",
    description: "Ваша поддержка помогает нам продолжать разработку ColorAdapt и добавлять новые функции для визуальной доступности.",
    amounts: ["Купить кофе", "Поддержать разработку", "Премиум поддержка", "Своя сумма"],
    thankYou: "Спасибо за вашу поддержку! 💜",
    thankYouMessage: "Ваш вклад помогает сделать ColorAdapt лучше для всех!",
    poweredBy: "При поддержке PayPal",
    enterAmount: "Введите сумму",
    donateButton: "Поддержать"
  },
  es: {
    title: "Apoya el desarrollo de ColorAdapt",
    subtitle: "Ayúdanos a brindar mejor comodidad visual para todos",
    description: "Tu apoyo nos ayuda a continuar desarrollando ColorAdapt y agregando nuevas funciones para la accesibilidad visual.",
    amounts: ["Cómprame un café", "Apoyar desarrollo", "Soporte premium", "Cantidad personalizada"],
    thankYou: "¡Gracias por tu apoyo! 💜",
    thankYouMessage: "¡Tu contribución ayuda a hacer ColorAdapt mejor para todos!",
    poweredBy: "Powered by PayPal",
    enterAmount: "Ingrese cantidad",
    donateButton: "Donar"
  },
  fr: {
    title: "Soutenez le développement de ColorAdapt",
    subtitle: "Aidez-nous à apporter un meilleur confort visuel à tous",
    description: "Votre soutien nous aide à continuer le développement de ColorAdapt et à ajouter de nouvelles fonctionnalités pour l'accessibilité visuelle.",
    amounts: ["Offrez-moi un café", "Soutenir le développement", "Support premium", "Montant personnalisé"],
    thankYou: "Merci pour votre soutien ! 💜",
    thankYouMessage: "Votre contribution aide à améliorer ColorAdapt pour tous !",
    poweredBy: "Powered by PayPal",
    enterAmount: "Entrez le montant",
    donateButton: "Faire un don"
  },
  de: {
    title: "Unterstützen Sie die ColorAdapt-Entwicklung",
    subtitle: "Helfen Sie uns, besseren visuellen Komfort für alle zu schaffen",
    description: "Ihre Unterstützung hilft uns, ColorAdapt weiterzuentwickeln und neue Funktionen für visuelle Barrierefreiheit hinzuzufügen.",
    amounts: ["Kaufen Sie mir einen Kaffee", "Entwicklung unterstützen", "Premium-Support", "Benutzerdefinierter Betrag"],
    thankYou: "Vielen Dank für Ihre Unterstützung! 💜",
    thankYouMessage: "Ihr Beitrag hilft, ColorAdapt für alle besser zu machen!",
    poweredBy: "Powered by PayPal",
    enterAmount: "Betrag eingeben",
    donateButton: "Spenden"
  },
  ja: {
    title: "ColorAdapt開発をサポート",
    subtitle: "皆様により良い視覚的快適性を提供するためにご協力ください",
    description: "あなたのサポートは、ColorAdaptの開発を継続し、視覚的アクセシビリティのための新機能を追加するのに役立ちます。",
    amounts: ["コーヒーをおごる", "開発をサポート", "プレミアムサポート", "カスタム金額"],
    thankYou: "ご支援ありがとうございます！💜",
    thankYouMessage: "あなたの貢献はColorAdaptをみんなのためにより良くします！",
    poweredBy: "Powered by PayPal",
    enterAmount: "金額を入力",
    donateButton: "寄付する"
  },
  ar: {
    title: "دعم تطوير ColorAdapt",
    subtitle: "ساعدنا في توفير راحة بصرية أفضل للجميع",
    description: "دعمك يساعدنا على مواصلة تطوير ColorAdapt وإضافة ميزات جديدة لإمكانية الوصول البصري.",
    amounts: ["اشتر لي قهوة", "دعم التطوير", "دعم مميز", "مبلغ مخصص"],
    thankYou: "شكرا لدعمك! 💜",
    thankYouMessage: "مساهمتك تساعد في جعل ColorAdapt أفضل للجميع!",
    poweredBy: "Powered by PayPal",
    enterAmount: "أدخل المبلغ",
    donateButton: "تبرع"
  },
  hi: {
    title: "ColorAdapt विकास का समर्थन करें",
    subtitle: "हमें सभी के लिए बेहतर दृश्य आराम लाने में मदद करें",
    description: "आपका समर्थन हमें ColorAdapt का विकास जारी रखने और दृश्य पहुंच के लिए नई सुविधाएं जोड़ने में मदद करता है।",
    amounts: ["मुझे कॉफी खरीदें", "विकास का समर्थन करें", "प्रीमियम समर्थन", "कस्टम राशि"],
    thankYou: "आपके समर्थन के लिए धन्यवाद! 💜",
    thankYouMessage: "आपका योगदान सभी के लिए ColorAdapt को बेहतर बनाने में मदद करता है!",
    poweredBy: "Powered by PayPal",
    enterAmount: "राशि दर्ज करें",
    donateButton: "दान करें"
  },
  it: {
    title: "Sostieni lo sviluppo di ColorAdapt",
    subtitle: "Aiutaci a portare un migliore comfort visivo a tutti",
    description: "Il tuo supporto ci aiuta a continuare a sviluppare ColorAdapt e ad aggiungere nuove funzionalità per l'accessibilità visiva.",
    amounts: ["Offrimi un caffè", "Sostieni lo sviluppo", "Supporto premium", "Importo personalizzato"],
    thankYou: "Grazie per il tuo supporto! 💜",
    thankYouMessage: "Il tuo contributo aiuta a rendere ColorAdapt migliore per tutti!",
    poweredBy: "Powered by PayPal",
    enterAmount: "Inserisci importo",
    donateButton: "Dona"
  },
  zh: {
    title: "支持 ColorAdapt 开发",
    subtitle: "帮助我们为所有人带来更好的视觉舒适度",
    description: "您的支持帮助我们继续开发 ColorAdapt 并为视觉可访问性添加新功能。",
    amounts: ["请我喝咖啡", "支持开发", "高级支持", "自定义金额"],
    thankYou: "感谢您的支持！💜",
    thankYouMessage: "您的贡献帮助 ColorAdapt 为所有人变得更好！",
    poweredBy: "Powered by PayPal",
    enterAmount: "输入金额",
    donateButton: "捐赠"
  },
  tr: {
    title: "ColorAdapt Geliştirmesini Destekleyin",
    subtitle: "Herkese daha iyi görsel konfor getirmemize yardımcı olun",
    description: "Desteğiniz ColorAdapt'i geliştirmeye devam etmemize ve görsel erişilebilirlik için yeni özellikler eklememize yardımcı oluyor.",
    amounts: ["Bana bir kahve ısmarla", "Geliştirmeyi destekle", "Premium destek", "Özel miktar"],
    thankYou: "Desteğiniz için teşekkürler! 💜",
    thankYouMessage: "Katkınız ColorAdapt'i herkes için daha iyi hale getirmeye yardımcı oluyor!",
    poweredBy: "Powered by PayPal",
    enterAmount: "Miktar girin",
    donateButton: "Bağış yap"
  },
  ko: {
    title: "ColorAdapt 개발 지원",
    subtitle: "모든 사람에게 더 나은 시각적 편안함을 제공하는 데 도움을 주세요",
    description: "귀하의 지원은 ColorAdapt를 계속 개발하고 시각적 접근성을 위한 새로운 기능을 추가하는 데 도움이 됩니다.",
    amounts: ["커피 사주기", "개발 지원", "프리미엄 지원", "사용자 지정 금액"],
    thankYou: "지원해 주셔서 감사합니다! 💜",
    thankYouMessage: "귀하의 기여는 모든 사람을 위해 ColorAdapt를 더 좋게 만드는 데 도움이 됩니다!",
    poweredBy: "Powered by PayPal",
    enterAmount: "금액 입력",
    donateButton: "기부하기"
  }
};

export const DonationBlock: React.FC<DonationBlockProps> = ({ isDark, currentLanguage }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const t = donationTexts[currentLanguage as keyof typeof donationTexts] || donationTexts.en;
  
  const predefinedAmounts = [
    { amount: 3, icon: Coffee, label: t.amounts[0], color: 'from-amber-500 to-orange-500' },
    { amount: 10, icon: Heart, label: t.amounts[1], color: 'from-pink-500 to-red-500' },
    { amount: 25, icon: Star, label: t.amounts[2], color: 'from-purple-500 to-indigo-500' },
    { amount: 0, icon: Gift, label: t.amounts[3], color: 'from-green-500 to-emerald-500' }
  ];

  const themeClasses = {
    background: isDark ? 'bg-slate-800/30' : 'bg-white/70',
    border: isDark ? 'border-purple-500/30' : 'border-purple-300/40',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDark ? 'bg-slate-700/50' : 'bg-white/80',
    cardHover: isDark ? 'hover:bg-slate-600/50' : 'hover:bg-purple-50/80',
    inputBg: isDark ? 'bg-slate-700/50' : 'bg-white/90',
    inputBorder: isDark ? 'border-slate-600' : 'border-purple-200'
  };

  const handleDonate = (amount: number) => {
    const finalAmount = amount === 0 ? parseFloat(customAmount) || 5 : amount;
    
    // PayPal donation URL using email address
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent('hoper_Jay@i.ua')}&amount=${finalAmount}&currency_code=USD&item_name=${encodeURIComponent('ColorAdapt Development Support')}&no_note=0&cn=${encodeURIComponent('Message for developer (optional)')}&no_shipping=1&return=${encodeURIComponent('https://coloradapt-visual-co-cab6.bolt.host')}&cancel_return=${encodeURIComponent('https://coloradapt-visual-co-cab6.bolt.host')}`;
    
    // Show thank you message and open PayPal
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    
    // Open PayPal donation page
    window.open(paypalUrl, '_blank');
  };

  if (showThankYou) {
    return (
      <div className={`relative p-8 rounded-3xl ${themeClasses.background} border ${themeClasses.border} backdrop-blur-sm text-center`}>
        <div className="animate-bounce mb-4">
          <Heart className="w-16 h-16 mx-auto text-pink-500" />
        </div>
        <h3 className={`text-2xl font-bold ${themeClasses.text} mb-2`}>
          {t.thankYou}
        </h3>
        <p className={themeClasses.textSecondary}>
          {t.thankYouMessage}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative p-8 rounded-3xl ${themeClasses.background} border ${themeClasses.border} backdrop-blur-sm overflow-hidden`}>
      {/* Decorative background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5' : 'bg-gradient-to-br from-purple-100/50 to-pink-100/50'}`}></div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute w-4 h-4 text-pink-400/30 animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 70}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} bg-clip-text text-transparent`}>
              {t.title}
            </h3>
          </div>
          <p className={`text-xl ${themeClasses.textSecondary} mb-4`}>
            {t.subtitle}
          </p>
          <p className={`${themeClasses.textMuted} max-w-2xl mx-auto`}>
            {t.description}
          </p>
        </div>

        {/* Donation amounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {predefinedAmounts.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedAmount(item.amount);
                if (item.amount > 0) handleDonate(item.amount);
              }}
              className={`group relative p-6 rounded-2xl ${themeClasses.cardBg} border ${
                selectedAmount === item.amount ? 'border-purple-500' : themeClasses.border
              } ${themeClasses.cardHover} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                {item.amount > 0 && (
                  <div className={`text-2xl font-bold ${themeClasses.text} mb-1`}>
                    ${item.amount}
                  </div>
                )}
                <div className={`text-sm ${themeClasses.textSecondary}`}>
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Custom amount input */}
        {selectedAmount === 0 && (
          <div className="mb-8 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted}`}>$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder={t.enterAmount}
                  className={`pl-8 pr-4 py-3 rounded-xl ${themeClasses.inputBg} border ${themeClasses.inputBorder} ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  min="1"
                  step="0.01"
                />
              </div>
              <button
                onClick={() => handleDonate(0)}
                disabled={!customAmount || parseFloat(customAmount) <= 0}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                {t.donateButton}
              </button>
            </div>
          </div>
        )}

        {/* PayPal branding */}
        <div className="text-center">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? 'bg-slate-700/50' : 'bg-gray-100/80'} ${themeClasses.textMuted} text-sm`}>
            <Zap className="w-4 h-4" />
            <span>{t.poweredBy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};