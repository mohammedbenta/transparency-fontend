import type { MessageKey } from "@/lib/messages";

export type Lang = "ar" | "en";
export type Text = { ar: string; en: string };

export const navItems: { href: string; key: MessageKey }[] = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/doctors", key: "nav.doctors" },
  { href: "/about", key: "nav.about" },
  { href: "/#testimonials", key: "nav.reviews" },
  { href: "/contact", key: "nav.contact" },
];

export type Service = {
  slug: string;
  name: Text;
  problem: Text;
  summary: Text;
  what: Text;
  who: Text;
  experience: Text;
  why: Text;
  image: string;
  imageAlt: Text;
  fromUsd?: number;
};

export const services: Service[] = [
  {
    slug: "smile-design",
    name: { ar: "تصميم الابتسامة", en: "Smile design" },
    problem: {
      ar: "عندما تريد ابتسامة متناسقة… بخطة تُشرح لك قبل أي خطوة.",
      en: "When you want a balanced smile — with a plan explained before any step.",
    },
    summary: {
      ar: "دراسة ملامحك وأسنانك — وقد تشمل عدسات خزفية — لنتيجة طبيعية تليق بك، لا قالباً جاهزاً.",
      en: "A study of your features and teeth — which may include ceramic veneers — toward a natural result, not a ready-made template.",
    },
    what: {
      ar: "تصميم الابتسامة تقييم لتناسب الأسنان مع ملامح الوجه، واللون، وخط الابتسامة. تنشر العيادة حالات لعدسات خزفية أمامية ولمسات محدودة عندما لا تحتاج الابتسامة تدخلاً كاملاً. نبدأ بالاستماع، ثم نوضح الخيارات دون استعجال.",
      en: "Smile design assesses how teeth relate to facial features, shade, and the smile line. The clinic publishes cases of ceramic veneers on the front teeth, and limited refinements when a full makeover is not needed. We start by listening, then explain options without rushing.",
    },
    who: {
      ar: "لمن يرغب في تحسين مظهر ابتسامته، أو يلاحظ فرقاً في لون أو شكل الأسنان الأمامية، ويريد خطة واضحة قبل أي خطوة.",
      en: "For those who want to refine their smile, or notice a difference in the colour or shape of front teeth, and prefer a clear plan before any step.",
    },
    experience: {
      ar: "تبدأ الزيارة باستشارة هادئة. نناقش هدفك، ونشرح ما يمكن تحقيقه. أحياناً تكفي لمسة على أسنان أمامية محدودة. القرار يبقى بيدك بعد أن تتضح الصورة.",
      en: "The visit begins with a calm consultation. We discuss your goal and explain what is possible — sometimes a touch on a few front teeth is enough. The decision remains yours once the picture is clear.",
    },
    why: {
      ar: "التجميل هنا ليس مبالغة. هو دقة في التفاصيل، وبيئة راقية، ونتيجة تبدو كأنها ابتسامتك في أوضح نسخة منها.",
      en: "Aesthetics here are not exaggeration. They are precision in the details, a refined setting, and a result that still feels like your smile — in its clearest form.",
    },
    image: "/images/services/smile-design.jpg",
    imageAlt: {
      ar: "ابتسامة قريبة بعد عناية تجميلية",
      en: "A close smile after aesthetic dental care",
    },
    fromUsd: 5000,
  },
  {
    slug: "prosthodontics",
    name: { ar: "التركيبات", en: "Prosthodontics" },
    problem: {
      ar: "عندما تحتاج أسناناً تُعيد الوظيفة والشكل معاً.",
      en: "When you need teeth that restore both function and form.",
    },
    summary: {
      ar: "تركيبات يخطّطها استشاري التركيبات لتعويض الأسنان واستعادة الراحة في الأكل والمظهر.",
      en: "Restorations planned by a prosthodontist to replace teeth and restore comfort in eating and appearance.",
    },
    what: {
      ar: "طب التركيبات يُعنى بتعويض الأسنان المفقودة أو المتضررة. في العيادة يظهر د. جعفر سالم استشارياً للتركيبات في هايلايت الفريق الرسمي. الخيارات — كالتاج أو الجسر أو غيرهما — تُحدَّد بعد التقييم.",
      en: "Prosthodontics is concerned with replacing missing or damaged teeth. Dr. Jaffar Salem appears as consultant prosthodontist in the clinic’s official team highlight. Options such as a crown or bridge are determined after assessment.",
    },
    who: {
      ar: "لمن فقد سناً أو أكثر، أو يحتاج إعادة بناء لتعويض سابق، ويريد حلاً يوازن بين الوظيفة والمظهر.",
      en: "For those who have lost one or more teeth, or need to rebuild a previous restoration, and want a solution that balances function and appearance.",
    },
    experience: {
      ar: "يبدأ الأمر بفهم مشكلتك الحالية، ثم شرح الخيارات بلغة واضحة. لا نعد بنتيجة جاهزة قبل التقييم.",
      en: "It begins with understanding your current concern, then explaining available options in plain language. We do not promise a finished result before assessment.",
    },
    why: {
      ar: "العناية هنا شخصية: خطة تناسب حالتك، وبيئة صُممت لتكون الزيارة أكثر هدوءاً ووضوحاً.",
      en: "Care here is personal: a plan that fits your case, and an environment designed to make the visit calmer and clearer.",
    },
    image: "/images/services/prosthodontics-bridge-2.jpg",
    imageAlt: {
      ar: "رسم توضيحي لجسر أسنان: دعامتان محضّرتان وتركيبة ثلاثية",
      en: "Illustration of a dental bridge: two prepared abutments and a three-unit restoration",
    },
  },
  {
    slug: "endodontics",
    name: { ar: "علاج الجذور", en: "Endodontics" },
    problem: {
      ar: "عندما يكون الألم أو الالتهاب داخل السن… وتحتاج علاجاً دقيقاً.",
      en: "When pain or inflammation is inside the tooth — and you need precise care.",
    },
    summary: {
      ar: "علاج لبّ السن على يد استشاري علاج العصب، مع وضوح في كل خطوة.",
      en: "Root canal care with an endodontist — and clarity at every step.",
    },
    what: {
      ar: "علاج الجذور يتعامل مع التهاب أو إصابة لبّ السن. في العيادة يظهر د. ياسر الغامدي استشارياً لعلاج العصب في هايلايت الفريق الرسمي. نوضح الإجراء والغرض منه قبل البدء، دون وعود طبية مسبقة.",
      en: "Endodontics addresses inflammation or injury of the tooth pulp. Dr. Yasser Alghamdi appears as consultant endodontist in the clinic’s official team highlight. We explain the procedure and its purpose before starting, without advance medical promises.",
    },
    who: {
      ar: "لمن يعاني ألماً عميقاً في السن، أو حساسية مستمرة، أو أُحيل لعلاج جذور بعد تقييم.",
      en: "For those with deep tooth pain, lingering sensitivity, or a referral for root canal treatment after assessment.",
    },
    experience: {
      ar: "نحرص على شرح ما سيحدث في الزيارة، والإجابة على أسئلتك، وجعل البيئة هادئة قدر الإمكان.",
      en: "We take care to explain what will happen in the visit, answer your questions, and keep the environment as calm as possible.",
    },
    why: {
      ar: "الدقة جزء من هوية العيادة. وعلاج الجذور يتطلب يداً هادئة وشرحاً لا يُستعجل.",
      en: "Precision is part of the clinic’s identity. Root canal care asks for a calm hand and an explanation that is not rushed.",
    },
    image: "/images/clinic/operatory.jpg",
    imageAlt: {
      ar: "غرفة علاج دقيقة في عيادات الشفافية",
      en: "A precise treatment room at Transparency Dental Clinics",
    },
  },
  {
    slug: "orthodontics",
    name: { ar: "تقويم الأسنان", en: "Orthodontics" },
    problem: {
      ar: "عندما تريد اصطفافاً أهدأ… بخطة تُفهم قبل الالتزام.",
      en: "When you want calmer alignment — with a plan you understand before committing.",
    },
    summary: {
      ar: "تقويم يُناقش كرحلة: الهدف، والخيارات — ومنها التقويم الشفاف — بعد التقييم.",
      en: "Orthodontics discussed as a journey: the goal, and the options — including clear aligners — after assessment.",
    },
    what: {
      ar: "تقويم الأسنان يعنى بتصحيح اصطفاف الأسنان. العيادة تقدّم التقويم مع استشاري تقويم الأسنان د. إبراهيم بامقا — كما يظهر في هايلايت الفريق الرسمي وعلى قنوات العيادة. الخطة لا تُحدد إلا بعد فحص.",
      en: "Orthodontics is concerned with aligning teeth. The clinic offers this care with consultant orthodontist Dr. Ibraheem Bamaga — as shown in the official team highlight and on the clinic’s channels. A plan is only set after examination.",
    },
    who: {
      ar: "لمن يلاحظ تزاحماً أو فراغات أو عضة غير مريحة، ويريد أن يفهم خيارات التقويم بهدوء.",
      en: "For those who notice crowding, spaces, or an uncomfortable bite, and want to understand orthodontic options calmly.",
    },
    experience: {
      ar: "الاستشارة الأولى للفهم: ماذا ترى، وما الذي يهمك، وما المسارات الممكنة. لا نطلب قراراً في الزيارة الأولى إن احتجت وقتاً.",
      en: "The first consultation is for understanding: what you see, what matters to you, and which paths are possible. We do not require a decision on the first visit if you need time.",
    },
    why: {
      ar: "رحلة التقويم طويلة نسبياً. لذلك نبدأ بوضوح وثقة في المكان الذي ستعود إليه.",
      en: "Orthodontic care is a longer journey. That is why we start with clarity — and trust in the place you will return to.",
    },
    image: "/images/services/orthodontics.jpg",
    imageAlt: {
      ar: "تقويم شفاف على رخام هادئ",
      en: "A clear aligner on quiet marble",
    },
  },
  {
    slug: "implants",
    name: { ar: "زراعة الأسنان", en: "Dental implants" },
    problem: {
      ar: "عندما يُفقد سن… وتريد بديلاً ثابتاً يُناقش بوضوح.",
      en: "When a tooth is lost — and you want a fixed option discussed clearly.",
    },
    summary: {
      ar: "زراعة تُعرض كخيار بعد التقييم، مع شرح الرحلة المتوقعة دون ضمانات مسبقة.",
      en: "Implants presented as an option after assessment, with the expected journey explained — without advance guarantees.",
    },
    what: {
      ar: "زراعة الأسنان خيار لتعويض سن مفقود. د. جعفر سالم يُدرج الزراعة ضمن تخصصه كاستشاري تركيبات، ود. أحمد نواوي يذكر زراعة الأسنان ضمن مؤهلاته. الملاءمة تُحدَّد بعد الفحص.",
      en: "A dental implant is an option to replace a missing tooth. Dr. Jaffar Salem includes implantology with his prosthodontic practice, and Dr. Ahmad Nawawi lists implantology among his credentials. Suitability is determined after examination.",
    },
    who: {
      ar: "لمن فقد سناً ويريد أن يفهم إن كانت الزراعة مناسبة لحالته.",
      en: "For those who have lost a tooth and want to understand whether an implant is appropriate for their case.",
    },
    experience: {
      ar: "الاستشارة توضح الخطوات، والفحوصات المطلوبة، والبدائل إن وُجدت. لا نبدأ قبل أن تفهم المسار.",
      en: "The consultation outlines the steps, any required investigations, and alternatives if they exist. We do not start until you understand the path.",
    },
    why: {
      ar: "تعويض السن قرار يظهر في كل ابتسامة. لذلك نتعامل معه بهدوء، وتفاصيل، واحترام لملامحك.",
      en: "Replacing a tooth is a decision that shows in every smile. That is why we approach it with calm, detail, and respect for your features.",
    },
    image: "/images/services/implant-out5.jpg",
    imageAlt: {
      ar: "رسم يوضح زرعة الأسنان: تاج ودعامة وبرغي في العظم",
      en: "Diagram of a dental implant: crown, abutment, and fixture in the bone",
    },
    fromUsd: 5000,
  },
  {
    slug: "general-care",
    name: { ar: "العناية العامة", en: "General dentistry" },
    problem: {
      ar: "عندما تريد فحصاً أو تنظيفاً… في زيارة هادئة.",
      en: "When you want an examination or a clean — in a calm visit.",
    },
    summary: {
      ar: "فحص وتنظيف وعناية يومية بيد هادئة، في بيئة صُممت لتكون ألطف مما قد تكون اعتدت عليه.",
      en: "Examination, cleaning, and everyday care with a light hand — in a setting designed to feel gentler than you may be used to.",
    },
    what: {
      ar: "العناية العامة تشمل الفحص والتنظيف. إحدى المراجعات المنشورة على موقع العيادة تصف تنظيفاً مع د. أحمد نواوي بيد خفيفة، دون الإحساس المعتاد بالحساسية.",
      en: "General care includes examination and cleaning. A published comment on the clinic site describes a cleaning with Dr. Ahmad Nawawi with a light hand, without the usual sense of sensitivity.",
    },
    who: {
      ar: "لمن يؤجّل التنظيف بسبب الحساسية أو التوتر، أو يريد المحافظة على صحة فمه بزيارات مرتّبة.",
      en: "For those who postpone cleaning because of sensitivity or anxiety, or who want to maintain oral health with ordered visits.",
    },
    experience: {
      ar: "نبدأ بفهم ما يزعجك في الزيارات السابقة. العيادة وُصفت من مراجِعة بأنها مريحة وتستخدم تقنيات حديثة.",
      en: "We start by understanding what has bothered you in previous visits. A patient has described the clinic as comfortable and using modern technologies.",
    },
    why: {
      ar: "حتى الموعد البسيط يستحق بيئة راقية ويداً هادئة. هذا جزء من فلسفة العيادة: العناية أكثر من ضرورة.",
      en: "Even a simple appointment deserves a refined setting and a calm hand. That is part of the clinic’s philosophy: care is more than a necessity.",
    },
    image: "/images/clinic/reception.jpg",
    imageAlt: {
      ar: "استقبال عيادات الشفافية: رخام، ذهب، وضوء نهاري",
      en: "Transparency reception: marble, gold, and daylight",
    },
  },
];

