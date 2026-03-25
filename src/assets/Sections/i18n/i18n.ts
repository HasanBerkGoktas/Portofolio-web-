import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLang = localStorage.getItem("lang") || "tr";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        about: "About Me",
        skills: "Skills",
        experience: "Experience"
      },

      hero: {
        title: "Hasan Berk Göktaş",
        subtitle: "Frontend Developer",
        description: "I build high-performance web applications.",
        projectsBtn: "Projects",
        contactBtn: "Contact"
      },

      about: {
        title: "About Me",
        text1: "Hello! I'm Hasan Berk. I focus on building fast, modern and user-friendly web interfaces.",
        text2: "I improve myself in the React and TypeScript ecosystem. I care about writing clean code and creating high-performance solutions."
      },

      skills: {
        title: "Skills",
        frontend: "Frontend Development",
        tools: "Tools & Technologies"
      },

      experience: {
        title: "Experience",
        job1Title: "Frontend Developer",
        job1Desc: "Developed modern web interfaces using React and modern JavaScript."
      },

      projects: {
        title: "Projects",
        clickForDetails: "Click for details",
        viewOnGithub: "View Code on GitHub",
        description: "Here are some of the projects I have worked on.",
        dashboardTitle: "Admin Dashboard Panel",
        dashboardTech: "React, Material UI",
        dashboardDesc: "A modern and minimalist admin panel example. Includes data visualization and user management.",
        dashboardDetails: "In this project, I created a responsive dashboard using Material UI components. Added data charts with Recharts.",
        dbTitle: "Database Record Manager",
        dbTech: "C# Entity Framework",
        dbDesc: "A desktop-based data management application.",
        dbDetails: "A desktop application for CRUD operations on MSSQL database using C# and Entity Framework.",
        nfsTitle: "NFS Most Wanted Fan Site",
        nfsTech: "HTML, CSS",
        nfsDesc: "A fan site for the legendary racing game.",
        nfsDetails: "Designed a fan site with pure CSS, using Flexbox and Grid to replicate the game's atmosphere.",
        loginTitle: "Login Interface",
        loginTech: "HTML, CSS",
        loginDesc: "A secure-looking login interface.",
        loginDetails: "A modern login form with validation, focused on user experience (UX)."
      },

      contact: {
        title: "Contact",
        description: "Feel free to contact me for collaboration or project opportunities.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "Message could not be sent. Please try again."
      }
    }
  },

  tr: {
    translation: {
      nav: {
        home: "Anasayfa",
        projects: "Projeler",
        contact: "İletişim",
        about: "Hakkımda",
        skills: "Yetenekler",
        experience: "Deneyim"
      },

      hero: {
        title: "Hasan Berk Göktaş",
        subtitle: "Frontend Developer",
        description: "Kullanıcı deneyimine odaklanan web arayüzleri geliştiriyorum.",
        projectsBtn: "Projelerim",
        contactBtn: "İletişim"
      },

      about: {
        title: "Hakkımda",
        text1: "Merhaba! Ben Hasan Berk. Kullanıcı dostu, hızlı ve modern web arayüzleri geliştirmeye odaklanmış bir frontend developer adayıyım.",
        text2: "React ve TypeScript ekosisteminde kendimi geliştiriyor, temiz kod yazmayı ve performanslı çözümler üretmeyi önemsiyorum."
      },

      skills: {
        title: "Yetenekler",
        frontend: "Frontend Geliştirme",
        tools: "Araçlar ve Teknolojiler"
      },

      experience: {
        title: "Deneyim",
        job1Title: "Frontend Developer",
        job1Desc: "React ve modern JavaScript kullanarak modern web arayüzleri geliştirdim."
      },

      projects: {
        title: "Projelerim",
        clickForDetails: "Detaylar için tıkla",
        viewOnGithub: "GitHub'da Kodları İncele",
        description: "Üzerinde çalıştığım bazı projeler.",
        dashboardTitle: "Admin Dashboard Panel",
        dashboardTech: "React, Material UI",
        dashboardDesc: "Modern ve minimalist bir yönetim paneli örneğidir. Veri görselleştirme ve kullanıcı yönetimi içerir.",
        dashboardDetails: "Bu projede Material UI bileşen kütüphanesini kullanarak responsive bir dashboard oluşturdum. Recharts ile veri grafikleri ekledim.",
        dbTitle: "Veri Tabanı Kayıt Ekleme",
        dbTech: "C# Entity Framework",
        dbDesc: "Desktop tabanlı veri yönetim uygulaması.",
        dbDetails: "C# ve Entity Framework kullanarak MSSQL veri tabanına CRUD (Ekle, Oku, Güncelle, Sil) işlemlerini gerçekleştiren bir masaüstü uygulamasıdır.",
        nfsTitle: "NFS Most Wanted Fan Site",
        nfsTech: "HTML, CSS",
        nfsDesc: "Efsane yarış oyununun fan sitesi.",
        nfsDetails: "Saf CSS kullanarak oyunun atmosferini yansıtan bir tasarım yaptım. Flexbox ve Grid sistemlerini yoğun şekilde kullandım.",
        loginTitle: "Giriş Yapılandırması",
        loginTech: "HTML, CSS",
        loginDesc: "Güvenli görünümlü giriş arayüzü.",
        loginDetails: "Modern login formları ve validasyon tasarımları üzerine bir çalışma. Kullanıcı deneyimi (UX) odaklı bir form yapısıdır."
      },

      contact: {
        title: "İletişim",
        description: "İş birliği veya proje fırsatları için benimle iletişime geçebilirsiniz.",
        name: "İsim",
        email: "E-posta",
        message: "Mesaj",
        send: "Mesaj Gönder",
        success: "Mesaj başarıyla gönderildi!",
        error: "Mesaj gönderilemedi. Lütfen tekrar deneyin."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;