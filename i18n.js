/* Nospi — traduccion al ingles de la landing.
   El HTML queda en espanol (fuente de verdad). Este archivo solo guarda el
   ingles y, al cargar, cambia el texto de cada elemento con data-i18n.
   No hay dependencias ni build: es un .js suelto que sirve Vercel.
   Para agregar o corregir un texto: busca su clave abajo. Las claves salen
   del atributo data-i18n del html (home.*, term.*, priv.*, nino.*, borrar.*,
   emp.*, appr.*, meetr.*). Si una clave no existe aqui, ese texto se queda
   en espanol, nunca se rompe la pagina. */
(function () {
  var EN = {
 "appr.1": "Download Nospi",
 "appr.2": "With the app you get the event alerts and you play the game from your phone.",
 "appr.3": "🤖 Download for Android",
 "appr.4": "🍎 Download for iPhone",
 "appr.meta.desc": "With the app you get the event alerts and you play the game from your phone.",
 "appr.meta.ogDesc": "With the app you get the event alerts and you play the game from your phone.",
 "appr.meta.ogTitulo": "Download Nospi",
 "appr.titulo": "Download Nospi",
 "borrar.1": "Nospi",
 "borrar.10": ". Once it is processed, we will not be able to recover your information.",
 "borrar.11": "Deleting your account permanently erases:",
 "borrar.12": "Your profile and personal information (name, photo, contact details)",
 "borrar.13": "Your event and booking history",
 "borrar.14": "Your preferences and settings",
 "borrar.15": "Your Nospi sign-in account",
 "borrar.16": "Payments already made are non-refundable once the deletion goes through.",
 "borrar.17": "How do I request deletion?",
 "borrar.18": "Get in touch through any of the channels below. Include your",
 "borrar.19": "email registered with Nospi",
 "borrar.2": "← Back to home",
 "borrar.20": "and the subject",
 "borrar.21": "“Delete account”",
 "borrar.22": "We'll verify your identity to protect your account from unauthorised deletion.",
 "borrar.23": "We'll process your request within a maximum of",
 "borrar.24": "7 business days",
 "borrar.25": "and we'll confirm by email.",
 "borrar.26": "Contact us",
 "borrar.27": "Write to us through any of these channels and we'll process your request:",
 "borrar.29": "Email",
 "borrar.3": "Account",
 "borrar.30": "Send us a message",
 "borrar.32": "WhatsApp",
 "borrar.33": "Chat with us",
 "borrar.34": "Request deletion",
 "borrar.35": "Include the email you registered with on Nospi",
 "borrar.36": "Name",
 "borrar.37": "The email you registered with on Nospi",
 "borrar.38": "Message",
 "borrar.39": "Send request",
 "borrar.4": "Delete",
 "borrar.40": "Cancel",
 "borrar.41": "Request sent!",
 "borrar.42": "We'll get back to you within 7 business days at",
 "borrar.43": "Close",
 "borrar.44": "© 2026 Nospi ·",
 "borrar.45": "Privacy",
 "borrar.46": "Terms",
 "borrar.5": "your account",
 "borrar.6": "You can ask us to delete your account and all your data at any time.",
 "borrar.7": "What gets deleted?",
 "borrar.8": "Deleting your account is",
 "borrar.9": "permanent and can't be undone",
 "borrar.meta.desc": "Request the deletion of your account and data at Nospi.",
 "borrar.ph1": "Your name",
 "borrar.ph2": "you@email.com",
 "borrar.ph3": "Write: 'I request the deletion of my account and all my data from Nospi.'",
 "borrar.titulo": "Delete your account — Nospi",
 "emp.1": "Nospi",
 "emp.10": "(the nospi.co website, the mobile app and the app.nospi.co web app) is operated by",
 "emp.11": "CRICKEN",
 "emp.12": ", a business establishment registered with the Chamber of Commerce of Medellín for Antioquia, Colombia.",
 "emp.13": "Commercial registry details",
 "emp.14": "Registered name",
 "emp.15": "CRICKEN",
 "emp.16": "Commercial registration number",
 "emp.17": "Chamber of Commerce",
 "emp.18": "Medellín for Antioquia",
 "emp.19": "Registration date",
 "emp.2": "← Back to home",
 "emp.20": "12 June 2024",
 "emp.21": "Economic activity (CIIU)",
 "emp.22": "5619 — Other prepared food service activities n.e.c.",
 "emp.23": "Business address",
 "emp.24": "Calle 49 #41-86, Medellín, Antioquia, Colombia",
 "emp.25": "Contact email",
 "emp.26": "nospisocial@gmail.com",
 "emp.27": "Phone",
 "emp.28": "Other legal documents",
 "emp.29": "Terms and conditions",
 "emp.3": "Legal information",
 "emp.30": "Privacy policy",
 "emp.31": "Child safety",
 "emp.32": "© 2025 Nospi. Made with ❤️ in Colombia",
 "emp.4": "Company",
 "emp.5": "information",
 "emp.6": "Commercial registry details of the company that operates Nospi",
 "emp.7": "Platform owner",
 "emp.8": "The platform",
 "emp.9": "Nospi",
 "emp.meta.desc": "Legal and commercial registry information for the company that operates the Nospi platform.",
 "emp.titulo": "Company information — Nospi",
 "home.1": "Nospi",
 "home.10": "Sign up",
 "home.100": "I want to play →",
 "home.101": "What people who've been say",
 "home.102": "Real people, real experiences.",
 "home.103": "I showed up not knowing anyone and left with 5 new friends. The question game is great — you forget they're strangers.",
 "home.104": "Valentina R., 26",
 "home.105": "I'd been in a new city for 2 months and didn't know anyone. Nospi saved my weekends. I've been to 3 events already.",
 "home.106": "Andrés M., 31",
 "home.107": "My friends can never go out on the same day. With Nospi I always have a plan and I meet really cool people.",
 "home.108": "Carolina T., 28",
 "home.109": "Envigado",
 "home.11": "&times;",
 "home.110": "So much better than Tinder. No endless chatting here — you just show up and meet people for real.",
 "home.111": "Santiago G., 33",
 "home.112": "Sabaneta",
 "home.113": "The daring level is the best 😂 I'd never laughed that hard with strangers. Highly recommended.",
 "home.114": "María José P., 24",
 "home.115": "I moved for work and a colleague recommended Nospi. It was the best night I've had since I got here.",
 "home.116": "Daniel F., 29",
 "home.117": "Have your first experience →",
 "home.118": "Nospi is for you if...",
 "home.119": "You're tired of chatting and getting nowhere",
 "home.12": "How it works",
 "home.120": "You just moved to a new city and don't know anyone",
 "home.121": "Your friends can never go out when you want to",
 "home.122": "You want to meet real people, no filters, no fake profiles",
 "home.123": "You're looking for friends to go out with (girls' night)",
 "home.124": "You just want a different plan this weekend",
 "home.125": "Book your seat now →",
 "home.126": "Frequently asked questions",
 "home.127": "How does Nospi work?",
 "home.128": "You sign up, pick an event, pay for your seat and that's it. The day before the event we reveal the location. You just show up, confirm your code and the experience starts with our icebreaker game.",
 "home.129": "Is it safe?",
 "home.13": "Events",
 "home.130": "Everyone taking part is verified with their real name, photo and phone number. Events are held at well-known bars and restaurants.",
 "home.131": "Can I come on my own?",
 "home.132": "That's the whole idea! Most people come alone. It's the easiest way to meet new people.",
 "home.133": "What if I don't know anyone?",
 "home.134": "That's the best part. Everyone is in the same boat. The question game breaks the ice in the first few minutes.",
 "home.135": "Will I know who else is coming before I get there?",
 "home.136": "No, and that's the point. You won't see photos or profiles of your group before the event. You'll only know the place a day ahead. The surprise is part of it — that's how you meet people for real, with no preconceptions.",
 "home.137": "Which cities are you in?",
 "home.138": "We're opening city by city across Colombia. When you sign up you pick yours and we only show you the plans there; if there aren't any yet, we'll let you know as soon as we open. We also run video-call meetups you can join from anywhere.",
 "home.139": "What are the groups like?",
 "home.14": "Experiences",
 "home.140": "A small group of men and women, so it stays intimate and everyone gets to talk. We put each table together looking for people close in age, though we don't promise an exact mix: it depends on who signs up that week.",
 "home.141": "Can I cancel my seat?",
 "home.142": "Yes. If you can't make it, you can cancel in the app more than 24 hours ahead and we give you your full balance back for your next event. If you cancel with less than 24 hours to go, or you don't show up, we can't return the balance — your seat is already booked and the group is already put together.",
 "home.143": "Ready? Join now →",
 "home.144": "Support",
 "home.145": "Need help? Get in touch",
 "home.147": "Email",
 "home.148": "Send us a message",
 "home.15": "Reviews",
 "home.150": "WhatsApp",
 "home.151": "Chat with us",
 "home.152": "Trust",
 "home.153": "Attendance policy",
 "home.154": "We make sure every table is full so the night is good for everyone. That's why we ask you to tell us in time if you can't make it.",
 "home.155": "🗓️ Cancelling",
 "home.156": "If you can't make it, you can",
 "home.157": "cancel in the app more than 24 hours",
 "home.158": "ahead and we give you back your",
 "home.159": "balance",
 "home.16": "Attendance policy",
 "home.160": "to use at another event. If you cancel with",
 "home.161": "less than 24 hours",
 "home.162": "don't show up",
 "home.163": ", we can't return the balance.",
 "home.164": "🔓 What does suspended mean?",
 "home.165": "It only means you",
 "home.166": "can't book",
 "home.167": "new events for a while. You keep using the app as usual (chat, profile…).",
 "home.168": "⚠️ If you miss without telling us",
 "home.169": "First miss:",
 "home.17": "Support",
 "home.170": "we just let you know, nothing is blocked.",
 "home.171": "Second miss:",
 "home.172": "you can't book for 15 days.",
 "home.173": "Third miss:",
 "home.174": "you can't book for 60 days.",
 "home.175": "Misses clear after about 4 months of good standing.",
 "home.176": "🛟 Something went wrong when confirming or getting in?",
 "home.177": "Write to support",
 "home.178": "and we sort it out. We never suspend anyone over a technical glitch or for telling us in time.",
 "home.179": "Contact support",
 "home.18": "Sign in",
 "home.180": "We'll get back to you as soon as we can",
 "home.181": "Name",
 "home.182": "Your email",
 "home.183": "Message",
 "home.184": "Send message",
 "home.185": "Cancel",
 "home.186": "Message sent!",
 "home.187": "We'll reply soon to",
 "home.188": "Close",
 "home.189": "Nospi",
 "home.19": "Sign up",
 "home.190": "Your weekly dose of connection. Group meetups to meet new people.",
 "home.191": "AVAILABLE ON",
 "home.192": "App Store",
 "home.193": "AVAILABLE ON",
 "home.194": "Google Play",
 "home.195": "Nospi",
 "home.196": "How it works",
 "home.197": "Experiences",
 "home.198": "Reviews",
 "home.199": "Frequently asked questions",
 "home.2": "How it works",
 "home.20": "🔒 You won't know who else is coming until the event",
 "home.200": "Attendance policy",
 "home.201": "Legal",
 "home.202": "Terms and conditions",
 "home.203": "Privacy policy",
 "home.204": "Child safety",
 "home.205": "Delete account",
 "home.206": "Company information",
 "home.207": "Contact",
 "home.208": "Follow us",
 "home.209": "Instagram",
 "home.21": "Stop swiping.",
 "home.210": "TikTok",
 "home.211": "© 2025 Nospi. Made with ❤️ in Colombia",
 "home.212": "V",
 "home.213": "A",
 "home.214": "C",
 "home.215": "S",
 "home.216": "M",
 "home.217": "D",
 "home.218": "or",
 "home.22": "Start living.",
 "home.23": "We seat you with people close to your age, not at random. No photos, no chatting beforehand — we only reveal the place a day ahead. You show up, sit down, and the surprise does the rest.",
 "home.24": "Join now →",
 "home.25": "How it works",
 "home.26": "per meetup · you only pay for the ones you go to",
 "home.27": "Nospi",
 "home.28": "Your weekly dose",
 "home.29": "of connection",
 "home.3": "Events",
 "home.30": "Get started",
 "home.31": "I already have an account",
 "home.32": "AVAILABLE ON",
 "home.33": "App Store",
 "home.34": "AVAILABLE ON",
 "home.35": "Google Play",
 "home.36": "Upcoming events",
 "home.37": "They all cost the same:",
 "home.38": " per person. You only pay for the ones you go to.",
 "home.39": "Loading events... ✨",
 "home.4": "Experiences",
 "home.40": "See all events →",
 "home.41": "Tired of the same thing?",
 "home.42": "We know the feeling. That's why we built something different.",
 "home.43": "The same conversations",
 "home.44": "The same questions over and over on dating apps that never lead anywhere real.",
 "home.45": "Endless chatting",
 "home.46": "Weeks of texting and in the end nobody actually makes a plan.",
 "home.47": "Weekends on your own",
 "home.48": "You just moved to a new city, your friends can't go out, or you simply want to meet new people.",
 "home.49": "Nospi cuts all of that out.",
 "home.5": "Safety",
 "home.50": "You don't know who else is coming until you're there. That uncertainty is exactly what makes it work. ✨",
 "home.51": "Book a seat →",
 "home.52": "It's that easy",
 "home.53": "Three steps and you're in. We take care of everything else.",
 "home.54": "Book your seat",
 "home.55": "Pick the event you like, pay for your seat and that's it. We handle the rest.",
 "home.56": "Wait for the surprise",
 "home.57": "You don't know who's coming or where it is until the day before. That mystery is part of it — we tell you the place and you arrive curious, not with expectations.",
 "home.58": "Connect and have fun",
 "home.59": "Break the ice with our question game, level by level. Everyone joins in, everyone has a good time.",
 "home.6": "Reviews",
 "home.60": "Book your first event →",
 "home.61": "Your safety comes first",
 "home.62": "We know meeting strangers can raise questions. That's why we look after every detail.",
 "home.63": "Well-known venues",
 "home.64": "Every event is at a verified bar or restaurant. Public places, well known and with a good reputation.",
 "home.65": "Verified people",
 "home.66": "Everyone signs up with their real name, photo and phone number. We know who is at each event.",
 "home.67": "Tables put together by age",
 "home.68": "A small group of men and women. We put each table together so the ages sit well with each other and the conversation flows. An intimate, calm and comfortable setting — no crowds, no chaos.",
 "home.69": "Safe hours",
 "home.7": "Policy",
 "home.70": "Events have a set start time and run at reasonable hours. You decide when to leave.",
 "home.71": "Check-in code",
 "home.72": "When you arrive you confirm your attendance with a unique code. Only people who paid and registered get in.",
 "home.73": "Feedback after the event",
 "home.74": "At the end everyone rates the experience. That's how we keep improving and keep the quality up.",
 "home.75": "Experiences for everyone",
 "home.76": "Different formats, the same promise: you're going to have a great time.",
 "home.77": "A night at a bar",
 "home.78": "A group of men and women at the best bars in the city. Drinks, laughs and connections you didn't see coming.",
 "home.79": "Group dinner",
 "home.8": "Support",
 "home.80": "Try a new restaurant with interesting people. Good food tastes better in good company.",
 "home.81": "Girls' night",
 "home.82": "Women only. Meet friends to go out with, share and have fun. Because sometimes you need your own crew.",
 "home.83": "Special experiences",
 "home.84": "Themed nights, tastings, surprise activities. Always something new to discover.",
 "home.85": "I want in →",
 "home.86": "AVAILABLE ON",
 "home.87": "App Store",
 "home.88": "AVAILABLE ON",
 "home.89": "Google Play",
 "home.9": "Sign in",
 "home.90": "It's not a boring dinner.",
 "home.91": "It's an experience.",
 "home.92": "Our question game breaks the ice right away. Everyone joins in, nobody sits there quiet.",
 "home.93": "Fun",
 "home.94": "Light questions to get to know each other. Your name, what you do, your biggest dream.",
 "home.95": "Flirty",
 "home.96": "The conversation gets interesting. What attracts you? Your ideal date?",
 "home.97": "Daring",
 "home.98": "For the brave. Secrets, confessions and questions nobody dares to ask.",
 "home.99": "If someone won't answer... shot or dare! 🥃",
 "home.meta.desc": "Meet real people at group meetups every week, at bars and restaurants in your city. No chatting, no profiles. You just show up and meet people.",
 "home.meta.ogDesc": "Group meetups every week to meet new people. No profiles, no chatting beforehand.",
 "home.meta.ogTitulo": "Nospi — Stop swiping. Start living.",
 "home.ph1": "Your name",
 "home.ph2": "you@email.com",
 "home.ph3": "Describe your question or problem...",
 "home.titulo": "Nospi — Group meetups to meet new people",
 "meetr.1": "Install Google Meet",
 "meetr.2": "Nospi video calls run on Google Meet. Install it beforehand so you can join without delays.",
 "meetr.3": "🤖 Download for Android",
 "meetr.4": "🍎 Download for iPhone",
 "meetr.meta.desc": "Nospi video calls run on Google Meet. Install it beforehand so you can join without delays.",
 "meetr.meta.ogDesc": "Nospi video calls run on Google Meet. Install it beforehand so you can join without delays.",
 "meetr.meta.ogTitulo": "Install Google Meet",
 "meetr.titulo": "Install Google Meet",
 "nino.1": "Nospi",
 "nino.10": "When signing up, every user explicitly confirms they are over 18. We reserve the right to delete any account that does not meet this requirement.",
 "nino.11": "2. Our commitment against CSAM",
 "nino.12": "Nospi has a policy of",
 "nino.13": "zero tolerance",
 "nino.14": "against any form of child sexual exploitation or abuse (CSAM — Child Sexual Abuse Material).",
 "nino.15": "Publishing, sharing or distributing any content involving minors in a sexual or inappropriate way is strictly forbidden.",
 "nino.16": "Any such content will be removed immediately and the account responsible will be permanently suspended.",
 "nino.17": "We will proactively report any case we detect to the competent authorities in Colombia and to the relevant international bodies.",
 "nino.18": "3. How to report",
 "nino.19": "Nospi allows and makes it easy for users to report any inappropriate behaviour or content involving minors:",
 "nino.2": "← Back to home",
 "nino.20": "In the app:",
 "nino.21": "users can report content directly from the mobile app.",
 "nino.22": "By email:",
 "nino.23": "anyone can send a report to",
 "nino.24": "nospisocial@gmail.com",
 "nino.25": "with the subject \"Safety report\".",
 "nino.26": "On WhatsApp:",
 "nino.27": "you can also contact us at",
 "nino.28": "Every report is handled urgently and confidentially.",
 "nino.29": "4. Legal compliance",
 "nino.3": "Safety",
 "nino.30": "Nospi complies with all applicable Colombian and international laws on the protection of minors, including:",
 "nino.31": "Law 679 of 2001 (Colombia) — Statute to prevent and counter the exploitation, pornography and sex tourism involving minors.",
 "nino.32": "Childhood and Adolescence Code (Law 1098 of 2006).",
 "nino.33": "The Budapest Convention on Cybercrime as it relates to CSAM.",
 "nino.34": "Reports of child sexual abuse material detected on our platform will be passed to the competent authorities, including the Colombian National Police and the ICBF where applicable.",
 "nino.35": "5. Age verification and moderation",
 "nino.36": "To make sure only adults use Nospi, we apply the following measures:",
 "nino.37": "Mandatory confirmation of being of legal age during sign-up.",
 "nino.38": "The app is rated as content for",
 "nino.39": "people aged 18 and over",
 "nino.4": "Child",
 "nino.40": "on Google Play and the App Store.",
 "nino.41": "Manual review of reports related to user safety.",
 "nino.42": "Immediate suspension of accounts that break our policies.",
 "nino.43": "6. Designated safety contact",
 "nino.44": "The designated point of contact for matters relating to child safety and CSAM compliance is:",
 "nino.45": "nospisocial@gmail.com",
 "nino.46": "This contact is available to communicate with authorities, researchers and child protection organisations about compliance practices and reports.",
 "nino.47": "© 2026 Nospi ·",
 "nino.48": "Privacy",
 "nino.49": "Terms",
 "nino.5": "Safety",
 "nino.50": "Child Safety",
 "nino.6": "Last updated: April 2026",
 "nino.7": "1. A platform for adults 18 and over only",
 "nino.8": "Nospi is strictly a platform for people aged 18 and over.",
 "nino.9": "It is not aimed at minors and does not allow them to register or take part under any circumstances.",
 "nino.meta.desc": "Nospi's child safety standards. Learn how we protect minors on our platform.",
 "nino.titulo": "Child Safety — Nospi",
 "priv.1": "Nospi",
 "priv.10": "or visit our website at",
 "priv.11": "nospi.co",
 "priv.12": "2. What information do we collect?",
 "priv.13": "When you use Nospi, we may collect the following information:",
 "priv.14": "Account data:",
 "priv.15": "name, email address and profile photo, obtained when you sign in with Google.",
 "priv.16": "Usage data:",
 "priv.17": "events you have signed up for, participation history and preferences inside the app.",
 "priv.18": "Payment data:",
 "priv.19": "processed securely through external payment gateways. We do not store card data.",
 "priv.2": "← Back to home",
 "priv.20": "Technical data:",
 "priv.21": "IP address, device type and browser, to improve how the platform works.",
 "priv.22": "3. What do we use your information for?",
 "priv.23": "We use your data only to:",
 "priv.24": "Create and manage your Nospi account.",
 "priv.25": "Sign you up for the group meetups you choose.",
 "priv.26": "Send you confirmations, reminders and event news (you can opt out at any time).",
 "priv.27": "Improve the platform and fix technical problems.",
 "priv.28": "4. Do we share your information?",
 "priv.29": "We do not sell or share your personal data with third parties",
 "priv.3": "Legal",
 "priv.30": "for commercial or advertising purposes.",
 "priv.31": "We only share information with service providers that are essential for Nospi to work, such as:",
 "priv.32": "Supabase (database and authentication)",
 "priv.33": "Google (sign-in)",
 "priv.34": "Vercel (application hosting)",
 "priv.35": "These providers are contractually required to protect your information and not use it for any other purpose.",
 "priv.36": "5. Signing in with Google",
 "priv.37": "When you use “Sign in with Google”, you authorise Google to share your name, email address and public profile photo with Nospi. Nospi does not access your Google password or any other data in your account.",
 "priv.38": "You can revoke this access at any time from your",
 "priv.39": "Google account",
 "priv.4": "Privacy",
 "priv.40": "6. Your rights",
 "priv.41": "You have the right to:",
 "priv.42": "Access",
 "priv.43": "the personal data we hold about you.",
 "priv.44": "Correct",
 "priv.45": "incorrect or outdated information.",
 "priv.46": "Delete",
 "priv.47": "your account and all your data from our platform.",
 "priv.48": "Cancel",
 "priv.49": "marketing communications at any time.",
 "priv.5": "Privacy",
 "priv.50": "To exercise any of these rights, write to us at",
 "priv.52": "7. Security",
 "priv.53": "We protect your information with industry-standard technical measures, including encryption in transit (HTTPS) and at rest. That said, no system is 100% foolproof. If you spot a security problem, please contact us straight away.",
 "priv.54": "8. Data retention",
 "priv.55": "We keep your information for as long as you have an active Nospi account. If you delete your account, we will erase your personal data within a maximum of 30 days, unless we are legally required to keep it.",
 "priv.56": "9. Changes to this policy",
 "priv.57": "We may update this policy from time to time. We'll notify you by email if the changes are significant. The “last updated” date at the top of the document always reflects the current version.",
 "priv.58": "10. Contact",
 "priv.59": "If you have questions about this privacy policy, write to us at:",
 "priv.6": "Last updated: March 2026",
 "priv.60": "Email:",
 "priv.61": "nospisocial@gmail.com",
 "priv.62": "WhatsApp:",
 "priv.63": "Website:",
 "priv.64": "nospi.co",
 "priv.65": "© 2026 Nospi. Made with ❤️ in Colombia ·",
 "priv.66": "Back to home",
 "priv.67": "Terms",
 "priv.7": "1. Who we are",
 "priv.8": "Nospi is a group meetup platform in Colombia. You can reach us at",
 "priv.meta.desc": "Nospi's Privacy Policy. Learn how we protect and use your information.",
 "priv.titulo": "Privacy Policy — Nospi",
 "term.1": "Nospi",
 "term.10": "platform (hereinafter, \"the Platform\"), whether through the mobile app, the web app or the nospi.co website, you agree to be bound by these Terms and Conditions (hereinafter, \"the Terms\"). If you do not agree with any of these Terms, please do not use the Platform.",
 "term.100": "Indirect, incidental, special or consequential damages arising from the use of the Platform.",
 "term.101": "Loss of data, income or opportunities arising from the use of, or inability to use, the service.",
 "term.102": "Actions, omissions or conduct of other users, inside or outside the events.",
 "term.103": "Third-party content, products or services linked to the Platform.",
 "term.104": "Service interruptions caused by maintenance, updates or circumstances beyond its control.",
 "term.105": "In any case, Nospi's total liability towards you will not exceed the amount you have paid to Nospi during the last 12 months.",
 "term.106": "11. Indemnification",
 "term.107": "You agree to indemnify and hold harmless Nospi, its officers, employees, agents and partners against any claim, demand, damage, loss, cost or expense (including attorneys' fees) arising from:",
 "term.108": "Your use of the Platform.",
 "term.109": "Your breach of these Terms.",
 "term.11": "Nospi reserves the right to modify these Terms at any time. We will notify you of significant changes by email or through a notice inside the Platform. Continued use of Nospi after the changes are published will constitute your acceptance of the new Terms.",
 "term.110": "Your violation of any third-party right.",
 "term.111": "Your conduct during events organized through Nospi.",
 "term.112": "12. Communications",
 "term.113": "By registering on Nospi, you agree to receive communications related to your account and the events, including confirmations, reminders, updates and safety notices. These operational communications are necessary for the service to work and cannot be turned off while you keep an active account.",
 "term.114": "Marketing and promotional communications can be turned off at any time from the notification preferences inside the app or by contacting support.",
 "term.115": "13. Termination",
 "term.116": "You can close your account at any time from the Platform or by contacting our support team. When you close your account:",
 "term.117": "Your registrations for future events will be cancelled (subject to the cancellation policy in force).",
 "term.118": "Your personal data will be deleted as set out in our Privacy Policy.",
 "term.119": "You will lose access to any history of your participation in events.",
 "term.12": "2. Description of the Service",
 "term.120": "Nospi may suspend or terminate your account immediately and without prior notice if: (a) you breach these Terms, (b) you pose a risk to the safety of other users, (c) your account has been used for fraudulent activity, or (d) it is legally required.",
 "term.121": "14. Governing Law and Jurisdiction",
 "term.122": "These Terms are governed by and interpreted in accordance with the laws of the",
 "term.123": "Republic of Colombia",
 "term.124": ". Any dispute arising in connection with these Terms or the use of the Platform will be submitted to the jurisdiction of the competent courts of the city of",
 "term.125": "Medellín, Antioquia, Colombia",
 "term.126": "Before starting any legal proceedings, the parties agree to try to resolve the dispute amicably for a period of 30 calendar days from the written notice of the dispute.",
 "term.127": "15. General Provisions",
 "term.128": "Entire agreement:",
 "term.129": "these Terms, together with the Privacy Policy, constitute the entire agreement between you and Nospi regarding the use of the Platform.",
 "term.13": "Nospi is a platform for",
 "term.130": "Severability:",
 "term.131": "if any provision of these Terms is declared invalid or unenforceable, the remaining provisions will continue in full force and effect.",
 "term.132": "Waiver:",
 "term.133": "failure to exercise any right under these Terms will not constitute a waiver of it.",
 "term.134": "Assignment:",
 "term.135": "you may not assign or transfer your rights or obligations under these Terms without Nospi's prior written consent.",
 "term.136": "Force majeure:",
 "term.137": "Nospi will not be liable for failures caused by circumstances beyond its reasonable control, including natural disasters, pandemics, armed conflict, infrastructure failures, or government action.",
 "term.138": "16. Contact",
 "term.139": "If you have questions about these Terms and Conditions, you can contact us through:",
 "term.14": "group meetups",
 "term.140": "Email:",
 "term.141": "nospisocial@gmail.com",
 "term.142": "WhatsApp:",
 "term.143": "Website:",
 "term.144": "nospi.co",
 "term.145": "© 2025 Nospi. Made with ❤️ in Colombia ·",
 "term.146": "Back to home",
 "term.147": "Privacy",
 "term.148": "and",
 "term.15": "between people, in person at bars and restaurants in Colombia and also by video call. The service includes:",
 "term.16": "Publishing and organizing in-person group events.",
 "term.17": "A system to sign up and reserve a spot at those events.",
 "term.18": "Payment processing for event entry.",
 "term.19": "An icebreaker game during the events to make interaction easier.",
 "term.2": "← Back to home",
 "term.20": "Revealing the event location hours before it starts.",
 "term.21": "Nospi",
 "term.22": "is not",
 "term.23": "a dating service, a social network or a messaging platform. There is no chat between participants beforehand and no public profiles.",
 "term.24": "3. Registration and User Account",
 "term.25": "To use Nospi you must:",
 "term.26": "Be at least",
 "term.27": "18 years old",
 "term.28": "Create an account providing truthful and complete information (name, email, date of birth, phone number and profile photo).",
 "term.29": "Keep your login credentials confidential.",
 "term.3": "Legal",
 "term.30": "Notify us immediately of any unauthorized use of your account.",
 "term.31": "You can register with an email and password, or through your Google account. You are responsible for all activity that happens under your account.",
 "term.32": "Nospi reserves the right to",
 "term.33": "suspend or cancel accounts",
 "term.34": "that breach these Terms, provide false information, or pose a risk to other users or to the integrity of the Platform.",
 "term.35": "4. Events and Reservations",
 "term.36": "4.1. Signing up for events",
 "term.37": "Events have limited spots (small groups). Your registration is complete once the corresponding payment is made. Confirmation of your spot is sent by email and/or as a notification inside the app.",
 "term.38": "4.2. Event location",
 "term.39": "The exact location of the event is revealed to confirmed participants",
 "term.4": "Terms &",
 "term.40": "hours before the event",
 "term.41": ". This information is confidential and must not be shared publicly.",
 "term.42": "4.3. Cancellations and refunds",
 "term.43": "Cancellation policies may vary by event. In general:",
 "term.44": "Early cancellation",
 "term.45": "(more than 24 hours before the event): you may request a full or partial refund depending on the event's conditions.",
 "term.46": "Late cancellation",
 "term.47": "(less than 24 hours before): a refund is not guaranteed, except in exceptional circumstances assessed by Nospi.",
 "term.48": "No-show",
 "term.49": ": if you do not attend the event without cancelling beforehand, no refund will be issued.",
 "term.5": "Conditions",
 "term.50": "If Nospi cancels an event for its own reasons (force majeure, problems at the venue, minimum number of participants not reached, etc.), the full amount paid will be refunded.",
 "term.51": "4.4. Attendance confirmation",
 "term.52": "When you arrive at the event, you must confirm your attendance using the code provided in the Platform. This is required in order to take part in the event's game.",
 "term.53": "5. Payments",
 "term.54": "Payments are processed through secure third-party payment gateways (currently",
 "term.55": "Wompi",
 "term.56": "). Nospi does not store credit or debit card data on its servers.",
 "term.57": "Event prices are shown in",
 "term.58": "Colombian pesos (COP)",
 "term.59": "and include entry to the event and the icebreaker game. They do not include food or drinks at the venue, unless the event description states otherwise.",
 "term.6": "Last updated: April 2026",
 "term.60": "By making a payment, you accept the terms and conditions of the payment gateway used.",
 "term.61": "6. User Conduct",
 "term.62": "As a Nospi user, you agree to:",
 "term.63": "Behave",
 "term.64": "respectfully",
 "term.65": "towards the other participants, the Nospi team and the venue's staff.",
 "term.66": "Not harass, intimidate, threaten or discriminate against other users on the grounds of gender, sexual orientation, race, religion, nationality, age or any other condition.",
 "term.67": "Not attend events under the effects of excessive alcohol or illegal psychoactive substances.",
 "term.68": "Not promote, sell or distribute products or services during the events without authorization from Nospi.",
 "term.69": "Respect the rules of the venue where the event takes place.",
 "term.7": "1. Acceptance of the Terms",
 "term.70": "Not photograph or record other participants without their explicit consent.",
 "term.71": "Not use the Platform for illegal, fraudulent or unauthorized purposes.",
 "term.72": "Breaking these conduct rules may result in the",
 "term.73": "permanent suspension",
 "term.74": "of your account with no right to a refund.",
 "term.75": "7. Safety at the Events",
 "term.76": "Nospi takes reasonable steps to keep its events safe:",
 "term.77": "Every user is verified with their",
 "term.78": "real name, photo and phone number",
 "term.79": "Events are held at well-known commercial venues holding a valid operating license.",
 "term.8": "By accessing, registering on or using the",
 "term.80": "Groups are small, which makes supervision and the experience easier.",
 "term.81": "However, Nospi",
 "term.82": "is not responsible",
 "term.83": "for the actions of third parties, incidents at the venues, or situations beyond its reasonable control. Each user attends events at their own risk and must act sensibly.",
 "term.84": "8. Intellectual Property",
 "term.85": "All content on the Platform, including but not limited to: the name \"Nospi\", logos, designs, texts, graphics, icons, images, software, source code, the icebreaker game and promotional material, is the exclusive property of Nospi or its licensors and is protected by applicable intellectual property laws.",
 "term.86": "Copying, reproducing, distributing, modifying, publicly displaying, creating derivative works from, decompiling or reverse engineering any content or feature of the Platform without Nospi's prior written authorization is prohibited.",
 "term.87": "9. Privacy and Personal Data",
 "term.88": "The processing of your personal data is governed by our",
 "term.89": "Privacy Policy",
 "term.9": "Nospi",
 "term.90": ", which forms an integral part of these Terms. By accepting these Terms, you also accept the practices described in that policy.",
 "term.91": "In compliance with Colombian personal data protection law (",
 "term.92": "Law 1581 of 2012",
 "term.93": "and its implementing decrees), Nospi acts as the controller of your data. You have the right to access, update, correct and delete your personal data, as well as to withdraw your authorization for its processing.",
 "term.94": "10. Limitation of Liability",
 "term.95": "The Platform is provided",
 "term.96": "\"as is\"",
 "term.97": "\"as available\"",
 "term.98": ". Nospi does not guarantee that the service will be uninterrupted, error-free or completely secure.",
 "term.99": "To the maximum extent permitted by Colombian law, Nospi will not be liable for:",
 "term.meta.desc": "Nospi's Terms and Conditions. Learn the rules and responsibilities when using our group meetup platform.",
 "term.titulo": "Terms and Conditions — Nospi"
};

  var CLAVE = 'nospi_idioma';
  var nav = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
  var guardado = null;
  try { guardado = localStorage.getItem(CLAVE); } catch (e) {}
  var idioma = (guardado === 'en' || guardado === 'es')
    ? guardado
    : (nav.indexOf('es') === 0 ? 'es' : 'en');

  // La pastilla que tapa el cuerpo la crea el script chico del <head>, para
  // que el ingles no muestre un parpadeo en espanol. Aqui solo se destapa.
  // ---- API para el resto del JS de la pagina ----------------------------
  // Lo que arma JavaScript (tarjetas de eventos, mensajes del formulario) no
  // lleva data-i18n, asi que pregunta el idioma con estas funciones y se
  // vuelve a pintar cuando llega el evento 'nospi:idioma'.
  window.nospiIdioma = function () { return idioma; };
  window.nospiT = function (es, en) { return idioma === 'en' ? en : es; };
  window.NT = window.nospiT;

  var tapa = document.getElementById('nospiTapa');
  function destapar() {
    if (tapa && tapa.parentNode) { tapa.parentNode.removeChild(tapa); tapa = null; }
  }

  function original(el, prop, valor) {
    // Guarda el texto espanol la primera vez que se toca el elemento.
    if (el['__es_' + prop] === undefined) el['__es_' + prop] = valor;
    return el['__es_' + prop];
  }

  function aplicar(lang) {
    var i, el, k, es;
    var t = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < t.length; i++) {
      el = t[i]; k = el.getAttribute('data-i18n');
      es = original(el, 'txt', el.textContent);
      el.textContent = (lang === 'en' && EN[k] !== undefined) ? EN[k] : es;
    }
    var m = document.querySelectorAll('[data-i18n-meta]');
    for (i = 0; i < m.length; i++) {
      el = m[i]; k = el.getAttribute('data-i18n-meta');
      es = original(el, 'meta', el.getAttribute('content') || '');
      el.setAttribute('content', (lang === 'en' && EN[k] !== undefined) ? EN[k] : es);
    }
    var p = document.querySelectorAll('[data-i18n-ph]');
    for (i = 0; i < p.length; i++) {
      el = p[i]; k = el.getAttribute('data-i18n-ph');
      es = original(el, 'ph', el.getAttribute('placeholder') || '');
      el.setAttribute('placeholder', (lang === 'en' && EN[k] !== undefined) ? EN[k] : es);
    }
    var tit = document.querySelector('title[data-i18n]');
    if (tit) document.title = tit.textContent;
    document.documentElement.setAttribute('lang', lang);
    idioma = lang;
    pintarBoton();
    destapar();
    try {
      document.dispatchEvent(new CustomEvent('nospi:idioma', { detail: lang }));
    } catch (e) {
      // navegadores viejos: CustomEvent a la antigua
      var ev = document.createEvent('Event');
      ev.initEvent('nospi:idioma', true, true);
      document.dispatchEvent(ev);
    }
  }

  var boton = null;

  function pintarBoton() {
    if (!boton) return;
    var es = boton.querySelector('[data-lang="es"]');
    var en = boton.querySelector('[data-lang="en"]');
    es.style.opacity = idioma === 'es' ? '1' : '.55';
    en.style.opacity = idioma === 'en' ? '1' : '.55';
    es.style.fontWeight = idioma === 'es' ? '700' : '500';
    en.style.fontWeight = idioma === 'en' ? '700' : '500';
  }

  function cambiar(lang) {
    if (lang === idioma) return;
    try { localStorage.setItem(CLAVE, lang); } catch (e) {}
    aplicar(lang);
  }

  function crearBoton() {
    boton = document.createElement('div');
    boton.id = 'nospiIdioma';
    boton.setAttribute('role', 'group');
    boton.setAttribute('aria-label', 'Idioma / Language');
    boton.style.cssText = 'display:inline-flex;align-items:center;gap:7px;' +
      'padding:6px 13px;border-radius:50px;border:1px solid rgba(240,98,146,.45);' +
      "background:rgba(240,98,146,.14);font-family:'DM Sans',sans-serif;" +
      'font-size:13px;line-height:1;color:#fff;cursor:pointer;flex:0 0 auto;' +
      '-webkit-tap-highlight-color:transparent';
    // El globo es el icono universal de "cambiar idioma".
    boton.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' +
      ' style="flex:0 0 auto;opacity:.9"><circle cx="12" cy="12" r="9"></circle>' +
      '<path d="M3 12h18"></path>' +
      '<path d="M12 3c2.6 2.6 4 5.6 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.6-4-9s1.4-6.4 4-9z"></path></svg>' +
      '<span data-lang="es">ES</span>' +
      '<span style="opacity:.35">|</span><span data-lang="en">EN</span>';
    boton.addEventListener('click', function (ev) {
      var t = ev.target.getAttribute && ev.target.getAttribute('data-lang');
      if (t) { cambiar(t); return; }
      cambiar(idioma === 'es' ? 'en' : 'es');   // clic en el borde: alterna
    });

    var inner = document.querySelector('nav .nav-inner');
    if (inner) {
      var ham = inner.querySelector('.hamburger');
      boton.style.marginLeft = 'auto';
      boton.style.marginRight = '14px';
      if (ham) inner.insertBefore(boton, ham); else inner.appendChild(boton);
    } else {
      // paginas sin nav (app.html, meet.html): pastilla fija arriba a la derecha
      boton.style.position = 'fixed';
      boton.style.top = 'calc(14px + env(safe-area-inset-top))';
      boton.style.right = '14px';
      boton.style.zIndex = '2147483000';
      boton.style.background = 'rgba(26,0,16,.75)';
      boton.style.backdropFilter = 'blur(6px)';
      document.body.appendChild(boton);
    }
    pintarBoton();
  }

  function arrancar() {
    crearBoton();
    aplicar(idioma);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else {
    arrancar();
  }
})();