export const featuredServiceSlugs = [
  "smile-design",
  "prosthodontics",
  "implants",
] as const;

export const featuredServices: Service[] = featuredServiceSlugs.map(
  (slug) => services.find((s) => s.slug === slug)!,
);

export const doctors = [
  {
    slug: "ahmed-nawawi",
    name: { ar: "د. أحمد نواوي", en: "Dr. Ahmed Nawawi" },
    role: { ar: "الرئيس التنفيذي والشريك المؤسس", en: "Chief Executive Officer & Co-Founder" },
    specialty: { ar: "طب الأسنان", en: "Dentistry" },
    bio: {
      ar: "يقود د. أحمد نواوي عيادات الشفافية لطب الأسنان في جدة. يظهر على الموقع كطبيب يقدّم العناية المباشرة — ومنها التنظيف — وكقائد للعيادة بفلسفة واضحة: أن تكون رعاية الأسنان رحلة شخصية راقية، لا مجرد ضرورة.",
      en: "Dr. Ahmed Nawawi leads Transparency Dental Clinics in Jeddah. He appears on the clinic site as a dentist providing direct care — including cleaning — and as the clinic’s leader, with a clear philosophy: dental care should be a luxurious, personal journey, not merely a necessity.",
    },
    credentials: {
      ar: "الرئيس التنفيذي والشريك المؤسس — عيادات الشفافية لطب الأسنان، جدة.",
      en: "CEO and Co-Founder — Transparency Dental Clinics, Jeddah.",
    },
    initials: "أ",
  },
] as const;

