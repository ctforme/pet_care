"use client";

import { FormEvent, useState } from "react";
import {
  BadgeCheck,
  BookOpenText,
  Calendar,
  CalendarCheck,
  CalendarHeart,
  CalendarPlus,
  CarFront,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  ListChecks,
  MapPin,
  MessageCircle,
  Navigation,
  PawPrint,
  Phone,
  Scissors,
  Send,
  ShieldPlus,
  ShowerHead,
  Sparkles,
  Star
} from "lucide-react";

const environmentSlides = [
  {
    image: "/assets/environment/reception-waiting.png",
    alt: "中国高端宠物洗护店前厅接待和等候区环境",
    title: "前厅接待与等候区",
    description: "木质接待台、透明护理区和舒适等候座位，让到店流程清晰放松。"
  },
  {
    image: "/assets/environment/washing-spa.png",
    alt: "中国高端宠物洗护店洗护和 SPA 区环境",
    title: "洗护 SPA 区",
    description: "不锈钢洗护池、分区收纳和防滑地面，兼顾卫生、效率和宠物安全。"
  },
  {
    image: "/assets/environment/styling-studio.png",
    alt: "中国高端宠物洗护店修剪造型和吹干区环境",
    title: "修剪造型工作室",
    description: "专业美容台、低噪吹干设备和整齐工具墙，支持精细修剪和护理记录。"
  }
];

