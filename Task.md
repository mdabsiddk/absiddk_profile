Read [](file:///c%3A/Users/mdabs/Downloads/developer-portfolio-main/developer-portfolio-main/app/api/contact/route.js)

চমৎকার প্রশ্ন! এই সেটআপটি বেশ শক্তিশালী এবং অনেক ওয়েবসাইটের জন্য ব্যবহারযোগ্য। নিচে বিস্তারিত গাইড দিচ্ছি:

---

## **1. ব্যাকএন্ড সেটআপের সম্পূর্ণ ওভারভিউ**

এই সেটআপে ৩টি মূল উপাদান রয়েছে:

| উপাদান | কাজ | স্ট্যাটাস |
|--------|------|--------|
| **Gmail** | ইউজারের মেসেজ আপনার ইমেইলে পাঠায় | অ্যাক্টিভ |
| **Telegram Bot** | সেই মেসেজটা Telegram-এ পাঠায় (তাৎক্ষণিক নোটিফিকেশন) | অ্যাক্টিভ |
| **Google reCAPTCHA** | স্প্যাম প্রতিরোধ করে | অ্যাক্টিভ |

---

## **2. ধাপে ধাপে সেটআপ প্রক্রিয়া**

### **ধাপ ১: Gmail সেটআপ (APP PASSWORD তৈরি করা)**

Gmail থেকে সরাসরি পাসওয়ার্ড ব্যবহার করলে কাজ করে না (সিকিউরিটির জন্য)। আপনাকে App Password তৈরি করতে হবে:

1. `https://myaccount.google.com/` এ যান
2. বাম দিকে **Security** এ ক্লিক করুন
3. নিচে **App passwords** খুঁজুন (এন্ড-টু-এন্ড এনক্রিপশন চালু থাকলে দেখা যাবে)
4. App type: **Mail** এবং Device: **Windows PC** সিলেক্ট করুন
5. 16 অক্ষরের পাসওয়ার্ড পাবেন → **কপি করুন এবং সংরক্ষণ করুন**

```
Environment Variable:
GMAIL_PASSKEY = এই ১৬ অক্ষরের পাসওয়ার্ড
EMAIL_ADDRESS = আপনার Gmail (যেমন: yourname@gmail.com)
```

**খরচ**: ০ টাকা (সম্পূর্ণ ফ্রি)

---

### **ধাপ ২: Telegram Bot সেটআপ**

Telegram API ব্যবহার করে তাৎক্ষণিক নোটিফিকেশন পান:

**১. Bot তৈরি করা:**
- Telegram এ [@BotFather](https://t.me/botfather) খুঁজুন
- `/newbot` লিখুন এবং প্রক্রিয়া অনুসরণ করুন
- আপনার bot এর **Token** পাবেন (যেমন: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

**২. Chat ID পাওয়া:**
- আপনার তৈরি করা bot কে খুঁজে বার করুন এবং `/start` করুন
- এই লিঙ্কে যান: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
  - `<YOUR_BOT_TOKEN>` এর জায়গায় উপরের token বসান
- JSON এর মধ্যে `"chat": {"id": 123456789}` খুঁজে পাবেন → সেটাই Chat ID

```
Environment Variables:
TELEGRAM_BOT_TOKEN = এই token
TELEGRAM_CHAT_ID = এই Chat ID
```

**খরচ**: ০ টাকা (সম্পূর্ণ ফ্রি)

---

### **ধাপ ৩: Google reCAPTCHA সেটআপ**

স্প্যাম ও বট প্রতিরোধ করতে:

1. `https://www.google.com/recaptcha/admin` এ যান
2. **"+" বাটন** ক্লিক করে নতুন সাইট যোগ করুন
3. নাম দিন, আপনার ডোমেইন যোগ করুন (এবং localhost)
4. reCAPTCHA v3 সিলেক্ট করুন (সবচেয়ে ভালো)
5. **Site Key** এবং **Secret Key** পাবেন

```
Environment Variables:
NEXT_PUBLIC_RECAPTCHA_SITE_KEY = Site Key (ফ্রন্টএন্ডে ব্যবহৃত)
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = Secret Key (ব্যাকএন্ডে ব্যবহৃত)
```

**খরচ**: ০ টাকা (প্রতিদিন ১০,০০০ requuest পর্যন্ত ফ্রি)

---

## **3. Environment Variables সেটআপ (.env.local ফাইল)**

প্রজেক্টের রুটে `.env.local` নামের ফাইল তৈরি করুন:

```bash
# Gmail
EMAIL_ADDRESS=your-email@gmail.com
GMAIL_PASSKEY=abcd efgh ijkl mnop

# Telegram
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_CHAT_ID=987654321

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Le...your_site_key...
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=6Le...your_secret_key...
```

**গুরুত্বপূর্ণ**: এই ফাইল .gitignore এ রাখুন (GitHub এ আপলোড করবেন না)

---

## **4. ব্যাকএন্ড কোড বিশ্লেষণ (কিভাবে কাজ করে)**

### **Contact Form এর flow:**

```
ইউজার ফর্ম সাবমিট করে (নাম, ইমেইল, মেসেজ)
    ↓
Google reCAPTCHA ভেরিফাই হয় (স্প্যাম চেক)
    ↓
POST /api/contact এ ডেটা যায়
    ↓
① Telegram bot এর মাধ্যমে নোটিফিকেশন পাঠায় (তাৎক্ষণিক)
② Gmail এর মাধ্যমে HTML ফরম্যাটে ইমেইল পাঠায়
    ↓
উভয়ই সফল হলে Success message দেখায়
```

### **কোড এর মূল অংশ:**

```javascript
// ১. Nodemailer সেটআপ (Gmail দিয়ে ইমেইল পাঠানোর জন্য)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// ২. Telegram API কল (নোটিফিকেশন)
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await axios.post(url, { text: message, chat_id });
}

// ৩. HTML ইমেইল টেমপ্লেট (স্টাইলিশ দেখায়)
const email = `<div>নাম: ${name}</div><div>ইমেইল: ${email}</div>...`

// ৪. POST endpoint
export async function POST(request) {
  const payload = await request.json();
  
  // ইমেইল পাঠাও
  await sendEmail(payload);
  
  // Telegram নোটিফিকেশন পাঠাও
  await sendTelegramMessage(token, chat_id, message);
  
  // সাফল্য রেসপন্স
  return NextResponse.json({ success: true });
}
```

---

## **5. ফ্রন্টএন্ড থেকে কিভাবে ব্যবহার করবেন**

```javascript
// কন্টাক্ট ফর্মে:
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // ১. reCAPTCHA টোকেন পান
  const token = await recaptchaRef.current.executeAsync();
  
  // ২. Verify করুন
  const captchaRes = await fetch('/api/google', {
    method: 'POST',
    body: JSON.stringify({ token })
  });
  
  // ৩. ফর্ম ডেটা পাঠান
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message
    })
  });
  
  // ৪. লোডিং/সাফল্য স্টেট সেট করুন
};
```

---

## **6. FAQs এবং সম্ভাব্য সমস্যা**

| সমস্যা | সমাধান |
|--------|--------|
| **Email পাঠানো হচ্ছে না** | ১. App Password সঠিক কিনা চেক করুন ২. 2FA চালু আছে কিনা নিশ্চিত করুন ৩. Gmail থেকে कम সিকিউর অ্যাপ্লিকেশন allow করুন |
| **Telegram message যাচ্ছে না** | Chat ID ভুল হতে পারে। `/getUpdates` দিয়ে আবার চেক করুন |
| **reCAPTCHA failed** | Secret Key সঠিক কিনা, এবং domain match করছে কিনা চেক করুন |
| **rate limiting** | Telegram/Gmail এর রেট লিমিট থাকে (Gmail: ৩০০+ ই-মেইল/মিনিট) |

---

## **7. খরচ বিশ্লেষণ (সম্পূর্ণ)**

### **একবারের খরচ**: ০ টাকা ✅
- Gmail অ্যাকাউন্ট: ফ্রি
- Telegram Bot: ফ্রি
- Google reCAPTCHA: ফ্রি

### **মাসিক খরচ**: ০ টাকা ✅
- সব সার্ভিস ফ্রি tier তে অসীম (কম-বেশি)

### **বিনামূল্যে লিমিট:**
- **Gmail**: প্রতি মিনিটে ৩০০+ ইমেইল ✅
- **Telegram**: অসীম মেসেজ ✅
- **reCAPTCHA**: প্রতিদিন ১০,০০০ requests ✅
- **Next.js**: যদি Vercel এ ডিপ্লয় করেন তাহলে ফ্রি ✅

### **পেইড অপশন (যদি বাড়াতে চান):**
- **Vercel Pro**: মাসিক $20 (আনলিমিটেড bandwidth)
- **SendGrid** (alternative): প্রতিমাসে ১০০ emails পর্যন্ত ফ্রি

---

## **8. আপনার নিজের ওয়েবসাইটে ব্যবহারের জন্য চেকলিস্ট**

- [ ] Gmail অ্যাকাউন্ট তৈরি (বা বিদ্যমান ব্যবহার করুন)
- [ ] App Password জেনারেট করুন
- [ ] Telegram account খুলুন এবং BotFather এর সাথে bot তৈরি করুন
- [ ] Google reCAPTCHA v3 সেটআপ করুন
- [ ] `.env.local` ফাইল তৈরি করুন সব credentials দিয়ে
- [ ] `npm install nodemailer axios react-google-recaptcha` চালান
- [ ] Contact form component এ reCAPTCHA যোগ করুন
- [ ] POST `/api/contact` endpoint তৈরি করুন
- [ ] Testing করুন local environment এ
- [ ] Production এ ডিপ্লয় করুন (Vercel/hosting)

---

## **9. প্রোডাকশন ডিপ্লয়মেন্ট (গুরুত্বপূর্ণ)**

Vercel এ ডিপ্লয় করলে:

1. Vercel dashboard এ প্রজেক্ট খুলুন
2. Settings → Environment Variables এ যান
3. সব credentials যোগ করুন (.env.local এর থেকে)
4. Redeploy করুন

```
✅ সব কিছু সম্পূর্ণভাবে ফ্রি
✅ প্রতিটি ইউজারের জন্য তাৎক্ষণিক নোটিফিকেশন
✅ স্প্যাম প্রতিরোধ সুবিধা সহ
✅ স্কেলেবল এবং নির্ভরযোগ্য
```

এই সেটআপ দিয়ে আপনার নিজের ওয়েবসাইটে একটি প্রফেশনাল কন্টাক্ট সিস্টেম তৈরি করতে পারবেন। কোন প্রশ্ন থাকলে বলুন! 🚀