"use client";

import { useEffect, useRef } from "react";

const WHEEL_THRESHOLD = 18;
const TOUCH_THRESHOLD = 42;
const LOCK_MS = 900;

function getScrollStops() {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-stop='true']"));
}

function currentStopIndex(stops: HTMLElement[]) {
  const anchor = window.scrollY + 96;
  let index = 0;

  stops.forEach((stop, stopIndex) => {
    if (stop.offsetTop <= anchor) {
      index = stopIndex;
    }
  });

  return index;
}

function scrollToStop(stop: HTMLElement) {
  const target = Math.max(0, stop.offsetTop - 14);

  window.scrollTo({
    top: target,
    behavior: "smooth",
  });
}

export function ScrollController() {
  const lockedUntil = useRef(0);
  const released = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const moveBySection = (direction: 1 | -1) => {
      if (released.current) {
        return false;
      }

      const now = Date.now();
      if (now < lockedUntil.current) {
        return true;
      }

      const stops = getScrollStops();
      if (stops.length === 0) {
        return false;
      }

      const currentIndex = currentStopIndex(stops);
      const lastIndex = stops.length - 1;

      if (direction > 0 && currentIndex >= lastIndex) {
        released.current = true;
        return false;
      }

      if (direction < 0 && currentIndex <= 0) {
        return false;
      }

      const nextIndex = Math.min(lastIndex, Math.max(0, currentIndex + direction));
      const target = stops[nextIndex];

      lockedUntil.current = now + LOCK_MS;
      scrollToStop(target);

      if (nextIndex >= lastIndex) {
        window.setTimeout(() => {
          released.current = true;
        }, LOCK_MS);
      }

      return true;
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD || Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        return;
      }

      const handled = moveBySection(event.deltaY > 0 ? 1 : -1);
      if (handled) {
        event.preventDefault();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? 0;
      const delta = touchStartY.current - y;

      if (Math.abs(delta) < TOUCH_THRESHOLD) {
        return;
      }

      const handled = moveBySection(delta > 0 ? 1 : -1);
      if (handled) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return null;
}
