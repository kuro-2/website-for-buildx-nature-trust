import { ScrollReveal } from './ScrollReveal';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group bg-[#FFFDF5] p-6 rounded-2xl border border-[#d1c7bc] hover:border-[#628B35] transition-colors h-full flex flex-col">
      <div className="relative overflow-hidden rounded-full aspect-square mb-4 border-2 border-[#E2DBD0] shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <h3 className="text-xl text-center mb-1 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
          {member.name}
        </h3>
        <p className="text-sm text-center text-[#628B35] font-medium">{member.role}</p>
      </div>
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
    <div className="pt-24 bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              About Us
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8 text-center md:text-left">
              <p className="text-lg leading-relaxed text-[#103713]/80">
                Initiative by BuildX Interior Product Pvt. Ltd., formed to work actively toward environmental responsibility 
                alongside the growth of the built environment.
              </p>
              <p className="text-lg leading-relaxed text-[#103713]/80">
                The Trust is driven by a commitment to care for nature through thoughtful action, guided by long-term intent.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Focus Areas
            </h2>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-[#E2DBD0]/20 rounded-2xl border border-[#d1c7bc] h-full flex flex-col">
                <h3 className="text-2xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Tree Plantation
                </h3>
                <p className="text-[#103713]/70 leading-relaxed flex-grow">
                  Restoring green cover through thoughtful plantation drives and long-term care in collaboration with local communities and NGOs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-[#E2DBD0]/20 rounded-2xl border border-[#d1c7bc] h-full flex flex-col">
                <h3 className="text-2xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Waste Management
                </h3>
                <p className="text-[#103713]/70 leading-relaxed flex-grow">
                  Addressing waste generated at corporate interior sites by reducing landfill impact and enabling responsible handling, reuse, upcycling and recycling of materials.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 bg-[#E2DBD0]/20 rounded-2xl border border-[#d1c7bc] h-full flex flex-col">
                <h3 className="text-2xl mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Green Catalogue
                </h3>
                <p className="text-[#103713]/70 leading-relaxed flex-grow">
                  Promoting sustainable and recycled materials to help the industry make conscious, practical choices.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnership & Impact Section */}
      <section className="py-20 bg-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-[#103713]/80">
                Through partnerships with NGOs, industry collaborators, and local stakeholders, BuildX Nature Trust works to restore balance between development and nature.
              </p>
              <p className="text-lg leading-relaxed text-[#103713]/80 font-medium">
                The Trust ensures that as we create spaces, we also give back by protecting, preserving, and sustaining the environment that supports us all.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Team
            </h2>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-16" />
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

      {/* Mission & Vision */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="p-10 bg-[#E2DBD0]/30 rounded-3xl border border-[#d1c7bc] h-full flex flex-col">
                <h2 className="text-3xl mb-6 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Mission
                </h2>
                <div className="w-12 h-[1px] bg-[#628B35] mb-6 shrink-0" />
                <p className="text-[#103713]/70 text-lg leading-relaxed flex-grow">
                  To take simple, consistent actions that support nature through plantation, waste management, and mindful choices that create real change on the ground.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-10 bg-[#E2DBD0]/30 rounded-3xl border border-[#d1c7bc] h-full flex flex-col">
                <h2 className="text-3xl mb-6 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Vision
                </h2>
                <div className="w-12 h-[1px] bg-[#628B35] mb-6 shrink-0" />
                <p className="text-[#103713]/70 text-lg leading-relaxed flex-grow">
                  To build a future where caring for the Earth is part of everyday life, and where people, communities, and nature grow together in balance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
