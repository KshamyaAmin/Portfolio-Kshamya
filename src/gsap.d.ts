declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    lines: any[];
    words: any[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(value?: boolean): void;
    paused(value?: boolean): any;
    scrollTop(value?: number): number | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}

declare module 'gsap-trial/all' {
  export * from 'gsap/all';
}
