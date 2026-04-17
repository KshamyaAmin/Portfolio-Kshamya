import gsap from "gsap";
import { smoother } from "../Navbar";

const SplitText = (window as any).SplitText;

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  try {
    var landingText = new SplitText(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );

    let TextProps = { type: "chars,lines", linesClass: "split-h2" };

    var landingText2 = new SplitText(".landing-h2-info", TextProps);
    gsap.fromTo(
      landingText2.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );

    var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
    var landingText4 = new SplitText(".landing-h2-1", TextProps);
    var landingText5 = new SplitText(".landing-h2-2", TextProps);

    LoopText(landingText2, landingText3);
    LoopText(landingText4, landingText5);
  } catch (e) {
    console.warn("GSAP SplitText (Trial) failed in initialFX. Site content will remain visible without text split animations.");
    
    // Fallback: Fade in the main text containers
    gsap.fromTo(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: 0.3,
      }
    );

    // Fallback: Show primary text, hide duplicates, then cycle with simple opacity animation
    gsap.set(".landing-h2-1", { opacity: 1 });
    gsap.set(".landing-h2-2", { opacity: 0 });
    gsap.set(".landing-h2-info", { opacity: 1 });
    gsap.set(".landing-h2-info-1", { opacity: 0 });

    // Simple text cycling without SplitText
    LoopTextSimple(".landing-h2-1", ".landing-h2-2");
    LoopTextSimple(".landing-h2-info", ".landing-h2-info-1");
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}

function LoopText(Text1: any, Text2: any) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}

function LoopTextSimple(selector1: string, selector2: string) {
  const tl = gsap.timeline({ repeat: -1 });
  const showDuration = 4;
  const fadeDuration = 1;

  tl.to(selector1, {
    opacity: 0,
    y: -30,
    duration: fadeDuration,
    ease: "power3.inOut",
    delay: showDuration,
  })
    .fromTo(
      selector2,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: fadeDuration,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(selector2, {
      opacity: 0,
      y: -30,
      duration: fadeDuration,
      ease: "power3.inOut",
      delay: showDuration,
    })
    .fromTo(
      selector1,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: fadeDuration,
        ease: "power3.inOut",
      },
      "<"
    );
}