export const teamMembers = [
  {
    slug: "ahmad-nawawi",
    photo: "/images/doctors/ahmad-nawawi.jpg",
    name: { ar: "د. أحمد نواوي", en: "Dr. Ahmad Nawawi" },
    role: { ar: "الشريك المؤسس والرئيس التنفيذي", en: "Co-Founder & CEO" },
    href: "/doctors/ahmed-nawawi",
  },
  {
    slug: "jaffar-salem",
    photo: "/images/doctors/jaffar-salem.jpg",
    name: { ar: "د. جعفر سالم", en: "Dr. Jaffar Salem" },
    role: { ar: "استشاري التركيبات", en: "Consultant Prosthodontics" },
  },
  {
    slug: "yasser-alghamdi",
    photo: "/images/doctors/yasser-alghamdi.jpg",
    name: { ar: "د. ياسر الغامدي", en: "Dr. Yasser Alghamdi" },
    role: { ar: "استشاري علاج العصب", en: "Consultant Endodontics" },
  },
  {
    slug: "ibraheem-bamaga",
    photo: "/images/doctors/ibraheem-bamaga.jpg",
    name: { ar: "د. إبراهيم بامقا", en: "Dr. Ibraheem Bamaga" },
    role: { ar: "استشاري تقويم الأسنان", en: "Consultant Orthodontics" },
  },
] as const;

