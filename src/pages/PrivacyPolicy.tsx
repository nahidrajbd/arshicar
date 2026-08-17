import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/company';
import { Footer } from '@/components/Footer';

export const PrivacyPolicy: React.FC = () => {
  const [lang, setLang] = useState<'ENG' | 'বাংলা'>('ENG');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const isEng = lang === 'ENG';

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Top Sticky Navigation Bar */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold">
            <ArrowLeft className="h-4 w-4 mr-2 text-primary" />
            <span>{isEng ? 'Back to Home' : 'হোম পেজে ফিরে যান'}</span>
          </Link>

          {/* Right Language Switcher & Showroom Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-lg overflow-hidden bg-secondary/30">
              <button
                onClick={() => setLang('ENG')}
                className={`px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                  isEng
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLang('বাংলা')}
                className={`px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                  !isEng
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                বাংলা
              </button>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {COMPANY_INFO.shortName} • Rajshahi
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Header Hero Box */}
        <div className="bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-card mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold border border-primary/30">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                {isEng ? 'Privacy Policy' : 'গোপনীয়তা নীতিমালা'}
              </h1>
              <p className="text-sm text-primary font-medium mt-0.5">
                {COMPANY_INFO.name}
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {isEng
              ? `At ${COMPANY_INFO.name} ("Arshi Car Hub", "we", "us", or "our"), we respect your personal privacy and are committed to safeguarding any personal information you share when visiting our website or communicating with our automotive sales, detailing, and service center in Sopura Mothpukur, Rajshahi.`
              : `${COMPANY_INFO.name} ("আরশি কার হাব", "আমরা") আপনাদের তথ্যের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিয়ে থাকি। আমাদের ওয়েবসাইট ভিজিট বা রাজশাহী সোপুরা মঠপুকুর শো-রুম ও সার্ভিস সেন্টার থেকে সেবা গ্রহণের সময় আপনার ব্যক্তিগত তথ্যের সুরক্ষা নিশ্চিতে আমরা বদ্ধপরিকর।`}
          </p>

          <div className="mt-4 pt-4 border-t border-border/60 text-xs text-muted-foreground flex justify-between items-center">
            <span>{isEng ? 'Last Updated: August 2026' : 'সর্বশেষ সংস্করণ: আগস্ট ২০২৬'}</span>
            <span className="text-primary font-semibold">Sopura Mothpukur, Rajshahi-6203</span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-foreground/90">
          {/* Section 1: Information We Collect */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-card">
            <div className="flex items-center gap-2.5 mb-4 text-primary">
              <Eye className="w-5 h-5" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                {isEng ? '1. Information We Collect' : '১. আমরা যেসব তথ্য সংগ্রহ করি'}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {isEng
                ? 'We only collect personal information that is necessary to deliver our Japanese reconditioned car sales, auction sheet verification, auto care detailing, and customer support:'
                : 'আমাদের জাপানি রিকন্ডিশন গাড়ি বিক্রয়, অকশন শিট যাচাইকরণ, অটো কেয়ার সার্ভিস ও গ্রাহক সেবা দিতে প্রয়োজনীয় তথ্যই শুধু আমরা সংগ্রহ করি:'}
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground list-disc list-inside">
              <li>
                <strong className="text-foreground">{isEng ? 'Contact Details:' : 'যোগাযোগের তথ্য:'}</strong>{' '}
                {isEng
                  ? 'Name, mobile phone number, WhatsApp contact, and email address when you make inquiries or submit booking forms.'
                  : 'নাম, মোবাইল নম্বর, হোয়াটসঅ্যাপ নম্বর ও ইমেইল (বুকিং ফর্ম পূরণ বা অনুসন্ধানের সময়)।'}
              </li>
              <li>
                <strong className="text-foreground">{isEng ? 'Vehicle Preferences:' : 'গাড়ির পছন্দ ও চাহিদা:'}</strong>{' '}
                {isEng
                  ? 'Preferred car models (Premio, C-HR, Yaris Cross, Corolla Cross, etc.), budget range, auction grades, or custom auction bidding requests.'
                  : 'পছন্দের গাড়ির মডেল, বাজেট, অকশন গ্রেড বা সরাসরি জাপানি অকশন ইমপোর্ট সংক্রান্ত তথ্য।'}
              </li>
              <li>
                <strong className="text-foreground">{isEng ? 'Service Details:' : 'সার্ভিস সংক্রান্ত তথ্য:'}</strong>{' '}
                {isEng
                  ? 'Vehicle registration/chassis number, detailing package preferences (ceramic coating, wash, dent-paint), and appointment dates.'
                  : 'গাড়ির রেজিস্ট্রেশন/চেসিস নম্বর, পছন্দের সার্ভিস প্যাকেজ (সিরামিক কোটিং, ওয়াশ, ডেন্ট-পেইন্ট) এবং অ্যাপয়েন্টমেন্টের তারিখ।'}
              </li>
            </ul>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-card">
            <div className="flex items-center gap-2.5 mb-4 text-primary">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                {isEng ? '2. How We Use Your Information' : '২. আমরা যেভাবে আপনার তথ্য ব্যবহার করি'}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {isEng
                ? 'We use the collected information solely for legitimate automotive sales, servicing, and client communication purposes:'
                : 'সংগৃহীত তথ্য আমরা কেবলমাত্র নিচের বৈধ অটোমোবাইল সেবা ও গ্রাহক যোগাযোগের কাজে ব্যবহার করি:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5 p-3.5 bg-background/50 rounded-xl border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{isEng ? 'Providing Japanese car auction sheets & price breakdowns' : 'জাপানি অকশন শিট ও গাড়ির মূল্য কোটেশন প্রদান'}</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 bg-background/50 rounded-xl border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{isEng ? 'Confirming service & showroom visit appointments' : 'সার্ভিস ও শোরুম টেস্ট ড্রাইভ বুকিং নিশ্চিতকরণ'}</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 bg-background/50 rounded-xl border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{isEng ? 'Direct customer support via Phone Call or WhatsApp' : 'কল বা হোয়াটসঅ্যাপে সার্বক্ষণিক গ্রাহক সহায়তা'}</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 bg-background/50 rounded-xl border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{isEng ? 'Assisting with bank loan financing and BRTA registration' : 'ব্যাংক অটো লোন ও বিআরটিএ রেজিস্ট্রেশন সহায়তা'}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Data Protection & Security */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-card">
            <div className="flex items-center gap-2.5 mb-4 text-primary">
              <Lock className="w-5 h-5" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                {isEng ? '3. Data Sharing & Security' : '৩. তথ্য বিনিময় ও কঠোর সুরক্ষা'}
              </h2>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">{isEng ? 'Zero Third-Party Selling:' : 'তথ্য বিক্রয় সম্পূর্ণ নিষিদ্ধ:'}</strong>{' '}
                {isEng
                  ? 'We never sell, rent, or trade your personal contact information to any third-party marketing brokers or telemarketers.'
                  : 'আমরা কখনোই কোনো গ্রাহকের ফোন নম্বর বা ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষ বা মার্কেটিং ব্রোকারের কাছে বিক্রয় বা হস্তান্তর করি না।'}
              </p>
              <p>
                <strong className="text-foreground">{isEng ? 'Confidential Management:' : 'গোপনীয়তার নিশ্চয়তা:'}</strong>{' '}
                {isEng
                  ? 'All inquiries, vehicle paperwork, and customer service history are handled with strict confidentiality by Arshi Car Hub’s authorized team.'
                  : 'সকল বুকিং ও গাড়ির ক্রয় সংক্রান্ত নথি আরশি কার হাবের নিজস্ব ব্যবস্থাপনায় নিরাপদে ও অত্যন্ত সতর্কতার সাথে সংরক্ষিত থাকে।'}
              </p>
            </div>
          </div>

          {/* Section 4: Contact Our Showroom */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-card">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">
              {isEng ? '4. Contact & Privacy Inquiries' : '৪. যোগাযোগ ও জিজ্ঞাসা'}
            </h2>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              {isEng
                ? 'If you have any questions regarding this Privacy Policy, or wish to update or delete your contact records from our database, please contact our Rajshahi showroom directly:'
                : 'আমাদের এই গোপনীয়তা নীতিমালা সম্পর্কে কোনো প্রশ্ন থাকলে বা আপনার তথ্য সংশোধন করতে চাইলে সরাসরি আমাদের সাথে যোগাযোগ করুন:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-background/60 border border-border flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{isEng ? 'Phone / WhatsApp' : 'ফোন / হোয়াটসঅ্যাপ'}</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-primary font-semibold hover:underline mt-1"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{isEng ? 'Email' : 'ইমেইল'}</span>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-primary font-semibold hover:underline mt-1"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{isEng ? 'Showroom' : 'শো-রুম ও স্টুডিও'}</span>
                </div>
                <span className="text-muted-foreground mt-1">
                  {COMPANY_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="text-center pt-4 pb-4">
            <Link
              to="/"
              className="btn-hero text-sm px-7 py-3.5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>{isEng ? 'Return to Main Website' : 'মূল ওয়েবসাইটে ফিরে যান'}</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
