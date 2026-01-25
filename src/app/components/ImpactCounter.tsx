import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sprout, Users, Lightbulb } from 'lucide-react';

interface CounterItemProps {
  icon: React.ReactNode;
  end: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function CounterItem({ icon, end, label, suffix = '', delay = 0 }: CounterItemProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
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

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="flex flex-col items-center text-center"
    >
      <div className="text-[#2F6B4F] mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl mb-2 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm tracking-wide text-[#6B6B6B] uppercase">{label}</div>
    </motion.div>
  );
}

export function ImpactCounter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Impact
          </h2>
          <div className="w-16 h-[1px] bg-[#2F6B4F] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <CounterItem
            icon={<Sprout size={48} strokeWidth={1.5} />}
            end={15000}
            suffix="+"
            label="Trees Planted"
            delay={0}
          />
          <CounterItem
            icon={<Users size={48} strokeWidth={1.5} />}
            end={250}
            suffix="+"
            label="Communities Engaged"
            delay={0.2}
          />
          <CounterItem
            icon={<Lightbulb size={48} strokeWidth={1.5} />}
            end={45}
            suffix="+"
            label="Projects Completed"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
