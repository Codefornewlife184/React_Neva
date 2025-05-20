import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Question() {
  const { t } = useTranslation();
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      id: 1,
      question: t("Kurumsal Web Tasarım NEDİR?"),
      answer: t("Kurumsal web tasarım, işletmelerin profesyonel kimliğini yansıtan, modern, kullanıcı dostu ve mobil uyumlu web sitelerinin hazırlanmasıdır. Bu tür tasarımlar, markanızın dijital ortamdaki yüzü olarak güvenilirlik ve profesyonellik sağlar.")
    },
    {
      id: 2,
      question: t("Web Tasarım Ajansı NEDİR ve Neden ÖNEMLİDİR?"),
      answer: t("Web tasarım ajansları, kullanıcı deneyimini ön planda tutarak, işletmelerin hedeflerine uygun web siteleri tasarlayan profesyonel firmalardır. Doğru bir ajansla çalışmak, markanızın dijital dünyada fark edilmesini sağlar.")
    },
    {
      id: 3,
      question: t("Web Tasarım FİYATLARI Ne Kadar?"),
      answer: t("Web tasarım fiyatları; sitenin özellikleri, tasarımın karmaşıklığı, sayfa sayısı ve ek hizmetlere (SEO, içerik yönetimi, entegrasyonlar) göre değişiklik gösterir. Web Center, her bütçeye uygun özel çözümler sunar.")
    },
    {
      id: 4,
      question: t("En İYİ Web Tasarım Firması Nasıl SEÇİLİR?"),
      answer: t("En iyi web tasarım firmasını seçerken şunlara dikkat etmelisiniz:\nPortföy ve referanslar\nKullanıcı dostu ve yenilikçi tasarımlar\nTeknik destek ve garanti hizmetleri\nProje teslim süresi ve müşteri memnuniyeti\nWeb Center olarak bu kriterlerin tamamını karşılıyoruz.")
    },
    {
      id: 5,
      question: t("Web Tasarım ŞİRKETİ İLE Çalışmanın Avantajları NELERDİR?"),
      answer: t("Profesyonel bir web tasarım şirketiyle çalışmak:\n\nİşletmenizin dijital ortamdaki imajını güçlendirir.\nArama motorlarında üst sıralarda yer almanızı sağlar.\nMobil uyumluluk ve kullanıcı dostu tasarımlar sunar.")
    },
    {
      id: 6,
      question: t("Neden Web Center Fİrması?"),
      answer: t("Web Center olarak sunduğumuz ayrıcalıklar:\n\nTecrübe ve Güven: Yıllardır sektörde hizmet veren bir firma olarak müşteri memnuniyetine önem veriyoruz.\nÖzelleştirilmiş Çözümler: İşletmenizin ihtiyaçlarına özel web tasarımları hazırlıyoruz.\n7/24 Destek: Proje öncesi ve sonrasında tam destek sağlıyoruz.\nYenilikçi Yaklaşım: Son teknolojileri kullanarak trendleri yakalayan, modern tasarımlar sunuyoruz.\nUygun Fiyatlar: Kaliteli hizmeti erişilebilir fiyatlarla sunuyoruz.")
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(index);
  };

  return (
    <section className="faqs-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="sec-title-twelev text-center">
            <div className="sec-title-twelev__tagline">
              <span className="sec-title-twelev__tagline__bar"></span>
              {t("merak edilenler")}
            </div>
            <h2 className="sec-title-twelev__title">{t("SIKÇA SORULAN SORULAR")}</h2>
          </div>
          <div className="faq-block col-lg-6 col-md-12 col-sm-12">
            <div className="about-section-three__image">
              <img src="assets/images/faqs/3.webp" alt="FAQ" />
            </div>
          </div>

          <div className="faq-block col-lg-6 col-md-12 col-sm-12">
            <ul className="accordion-box clearfix">
              {accordionItems.map((item, index) => (
                <li 
                  key={item.id} 
                  className={`accordion block ${activeAccordion === index ? 'active-block' : ''}`}
                >
                  <div 
                    className={`acc-btn ${activeAccordion === index ? 'active' : ''}`}
                    style={{ color: '#10adad' }}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="count">{item.id}.</span>
                    {item.question}
                  </div>
                  <div className={`acc-content ${activeAccordion === index ? 'current' : ''}`}>
                    <div className="content">
                      <div className="text">{item.answer}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
