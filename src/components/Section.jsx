import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import portfolioData from "../data/portfolioData";
import "../styles/section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faTelegram, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faPalette, faFilm, faMobileScreen, faHeadphones, faBriefcase, faComments} from "@fortawesome/free-solid-svg-icons";

export default function Section({ title, isActive, onClick }) {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div
      className={`section ${isActive ? "open" : "closed"}`}
      onClick={!isActive ? onClick : undefined}
    >
      {!isActive && <div className="section-circle">{title}</div>}
      {isActive && (
        <div className="section-content">
          <h2>{title}</h2>
          {title === "معرفی" && <div className="section-text">
            <p>سلام! من صادق آخرتی هستم.</p>
            <p>بیش از ۴ ساله در حوزه طراحی گرافیک فعالیت می‌کنم و در این مدت روی پروژه‌های مختلف کار کردم.</p>
            <p>تخصص من طراحی سوشال مدیا هست؛ جایی که سعی می‌کنم با نگاه خلاقانه و متفاوت،
               طرح‌هایی بسازم که هم زیبا باشن و هم توجه مخاطب رو جلب کنن.</p>
            <p>به نرم‌افزارهای فتوشاپ و ایلاستریتور مسلط هستم و همیشه
               در حال یادگیری چیزای جدیدم تا بتونم کیفیت کارهامو بالاتر ببرم.</p>
            <p>هدفم اینه که طراحی‌هام به رشد پیج‌ها، برندها و کسب‌وکارها
               کمک کنه و هر پروژه یه هویت منحصربه‌فرد داشته باشه.</p> </div>}

          {title === "خدمات" && <div className="section-text">
             <p> من به عنوان یک طراح سوشال مدیا، خدمات متنوعی ارائه می‌دم تا 
              حضور برندها و افراد در فضای آنلاین حرفه‌ای‌تر و تاثیرگذارتر باشه:
              هر پروژه رو با توجه به نیاز مخاطب و از یک مسیر خلاقانه پیش
               می‌برم تا طرح نهایی هم زیبا باشه و هم کارایی بالایی داشته باشه.
            </p>
            <ul>
               <li><FontAwesomeIcon icon={faPalette} /> طراحی بنر سایت</li>
               <li><FontAwesomeIcon icon={faFilm} /> طراحی تامنیل، چنل آرت و پروفایل یوتیوب</li>
               <li><FontAwesomeIcon icon={faMobileScreen} /> طراحی پروفایل، کاور ریلز و بنر استوری اینستاگرام</li>
               <li><FontAwesomeIcon icon={faHeadphones} /> طراحی کاور پادکست</li>
               <li><FontAwesomeIcon icon={faBriefcase} /> طراحی پست و هدر لینکدین</li>
              <li><FontAwesomeIcon icon={faComments} /> مشاوره تخصصی</li>
             </ul>
             </div>}
          {title === "تعرفه‌ها" && <div className="section-text">
              <ul>
                <li>بنر سایت ۸۰۰ هزار تومان</li>
                <li>تامنیل یوتیوب ۵۰۰ هزار تا ۱ میلیون تومان</li>
                <li>چنل آرت یوتیوب ۱.۵ میلیون تومان</li>
                <li>پروفایل ۸۰۰ هزار تومان</li>
                <li>کاور ریلز اینستاگرام ۲۵۰ تا ۳۵۰ هزار تومان</li>
                <li>بنر استوری اینستاگرام ۱ میلیون تومان</li>
                <li>کاور پادکست ۳۵۰ تا ۵۰۰ هزار تومان</li>
                <li>پست لینکدین ۲۵۰ تا ۳۵۰ هزار تومان</li>
                <li>هدر لینکدین ۱.۵ میلیون تومان</li>
              </ul>
            </div>}
          {title === "تماس با ما" && <div className="section-text">
              <p>خوشحال می‌شویم از شما بشنویم</p>
              <p>اگر سوالی دارید یا پیشنهادی برای بهتر شدن کارهایمان،
                 در هر زمان با ما در ارتباط باشید. ما مشتاقانه شنوای نظرات و تجربیات شما هستیم.</p>
              <p><FontAwesomeIcon icon={faPhone} />: 98-9380532552</p>
              <p><FontAwesomeIcon icon={faTelegram} />: Jatarhi_artwork</p>
              <p><FontAwesomeIcon icon={faInstagram} />: Jatarhi_artwork</p> </div>}

          {title === "نمونه‌کارها" && (
            <div className="portfolio-grid">
              {portfolioData.map((img, index) => (
                <div key={index} className="portfolio-item">
                  <img src={img.src} alt={`نمونه ${index + 1}`} />
                  <button onClick={() => setModalImage(img)}>
                    See more
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {modalImage && (
        <PortfolioModal
          image={modalImage}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
}