export const testimonials = [
  {
    id: "yaser",
    quote: {
      ar: "عياده فاخره مهتمين بأدق التفاصيل من المكان والخطه العلاجيه والامكانيات المتاحه بكل شي رحت لدكتور جعفر سالم باجعيفر محترف استشاري معنى الكلمه والمكان هادئ واضاءات العياده مريحه وكل شي تصميم المكان غير والعيادات وتقنيات متتطوره عندهم في كل شي والسعر اكيد حيكون شوي مرتفع الشغل غيررررر كله عن المعتاد.",
      en: "A luxurious clinic — they care about the smallest details, from the place and the treatment plan to the capabilities available in everything. I went to Dr. Jaafar Salem Bajuaifer, a professional consultant in the true sense of the word. The place is quiet, the clinic lighting is comfortable, and the design of the place is unlike anything usual — the clinics and the advanced technologies they have in everything. The price will certainly be a bit high. The work is completely different from the usual.",
    },
    name: { ar: "ياسر", en: "Yaser" },
    photo: "/images/reviews/yaser.png",
    verified: true,
  },
  {
    id: "farah",
    quote: {
      ar: "الخدمة تفوق التوقعات. من اللحظة التي تدخل فيها المكان، كل شيء رائع وجميل. الاستقبال في غاية اللطف والتعاون. المكان نفسه أنيق ومريح. أما عن الأطباء، فكانت زيارتي مع الدكتور حسام جُوخدار — وهو بالفعل يستحق تقييم 10 نجوم. عمله أكثر من ممتاز، يجمع بين الخبرة، والرقي، والفن، والمعرفة. أنصح به بشدة!",
      en: "The service exceeds expectations. From the moment you enter, everything is wonderful and beautiful. Reception is extremely kind and helpful. The place itself is elegant and comfortable. As for the doctors, my visit was with Dr. Hussam Jokhdar — and he truly deserves a 10-star rating. His work is more than excellent; it brings together experience, refinement, art, and knowledge. I strongly recommend him!",
    },
    name: { ar: "د. فرح السادات", en: "Dr Farah Alsadat" },
    photo: "/images/reviews/farah.png",
    verified: true,
  },
  {
    id: "aisha",
    quote: {
      ar: "شكراً شكراً عيادة مجمع شفافيه للأسنان ولفريقكم الرائع من الدكتوره رندا الدقل والدكتور ياسر الغامدي والدكتور ابراهيم بامقا والدكتور وضاح الخولي. كل التقدير والاحترام لهم جميعاً 🌹🌹🌹🌹🌹🌹🌹🌹🌹 وكل الاحترام والتقدير لفريق الاستقبال جدا رائع وجميل أتمنى لكم دوام هذأ ومزيدا من التقدم والتميز بإذن الله 🌹🌹🌹🌹🌹🌹🌹",
      en: "Thank you, thank you Transparency Dental Clinics, and to your wonderful team: Dr. Randa Al-Daql, Dr. Yaser Al-Ghamdi, Dr. Ibrahim Bamaqa, and Dr. Waddah Al-Khouli. All appreciation and respect to all of them 🌹 And all respect and appreciation to the reception team — truly wonderful. I wish you the continuation of this, and more progress and excellence, God willing 🌹",
    },
    name: { ar: "عائشه المالكي", en: "Aisha Almalki" },
    photo: "/images/reviews/aisha.png",
    verified: true,
  },
  {
    id: "meer",
    quote: {
      ar: "العيادة جدًا جميلة والطاقم الطبي محترف وأمينين في شغلهم والاستقبال بنات عسولات وأخلاق أشكرهم جميعًا وأحب أخص بالشكر دكتورتي العسل د.حنان الرويثي أمانتها عالية وتهتم للشغل وللمريض بنفس الوقت حقيقي كل شويا تتطمن عليا وتحرص يكون شغلها على أتم وأكمل وجه صراحة أنصح بالتعامل معاها ولا قصور بالبقية كلهم دكاترة شاطرين ولهم سمعتهم واسمائهم معروفة.🤍🤍",
      en: "The clinic is very beautiful, and the medical team is professional and honest in their work. Reception are lovely and kind. I thank them all, and I especially want to thank my dear doctor, Dr. Hanan Al-Ruwaithi. Her integrity is high, and she cares about the work and the patient at the same time. Truly, every little while she checks on me, and she is careful that her work is done to the fullest. Honestly I recommend seeing her, with no slight to the rest — they are all skilled doctors with known reputations and names. 🤍",
    },
    name: { ar: "مير", en: "Meer" },
    photo: "/images/reviews/meer.png",
    verified: true,
  },
] as const;

