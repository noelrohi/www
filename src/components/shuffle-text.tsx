"use client";

import { useScramble } from "use-scramble";

interface ShuffleTextProps {
  text: string;
  className?: string;
  speed?: number;
  tick?: number;
  step?: number;
  scramble?: number;
  seed?: number;
}

export function ShuffleText({
  text,
  className,
  speed = 0.5,
  tick = 1,
  step = 1,
  scramble = 5,
  seed = 3,
}: ShuffleTextProps) {
  const { ref } = useScramble({
    text,
    speed,
    tick,
    step,
    scramble,
    seed,
    overdrive: true,
  });

  return <span aria-label={text} className={className} ref={ref} />;
}
