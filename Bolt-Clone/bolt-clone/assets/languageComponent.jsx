const countryComponentList = [
    {
        id: 1,
        iso: "at",
        country: "Österreich",
        englishName: "Austria",
        flag: "https://hatscripts.github.io/circle-flags/flags/at.svg",
        languages: ["Deutsh", "English"]
    },
    {
        id: 2,
        iso: "",
        country: "Global",
        englishName: "Global",
        languages: ["English"],
        flag: "images/global-svg.svg"
    },
    {
        id: 3,
        iso: "ao",
        country: "Angola",
        englishName: "Angola",
        flag: "https://hatscripts.github.io/circle-flags/flags/ao.svg",
        languages: ["Português", "English"]
    },    
    {
        id: 4,
        iso: "az",
        country: "Azərbaycan",
        englishName: "Azerbaijan",
        flag: "https://hatscripts.github.io/circle-flags/flags/az.svg",
        languages: ["Azərbaycanca", "English", "Pусский"]
    },    
    {
        id: 5,
        country: "België",
        iso: "be",
        englishName: "Belgium",
        flag: "https://hatscripts.github.io/circle-flags/flags/be.svg",
        languages: ["Nederlands", "Français", "English"]
    },    
    {
        id: 6,
        country: "българия",
        iso: "bg",
        englishName: "Bulgaria",
        flag: "https://hatscripts.github.io/circle-flags/flags/bg.svg",
        languages: ["български", "English"]
    },    
    {
        id: 7,
        iso: "az",
        country: "Botswana",
        englishName: "Botswana",
        flag: "https://hatscripts.github.io/circle-flags/flags/bw.svg",
        languages: ["English"]
    },    
    {
        id: 8,
        iso: "cz",
        country: "Česko",
        englishName: "Czechia",
        flag: "https://hatscripts.github.io/circle-flags/flags/cz.svg",
        languages: ["Čeština", "English"]
    },    
    {
        id: 9,
        iso: "ci",
        country: "Côte d'Ivoire",
        englishName: "Ivory Coast",
        flag: "https://hatscripts.github.io/circle-flags/flags/ci.svg",
        languages: ["Français", "English"]
    },    
    {
        id: 10,
        iso: "do",
        country: "República Dominicana",
        englishName: "Dominican Republic",
        flag: "https://hatscripts.github.io/circle-flags/flags/do.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 11,
        iso: "de",
        country: "Deutschland",
        englishName: "Germany",
        flag: "https://hatscripts.github.io/circle-flags/flags/de.svg",
        languages: ["Deutsh", "English"]
    },    
    {
        id: 12,
        iso: "ec",
        country: "Ecuador",
        englishName: "Ecuador",
        flag: "https://hatscripts.github.io/circle-flags/flags/ec.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 13,
        iso: "ee",
        country: "Eesti",
        englishName: "Estonia",
        flag: "https://hatscripts.github.io/circle-flags/flags/ee.svg",
        languages: ["Eesti", "English", "Pусский"]
    },    
    {
        id: 14,
        iso: "eg",
        country: "مصر",
        englishName: "Egypt",
        flag: "https://hatscripts.github.io/circle-flags/flags/eg.svg",
        languages: ["العربية","Français", "English"]
    },    
    {
        id: 15,
        iso: "es",
        country: "España",
        englishName: "Spain",
        flag: "https://hatscripts.github.io/circle-flags/flags/es.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 16,
        iso: "fr",
        country: "France",
        englishName: "France",
        flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
        languages: ["Français", "English"]
    },    
    {
        id: 17,
        iso: "gh",
        country: "Ghana",
        englishName: "Ghana",
        flag: "https://hatscripts.github.io/circle-flags/flags/gh.svg",
        languages: ["English"]
    },    
    {
        id: 18,
        iso: "hn",
        country: "Honduras",
        englishName: "Honduras",
        flag: "https://hatscripts.github.io/circle-flags/flags/hn.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 19,
        iso: "hr",
        country: "Hrvatska",
        englishName: "Croatia",
        flag: "https://hatscripts.github.io/circle-flags/flags/hr.svg",
        languages: ["Hrvatski", "English"]
    },    
    {
        id: 20,
        iso: "ie",
        country: "Éire",
        englishName: "Ireland",
        flag: "https://hatscripts.github.io/circle-flags/flags/ie.svg",
        languages: ["English"]
    },    
    {
        id: 21,
        iso: "it",
        country: "Italia",
        englishName: "Italy",
        flag: "https://hatscripts.github.io/circle-flags/flags/it.svg",
        languages: ["Italiano", "English"]
    },    
    {
        id: 22,
        iso: "ke",
        country: "Kenya",
        englishName: "Kenya",
        flag: "https://hatscripts.github.io/circle-flags/flags/ke.svg",
        languages: ["English"]
    },    
    {
        id: 23,
        iso: "lv",
        country: "Latvija",
        englishName: "Latvia",
        flag: "https://hatscripts.github.io/circle-flags/flags/lv.svg",
        languages: ["Latviešu", "English"]
    },    
    {
        id: 24,
        iso: "lt",
        country: "Leituva",
        englishName: "Lithuania",
        flag: "https://hatscripts.github.io/circle-flags/flags/lt.svg",
        languages: ["Leituviu", "English"]
    },    
    {
        id: 25,
        iso: "hu",
        country: "Magyarország",
        englishName: "Hungary",
        flag: "https://hatscripts.github.io/circle-flags/flags/hu.svg",
        languages: ["Magyar", "English"]
    },    
    {
        id: 26,
        iso: "mt",
        country: "Malta",
        englishName: "Malta",
        flag: "https://hatscripts.github.io/circle-flags/flags/mt.svg",
        languages: ["English"]
    },    
    {
        id: 27,
        iso: "mx",
        country: "México",
        englishName: "Mexico",
        flag: "https://hatscripts.github.io/circle-flags/flags/mx.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 28,
        iso: "mz",
        country: "Moçambique",
        englishName: "Mozambique",
        flag: "https://hatscripts.github.io/circle-flags/flags/mz.svg",
        languages: ["Português", "English"]
    },    
    {
        id: 29,
        iso: "na",
        country: "Namibia",
        englishName: "Namibia",
        flag: "https://hatscripts.github.io/circle-flags/flags/na.svg",
        languages: ["English"]
    },    
    {
        id: 30,
        iso: "nl",
        country: "Nederland",
        englishName: "Netherlands",
        flag: "https://hatscripts.github.io/circle-flags/flags/nl.svg",
        languages: ["Nederlands", "English"]
    },    
    {
        id: 31,
        iso: "np",
        country: "नेपाल",
        englishName: "Nepal",
        flag: "https://hatscripts.github.io/circle-flags/flags/np.svg",
        languages: ["नेपाली", "English"]
    },    
    {
        id: 32,
        iso: "ng",
        country: "Nigeria",
        englishName: "Nigeria",
        flag: "https://hatscripts.github.io/circle-flags/flags/ng.svg",
        languages: ["English"]
    },    
    {
        id: 33,
        iso: "no",
        country: "Norge",
        englishName: "Norway",
        flag: "https://hatscripts.github.io/circle-flags/flags/no.svg",
        languages: ["Norsk", "English"]
    },    
    {
        id: 34,
        iso: "py",
        country: "Paraguay",
        englishName: "Paraguay",
        flag: "https://hatscripts.github.io/circle-flags/flags/py.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 35,
        iso: "pl",
        country: "Polska",
        englishName: "Poland",
        flag: "https://hatscripts.github.io/circle-flags/flags/pl.svg",
        languages: ["Polski, English"]
    }, 
    {
        id: 36,
        iso: "pt",
        country: "Portugal",
        englishName: "Portugal",
        flag: "https://hatscripts.github.io/circle-flags/flags/pt.svg",
        languages: ["Português, English"]
    },       
    {
        id: 37,
        iso: "qa",
        country: "قطر",
        englishName: "Qatar",
        flag: "https://hatscripts.github.io/circle-flags/flags/qa.svg",
        languages: ["العربية", "English"]
    },    
    {
        id: 38,
        iso: "md",
        country: "Republica Moldova",
        englishName: "Moldova",
        flag: "https://hatscripts.github.io/circle-flags/flags/md.svg",
        languages: ["Moldova", "English"]
    },    
    {
        id: 39,
        iso: "ro",
        country: "România ",
        englishName: "Romania",
        flag: "https://hatscripts.github.io/circle-flags/flags/ro.svg",
        languages: ["Română", "English"]
    },    
    {
        id: 40,
        iso: "ch",
        country: "Schweiz",
        englishName: "Switzerland",
        flag: "https://hatscripts.github.io/circle-flags/flags/ch.svg",
        languages: ["Deutsch", "Français", "English"]
    },    
    {
        id: 41,
        iso: "sn",
        country: "Sénégal",
        englishName: "Senegal",
        flag: "https://hatscripts.github.io/circle-flags/flags/sn.svg",
        languages: ["Français", "English"]
    },    
    {
        id: 42,
        iso: "si",
        country: "Slovenija",
        englishName: "Slovenia",
        flag: "https://hatscripts.github.io/circle-flags/flags/si.svg",
        languages: ["Slovenščina", "English"]
    },
    {
        id: 43,
        iso: "sk",
        country: "Slovensko",
        englishName: "Slovakia",
        flag: "https://hatscripts.github.io/circle-flags/flags/sk.svg",
        languages: ["Slovenščina", "English"]
    },    
    {
        id: 44,
        iso: "za",
        country: "South Africa",
        englishName: "South Africa",
        flag: "https://hatscripts.github.io/circle-flags/flags/za.svg",
        languages: ["English"]
    },    
    {
        id: 45,
        country: "Sri Lanka",
        iso: "lk",
        englishName: "Sri Lanka",
        flag: "https://hatscripts.github.io/circle-flags/flags/lk.svg",
        languages: ["English"]
    },    
    {
        id: 46,
        iso: "fi",
        country: "Suomi",
        englishName: "Finland",
        flag: "https://hatscripts.github.io/circle-flags/flags/fi.svg",
        languages: ["Suomi", "English"]
    },    
    {
        id: 47,
        iso: "se",
        country: "Sverige",
        englishName: "Sweden",
        flag: "https://hatscripts.github.io/circle-flags/flags/se.svg",
        languages: ["Svenska", "English"]
    },    
    {
        id: 48,
        iso: "tz",
        country: "Tanzania",
        englishName: "Tanzania",
        flag: "https://hatscripts.github.io/circle-flags/flags/tz.svg",
        languages: ["Kiswahili", "English"]
    },    
    {
        id: 49,
        iso: "tr",
        country: "Türkiye",
        englishName: "Turkey",
        flag: "https://hatscripts.github.io/circle-flags/flags/tr.svg",
        languages: ["Türkçe", "English"]
    },    
    {
        id: 50,
        iso: "ug",
        country: "Uganda",
        englishName: "Uganda",
        flag: "https://hatscripts.github.io/circle-flags/flags/ug.svg",
        languages: ["English"]
    },    
    {
        id: 51,
        iso: "gb",
        country: "United Kingdom",
        englishName: "United Kingdom",
        flag: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
        languages: ["English"]
    },    
    {
        id: 52,
        iso: "zm",
        country: "Zambia",
        englishName: "Zambia",
        flag: "https://hatscripts.github.io/circle-flags/flags/zm.svg",
        languages: ["English"]
    },    
    {
        id: 53,
        iso: "zw",
        country: "Zimbabwe",
        englishName: "Zimbabwe",
        flag: "https://hatscripts.github.io/circle-flags/flags/zw.svg",
        languages: ["English"]
    },    
    {
        id: 54,
        iso: "cy",
        country: "Κυπριακή",
        englishName: "Cyprus",
        flag: "https://hatscripts.github.io/circle-flags/flags/cy.svg",
        languages: ["ελληνικά", "English"]
    },    
    {
        id: 55,
        iso: "ua",
        country: "Україна",
        englishName: "Ukraine",
        flag: "https://hatscripts.github.io/circle-flags/flags/ua.svg",
        languages: ["українська", "English"]
    },    
    {
        id: 56,
        iso: "ge",
        country: "საქართველო",
        englishName: "Georgia",
        flag: "https://hatscripts.github.io/circle-flags/flags/ge.svg",
        languages: ["ქართული", "English"]
    },
    {
        id: 57,
        iso: "iq",
        country: "ٱلْعِرَاق",
        englishName: "Irag",
        flag: "https://hatscripts.github.io/circle-flags/flags/iq.svg",
        languages: ["العربية", "English"]
    },    
    {
        id: 58,
        iso: "sa",
        country: "المملكة العربية السعودية",
        englishName: "Saudi Arabia",
        flag: "https://hatscripts.github.io/circle-flags/flags/sa.svg",
        languages: ["العربية", "English"]
    },    
    {
        id: 59,
        iso: "tn",
        country: "تونِس",
        englishName: "Tunisia",
        flag: "https://hatscripts.github.io/circle-flags/flags/tn.svg",
        languages: ["العربية","Français", "English"]
    },    
    {
        id: 60,
        iso: "lb",
        country: "لُبْنان",
        englishName: "Lebanon",
        flag: "https://hatscripts.github.io/circle-flags/flags/lb.svg",
        languages: ["العربية", "English"]
    },    
    {
        id: 61,
        iso: "th",
        country: "ไทย",
        englishName: "Thailand",
        flag: "https://hatscripts.github.io/circle-flags/flags/th.svg", 
        languages: ["ไทย", "English"]
    },    
    {
        id: 62,
        iso: "tg",
        country: "Togo",
        englishName: "Togo",
        flag: "https://hatscripts.github.io/circle-flags/flags/tg.svg",
        languages: ["Français", "English"]
    },    
    {
        id: 63,
        iso: "cr",
        country: "Costa Rica",
        englishName: "Costa Rica",
        flag: "https://hatscripts.github.io/circle-flags/flags/cr.svg",
        languages: ["Español", "English"]
    },   
    {
        id: 64,
        iso: "is",
        country: "Iceland",
        englishName: "Iceland",
        flag: "https://hatscripts.github.io/circle-flags/flags/is.svg",
        languages: ["Íslenska", "English"]
    },    
    {
        id: 65,
        iso: "my",
        country: "Malaysia",
        englishName: "Malaysia",
        flag: "https://hatscripts.github.io/circle-flags/flags/my.svg",
        languages: ["Bahasa Melayu", "English"]
    },    
    {
        id: 66,
        country: "Taiwan",
        iso: "tw",
        englishName: "Taiwan",
        flag: "https://hatscripts.github.io/circle-flags/flags/tw.svg",
        languages: ["Mandarin", "English"]
    },    
    {
        id: 67,
        iso: "gt",
        country: "Guatemala",
        englishName: "Guatemala",
        flag: "https://hatscripts.github.io/circle-flags/flags/gt.svg",
        languages: ["Español", "English"]
    },    
    {
        id: 68,
        iso: "gr",
        country: "Greece",
        englishName: "Greece",
        flag: "https://hatscripts.github.io/circle-flags/flags/gr.svg",
        languages: ["ελληνικά", "English"]
    },    
    {
        id: 69,
        iso: "ae",
        country: "United Arab Emirates",
        englishName: "United Arab Emirates",
        flag: "https://hatscripts.github.io/circle-flags/flags/ae.svg",
        languages: ["العربية", "English"]
    }
]

export default countryComponentList