export const ceoValues = [
  {
    id: "care-luxury",
    label: { ar: "الرفاهية في العناية", en: "Luxury in care" },
    body: {
      ar: "الرفاهية هنا في اليد والشرح — لا في الرخام فقط.",
      en: "Luxury is how you are treated — not only how the room looks.",
    },
  },
  {
    id: "private-visit",
    label: { ar: "زيارة خاصة", en: "Private visit" },
    body: {
      ar: "الموعد لك وحدك: خصوصية، هدوء، ووقت لا يُقسَّم على غيرك.",
      en: "The hour is yours — privacy, quiet, and time that is not shared.",
    },
  },
  {
    id: "hospitality",
    label: { ar: "ضيافة راقية", en: "Fine hospitality" },
    body: {
      ar: "المكان والإيقاع صُمِّما كضيافة فاخرة — لا كعيادة انتظار.",
      en: "The setting and the pace were designed as hospitality — not a waiting room.",
    },
  },
] as const;

export const faqs = [
  {
    q: {
      ar: "كيف أحجز موعدي؟",
      en: "How do I book an appointment?",
    },
    a: {
      ar: "يمكنك طلب موعد عبر نموذج الحجز في الموقع، أو واتساب، أو الاتصال على 055 881 7388. الحجز عبر الموقع في هذه النسخة تجريبي للعرض، وسنتواصل لتأكيد الموعد.",
      en: "You can request an appointment through the booking form on this site, WhatsApp, or by calling 055 881 7388. Booking on this demo is a request for display purposes; the clinic will confirm the time with you.",
    },
  },
  {
    q: {
      ar: "كيف أختار الخدمة المناسبة؟",
      en: "How do I choose the right service?",
    },
    a: {
      ar: "إن لم تكن متأكداً، ابدأ باستشارة. بعد الاستماع والتقييم نقترح المسار الأنسب دون أن تضطر لاختيار إجراء من قائمة وحدك.",
      en: "If you are unsure, start with a consultation. After listening and assessment we suggest the most suitable path — without asking you to pick a procedure from a list alone.",
    },
  },
  {
    q: {
      ar: "أين تقع العيادة؟",
      en: "Where is the clinic?",
    },
    a: {
      ar: "عيادات الشفافية لطب الأسنان في جدة، حي الأندلس: ٢٧١٨ عبدالرحمن الطبيشي، جدة ٢٣٣٢٦.",
      en: "Transparency Dental Clinics is in Jeddah, Al Andalus: 2718 Abdulrahman Al Tubayshi, Jeddah 23326.",
    },
  },
  {
    q: {
      ar: "ماذا أتوقع في الزيارة الأولى؟",
      en: "What should I expect on my first visit?",
    },
    a: {
      ar: "زيارة أولى هادئة: تعرّف على البيئة، وحديث عن هدفك، وتقييم يوضح الخيارات. العيادة صُممت لتكون مريحة وأنيقة، لا عجلة سريرية.",
      en: "A calm first visit: you meet the space, talk about your goal, and receive an assessment that clarifies options. The clinic was designed to feel comfortable and elegant — not clinically hurried.",
    },
  },
  {
    q: {
      ar: "كيف أتواصل مع العيادة؟",
      en: "How can I contact the clinic?",
    },
    a: {
      ar: "هاتف وواتساب: 055 881 7388. البريد: info@tclinics.net. إنستغرام: @tclinics_. أو عبر نموذج التواصل في الموقع.",
      en: "Phone and WhatsApp: 055 881 7388. Email: info@tclinics.net. Instagram: @tclinics_. Or use the contact form on this site.",
    },
  },
  {
    q: {
      ar: "ما ساعات العمل؟",
      en: "What are the opening hours?",
    },
    a: {
      ar: "دوام العيادة من السبت إلى الخميس، من ١٠ صباحاً إلى ٩ مساءً. يُفضَّل التواصل لتأكيد الموعد.",
      en: "The clinic is open Saturday to Thursday, 10:00 AM to 9:00 PM. Please contact us to confirm your visit.",
    },
  },
] as const;

