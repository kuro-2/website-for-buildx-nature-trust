import { ScrollReveal } from './ScrollReveal';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-full aspect-square mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl text-center mb-1 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
        {member.name}
      </h3>
      <p className="text-sm text-center text-[#6B6B6B]">{member.role}</p>
    </div>
  );
}

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers: TeamMember[] = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Arjun Patel',
      role: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: 'Kavya Reddy',
      role: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    {
      name: 'Rohan Kumar',
      role: 'Environmental Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl text-center mb-8 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              About Us
            </h1>
            <div className="w-16 h-[1px] bg-[#2F6B4F] mx-auto mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed text-[#6B6B6B] mb-8">
              BuildX Nature Trust was born from a simple belief: that every small action for the environment 
              creates ripples of change. We are a collective of passionate individuals dedicated to protecting 
              our planet through direct action, education, and community engagement.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Our work is grounded in the understanding that environmental stewardship is not a trend—it's 
              a responsibility we carry for future generations. From planting trees to educating communities, 
              we approach each initiative with care, intention, and respect for the earth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl mb-6 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Our Mission
                </h2>
                <div className="w-12 h-[1px] bg-[#2F6B4F] mb-6" />
                <p className="text-[#6B6B6B] leading-relaxed">
                  To restore and protect natural ecosystems through sustainable practices, community 
                  involvement, and environmental education. We believe in creating lasting change by 
                  empowering individuals and communities to become guardians of the earth.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl mb-6 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Our Vision
                </h2>
                <div className="w-12 h-[1px] bg-[#2F6B4F] mb-6" />
                <p className="text-[#6B6B6B] leading-relaxed">
                  A world where humanity lives in harmony with nature. Where forests thrive, water runs clean, 
                  and communities understand their vital role in preserving the planet. We envision a future 
                  where environmental consciousness is woven into the fabric of daily life.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Team
            </h2>
            <div className="w-16 h-[1px] bg-[#2F6B4F] mx-auto mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Core Values
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-2xl mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Integrity
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  We operate with transparency and honesty in all our initiatives, ensuring every action 
                  aligns with our environmental commitments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-2xl mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Sustainability
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Long-term thinking guides our work. We focus on solutions that benefit both present and 
                  future generations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="text-2xl mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Collaboration
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Environmental change requires collective effort. We work alongside communities, 
                  organizations, and individuals who share our vision.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
