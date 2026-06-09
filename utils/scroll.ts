// utils/scroll.ts
export const scrollToSection = (sectionId: string, offset: number = 100) => {
  if (typeof window === "undefined") return;

  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with id "${sectionId}" not found.`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};