export const partners = [
  { src: "/images/brand/partner-route.png", name: "The Route" },
  { src: "/images/brand/partner-tabby.png", name: "Tabby" },
  { src: "/images/brand/partner-3.png", name: "baseeeta" },
] as const;

export const clinicGallery = [
  {
    src: "/images/clinic/reception.jpg",
    alt: {
      ar: "استقبال عيادات الشفافية: رخام، تفاصيل خضراء، وإضاءة طبيعية",
      en: "Transparency reception: marble, green detailing, and natural light",
    },
    caption: { ar: "الاستقبال", en: "Reception" },
  },
  {
    src: "/images/clinic/lounge.jpg",
    alt: {
      ar: "صالة انتظار بهوية ضيافة: جلد، إضاءة نهارية، وتفاصيل هادئة",
      en: "Lounge with a hospitality character: leather, daylight, quiet details",
    },
    caption: { ar: "الانتظار", en: "Lounge" },
  },
  {
    src: "/images/clinic/consent.jpg",
    alt: {
      ar: "تجربة رقمية للموافقة على العلاج بالعربية والإنجليزية",
      en: "A digital bilingual consent experience",
    },
    caption: { ar: "تجربة رقمية", en: "Digital visit" },
  },
  {
    src: "/images/clinic/smile.jpg",
    alt: {
      ar: "تفاصيل ابتسامة في إضاءة هادئة",
      en: "Smile detail in quiet light",
    },
    caption: { ar: "التفاصيل", en: "Detail" },
  },
] as const;