const reviews = [
  {
    rating: 4,
    text: "我家狗狗很怕吹风，护理师会停下来安抚，最后耳朵和脚底都处理得很干净。",
    avatar: "陈",
    author: "陈女士 · 柯基主人"
  },
  {
    rating: 5,
    text: "长毛猫打结比较严重，到店先说明能处理到什么程度，没有乱加项目，体验很放心。",
    avatar: "周",
    author: "周先生 · 布偶猫主人"
  },
  {
    rating: 4,
    text: "每次护理后都会发照片和注意事项，指甲剪得很细，回家没有抓地打滑。",
    avatar: "林",
    author: "林女士 · 泰迪主人"
  }
];

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} 星评价`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} aria-hidden="true" fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formNote, setFormNote] = useState("提交前请确认手机号，门店会电话确认具体时段。");

  const showSlide = (index: number) => {
    setActiveSlide((index + environmentSlides.length) % environmentSlides.length);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const service = data.get("service");
    const date = data.get("date");
    const time = data.get("time");

    setFormNote(`${name}，已收到 ${date} ${time} 的「${service}」预约信息，门店稍后联系确认。`);
    form.reset();
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a href="#top" className="brand" aria-label="毛茸茸宠物洗护首页">
            <span className="brand-mark">
              <PawPrint aria-hidden="true" />
            </span>
            <span>毛茸茸宠物洗护</span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#pricing">价目</a>
            <a href="#gallery">作品</a>
            <a href="#environment">环境</a>
            <a href="#booking">预约</a>
            <a href="#contact">联系</a>
          </div>
          <a className="nav-action" href="#booking">
            <CalendarCheck aria-hidden="true" />
            <span>预约护理</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="毛茸茸宠物洗护">
          <div className="hero-inner">
            <div className="eyebrow">
              <Sparkles aria-hidden="true" /> 猫犬洗护 美容修剪 皮毛护理
            </div>
            <h1>毛茸茸宠物洗护</h1>
            <p>给每一只小伙伴更安静、更干净、更有耐心的洗护体验。透明护理流程，独立消毒工具，门店预约不久等。</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                <CalendarPlus aria-hidden="true" />
                立即预约
              </a>
              <a className="btn btn-secondary" href="#pricing">
                <ListChecks aria-hidden="true" />
                查看价目
              </a>
            </div>
            <div className="hero-strip" aria-label="门店亮点">
              <div className="metric">
                <strong>1 对 1</strong>
                <span>护理师全程陪护</span>
              </div>
              <div className="metric">
                <strong>45 分钟</strong>
                <span>基础洗护起</span>
              </div>
              <div className="metric">
                <strong>24 小时</strong>
                <span>线上预约确认</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-inner">
            <div className="section-title">
              <span>OUR SERVICES</span>
              <h2>从日常清洁到造型护理，一次安排到位</h2>
              <p>按宠物体型、毛量、敏感程度定制护理方案，避免过度刺激皮肤，也让毛发蓬松顺滑。</p>
            </div>

            <div className="services">
              <article className="service-card">
                <div className="icon-box">
                  <ShowerHead aria-hidden="true" />
                </div>
                <h3>基础洗护</h3>
                <p>洗澡、吹干、梳毛、耳道清洁、指甲修剪、脚底毛处理。</p>
              </article>
              <article className="service-card">
                <div className="icon-box">
                  <Scissors aria-hidden="true" />
                </div>
                <h3>美容造型</h3>
                <p>泰迪圆头、比熊棉花糖、猫咪清爽修剪等常见造型。</p>
              </article>
              <article className="service-card">
                <div className="icon-box">
                  <HeartPulse aria-hidden="true" />
                </div>
                <h3>皮毛护理</h3>
                <p>针对干燥、打结、异味和掉毛问题，搭配温和护理产品。</p>
              </article>
              <article className="service-card">
                <div className="icon-box">
                  <CarFront aria-hidden="true" />
                </div>
                <h3>预约接送</h3>
                <p>周边 5 公里可选接送服务，到店后发送护理进度照片。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="process-band">
          <div className="section-inner process">
            <div>
              <div className="section-title">
                <span>CARE FLOW</span>
                <h2>安静、透明、有记录的护理流程</h2>
                <p>护理前先检查毛结、耳朵、皮肤和情绪状态，护理中按耐受程度调整速度。</p>
              </div>
              <div className="steps">
                <div className="step">
                  <div className="step-num">01</div>
                  <div>
                    <h3>到店评估</h3>
                    <p>记录体型、毛况、皮肤状态和主人关注点。</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">02</div>
                  <div>
                    <h3>温和洗护</h3>
                    <p>使用低刺激洗护产品，分区清洁和低温吹干。</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">03</div>
                  <div>
                    <h3>修剪整理</h3>
                    <p>按预约方案完成造型、脚底毛、腹底毛和细节修整。</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">04</div>
                  <div>
                    <h3>护理反馈</h3>
                    <p>交付清洁建议，提醒毛结、耳道、牙齿等后续关注点。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-photo">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=82"
                alt="洗护后的狗狗坐在店内"
              />
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="section-inner">
            <div className="section-title">
              <span>PRICING</span>
              <h2>清晰价目，按体型和毛量微调</h2>
              <p>以下为常见犬猫基础价格，严重打结、攻击性护理或特殊护理会在下单前说明。</p>
            </div>

            <div className="pricing-grid">
              <article className="price-card">
                <div className="tag">
                  <BadgeCheck aria-hidden="true" /> 小型犬
                </div>
                <h3>基础洗护套餐</h3>
                <p>适合 10kg 以下日常清洁护理。</p>
                <div className="price">
                  <strong>¥88</strong>
                  <span>起</span>
                </div>
                <ul className="feature-list">
                  <li>
                    <Check aria-hidden="true" />
                    香波洗护与吹干
                  </li>
                  <li>
                    <Check aria-hidden="true" />
                    耳道清洁和指甲修剪
                  </li>
                  <li>
                    <Check aria-hidden="true" />
                    脚底毛与肛周清洁
                  </li>
                </ul>
                <a className="btn btn-secondary" href="#booking">
                  <Calendar aria-hidden="true" />
                  预约小型犬
                </a>
              </article>

              <article className="price-card featured">
                <div className="tag">
                  <Star aria-hidden="true" /> 热门
                </div>
                <h3>洗护加造型</h3>
                <p>适合需要修剪造型和毛发整理的猫犬。</p>
                <div className="price">
                  <strong>¥168</strong>
                  <span>起</span>
                </div>
                <ul className="feature-list">
                  <li>
                    <Check aria-hidden="true" />
                    基础洗护全套项目
                  </li>
                  <li>
                    <Check aria-hidden="true" />
                    脸部、四肢和身体修剪
                  </li>
                  <li>
                    <Check aria-hidden="true" />
                    护理前后照片记录
                  </li>
                </ul>
                <a className="btn btn-primary" href="#booking">
                  <CalendarHeart aria-hidden="true" />
                  预约造型
                </a>
              </article>

              <article className="price-card">
                <div className="tag">
                  <ShieldPlus aria-hidden="true" /> 猫咪专属
                </div>
                <h3>猫咪安抚护理</h3>
                <p>适合短毛猫、长毛猫洗护和局部修剪。</p>
                <div className="price">
                  <strong>¥128</strong>
                  <span>起</span>
                </div>
                <ul className="feature-list">
                  <li>
                    <Check aria-hidden="true" />
                    低噪吹干与分段休息
                  </li>
                  <li>
                    <Check aria-hidden="true" />
                    去浮毛和毛结梳理
                  </li>
                  <li>
                    <Check aria-hidden="true" />
                    可选腹底毛清爽修剪
                  </li>
                </ul>
                <a className="btn btn-secondary" href="#booking">
                  <Calendar aria-hidden="true" />
                  预约猫咪
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="section-inner">
            <div className="section-title">
              <span>GALLERY</span>
              <h2>洗护后的蓬松状态，看得见</h2>
              <p>护理完成后会做全身检查和细节整理，确认耳朵、脚底、毛发都干爽舒适。</p>
            </div>

            <div className="gallery">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=1000&q=82"
                  alt="护理后的白色小狗"
                />
                <figcaption>小型犬精修</figcaption>
              </figure>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=82"
                  alt="护理后的猫咪"
                />
                <figcaption>猫咪去浮毛</figcaption>
              </figure>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=82"
                  alt="干净的猫咪坐在室内"
                />
                <figcaption>低敏洗护</figcaption>
              </figure>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=82"
                  alt="两只狗狗在户外"
                />
                <figcaption>多宠家庭预约</figcaption>
              </figure>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=82"
                  alt="狗狗在店内等待护理"
                />
                <figcaption>护理后留影</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="environment-section" id="environment">
          <div className="section-inner">
            <div className="section-title">
              <span>ENVIRONMENT</span>
              <h2>店内环境真实可见，三个区域独立分区</h2>
              <p>前厅等候、洗护 SPA、修剪造型各自分区，保持明亮、整洁和专业的洗护动线。</p>
            </div>

            <div className="environment-carousel" aria-label="店内环境轮播图">
              <div
                className="environment-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {environmentSlides.map((slide) => (
                  <article className="environment-slide" key={slide.title}>
                    <img src={slide.image} alt={slide.alt} />
                    <div className="environment-caption">
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button
                className="carousel-button prev"
                type="button"
                aria-label="上一张店内环境图"
                onClick={() => showSlide(activeSlide - 1)}
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                className="carousel-button next"
                type="button"
                aria-label="下一张店内环境图"
                onClick={() => showSlide(activeSlide + 1)}
              >
                <ChevronRight aria-hidden="true" />
              </button>
              <div className="environment-dots" aria-label="切换店内环境图">
                {environmentSlides.map((slide, index) => (
                  <button
                    className={index === activeSlide ? "active" : undefined}
                    key={slide.title}
                    type="button"
                    aria-label={`查看${slide.title}`}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-inner">
            <div className="section-title">
              <span>REVIEWS</span>
              <h2>熟客喜欢的是细节和耐心</h2>
            </div>

            <div className="reviews-wrap">
              {reviews.map((review) => (
                <article className="review" key={review.author}>
                  <ReviewStars rating={review.rating} />
                  <p>{review.text}</p>
                  <div className="review-author">
                    <span className="avatar">{review.avatar}</span>
                    {review.author}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="section-inner booking-grid">
            <div className="contact-box" id="contact">
              <div>
                <div className="section-title">
                  <span>BOOKING</span>
                  <h2>预约到店，减少等待</h2>
                  <p>提交后门店会按所选时间段联系确认，护理前可补充宠物性格和特殊注意事项。</p>
                </div>
              </div>
              <div className="contact-items">
                <div className="contact-item">
                  <MapPin aria-hidden="true" />
                  <div>
                    <strong>门店地址</strong>
                    <br />
                    上海市静安区云杉路 88 号 1 层
                  </div>
                </div>
                <div className="contact-item">
                  <Phone aria-hidden="true" />
                  <div>
                    <strong>预约电话</strong>
                    <br />
                    021-8800-6688
                  </div>
                </div>
                <div className="contact-item">
                  <Clock3 aria-hidden="true" />
                  <div>
                    <strong>营业时间</strong>
                    <br />
                    周一至周日 10:00 - 20:00
                  </div>
                </div>
              </div>
            </div>

            <form className="booking-panel" id="bookingForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  主人姓名
                  <input type="text" name="name" placeholder="请输入姓名" required />
                </label>
                <label>
                  联系电话
                  <input type="tel" name="phone" placeholder="请输入手机号" required />
                </label>
                <label>
                  宠物类型
                  <select name="pet" required defaultValue="">
                    <option value="">请选择</option>
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>短毛猫</option>
                    <option>长毛猫</option>
                  </select>
                </label>
                <label>
                  服务项目
                  <select name="service" required defaultValue="">
                    <option value="">请选择</option>
                    <option>基础洗护</option>
                    <option>洗护加造型</option>
                    <option>皮毛护理</option>
                    <option>接送服务</option>
                  </select>
                </label>
                <label>
                  预约日期
                  <input type="date" name="date" required />
                </label>
                <label>
                  到店时间
                  <select name="time" required defaultValue="">
                    <option value="">请选择</option>
                    <option>10:00 - 12:00</option>
                    <option>12:00 - 14:00</option>
                    <option>14:00 - 16:00</option>
                    <option>16:00 - 18:00</option>
                    <option>18:00 - 20:00</option>
                  </select>
                </label>
                <label className="wide">
                  备注
                  <textarea name="message" placeholder="例如：怕吹风、皮肤敏感、毛结位置、是否需要接送" />
                </label>
              </div>
              <div className="form-footer">
                <p className="form-note" id="formNote">
                  {formNote}
                </p>
                <button className="btn btn-primary" type="submit">
                  <Send aria-hidden="true" />
                  提交预约
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>© 2026 毛茸茸宠物洗护 · 用耐心照顾每一位小客人</div>
          <div className="social" aria-label="社交账号">
            <a href="#" aria-label="微信">
              <MessageCircle aria-hidden="true" />
            </a>
            <a href="#" aria-label="小红书">
              <BookOpenText aria-hidden="true" />
            </a>
            <a href="#" aria-label="地图">
              <Navigation aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
