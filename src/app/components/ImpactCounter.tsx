import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sprout, Wind, TrendingUp, MapPin, Leaf } from 'lucide-react';

/**
 * Single source of truth for impact numbers.
 * After every plantation event, update TOTAL_SAPLINGS_PLANTED and
 * PLANTATION_LOCATIONS (if a new site was added) — the CO2 figures
 * below recalculate automatically using the trust's standard formula:
 *   Current CO2 (t/yr)  = (Total Saplings x 3)  / 1000
 *   Future CO2  (t/yr)  = (Total Saplings x 22) / 1000
 */
const TOTAL_SAPLINGS_PLANTED = 3050;
const PLANTATION_LOCATIONS = 4;

const CURRENT_CO2_OFFSET = (TOTAL_SAPLINGS_PLANTED * 3) / 1000;
const FUTURE_CO2_OFFSET = (TOTAL_SAPLINGS_PLANTED * 22) / 1000;

interface CounterItemProps {
  icon: React.ReactNode;
  end: number;
  label: string;
  sublabel: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}

function CounterItem({ icon, end, label, sublabel, suffix = '', decimals = 0, delay = 0 }: CounterItemProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [justLanded, setJustLanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2200;
    let startTime: number | null = null;
    let rafId = 0;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quart: fast ticking at first, settles gently like an odometer
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(eased * end);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(end);
        setJustLanded(true);
      }
    };

    // sync counting start with this card's own entrance delay
    const startTimeout = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay * 1000 + 150);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [hasStarted, end, delay]);

  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center text-center px-6 py-10 rounded-2xl border border-[#FFFDF5]/10 bg-[#FFFDF5]/[0.03] backdrop-blur-sm transition-colors duration-300 hover:bg-[#FFFDF5]/[0.06] hover:border-[#628B35]/40"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.6 }}
        className="mb-5 text-[#8FBB5C] drop-shadow-[0_0_12px_rgba(143,187,92,0.35)]"
      >
        {icon}
      </motion.div>
      <motion.div
        animate={justLanded ? { scale: [1, 1.14, 1] } : {}}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        onAnimationComplete={() => setJustLanded(false)}
        className="text-4xl md:text-5xl mb-2 text-[#FFFDF5] tabular-nums"
        style={{ fontFamily: 'Cormorant, serif' }}
      >
        {displayValue}
        {suffix}
      </motion.div>
      <div className="text-sm tracking-[0.15em] text-[#FFFDF5]/80 uppercase mb-1">{label}</div>
      <div className="text-xs text-[#FFFDF5]/45">{sublabel}</div>
    </motion.div>
  );
}

function FloatingLeaves() {
  const leaves = [
    { left: '6%', size: 16, duration: 14, delay: 0 },
    { left: '18%', size: 12, duration: 18, delay: 3 },
    { left: '32%', size: 20, duration: 16, delay: 1.5 },
    { left: '52%', size: 14, duration: 20, delay: 4 },
    { left: '68%', size: 18, duration: 15, delay: 2 },
    { left: '84%', size: 13, duration: 17, delay: 5 },
    { left: '94%', size: 16, duration: 19, delay: 0.8 },
  ];

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute text-[#628B35]/25"
          style={{ left: leaf.left, bottom: '-10%' }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0%', '-620%'],
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Leaf size={leaf.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

export function ImpactCounter() {
  return (
    <section className="relative py-24 bg-[#103713] overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(98,139,53,0.18) 0%, rgba(16,55,19,0) 55%)',
        }}
      />
      <FloatingLeaves />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-[#8FBB5C] uppercase mb-3 block">
            Measured, Not Assumed
          </span>
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#FFFDF5]"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            Our Growing Impact
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-[#628B35] mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterItem
            icon={<Sprout size={44} strokeWidth={1.5} />}
            end={TOTAL_SAPLINGS_PLANTED}
            suffix="+"
            label="Trees Planted"
            sublabel="Saplings in the ground"
            delay={0}
          />
          <CounterItem
            icon={<Wind size={44} strokeWidth={1.5} />}
            end={CURRENT_CO2_OFFSET}
            decimals={2}
            suffix="t"
            label="Current CO2 Offset"
            sublabel="Tonnes absorbed per year"
            delay={0.15}
          />
          <CounterItem
            icon={<TrendingUp size={44} strokeWidth={1.5} />}
            end={FUTURE_CO2_OFFSET}
            decimals={2}
            suffix="t"
            label="Estimated CO2 Offset"
            sublabel="Tonnes per year, at maturity"
            delay={0.3}
          />
          <CounterItem
            icon={<MapPin size={44} strokeWidth={1.5} />}
            end={PLANTATION_LOCATIONS}
            label="Plantation Locations"
            sublabel="Active sites across the region"
            delay={0.45}
          />
        </div>
      </div>
    </section>
  );
}