export const clinicSpacePhotos = [
  {
    src: "/images/clinic/lounge-sofa.jpg",
    alt: {
      ar: "صالة الجلوس: أريكة جلد بنّية، طاولة سوداء، وضوء نهاري من النوافذ",
      en: "The sitting room: a tan leather sofa, black table, and daylight from the windows",
    },
    caption: { ar: "الجلوس", en: "Sitting room" },
  },
  {
    src: "/images/clinic/lounge-terrace.jpg",
    alt: {
      ar: "ركن الزجاج: مقاعد خشبية ووسائد صفراء تطل على التراس",
      en: "The glass corner: wooden benches and yellow cushions looking onto the terrace",
    },
    caption: { ar: "التراس", en: "Terrace" },
  },
  {
    src: "/images/clinic/treatment-glass.jpg",
    alt: {
      ar: "غرفة العلاج: وحدة الأسنان أمام زجاج يطل على نبات وحصى أبيض",
      en: "Treatment room: the dental unit against glass looking onto a plant and white stone",
    },
    caption: { ar: "العلاج", en: "Treatment" },
  },
] as const;

export const reviewsPhotos = [
  {
    src: "/images/clinic/operatory.jpg",
    alt: {
      ar: "غرفة العلاج في عيادات الشفافية: كرسي حديث، إضاءة طبيعية، ونباتات",
      en: "Treatment room at Transparency: a modern chair, natural light, and plants",
    },
  },
  {
    src: "/images/clinic/treatment.jpg",
    alt: {
      ar: "فريق عيادات الشفافية أثناء جلسة علاج",
      en: "The Transparency team during a treatment session",
    },
  },
] as const;

