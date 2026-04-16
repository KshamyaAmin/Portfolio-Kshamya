import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: any;
}

try {
  // @ts-ignore
  gsap.registerPlugin(ScrollTrigger, window.ScrollSmoother, window.SplitText);
} catch (e) {
  console.warn("GSAP Plugins (Trial) could not be registered on this domain.");
}

const SplitText = (window as any).SplitText;

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    try {
      para.split = new SplitText(para, {
        type: "lines,words",
        linesClass: "split-line",
      });

      para.anim = gsap.fromTo(
        para.split.words,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: para.parentElement?.parentElement,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 1,
          ease: "power3.out",
          y: 0,
          stagger: 0.02,
        }
      );
    } catch (e) {
      // Fallback: If SplitText fails, just fade in the whole paragraph
      para.anim = gsap.fromTo(
        para,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: para.parentElement?.parentElement,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 1,
          ease: "power3.out",
          y: 0,
        }
      );
    }
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    
    try {
      title.split = new SplitText(title, {
        type: "chars,lines",
        linesClass: "split-line",
      });
      title.anim = gsap.fromTo(
        title.split.chars,
        { autoAlpha: 0, y: 80, rotate: 10 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.parentElement?.parentElement,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.8,
          ease: "power2.inOut",
          y: 0,
          rotate: 0,
          stagger: 0.03,
        }
      );
    } catch (e) {
      // Fallback for titles
      title.anim = gsap.fromTo(
        title,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.parentElement?.parentElement,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.8,
          ease: "power2.inOut",
          y: 0,
        }
      );
    }
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
