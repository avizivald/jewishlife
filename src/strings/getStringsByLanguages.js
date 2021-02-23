
let StringsByLanguagesObj ={
    'אנא התחבר לאתר':{
        'he': "אנא התחבר לאתר",
        'en': "Please log in to the site",
        'fr': "Veuillez vous connecter au site s'il vous plait",
    },
    'AlosHashachar':{
        'he': "עלות השחר",
        'en': "עלות השחר",
        'fr': "עלות השחר",
    },
    'Misheyakir11Point5Degrees':{
        'he': "זמן ציצית",
        'en': "זמן ציצית",
        'fr': "זמן ציצית",
    },
    'Sunrise':{
        'he': "נץ החמה",
        'en': "נץ החמה",
        'fr': "נץ החמה",
    },
    'SofZmanShmaMGA16Point1Degrees':{
        'he': "סוף זמן קש מגא",
        'en': "סוף זמן קש מגא",
        'fr': "סוף זמן קש מגא",
    },
    'SofZmanShmaGRA':{
        'he': "סוף זמן קש גרא",
        'en': "סוף זמן קש גרא",
        'fr': "סוף זמן קש גרא",
    },
    'Chatzos':{
        'he': "חצות",
        'en': "חצות",
        'fr': "חצות",
    },
    'MinchaGedola30Minutes':{
        'he': "מנחה גדולה",
        'en': "מנחה גדולה",
        'fr': "מנחה גדולה",
    },
    'PlagHamincha':{
        'he': "פלג המנחה",
        'en': "פלג המנחה",
        'fr': "פלג המנחה",
    },
    'Sunset':{
        'he': "שקיעה",
        'en': "שקיעה",
        'fr': "שקיעה",
    },
    'Tzais':{
        'he': "צאת הכוכבים",
        'en': "צאת הכוכבים",
        'fr': "צאת הכוכבים",
    },
    'Tzais72':{
        'he': "רבינו תם",
        'en': "רבינו תם",
        'fr': "רבינו תם",
    },
}


export function getStringsByLanguages(str,len) {
    return StringsByLanguagesObj[str][len] 
}