export const beforeAfter = [
  {
    id: "veneers-4",
    before: "/images/before-after/veneers-4-before.jpg",
    after: "/images/before-after/veneers-4-after.jpg",
    title: {
      ar: "أربع عدسات علوية بنتيجة ناعمة",
      en: "Four upper veneers, soft and natural",
    },
    caption: {
      ar: "حالة عدسات علوية نشرتها العيادة بعنوان نتيجة ناعمة وطبيعية.",
      en: "An upper-veneer case the clinic published as a soft, natural result.",
    },
  },
  {
    id: "smile-journey",
    before: "/images/before-after/smile-journey-before.jpg",
    after: "/images/before-after/smile-journey-after.jpg",
    title: {
      ar: "رحلة ابتسامة أوضح",
      en: "A clearer smile journey",
    },
    caption: {
      ar: "من منشورات العيادة: رحلة إلى ابتسامة صُممت بعناية.",
      en: "From the clinic’s published cases: a journey toward a more considered smile.",
    },
  },
  {
    id: "crown-veneers",
    before: "/images/before-after/crown-veneers-before.jpg",
    after: "/images/before-after/crown-veneers-after.jpg",
    title: {
      ar: "إطالة التاج وعدسات علوية",
      en: "Crown lengthening and upper veneers",
    },
    caption: {
      ar: "حالة نشرتها العيادة تجمع إطالة التاج مع العدسات العلوية.",
      en: "A clinic-published case combining crown lengthening with upper veneers.",
    },
  },
  {
    id: "restorative",
    before: "/images/before-after/restorative-before.jpg",
    after: "/images/before-after/restorative-after.jpg",
    title: {
      ar: "ترميم وإعادة تأهيل الابتسامة",
      en: "Restorative smile rehabilitation",
    },
    caption: {
      ar: "إعادة ترميم وتأهيل ابتسامة بعد علاجات سابقة — كما نشرتها العيادة.",
      en: "Restoring and rehabilitating a smile after previous treatments — as published by the clinic.",
    },
  },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
