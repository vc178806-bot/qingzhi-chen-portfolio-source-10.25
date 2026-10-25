import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './styles.css';

const photo = (id, width = 1800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=86`;

const visualWorks = [
  { num: '01', category: 'A+ CONTENT / AMAZON', title: '把产品卖点变成品牌体验', detail: '信息架构 · 场景化叙事 · 转化优化', image: photo('1600267165477-6d4cc741b379') },
  { num: '02', category: 'MAIN IMAGE / PRODUCT', title: '黄金三秒，先让人看懂', detail: '主图系统 · 产品视频 · Listing 视觉', image: photo('1542291026-7eec264c27ff') },
  { num: '03', category: 'PACKAGING / VISUAL SYSTEM', title: '让每一件产品都有识别度', detail: '包装设计 · 品牌系统 · 多品类延展', image: photo('1604324008323-1a4b0e7a1c1e') },
];

const packagingEffectWorks = ['01.jpg', '02.jpg', '02.2.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'].map((file, index) => [`/packaging-effects/revised/${file}`, `AI packaging · ${String(index + 1).padStart(2, '0')}`]);

const brandWorks = [
  { category: '独立站', title: '', image: '/brand-projects/independent-site.jpg' },
  { category: '亚马逊 A+', title: '', image: '/brand-projects/woman-bag.jpg' },
];

const heroSlides = [
  { image: '/hero-bags.jpg', label: 'BRAND VISUAL SYSTEM', case: '箱包品牌视觉系统', detail: 'Brand Store · A+ · Packaging' },
  { image: '/hero-travel.webp', label: 'PRODUCT STORYTELLING', case: '旅行产品内容系统', detail: 'Main Image · Video · Campaign' },
];

const heroThumbs = [
  { image: '/social/025.jpg', label: 'Brand story 01' },
  { image: '/social/05s.jpg', label: 'Brand story 02' },
  { image: '/social/06.jpg', label: 'A+ system 01' },
  { image: '/social/07.jpg', label: 'A+ system 02' },
  { image: '/social/0a.jpg', label: 'Product visual 01' },
  { image: '/social/13.jpg', label: 'Product visual 02' },
  { image: '/social/E1.jpg', label: 'Campaign 01' },
  { image: '/social/E2.jpg', label: 'Campaign 02' },
  { image: '/social/W1.jpg', label: 'Social content 01' },
  { image: '/social/W2.jpg', label: 'Social content 02' },
  { image: '/social/f1.jpg', label: 'Visual system 01' },
  { image: '/social/f2.jpg', label: 'Visual system 02' },
];

const viApplicationImages = [['/vi-application/D1.jpg', 'Lastar 应用系统 · 01'], ['/vi-application/D2.jpg', 'Lastar 应用系统 · 02'], ['/vi-application/D3.jpg', 'Lastar 应用系统 · 03'], ['/vi-application/3.png', 'Lastar 应用系统 · 04']];
const viApplicationFeature = '/vi-application/desk-lamp.jpg';

const workModules = [
  {
    key: 'basic-vi', title: 'Basic VI', subtitle: '基础视觉识别系统', description: '以标志、色彩与应用规范为起点，呈现品牌识别系统的建立过程。',
    images: Array.from({ length: 16 }, (_, index) => [`/basic-vi/Lastar-VI_${String(index + 1).padStart(2, '0')}.jpg`, `基础 VI · ${String(index + 1).padStart(2, '0')}`]),
  },
  {
    key: 'main-image', title: 'Main image', subtitle: '亚马逊视觉主图', description: '首图抓眼，卖点递进，最后用细节和规格完成决策闭环。',
    images: [
      ['/main-image-2/1.1.jpg', '主视觉 / 白底抓眼'], ['/main-image-2/1.2.jpg', '卖点 / 场景表达'], ['/main-image-2/1.3.jpg', '材质 / 细节'], ['/main-image-2/1.4.jpg', '尺寸 / 规格'],
      ['/main-image-2/1.5.jpg', '功能 / 对比'], ['/main-image-2/1.6.jpg', '配件 / 组合'], ['/main-image-2/2.5.jpg', '包装 / 认证'], ['/main-image-2/2.7.jpg', '场景 / 质感'],
      ['/main-image-2/2.6.jpg', '品牌 / 总结'], ['/main-image-2/3.0.jpg', '结构 / 细节'], ['/main-image-2/3.1.jpg', '使用 / 体验'], ['/main-image-2/3.2.jpg', '收纳 / 配置'],
    ],
  },
  {
    key: 'a-plus', title: 'A+ content', subtitle: '电动桌 / 切菜机 / 咖啡器 / 灯饰', description: '用审美、视觉节奏和数据模块，把产品核心组织成一段完整的品牌视觉，提升品牌影响力。',
    images: [
      ['/social/W1.jpg', 'Brand hero'], ['/social/W2.jpg', 'Feature story'], ['/a-plus/A1.jpg', 'Detail story'], ['/main-feature/1.jpg', 'Product in use'],
      ['/main-feature/2.jpg', 'Product scene'], ['/a-plus/G1.jpg', 'Data visual'], ['/a-plus/G2.jpg', 'Scenario / review'], ['/a-plus/H1.jpg', 'Brand ending'],
      ['/a-plus/H2.jpg', 'Lighting story'],
    ],
  },
  {
    key: 'brochure', title: 'Brand brochure', subtitle: '画册里的品牌叙事', description: '从视觉节奏到内容编排，展示品牌形象如何在纸面上延展。',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((number, index) => [`/brochure/${number}.jpg`, `画册作品 · ${String(index + 1).padStart(2, '0')}`]),
  },
  {
    key: 'packaging', title: 'Social / Media / Ads', subtitle: '社交/媒体/广告', description: '以统一视觉连接产品、内容与社交传播，让每一次曝光都更有记忆点。',
    images: [
      ['/packaging/04.jpg', 'Front'], ['/packaging/05s.jpg', 'Side'], ['/packaging/5(1).jpg', 'Back'], ['/packaging/f1.jpg', 'Unboxing'],
      ['/packaging/f2.1.jpg', 'Texture'], ['/packaging/f2.2.jpg', 'Structure'], ['/packaging/f2.3.jpg', 'Set'], ['/packaging/f2.4.jpg', 'Scene'],
      ['/packaging/f2.5.jpg', 'Detail'], ['/packaging/f2.jpg', 'Brand'],
    ],
    socialImages: ['0.5.jpg', '0.6.jpg', '01.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', 'A1.jpg', 'A2.jpg', 'B1.jpg', 'B2.jpg'].map((file, index) => [`/social-ads/${file}`, `Social ad ${String(index + 1).padStart(2, '0')}`]),
  },
];

function SnapCarousel({ items, onPreview, label }) {
  const trackRef = React.useRef(null);
  const pointerRef = React.useRef(null);
  const draggedRef = React.useRef(false);
  const suppressClickRef = React.useRef(false);
  const [active, setActive] = React.useState(0);
  const getClosestIndex = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const trackRect = track.getBoundingClientRect();
    let nearest = 0;
    let distance = Infinity;
    [...track.querySelectorAll('.snap-slide')].forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const next = Math.abs((rect.left + rect.width / 2) - (trackRect.left + track.clientWidth / 2));
      if (next < distance) { distance = next; nearest = index; }
    });
    return nearest;
  };
  const onScroll = () => {
    setActive(getClosestIndex());
  };
  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!track || !card) return;
    const cardRect = card.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const target = track.scrollLeft + cardRect.left + cardRect.width / 2 - (trackRect.left + track.clientWidth / 2);
    track.scrollTo({ left: target, behavior: 'smooth' });
  };
  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, startIndex: getClosestIndex() };
    draggedRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event) => {
    const track = trackRef.current;
    if (!track || !pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const delta = event.clientX - pointerRef.current.x;
    if (!draggedRef.current && Math.abs(delta) > 5) {
      draggedRef.current = true;
      track.classList.add('is-pointer-dragging');
    }
    if (draggedRef.current) {
      event.preventDefault();
      track.scrollLeft = pointerRef.current.scrollLeft - delta;
    }
  };
  const onPointerUp = (event) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const start = pointerRef.current;
    const track = trackRef.current;
    const distance = track ? track.scrollLeft - start.scrollLeft : 0;
    suppressClickRef.current = draggedRef.current;
    pointerRef.current = null;
    trackRef.current?.classList.remove('is-pointer-dragging');
    if (draggedRef.current) {
      const count = track?.querySelectorAll('.snap-slide').length || items.length;
      const direction = Math.sign(distance || start.x - event.clientX);
      const step = Math.max(1, Math.round(Math.abs(distance) / (track?.clientWidth || 1)));
      const target = Math.max(0, Math.min(count - 1, start.startIndex + direction * step));
      setActive(target);
      goTo(target);
    }
  };
  const onImageClick = (event, src, caption) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      suppressClickRef.current = false;
      return;
    }
    onPreview({ src, caption });
  };
  return <div className="snap-carousel-wrap">
    <div className="snap-carousel" ref={trackRef} onScroll={onScroll} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onDragStart={(event) => event.preventDefault()} role="list" aria-label={label}>
      {items.map(([src, caption], index) => <article className="snap-slide" key={`${src || 'pending'}-${index}`} role="listitem">
        <button className="snap-image-button" type="button" onClick={(event) => onImageClick(event, src, caption)} aria-label={`放大查看${caption}`}><img src={src} alt={caption} loading="lazy" draggable="false" /></button>
        <div className="snap-caption"><span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span><b>{caption}</b><span className="snap-view">VIEW ↗</span></div>
      </article>)}
    </div>
    <div className="snap-controls"><span>← 拖动或滑动浏览 →</span><div className="snap-dots" aria-label={`${label}分页指示器`}>{items.map((item, index) => <button type="button" key={index} className={index === active ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`查看第 ${index + 1} 张`} aria-current={index === active ? 'true' : undefined} />)}</div><span>{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span></div>
  </div>;
}

function DirectionalGallery({ images, label, direction, onPreview }) {
  const trackRef = React.useRef(null);
  const pointerRef = React.useRef(null);
  const hoveringRef = React.useRef(false);
  const suppressClickRef = React.useRef(false);
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    let groupWidth = 0;
    let lastTime = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const measure = () => {
      const first = track.children[0];
      const last = track.children[images.length - 1];
      if (first && last) groupWidth = last.getBoundingClientRect().right - first.getBoundingClientRect().left + 14;
      if (groupWidth && track.scrollLeft < 1) track.scrollLeft = groupWidth;
    };
    const animate = (time) => {
      if (isVisibleRef.current && !document.hidden && groupWidth && !hoveringRef.current && !pointerRef.current && !reduceMotion) {
        const delta = lastTime ? Math.min((time - lastTime) / 16.67, 2) : 1;
        track.scrollLeft += (direction === 'left' ? 0.42 : -0.42) * delta;
        if (track.scrollLeft >= groupWidth * 2) track.scrollLeft -= groupWidth;
        if (track.scrollLeft <= 0) track.scrollLeft += groupWidth;
      }
      lastTime = time;
      if (isVisibleRef.current && !document.hidden && !reduceMotion) frame = requestAnimationFrame(animate);
    };
    const isVisibleRef = { current: false };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      lastTime = 0;
      cancelAnimationFrame(frame);
      if (isVisibleRef.current && !document.hidden && !reduceMotion) frame = requestAnimationFrame(animate);
    }, { rootMargin: '120px' });
    visibilityObserver.observe(track);
    const onVisibilityChange = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (!document.hidden && isVisibleRef.current && !reduceMotion) frame = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); visibilityObserver.disconnect(); document.removeEventListener('visibilitychange', onVisibilityChange); };
  }, [direction, images.length]);
  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, dragged: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event) => {
    const track = trackRef.current;
    const start = pointerRef.current;
    if (!track || !start || start.id !== event.pointerId) return;
    const delta = event.clientX - start.x;
    if (Math.abs(delta) > 5) start.dragged = true;
    if (start.dragged) { event.preventDefault(); track.scrollLeft = start.scrollLeft - delta; }
  };
  const onPointerUp = (event) => {
    if (pointerRef.current?.id !== event.pointerId) return;
    suppressClickRef.current = pointerRef.current.dragged;
    pointerRef.current = null;
  };
  return <div className="directional-gallery-wrap"><div className={"packaging-gallery directional-gallery direction-" + direction} ref={trackRef} role="list" aria-label={label} onPointerEnter={() => { hoveringRef.current = true; }} onPointerLeave={() => { hoveringRef.current = false; }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onDragStart={(event) => event.preventDefault()}>{[0, 1, 2].flatMap((copy) => images.map(([src, caption], index) => <article className="directional-gallery-card" key={copy + '-' + src} role="listitem" aria-hidden={copy !== 1}><button type="button" tabIndex={copy === 1 ? 0 : -1} aria-label={"放大查看" + caption} onClick={(event) => { if (suppressClickRef.current) { event.preventDefault(); suppressClickRef.current = false; return; } onPreview({ src, caption }); }}><img src={src} alt={caption} loading="lazy" decoding="async" draggable="false" /><span><small>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</small><b>{caption}</b><i>VIEW ↗</i></span></button></article>))}</div></div>;
}

function BlurText({ text, className = '', delay = 55, direction = 'top', as: Tag = 'p', trigger }) {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);
  const segments = text.split(' ');
  React.useEffect(() => {
    if (trigger !== undefined) return;
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [trigger]);
  React.useEffect(() => {
    if (trigger !== undefined) setInView(trigger);
  }, [trigger]);
  return <Tag ref={ref} className={`blur-text ${inView ? 'is-visible' : ''} ${className}`}>
    {segments.map((segment, index) => <span className="blur-word" style={{ '--blur-delay': `${index * delay}ms`, '--blur-from-y': direction === 'top' ? '-50px' : '50px' }} key={`${segment}-${index}`}>{segment}{index < segments.length - 1 ? '\u00a0' : ''}</span>)}
  </Tag>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeHero, setActiveHero] = React.useState(0);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState(null);
  const [profileVisible, setProfileVisible] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState([false, false]);
  const [videoControlsVisible, setVideoControlsVisible] = React.useState([true, true]);
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const profileRef = React.useRef(null);
  const movingVideoRefs = React.useRef([]);
  const musicRef = React.useRef(null);
  const close = () => setMenuOpen(false);
  const playMusic = React.useCallback(() => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
  }, []);
  const toggleMusic = () => {
    const audio = musicRef.current;
    if (!audio) return;
    if (audio.paused) playMusic();
    else {
      audio.pause();
      setMusicPlaying(false);
    }
  };
  const toggleVideo = (index) => {
    const video = movingVideoRefs.current[index];
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };
  const setVideoState = (index, playing) => {
    setVideoPlaying((current) => current.map((value, i) => i === index ? playing : value));
    setVideoControlsVisible((current) => current.map((value, i) => i === index ? !playing : value));
  };
  React.useEffect(() => {
    let timer;
    const schedule = () => {
      window.clearInterval(timer);
      if (!document.hidden) timer = window.setInterval(() => setActiveHero((current) => (current + 1) % heroSlides.length), 6000);
    };
    schedule();
    document.addEventListener('visibilitychange', schedule);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', schedule); };
  }, []);
  React.useEffect(() => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.volume = 0.2;
    const syncState = () => setMusicPlaying(!audio.paused);
    const resumeMusic = (event) => {
      if (event.target.closest?.('.music-toggle')) return;
      playMusic();
    };
    audio.addEventListener('play', syncState);
    audio.addEventListener('pause', syncState);
    window.addEventListener('pointerdown', resumeMusic, { passive: true });
    window.addEventListener('keydown', resumeMusic);
    return () => {
      audio.pause();
      audio.removeEventListener('play', syncState);
      audio.removeEventListener('pause', syncState);
      window.removeEventListener('pointerdown', resumeMusic);
      window.removeEventListener('keydown', resumeMusic);
    };
  }, [playMusic]);
  React.useEffect(() => {
    if (!previewImage) return;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setPreviewImage(null); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [previewImage]);
  React.useEffect(() => {
    const profile = profileRef.current;
    if (!profile) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProfileVisible(true);
        observer.unobserve(profile);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -15% 0px' });
    observer.observe(profile);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > window.innerHeight * 0.82;
        setIsScrolled((current) => current === next ? current : next);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleScroll); window.cancelAnimationFrame(frame); };
  }, []);
  return <main>
    <section className="hero" id="top">
      <div className="hero-slides" aria-label="首屏案例轮播">
        {heroSlides.map((slide, index) => <img key={slide.image} className={`hero-product-bg ${activeHero === index ? 'is-active' : ''}`} src={slide.image} alt={slide.case} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />)}
      </div>
      <div className="hero-shade" />
      <nav className={`nav shell ${isScrolled ? 'is-sticky' : ''}`}>
        <a className="mark" href="#top" onClick={close}>Vincent<span>•</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Selected work</a><a href="#contact" onClick={close}>Contact</a></div>
        <a className="top-contact" href="mailto:549944496@qq.com">Let's talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="打开导航" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      <div className="hero-content shell">
        <p className="eyebrow">品牌视觉总监</p>
        <h1>AI LEADS<br />THE ERA</h1>
        <p className="hero-slogan">Using Visuals to Drive Brand Impact</p>
      </div>
      <div className="hero-case"><small>{heroSlides[activeHero].label}</small><strong>{heroSlides[activeHero].case}</strong><a className="scroll-cue" href="#about">Explore <ArrowDownRight size={16} /></a></div>
      <div className="hero-gallery" aria-label="精选作品动态预览"><div className="hero-gallery-track">{[...heroThumbs, ...heroThumbs].map((item, index) => <div className="hero-thumb" key={`${item.label}-${index}`}><img src={item.image} alt={item.label} loading="lazy" decoding="async" /><span>{item.label}</span></div>)}</div></div>
      <div className="hero-progress" aria-label="轮播进度">{heroSlides.map((slide, index) => <button key={slide.image} className={activeHero === index ? 'active' : ''} aria-label={`切换到第 ${index + 1} 张`} onClick={() => setActiveHero(index)} />)}</div>
      <div className="hero-index">01 <span>/</span> 06</div>
    </section>

    <section ref={profileRef} className="section shell profile" id="about">
      <div className="section-label"><span>01</span><span>Profile</span></div>
      <div className="profile-grid">
        <div className="portrait"><img src="/profile-vincent.jpg" alt="陈庆志人物照片" /><span>12 YEARS OF<br />VISUAL THINKING</span></div>
        <div className="profile-copy"><p className="kicker profile-name">ABOUT ME</p><h2>Hi, I am <i>Vincent!</i></h2><BlurText trigger={profileVisible} className="lead" text="拥有 12 年视觉设计及团队管理经验，专注于打造高绩效、善战的设计团队，主导15亿级销售额视觉体系建设。" /><BlurText trigger={profileVisible} className="copy" delay={28} direction="bottom" text="深耕箱包、智能用品、家居用品等多品类亚马逊市场。通过部门流程优化与AIGC技术的创新，帮助团队在紧迫时间内稳定交付业绩成果，构建一个能持续赋能业务增长的一流设计团队。" />
          <div className={`profile-details ${profileVisible ? 'is-visible' : ''}`}><div><small>当前身份</small><BlurText trigger={profileVisible} as="b" delay={70} text="Visual Design Director" /></div><div><small>服务方向</small><BlurText trigger={profileVisible} as="b" delay={70} text="Brand / Amazon / AIGC" /></div></div>
          <div className={`profile-metrics ${profileVisible ? 'is-visible' : ''}`}><div><strong>12<span>+</span></strong><small>年视觉设计经验<br />管理经验</small></div><div><strong>15<span>亿+</span></strong><small>年度销售额<br />多平台渠道</small></div><div><strong>8<span>人</span></strong><small>设计团队<br />协作与赋能</small></div></div>
          <div className={`profile-building ${profileVisible ? 'is-visible' : ''}`}><small>NOW BUILDING</small><div><span>品牌视觉系统</span><span>AIGC 视觉工作流</span><span>亚马逊视觉体系</span><span>电商营销视觉</span></div><b>进行中的项目</b></div>
        </div>
      </div>
      <div className="timeline"><div><small>2018.01 — 2021.03</small><b>广东新特丽照明 / 设计主管</b><span>品牌视觉 · 电商活动 · 团队 4 人</span><p className="timeline-detail">基于高端灯饰产品定位，主导品牌视觉调性、详情页结构与视频风格。负责天猫、京东、阿里巴巴、苏宁等平台视觉呈现与双11、双12活动页面设计；通过竞品分析和用户调查，完成新品上市视觉策划、摄影指导、图文优化与视频制作，并带领4人团队协同运营提升页面转化。</p></div><div><small>2021.04 — 2024.08</small><b>广州小马智印网络平台科技 / 创意经理</b><span>亚马逊视觉 · 品牌搭建 · 团队6人</span><p className="timeline-detail">汇报总经理，管理6人创意设计部，负责5亿年度销售额业务。构建品牌旗舰店视觉体系，践行“店铺即品牌”的策略，整体规划Store视觉架构与叙事逻辑，按功能、用途和外观梳理家居产品场景，搭建可延展的视觉模块，推动单品引导多品的销售思维。</p></div><div><small>2024.08 — 2026.06</small><b>缘道缘科技（广州） / 设计经理</b><span>Amazon A+ · 视频 · 品牌社媒 · 团队 8 人</span><p className="timeline-detail">汇报总经理，管理8人视觉设计部，负责15亿年度销售额业务。深度分析A+页面点击热力图与用户停留数据，主导高信息密度、强场景化的A+模板，并为主力产品制作“黄金三秒”主图视频；协同品牌团队制作TikTok、Instagram、Pinterest等平台内容，通过防泼水测试、容量挑战和穿搭Lookbook等内容为Listing引流并塑造品牌形象。</p></div></div>
    </section>

    <section className="section shell ai-design-system" aria-labelledby="ai-system-title">
      <div className="section-label"><span>02</span><span>AI design system</span></div>
      <div className="ai-system-intro"><div><p className="kicker">TEAM INTELLIGENCE UPGRADE</p><h2 id="ai-system-title">AI设计效能体系<i>团队智能化升级</i></h2></div><p className="ai-system-slogan">用 AI 重构设计流程，<br />让小团队产出大品牌产能。</p></div>
      <div className="ai-capability-grid">
        <article><span>01 / TEAM</span><i>✳</i><h3>AI 团队搭建</h3><p>明确角色与协作边界，让人和 AI 在合适的环节发挥优势。</p></article>
        <article><span>02 / PROCESS</span><i>↗</i><h3>流程提效重构</h3><p>梳理从需求、创意到交付的路径，减少重复劳动与信息损耗。</p></article>
        <article><span>03 / OUTPUT</span><i>＋</i><h3>标准化产能</h3><p>沉淀可复用的模板、组件和工作方法，提升交付的一致性。</p></article>
        <article><span>04 / BRAND</span><i>◌</i><h3>品牌视觉统一</h3><p>以视觉规范和审核机制，保持不同渠道与内容的品牌表达。</p></article>
      </div>
      <div className="ai-efficiency-panel"><div className="ai-panel-heading"><small>EFFICIENCY SHIFT / WORKFLOW</small><h3>从单点作图，到体系化设计产能</h3></div><div className="ai-comparison"><article><small>TRADITIONAL DESIGN</small><h4>传统设计模式</h4><ul><li>依赖个人经验推进</li><li>重复任务逐项处理</li><li>经验留在个人手中</li><li>扩展产能依赖增加人力</li></ul></article><div className="ai-comparison-arrow">→</div><article className="ai-comparison-next"><small>AI-ASSISTED DESIGN</small><h4>AI 智能化设计模式</h4><ul><li>人机协同完成流程</li><li>重复环节沉淀为工作流</li><li>方法与标准可复用</li><li>团队围绕资产持续迭代</li></ul></article></div></div>
      <div className="ai-scenarios"><div><small>APPLICATION SCENARIOS</small><h3>设计能力，贯穿业务全链路</h3></div><div className="ai-scenario-tags"><span>跨境电商</span><span>品牌视觉</span><span>包装设计</span><span>品牌画册</span><span>网页体验</span></div></div>
      <p className="ai-system-conclusion"><span>FROM</span>「单人作图」<i>→</i><span>TO</span>「体系化 AI 设计产能」</p>
    </section>

    <section className="section shell work" id="work">
      <div className="section-head"><div className="section-label work-section-label"><span>Selected visual work</span></div><p>Brand systems, product stories and moving image.</p></div>
      <div className="work-modules">{workModules.map((module, moduleIndex) => {
        return <article className={`work-module work-module-${module.key}`} key={module.key}>
          <div className="module-heading"><div><small>{String(moduleIndex + 1).padStart(2, '0')} / {module.title}</small><h3>{module.subtitle}</h3></div><p>{module.description}</p></div>
          {module.key === 'basic-vi' && <SnapCarousel items={module.images} label="基础 VI 作品" onPreview={setPreviewImage} />}
          {module.key === 'basic-vi' && <section className="vi-application-showcase" aria-label="Lastar VI 应用系统样式展示"><div className="vi-application-heading"><div><small>VISUAL IDENTITY / APPLICATIONS</small><h4>VI 应用系统 <i>Lastar</i></h4></div><p>从标志、色彩到真实触点，探索视觉识别如何进入日常应用。</p></div><div className="vi-application-layout"><div className="vi-application-mosaic">{viApplicationImages.map(([src, caption], index) => <button type="button" key={src} onClick={() => setPreviewImage({ src, caption: `Lastar · 应用系统 · 0${index + 1}` })} aria-label={`放大查看 Lastar VI 应用图 ${index + 1}`}><img src={src} alt={`Lastar VI 应用图 ${index + 1}`} loading="lazy" /><span>0{index + 1} / APPLICATION</span></button>)}</div><button type="button" className="vi-application-feature" onClick={() => setPreviewImage({ src: viApplicationFeature, caption: 'Lastar · VI 应用系统 · 台灯应用' })} aria-label="放大查看 Lastar VI 主视觉"><img src={viApplicationFeature} alt="Lastar VI 应用系统台灯" loading="lazy" /><small>IDENTITY IN EVERY TOUCHPOINT</small></button></div></section>}
          {module.key === 'brochure' && <SnapCarousel items={module.images} label="画册作品" onPreview={setPreviewImage} />}
          {module.key === 'packaging' && <><DirectionalGallery images={module.images} label="社交媒体广告视觉" direction="right" onPreview={setPreviewImage} /><DirectionalGallery images={module.socialImages} label="社交媒体广告作品" direction="left" onPreview={setPreviewImage} /><p className="gallery-hint">↔ 点击滑动栏浏览 · DRAG TO EXPLORE</p></>}
          {module.key === 'main-image' && <div className="main-image-stage"><div className="main-image-waterfall" role="list" aria-label="Main image works">{module.images.map(([image, label], index) => <article className="main-image-card" key={image + label}><div className="main-image-card-media"><img src={image} alt={label} loading="lazy" decoding="async" /><span className="main-image-card-index">{String(index + 1).padStart(2, '0')}</span></div></article>)}</div></div>}
          {module.key === 'a-plus' && <div className="ap-grid">{module.images.map(([image, label], index) => <article className={index === 0 ? 'ap-hero' : ''} key={image + label}><img src={image} alt={label} loading="lazy" decoding="async" /><div><small>{String(index + 1).padStart(2, '0')} / A+ STORY</small><b>{label}</b></div></article>)}</div>}
        </article>;
      })}</div>
    </section>
    {previewImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={previewImage.caption} onClick={() => setPreviewImage(null)} onKeyDown={(event) => { if (event.key === 'Escape') setPreviewImage(null); }}><button className="lightbox-close" type="button" onClick={() => setPreviewImage(null)} aria-label="关闭图片预览"><X size={24} /></button><img src={previewImage.src} alt={previewImage.caption} onClick={(event) => event.stopPropagation()} /><p>{previewImage.caption}</p></div>}

    <section className="section shell strengths"><div className="section-label"><span>07</span><span>What I bring</span></div><div className="strength-intro"><h2><span>CORE STRENGTHS</span><i>个人优势</i></h2><p>把品牌、AICG、视觉设计、系统与团队链成一套可持续的设计生产力。</p></div><div className="strength-grid"><article className="strength-card strength-card-brand"><span className="strength-index">01</span><h3>品牌升级能力<span>.</span></h3><p>从品牌定位、视觉识别到内容资产，建立能持续扩展的品牌升级路径。</p><div className="strength-tags"><span>Brand Book</span><span>VI System</span><span>Premium Visual</span></div></article><article className="strength-card strength-card-ai"><span className="strength-index">02</span><h3>AI 落地能力<span>.</span></h3><p>不是单点使用 AI，而是把 ComfyUI、LibTV、LoRA、SDXL / FLUX 与 3D 渲染装载成团队可直接调用的生产流程，让设计与运营稳定获得自动化提效。</p><div className="strength-tags"><span>ComfyUI</span><span>LoRA</span><span>chatGPT</span></div></article><article className="strength-card strength-card-growth"><span className="strength-index">03</span><h3>电商增长能力<span>.</span></h3><p>深耕 A+、Listing、主图视频与 Store，用视觉系统提升理解效率、转化效率与品牌溢价。</p><div className="strength-tags"><span>GMV Growth</span><span>Conversion</span><span>Amazon</span></div></article><article className="strength-card strength-card-system"><span className="strength-index">04</span><h3>视觉系统搭建能力<span>.</span></h3><p>从定位、调性到视觉规范与内容模板，搭建可延展、可协作、可持续的品牌资产。</p><div className="strength-tags"><span>Visual System</span><span>Design Rules</span><span>Templates</span></div></article><article className="strength-card strength-card-team"><span className="strength-index">05</span><h3>团队管理能力<span>.</span></h3><p>建设高绩效设计团队，优化工作流，引入 AIGC，让团队交付更稳定、更快、更有创造力。</p><div className="strength-tags"><span>Design Ops</span><span>Skill Matrix</span><span>Training</span></div></article></div></section>

    <section className="section shell packaging-impact" aria-labelledby="packaging-impact-title">
      <div className="section-label"><span>08</span><span>AI packaging</span></div>
      <div className="module-heading"><div><small>AI / PACKAGING DEVELOPMENT</small><h3 id="packaging-impact-title">AI驱动包装落地</h3></div><p>利用AI快速的晚餐产品包装的开发效果。</p></div>
      <div className="packaging-impact-grid">{packagingEffectWorks.map(([src, label], index) => <div className={index === 0 ? 'packaging-impact-feature' : ''} key={src}><img src={src} alt={label} loading="lazy" /><span><small>{String(index + 1).padStart(2, '0')} / AI PACKAGING</small></span></div>)}</div>
    </section>

    <section className="section shell brand-projects"><div className="section-head"><div className="section-label"><span>09</span><span>Brand projects</span></div><p>品牌旗舰店、A+品牌营销。<br />让产品从一个页面，进入一套完整的视觉体验。</p></div><div className="brand-grid">{brandWorks.map(w => <article className="brand-card" key={w.category}><div className="brand-card-scroll"><img src={w.image} alt={w.category} loading="lazy" decoding="async" /></div><div className="brand-card-heading"><small>{w.category}</small></div><div className="brand-card-action"><ArrowUpRight size={20} /></div></article>)}</div></section>

    <section className="section shell moving"><div className="section-head"><div className="section-label"><span>10</span><span>Brand video</span></div><p>用视频、动态与场景化内容，<br />让产品在媒体/平台里被传播与理解。</p></div><div className="module-heading amazon-video-heading"><div><small>VIDEO / AMAZON</small><h3>亚马逊视频</h3></div><p>把产品优势转化为直观、易懂、可传播的动态内容。</p></div><div className="moving-grid"><article className="moving-feature" onMouseMove={() => setVideoControlsVisible((current) => current.map((value, i) => i === 0 ? true : value))}><video ref={(node) => { movingVideoRefs.current[0] = node; }} poster="/moving/853-poster.jpg" preload="none" playsInline onPlay={() => setVideoState(0, true)} onPause={() => setVideoState(0, false)} onEnded={() => setVideoState(0, false)} onClick={() => toggleVideo(0)} aria-label="播放 853 视频"><source src="/moving/853.mp4" type="video/mp4" /></video><button className={`moving-play ${videoPlaying[0] && !videoControlsVisible[0] ? 'is-hidden' : ''}`} aria-label={videoPlaying[0] ? '暂停 853 视频' : '播放 853 视频'} onClick={() => toggleVideo(0)}>{videoPlaying[0] ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}</button><div><small>01 / PRODUCT VIDEO</small><h3>Show the value.<br />Before the words.</h3></div></article><article className="moving-small" onMouseMove={() => setVideoControlsVisible((current) => current.map((value, i) => i === 1 ? true : value))}><video ref={(node) => { movingVideoRefs.current[1] = node; }} poster="/moving/022-poster.jpg" preload="none" playsInline onPlay={() => setVideoState(1, true)} onPause={() => setVideoState(1, false)} onEnded={() => setVideoState(1, false)} onClick={() => toggleVideo(1)} aria-label="播放 022 视频"><source src="/moving/022.mp4" type="video/mp4" /></video><button className={`moving-play ${videoPlaying[1] && !videoControlsVisible[1] ? 'is-hidden' : ''}`} aria-label={videoPlaying[1] ? '暂停 022 视频' : '播放 022 视频'} onClick={() => toggleVideo(1)}>{videoPlaying[1] ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}</button><div><small>02 / SOCIAL CONTENT</small><h3>Visuals that travel.</h3></div></article><article className="moving-product"><div className="moving-product-media"><video controls playsInline preload="none" aria-label="电动升降桌产品视频"><source src="/new-video/electric-standing-desk.mp4" type="video/mp4" />您的浏览器暂不支持视频播放。</video><span>✳</span></div><div className="moving-product-copy"><small>03 / PRODUCT FILM</small><h3>电动升降桌<br />Movement, made for everyday work.</h3><p>以动态影像展示产品细节、使用场景与体验。</p></div></article></div></section>

    <footer className="footer" id="contact"><div className="shell footer-inner"><div className="section-label"><span>11</span><span>Start a conversation</span></div><h2 className="footer-creative-title"><span>Make the</span><i>brand</i><span>more</span><strong>competitive.</strong></h2><a className="email" href="mailto:549944496@qq.com">549944496@qq.com <ArrowUpRight size={23} /></a><div className="footer-bottom"><span>© 2026 陈庆志</span><div><a href="#top">Back to top ↑</a><a href="mailto:549944496@qq.com">Email</a><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></div></div></div></footer>
    <audio ref={musicRef} src="/audio/ambient.mp3" loop preload="none" aria-hidden="true" />
    <button className={`music-toggle ${musicPlaying ? 'is-playing' : ''}`} type="button" aria-label={musicPlaying ? '暂停背景音乐' : '播放背景音乐'} title={musicPlaying ? '暂停背景音乐' : '播放背景音乐'} onClick={toggleMusic}>
      {musicPlaying ? <Volume2 size={17} strokeWidth={1.8} /> : <VolumeX size={17} strokeWidth={1.8} />}
    </button>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);


