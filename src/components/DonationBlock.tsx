import React, { useState } from 'react';
import { Heart, Coffee, Zap, Star, Gift } from 'lucide-react';

interface DonationBlockProps {
  isDark: boolean;
  currentLanguage: string;
}

const donationTexts: Record<string, {
  title: string;
  subtitle: string;
  amounts: string[];
  thankYou: string;
  thankYouMessage: string;
  poweredBy: string;
  enterAmount: string;
  donateButton: string;
  description?: string;
}> = {
  en: {
    title: "Support ColorAdapt",
    subtitle: "Creating a Better Future for Everyone.",
    amounts: ["Buy me a coffee", "Support development", "Premium support", "Custom amount"],
    thankYou: "Thank you for your support! 💜",
    thankYouMessage: "💜",
    poweredBy: "Powered by PayPal",
    enterAmount: "Enter amount",
    donateButton: "Donate"
  },
  ru: {
    title: "Поддержать ColorAdapt",
    subtitle: "Создаем лучшее будущее для всех.",
    amounts: ["Купить кофе", "Поддержать разработку", "Премиум поддержка", "Своя сумма"],
    thankYou: "Спасибо за вашу поддержку! 💜",
    thankYouMessage: "💜",
    poweredBy: "Работает на PayPal",
    enterAmount: "Введите сумму",
    donateButton: "Пожертвовать"
  },
  es: {
    title: "Apoya ColorAdapt",
    subtitle: "Creando un Mejor Futuro para Todos.",
    amounts: ["Cómprame un café", "Apoya el desarrollo", "Soporte premium", "Cantidad personalizada"],
    thankYou: "¡Gracias por tu apoyo! 💜",
    thankYouMessage: "💜",
    poweredBy: "Impulsado por PayPal",
    enterAmount: "Ingrese cantidad",
    donateButton: "Donar"
  },
  zh: {
    title: "支持 ColorAdapt",
    subtitle: "为每个人创造更美好的未来。",
    amounts: ["请我喝咖啡", "支持开发", "高级支持", "自定义金额"],
    thankYou: "感谢您的支持！💜",
    thankYouMessage: "💜",
    poweredBy: "由 PayPal 提供支持",
    enterAmount: "输入金额",
    donateButton: "捐赠"
  },
  fr: {
    title: "Soutenir ColorAdapt",
    subtitle: "Créer un Meilleur Avenir pour Tous.",
    amounts: ["M'offrir un café", "Soutenir le développement", "Support premium", "Montant personnalisé"],
    thankYou: "Merci pour votre soutien ! 💜",
    thankYouMessage: "💜",
    poweredBy: "Alimenté par PayPal",
    enterAmount: "Entrez le montant",
    donateButton: "Faire un don"
  },
  de: {
    title: "ColorAdapt unterstützen",
    subtitle: "Eine bessere Zukunft für alle schaffen.",
    amounts: ["Kauf mir einen Kaffee", "Entwicklung unterstützen", "Premium-Support", "Benutzerdefinierter Betrag"],
    thankYou: "Vielen Dank für Ihre Unterstützung! 💜",
    thankYouMessage: "💜",
    poweredBy: "Unterstützt von PayPal",
    enterAmount: "Betrag eingeben",
    donateButton: "Spenden"
  },
  hi: {
    title: "ColorAdapt का समर्थन करें",
    subtitle: "सभी के लिए बेहतर भविष्य बनाना।",
    amounts: ["मुझे कॉफी खरीदें", "विकास का समर्थन करें", "प्रीमियम सहायता", "कस्टम राशि"],
    thankYou: "आपके समर्थन के लिए धन्यवाद! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal द्वारा संचालित",
    enterAmount: "राशि दर्ज करें",
    donateButton: "दान करें"
  },
  ja: {
    title: "ColorAdaptをサポート",
    subtitle: "すべての人のためのより良い未来を創造する。",
    amounts: ["コーヒーを買う", "開発をサポート", "プレミアムサポート", "カスタム金額"],
    thankYou: "ご支援ありがとうございます！💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal提供",
    enterAmount: "金額を入力",
    donateButton: "寄付する"
  },
  ko: {
    title: "ColorAdapt 지원하기",
    subtitle: "모든 사람을 위한 더 나은 미래를 만들기.",
    amounts: ["커피 사주기", "개발 지원", "프리미엄 지원", "사용자 지정 금액"],
    thankYou: "지원해 주셔서 감사합니다! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal 제공",
    enterAmount: "금액 입력",
    donateButton: "기부하기"
  },
  ar: {
    title: "دعم ColorAdapt",
    subtitle: "خلق مستقبل أفضل للجميع.",
    amounts: ["اشتري لي قهوة", "دعم التطوير", "دعم ممتاز", "مبلغ مخصص"],
    thankYou: "شكراً لدعمك! 💜",
    thankYouMessage: "💜",
    poweredBy: "مدعوم من PayPal",
    enterAmount: "أدخل المبلغ",
    donateButton: "تبرع"
  },
  pt: {
    title: "Apoiar ColorAdapt",
    subtitle: "Criando um Futuro Melhor para Todos.",
    amounts: ["Compre-me um café", "Apoiar desenvolvimento", "Suporte premium", "Valor personalizado"],
    thankYou: "Obrigado pelo seu apoio! 💜",
    thankYouMessage: "💜",
    poweredBy: "Alimentado por PayPal",
    enterAmount: "Digite o valor",
    donateButton: "Doar"
  },
  bn: {
    title: "ColorAdapt সমর্থন করুন",
    subtitle: "সবার জন্য একটি ভালো ভবিষ্যৎ তৈরি করা।",
    amounts: ["আমাকে কফি কিনে দিন", "উন্নয়ন সমর্থন করুন", "প্রিমিয়াম সহায়তা", "কাস্টম পরিমাণ"],
    thankYou: "আপনার সমর্থনের জন্য ধন্যবাদ! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal দ্বারা চালিত",
    enterAmount: "পরিমাণ লিখুন",
    donateButton: "দান করুন"
  },
  th: {
    title: "สนับสนุน ColorAdapt",
    subtitle: "สร้างอนาคตที่ดีกว่าสำหรับทุกคน",
    amounts: ["ซื้อกาแฟให้ฉัน", "สนับสนุนการพัฒนา", "การสนับสนุนระดับพรีเมียม", "จำนวนที่กำหนดเอง"],
    thankYou: "ขอบคุณสำหรับการสนับสนุนของคุณ! 💜",
    thankYouMessage: "💜",
    poweredBy: "ขับเคลื่อนโดย PayPal",
    enterAmount: "ป้อนจำนวน",
    donateButton: "บริจาค"
  },
  uk: {
    title: "Підтримати ColorAdapt",
    subtitle: "Створюємо краще майбутнє для всіх.",
    amounts: ["Купити каву", "Підтримати розробку", "Преміум підтримка", "Своя сума"],
    thankYou: "Дякуємо за вашу підтримку! 💜",
    thankYouMessage: "💜",
    poweredBy: "Працює на PayPal",
    enterAmount: "Введіть суму",
    donateButton: "Пожертвувати"
  },
  tr: {
    title: "ColorAdapt'ı Destekle",
    subtitle: "Herkes İçin Daha İyi Bir Gelecek Yaratmak.",
    amounts: ["Bana kahve al", "Geliştirmeyi destekle", "Premium destek", "Özel tutar"],
    thankYou: "Desteğiniz için teşekkürler! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal tarafından desteklenmektedir",
    enterAmount: "Tutarı girin",
    donateButton: "Bağış Yap"
  },
  vi: {
    title: "Hỗ trợ ColorAdapt",
    subtitle: "Tạo Tương lai Tốt hơn cho Mọi người.",
    amounts: ["Mua cà phê cho tôi", "Hỗ trợ phát triển", "Hỗ trợ premium", "Số tiền tùy chỉnh"],
    thankYou: "Cảm ơn bạn đã hỗ trợ! 💜",
    thankYouMessage: "💜",
    poweredBy: "Được hỗ trợ bởi PayPal",
    enterAmount: "Nhập số tiền",
    donateButton: "Quyên góp"
  },
  it: {
    title: "Supporta ColorAdapt",
    subtitle: "Creare un Futuro Migliore per Tutti.",
    amounts: ["Comprami un caffè", "Supporta lo sviluppo", "Supporto premium", "Importo personalizzato"],
    thankYou: "Grazie per il tuo supporto! 💜",
    thankYouMessage: "💜",
    poweredBy: "Alimentato da PayPal",
    enterAmount: "Inserisci importo",
    donateButton: "Dona"
  },
  my: {
    title: "ColorAdapt ကို ပံ့ပိုးပါ",
    subtitle: "လူတိုင်းအတွက် ပိုကောင်းသော အနာဂတ်ကို ဖန်တီးခြင်း။",
    amounts: ["ကော်ဖီဝယ်ပေးပါ", "ဖွံ့ဖြိုးတိုးတက်မှုကို ပံ့ပိုးပါ", "ပရီမီယံအထောက်အပံ့", "စိတ်ကြိုက်ပမာဏ"],
    thankYou: "သင့်ထောက်ခံမှုအတွက် ကျေးဇူးတင်ပါသည်! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal ဖြင့် မောင်းနှင်သည်",
    enterAmount: "ပမာဏ ထည့်သွင်းပါ",
    donateButton: "လှူဒါန်းပါ"
  },
  id: {
    title: "Dukung ColorAdapt",
    subtitle: "Menciptakan Masa Depan yang Lebih Baik untuk Semua Orang.",
    amounts: ["Beli saya kopi", "Dukung pengembangan", "Dukungan premium", "Jumlah kustom"],
    thankYou: "Terima kasih atas dukungan Anda! 💜",
    thankYouMessage: "💜",
    poweredBy: "Didukung oleh PayPal",
    enterAmount: "Masukkan jumlah",
    donateButton: "Donasi"
  },
  nl: {
    title: "Steun ColorAdapt",
    subtitle: "Een Betere Toekomst Creëren voor Iedereen.",
    amounts: ["Koop me een koffie", "Ondersteun ontwikkeling", "Premium ondersteuning", "Aangepast bedrag"],
    thankYou: "Bedankt voor je steun! 💜",
    thankYouMessage: "💜",
    poweredBy: "Aangedreven door PayPal",
    enterAmount: "Voer bedrag in",
    donateButton: "Doneren"
  },
  sv: {
    title: "Stöd ColorAdapt",
    subtitle: "Skapa en Bättre Framtid för Alla.",
    amounts: ["Köp mig en kaffe", "Stöd utveckling", "Premium support", "Anpassat belopp"],
    thankYou: "Tack för ditt stöd! 💜",
    thankYouMessage: "💜",
    poweredBy: "Drivs av PayPal",
    enterAmount: "Ange belopp",
    donateButton: "Donera"
  },
  pl: {
    title: "Wesprzyj ColorAdapt",
    subtitle: "Tworzenie Lepszej Przyszłości dla Wszystkich.",
    amounts: ["Kup mi kawę", "Wesprzyj rozwój", "Wsparcie premium", "Niestandardowa kwota"],
    thankYou: "Dziękujemy za wsparcie! 💜",
    thankYouMessage: "💜",
    poweredBy: "Napędzane przez PayPal",
    enterAmount: "Wprowadź kwotę",
    donateButton: "Wesprzyj"
  },
  ro: {
    title: "Susține ColorAdapt",
    subtitle: "Crearea unui Viitor Mai Bun pentru Toți.",
    amounts: ["Cumpără-mi o cafea", "Susține dezvoltarea", "Suport premium", "Sumă personalizată"],
    thankYou: "Mulțumim pentru sprijin! 💜",
    thankYouMessage: "💜",
    poweredBy: "Alimentat de PayPal",
    enterAmount: "Introdu suma",
    donateButton: "Donează"
  },
  hu: {
    title: "Támogasd a ColorAdapt-ot",
    subtitle: "Jobb Jövő Teremtése Mindenkinek.",
    amounts: ["Vegyél nekem egy kávét", "Támogasd a fejlesztést", "Prémium támogatás", "Egyedi összeg"],
    thankYou: "Köszönjük a támogatást! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal által működtetve",
    enterAmount: "Adja meg az összeget",
    donateButton: "Adományozás"
  },
  cs: {
    title: "Podpořte ColorAdapt",
    subtitle: "Vytváření Lepší Budoucnosti pro Všechny.",
    amounts: ["Kupte mi kávu", "Podpořte vývoj", "Prémiová podpora", "Vlastní částka"],
    thankYou: "Děkujeme za vaši podporu! 💜",
    thankYouMessage: "💜",
    poweredBy: "Poháněno PayPal",
    enterAmount: "Zadejte částku",
    donateButton: "Přispět"
  },
  el: {
    title: "Υποστηρίξτε το ColorAdapt",
    subtitle: "Δημιουργώντας ένα Καλύτερο Μέλλον για Όλους.",
    amounts: ["Αγοράστε μου έναν καφέ", "Υποστηρίξτε την ανάπτυξη", "Premium υποστήριξη", "Προσαρμοσμένο ποσό"],
    thankYou: "Ευχαριστούμε για την υποστήριξή σας! 💜",
    thankYouMessage: "💜",
    poweredBy: "Με την υποστήριξη PayPal",
    enterAmount: "Εισάγετε ποσό",
    donateButton: "Δωρεά"
  },
  he: {
    title: "תמכו ב-ColorAdapt",
    subtitle: "יצירת עתיד טוב יותר לכולם.",
    amounts: ["קנו לי קפה", "תמכו בפיתוח", "תמיכה פרימיום", "סכום מותאם אישית"],
    thankYou: "תודה על התמיכה שלכם! 💜",
    thankYouMessage: "💜",
    poweredBy: "מופעל על ידי PayPal",
    enterAmount: "הזן סכום",
    donateButton: "תרומה"
  },
  pa: {
    title: "ColorAdapt ਦਾ ਸਮਰਥਨ ਕਰੋ",
    subtitle: "ਸਭ ਲਈ ਇੱਕ ਬਿਹਤਰ ਭਵਿੱਖ ਬਣਾਉਣਾ।",
    amounts: ["ਮੈਨੂੰ ਕੌਫੀ ਖਰੀਦੋ", "ਵਿਕਾਸ ਦਾ ਸਮਰਥਨ ਕਰੋ", "ਪ੍ਰੀਮੀਅਮ ਸਹਾਇਤਾ", "ਕਸਟਮ ਰਕਮ"],
    thankYou: "ਤੁਹਾਡੇ ਸਮਰਥਨ ਲਈ ਧੰਨਵਾਦ! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal ਦੁਆਰਾ ਸੰਚਾਲਿਤ",
    enterAmount: "ਰਕਮ ਦਰਜ ਕਰੋ",
    donateButton: "ਦਾਨ ਕਰੋ"
  },
  te: {
    title: "ColorAdaptని మద్దతు ఇవ్వండి",
    subtitle: "అందరికీ మంచి భవిష్యత్తును సృష్టించడం।",
    amounts: ["నాకు కాఫీ కొనండి", "అభివృద్ధిని మద్దతు ఇవ్వండి", "ప్రీమియం మద్దతు", "కస్టమ్ మొత్తం"],
    thankYou: "మీ మద్దతుకు ధన్యవాదాలు! 💜",
    thankYouMessage: "💜",
    poweredBy: "PayPal ద్వారా నడుపుతుంది",
    enterAmount: "మొత్తం నమోదు చేయండి",
    donateButton: "దానం చేయండి"
  },
  jv: {
    title: "Dhukung ColorAdapt",
    subtitle: "Nggawe Masa Depan sing Luwih Apik kanggo Kabeh.",
    amounts: ["Tuku kopi kanggo aku", "Dhukung pangembangan", "Dhukungan premium", "Jumlah kustom"],
    thankYou: "Matur nuwun kanggo dhukungan sampeyan! 💜",
    thankYouMessage: "💜",
    poweredBy: "Didhukung dening PayPal",
    enterAmount: "Ketik jumlah",
    donateButton: "Sumbangan"
  }
};

export const DonationBlock: React.FC<DonationBlockProps> = ({ isDark, currentLanguage }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const t = donationTexts[currentLanguage] || donationTexts.en;
  
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
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent('hoper_Jay@i.ua')}&amount=${finalAmount}&currency_code=USD&item_name=${encodeURIComponent('ColorAdapt Development Support')}&no_note=0&cn=${encodeURIComponent('Message for developer (optional)')}&no_shipping=1&return=${encodeURIComponent(window.location.origin)}&cancel_return=${encodeURIComponent(window.location.origin)}`;
    
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