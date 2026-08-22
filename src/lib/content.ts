import type { MessageKey } from "@/lib/messages";

export type Lang = "ar" | "en";
export type Text = { ar: string; en: string };

export const navItems: { href: string; key: MessageKey }[] = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/doctors", key: "nav.doctors" },
  { href: "/about", key: "nav.about" },
  { href: "/#experience", key: "nav.experience" },
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
      ar: "دراسة ملامحك وأسنانك للوصول إلى نتيجة طبيعية تليق بك، لا قالباً جاهزاً.",
      en: "A study of your features and teeth toward a natural result — not a ready-made template.",
    },
    what: {
      ar: "تصميم الابتسامة هو تقييم دقيق لتناسب الأسنان مع ملامح الوجه، ولون الأسنان، وخط الابتسامة. نبدأ بالفهم والاستماع، ثم نوضح الخيارات المتاحة دون استعجال في القرار.",
      en: "Smile design is a careful assessment of how teeth relate to facial features, shade, and the smile line. We start by listening, then explain available options without rushing the decision.",
    },
    who: {
      ar: "لمن يرغب في تحسين مظهر ابتسامته، أو يشعر بعدم تناسق في الشكل أو اللون، ويريد خطة واضحة قبل أي إجراء تجميلي.",
      en: "For those who want to refine their smile, or feel the shape or shade is uneven, and prefer a clear plan before any cosmetic step.",
    },
    experience: {
      ar: "تبدأ الزيارة باستشارة هادئة. نناقش هدفك، ونشرح ما يمكن تحقيقه وما يحتاج وقتاً أو تخصصات متعددة. القرار يبقى بيدك بعد أن تتضح الصورة.",
      en: "The visit begins with a calm consultation. We discuss your goal and explain what is possible — and what may need time or more than one specialty. The decision remains yours once the picture is clear.",
    },
    why: {
      ar: "في الشفافية نضع التجربة الشخصية في قلب العناية: بيئة راقية، وشرح واضح، وخطة تُصمم حولك لا حول إجراء جاهز.",
      en: "At Transparency, the personal experience sits at the centre of care: a refined environment, a clear explanation, and a plan designed around you — not a preset procedure.",
    },
    image: "/images/clinic/smile.jpg",
    imageAlt: {
      ar: "تفاصيل ابتسامة متناسقة بعد عناية تجميلية",
      en: "Detail of a balanced smile after cosmetic dental care",
    },
  },
  {
    slug: "cosmetic",
    name: { ar: "تجميل الأسنان", en: "Cosmetic dentistry" },
    problem: {
      ar: "عندما تريد لمسة دقيقة… دون مبالغة في الشكل.",
      en: "When you want a precise touch — without an exaggerated look.",
    },
    summary: {
      ar: "عدسات وتجميلات تُدرس بحذر لتعطي نتيجة ناعمة وطبيعية، حتى لو كانت على أسنان أمامية محدودة.",
      en: "Veneers and aesthetic refinements planned carefully for a soft, natural result — even when only a few front teeth are involved.",
    },
    what: {
      ar: "يشمل تجميل الأسنان إجراءات مثل العدسات الخزفية وتحسين مظهر الأسنان الأمامية. العيادة تنشر حالات لعدسات أمامية وتجميلاً محدوداً عندما لا تحتاج الابتسامة تدخلاً كاملاً.",
      en: "Cosmetic care includes ceramic veneers and refinements to the front teeth. The clinic shares cases of upper veneers and limited aesthetic work when a full makeover is not needed.",
    },
    who: {
      ar: "لمن يلاحظ فرقاً في لون أو شكل الأسنان الأمامية، أو يرغب في تجميل محسوب دون تغيير ملامحه بالكامل.",
      en: "For those who notice a difference in the colour or shape of front teeth, or want considered aesthetic work without changing their whole appearance.",
    },
    experience: {
      ar: "نوضح الخيار المناسب لحالتك: أحياناً تكفي لمسة على أربعة أسنان أمامية. نشرح المادة والشكل المتوقع، ونمنحك وقتاً للسؤال قبل التنفيذ.",
      en: "We explain the option that fits your case — sometimes a touch on four front teeth is enough. We describe the material and expected look, and leave time for questions before treatment.",
    },
    why: {
      ar: "الفلسفة هنا أن التجميل ليس مبالغة. هو دقة في التفاصيل، ونتيجة تبدو كأنها ابتسامتك… في أوضح نسخة منها.",
      en: "The philosophy here is that aesthetics are not exaggeration. They are precision in the details — a result that still feels like your smile, in its clearest form.",
    },
    image: "/images/clinic/smile.jpg",
    imageAlt: {
      ar: "ابتسامة بطبيعية ونعومة في الإضاءة",
      en: "A soft, natural smile in gentle light",
    },
  },
  {
    slug: "prosthodontics",
    name: { ar: "التركيبات", en: "Prosthodontics" },
    problem: {
      ar: "عندما تحتاج أسناناً تُعيد الوظيفة والشكل معاً.",
      en: "When you need teeth that restore both function and form.",
    },
    summary: {
      ar: "تركيبات تُخطط بعناية لتعويض الأسنان واستعادة الراحة في الأكل والمظهر.",
      en: "Restorations planned carefully to replace teeth and restore comfort in eating and appearance.",
    },
    what: {
      ar: "طب التركيبات يُعنى بتعويض الأسنان المفقودة أو المتضررة عبر تيجان، جسور، أو حلول تعويضية أخرى يحدّدها التقييم. العيادة تضع التركيبات ضمن تخصصاتها المعلنة.",
      en: "Prosthodontics is concerned with replacing missing or damaged teeth through crowns, bridges, or other restorations determined by assessment. The clinic lists prosthodontics among its stated specialties.",
    },
    who: {
      ar: "لمن فقد سناً أو أكثر، أو يحتاج إعادة بناء لتعويض سابق، ويريد حلاً يوازن بين الوظيفة والمظهر.",
      en: "For those who have lost one or more teeth, or need to rebuild a previous restoration, and want a solution that balances function and appearance.",
    },
    experience: {
      ar: "يبدأ الأمر بفهم مشكلتك الحالية، ثم شرح الخيارات المتاحة بلغة واضحة. لا نعد بنتيجة جاهزة قبل التقييم.",
      en: "It begins with understanding your current concern, then explaining available options in plain language. We do not promise a finished result before assessment.",
    },
    why: {
      ar: "العناية هنا شخصية: خطة تناسب حالتك، وبيئة صُممت لتكون الزيارة أكثر هدوءاً ووضوحاً.",
      en: "Care here is personal: a plan that fits your case, and an environment designed to make the visit calmer and clearer.",
    },
    image: "/images/clinic/reception.jpg",
    imageAlt: {
      ar: "استقبال عيادات الشفافية في جدة",
      en: "Reception at Transparency Dental Clinics in Jeddah",
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
      ar: "علاج لبّ السن بجهد يركز على الدقة والوضوح في كل خطوة.",
      en: "Root canal care with an emphasis on precision and clarity at every step.",
    },
    what: {
      ar: "علاج الجذور يتعامل مع التهاب أو إصابة لبّ السن. العيادة تدرج علاج الجذور ضمن تخصصاتها. نوضح الإجراء والغرض منه قبل البدء، دون وعود طبية مسبقة.",
      en: "Endodontics addresses inflammation or injury of the tooth pulp. The clinic includes root canal treatment among its specialties. We explain the procedure and its purpose before starting, without advance medical promises.",
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
    image: "/images/clinic/lounge.jpg",
    imageAlt: {
      ar: "تفاصيل صالة الانتظار في العيادة",
      en: "Waiting lounge details at the clinic",
    },
  },
  {
    slug: "periodontics",
    name: { ar: "علاج اللثة", en: "Periodontics" },
    problem: {
      ar: "عندما تحتاج لثتك عناية… لا تأخيراً.",
      en: "When your gums need care — not delay.",
    },
    summary: {
      ar: "عناية متخصصة بصحة اللثة والأنسجة الداعمة، كأساس لابتسامة مريحة على المدى الطويل.",
      en: "Specialist attention to gum health and supporting tissues — the foundation of a comfortable smile over time.",
    },
    what: {
      ar: "علاج اللثة يهتم بالتهابات اللثة وصحة الأنسجة حول الأسنان. العيادة تضع علاج اللثة ضمن تخصصاتها المعلنة. التقييم يحدد إن كانت الحالة تحتاج تنظيفاً أعمق أو متابعة متخصصة.",
      en: "Periodontics focuses on gum inflammation and the tissues around the teeth. The clinic lists periodontics among its specialties. Assessment determines whether deeper cleaning or specialist follow-up is needed.",
    },
    who: {
      ar: "لمن يلاحظ نزفاً عند التنظيف، أو تورماً، أو أُخبر أن لثته تحتاج عناية قبل أي تجميل أو تركيب.",
      en: "For those who notice bleeding when cleaning, swelling, or have been told their gums need care before any cosmetic or restorative work.",
    },
    experience: {
      ar: "نشرح بلطف ما نراه، ولماذا يهم، وما الخطوة التالية. الراحة والوضوح جزء من الزيارة لا إضافة عليها.",
      en: "We explain gently what we see, why it matters, and what the next step is. Comfort and clarity are part of the visit — not extras.",
    },
    why: {
      ar: "العيادة صُممت لتكون أكثر من موعد سريري: مكان تشعر فيه أن التفاصيل تُحترم، بما فيها صحة اللثة.",
      en: "The clinic was designed to be more than a clinical appointment: a place where details are respected — including gum health.",
    },
    image: "/images/clinic/consent.jpg",
    imageAlt: {
      ar: "مراجعة نموذج الموافقة الرقمية في العيادة",
      en: "Reviewing a digital consent form at the clinic",
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
      ar: "تقويم يُناقش كرحلة: الهدف، المدة المتوقعة حسب التقييم، وما يناسب حالتك.",
      en: "Orthodontics discussed as a journey: the goal, the expected timeline after assessment, and what fits your case.",
    },
    what: {
      ar: "تقويم الأسنان يعنى بتصحيح اصطفاف الأسنان والعلاقة بين الفكين. العيادة تتحدث عن التقويم ضمن محتواها التخصصي. الخطة لا تُحدد إلا بعد فحص.",
      en: "Orthodontics is concerned with aligning teeth and the relationship of the jaws. The clinic discusses orthodontics in its specialty content. A plan is only set after examination.",
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
    image: "/images/clinic/reception.jpg",
    imageAlt: {
      ar: "بيئة العيادة الراقية في جدة",
      en: "The clinic’s refined environment in Jeddah",
    },
  },
  {
    slug: "restorative",
    name: { ar: "طب الأسنان الترميمي", en: "Restorative dentistry" },
    problem: {
      ar: "عندما تحتاج إعادة بناء… بعد علاجات سابقة أو تآكل.",
      en: "When you need rebuilding — after previous treatment or wear.",
    },
    summary: {
      ar: "ترميم يعيد وظيفة السن ومظهره، بما في ذلك إعادة التأهيل الأوسع عند الحاجة.",
      en: "Restoration that returns function and appearance — including broader rehabilitation when needed.",
    },
    what: {
      ar: "الطب الترميمي يشمل حشوات وإعادة بناء الأسنان المتضررة، وقد يمتد إلى إعادة تأهيل أوسع للفم. العيادة تنشر حالات ترميم وإعادة تأهيل ابتسامة بعد علاجات سابقة.",
      en: "Restorative dentistry includes fillings and rebuilding damaged teeth, and may extend to broader oral rehabilitation. The clinic shares restorative cases and smile rehabilitation after previous treatments.",
    },
    who: {
      ar: "لمن لديه أسنان متكسرة أو متآكلة، أو علاجات سابقة تحتاج إعادة نظر، ويريد خطة مرتّبة لا إجراءات متفرقة.",
      en: "For those with broken or worn teeth, or previous treatments that need revisiting, and who want an ordered plan rather than scattered procedures.",
    },
    experience: {
      ar: "نبدأ بقراءة الحالة كاملة قدر الإمكان، ثم نرتّب الأولويات: ما يريح أولاً، وما يُخطط لاحقاً. نشرح كل مرحلة قبل الانتقال إليها.",
      en: "We begin by reading the case as fully as possible, then order priorities: what brings comfort first, and what is planned later. Each stage is explained before moving on.",
    },
    why: {
      ar: "الترميم عمل دقيق. في الشفافية يُقدَّم داخل تجربة صُممت للراحة والأناقة، لا في عجلة سريرية.",
      en: "Restorative work is precise. At Transparency it is offered inside an experience designed for comfort and elegance — not clinical hurry.",
    },
    image: "/images/clinic/lounge.jpg",
    imageAlt: {
      ar: "جلسة انتظار بهوية الضيافة الراقية",
      en: "A waiting setting with a hospitality character",
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
      ar: "زراعة الأسنان خيار لتعويض سن مفقود بزراعة في العظم ثم تركيب تاج. العيادة نشرت حالة زراعة سن أمامي بعد فقدانه في حادث. الملاءمة تُحدَّد بعد الفحص.",
      en: "A dental implant is an option to replace a missing tooth with a fixture in bone, then a crown. The clinic has shared a case of a front-tooth implant after loss in an accident. Suitability is determined after examination.",
    },
    who: {
      ar: "لمن فقد سناً — خاصة في المنطقة الأمامية — ويريد أن يفهم إن كانت الزراعة مناسبة لحالته.",
      en: "For those who have lost a tooth — especially in the front — and want to understand whether an implant is appropriate for their case.",
    },
    experience: {
      ar: "الاستشارة توضح الخطوات، والفحوصات المطلوبة، والبدائل إن وُجدت. لا نبدأ قبل أن تفهم المسار.",
      en: "The consultation outlines the steps, any required investigations, and alternatives if they exist. We do not start until you understand the path.",
    },
    why: {
      ar: "تعويض السن الأمامي قرار يظهر في كل ابتسامة. لذلك نتعامل معه بهدوء، وتفاصيل، واحترام لملامحك.",
      en: "Replacing a front tooth is a decision that shows in every smile. That is why we approach it with calm, detail, and respect for your features.",
    },
    image: "/images/clinic/smile.jpg",
    imageAlt: {
      ar: "تفاصيل أسنان أمامية في إضاءة طبيعية",
      en: "Front teeth detail in natural light",
    },
  },
  {
    slug: "preventive",
    name: { ar: "العناية الوقائية", en: "Preventive care" },
    problem: {
      ar: "عندما تريد نظافة مريحة… دون أن تخشى الزيارة.",
      en: "When you want a comfortable clean — without dreading the visit.",
    },
    summary: {
      ar: "تنظيف وفحص وقائي بيد هادئة، في بيئة صُممت لتكون أكثر لطفاً مما اعتدت عليه.",
      en: "Cleaning and preventive examination with a light hand, in an environment designed to feel gentler than you may be used to.",
    },
    what: {
      ar: "العناية الوقائية تشمل الفحص والتنظيف الدوري. إحدى المراجعات المنشورة على الموقع تصف تنظيفاً مع د. أحمد نواوي بيد خفيفة، دون الإحساس المعتاد بالحساسية.",
      en: "Preventive care includes examination and routine cleaning. A published patient comment on the clinic site describes a cleaning with Dr. Ahmed Nawawi with a light hand, without the usual sense of sensitivity.",
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
    image: "/images/clinic/consent.jpg",
    imageAlt: {
      ar: "تجربة رقمية هادئة في العيادة",
      en: "A calm digital experience at the clinic",
    },
  },
];

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

export const testimonials = [
  {
    id: "rahaf",
    quote: {
      ar: "العيادة مريحة للغاية وأحب أن لديهم التقنيات الحديثة. قمت بالتنظيف مع دكتور أحمد نواوي، وبصراحة كانت يده خفيفة. عادة عندما أنظف تكون لثتي حساسة وأشعر بطعم الدم، لكن هذه المرة لم أشعر بأي شيء. أوصي بشدة بزيارتهم.",
      en: "The clinic is very comfortable and I like that they have modern technologies. I had a cleaning with Dr. Ahmed Nawawi, and to be honest his hand was light. Usually when I clean, my gums are sensitive and I feel the taste of blood, but this time I didn’t feel anything. I highly recommend visiting them.",
    },
    name: { ar: "رهف الدهلوي", en: "Rahaf Dahlawi" },
    role: { ar: "مستشارة تسويق", en: "Marketing Consultant" },
  },
] as const;

export const principles = [
  {
    num: "01",
    title: { ar: "عناية مصممة حولك", en: "Care designed around you" },
    body: {
      ar: "كل زيارة تبدأ بك: ما يزعجك، وما تطمح إليه، وما يناسب وتيرتك. لا قالباً جاهزاً يُفرض على الجميع.",
      en: "Every visit starts with you: what bothers you, what you hope for, and the pace that fits. No ready-made template imposed on everyone.",
    },
  },
  {
    num: "02",
    title: { ar: "دقة في كل تفصيل", en: "Precision in every detail" },
    body: {
      ar: "من خطة العلاج إلى بيئة العيادة، التفاصيل ليست زينة. هي طريقة احترامنالك ولاحق القرار الطبي.",
      en: "From the treatment plan to the clinic environment, details are not decoration. They are how we respect you — and the clinical decision.",
    },
  },
  {
    num: "03",
    title: { ar: "تجربة تليق بك", en: "An experience that befits you" },
    body: {
      ar: "صُممت العيادة لتفوح بالراحة والأناقة والرقي. الزيارة ليست ممراً سريرياً… هي استضافة راقية.",
      en: "The clinic was designed to exude comfort, elegance, and sophistication. The visit is not a clinical corridor — it is refined hospitality.",
    },
  },
  {
    num: "04",
    title: { ar: "معايير متقدمة", en: "Elevated standards" },
    body: {
      ar: "نسعى لأعلى معايير العناية، ونستخدم تقنيات حديثة حيث تخدم راحتك ودقة العمل — كما وصفتها مراجِعات العيادة.",
      en: "We aim for the highest standards of care, and use modern technologies where they serve your comfort and the precision of the work — as patients of the clinic have described.",
    },
  },
] as const;

export const journey = [
  {
    num: "01",
    title: { ar: "استشارتك", en: "Your consultation" },
    body: {
      ar: "نستمع أولاً. هدفك، تاريخك، وما يجعل الزيارة مريحة لك.",
      en: "We listen first. Your goal, your history, and what would make the visit comfortable.",
    },
  },
  {
    num: "02",
    title: { ar: "التقييم", en: "Assessment" },
    body: {
      ar: "فحص هادئ يوضح الصورة. نشرح ما نراه بلغة مفهومة، دون استعجال.",
      en: "A calm examination that clarifies the picture. We explain what we see in plain language, without hurry.",
    },
  },
  {
    num: "03",
    title: { ar: "الخطة المناسبة لك", en: "A plan that fits you" },
    body: {
      ar: "خيارات مرتّبة حسب أولويتك. القرار يبقى بيدك بعد أن تتضح التفاصيل.",
      en: "Options ordered by your priority. The decision remains yours once the details are clear.",
    },
  },
  {
    num: "04",
    title: { ar: "بدء رحلتك", en: "Begin your journey" },
    body: {
      ar: "نبدأ بالخطوة المتفق عليها، ونتابع معك بوضوح في كل مرحلة.",
      en: "We begin with the agreed step, and follow with you clearly at every stage.",
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
      ar: "إن لم تكن متأكداً، ابدأ باستشارة. بعد الاستماع والتقييم نقترح المسار الأنسب — تجميلاً أو ترميمياً أو وقائياً — دون أن تضطر لاختيار إجراء من قائمة وحدك.",
      en: "If you are unsure, start with a consultation. After listening and assessment we suggest the most suitable path — cosmetic, restorative, or preventive — without asking you to pick a procedure from a list alone.",
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
      ar: "ساعات العمل غير منشورة بالتفصيل على الموقع الحالي. يُرجى التواصل هاتفياً أو عبر واتساب لتأكيد الموعد المناسب لك.",
      en: "Detailed opening hours are not published on the current clinic website. Please call or message on WhatsApp to confirm a time that suits you.",
    },
  },
] as const;

export const partners = [
  { src: "/images/brand/partner-tabby.png", name: "Tabby" },
  { src: "/images/brand/partner-route.png", name: "The Route" },
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

export const beforeAfter = [
  {
    id: "ceramic-front",
    before: "/images/before-after/ceramic-front-before.jpg",
    after: "/images/before-after/ceramic-front-after.jpg",
    title: {
      ar: "أربع عدسات خزفية للأسنان الأمامية",
      en: "Four ceramic veneers on the front teeth",
    },
    caption: {
      ar: "من حالات العيادة المنشورة: لمسة على الأسنان الأمامية فقط، بلون ورسمة طبيعية.",
      en: "From a published clinic case: a touch on the front teeth only, in a natural shade and form.",
    },
  },
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
