import { ScrollReveal } from './ScrollReveal';
import { AboutPageCard } from './ui/AboutPageCard';

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
      name: 'Prakash Devegowda',
      role: 'Director',
      image: '/assets/images/Prakash Devegowda.jpeg',
    },
    {
      name: 'Brijesh AC',
      role: 'Director',
      image: '/assets/images/Brijesh AC.jpeg',
    },
    {
      name: 'Prajakta Killekar',
      role: 'Marketing Executive',
      image: '/assets/images/Prajakta Killekar.png',
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
              <div className="h-96">
                <AboutPageCard 
                  title="Tree Plantation"
                  description="Restoring green cover through thoughtful plantation drives and long-term care in collaboration with local communities and NGOs."
                  imageUrl="https://images.unsplash.com/photo-1695551407214-25a5dc6300b8?w=400&h=400&fit=crop"
                  altText="Tree plantation drive"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-96">
                <AboutPageCard 
                  title="Waste Management"
                  description="Addressing waste generated at corporate interior sites by reducing landfill impact and enabling responsible handling, reuse, upcycling and recycling of materials."
                  imageUrl="https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=400&h=400&fit=crop"
                  altText="Waste management"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="h-96">
                <AboutPageCard 
                  title="Green Catalogue"
                  description="Promoting sustainable and recycled materials to help the industry make conscious, practical choices."
                  imageUrl="https://images.unsplash.com/photo-1651349776781-7a8cf162a494?w=400&h=400&fit=crop"
                  altText="Green catalogue"
                />
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
              <div className="h-96">
                <AboutPageCard 
                  title="Mission"
                  description="To take simple, consistent actions that support nature through plantation, waste management, and mindful choices that create real change on the ground."
                  imageUrl="https://images.unsplash.com/photo-1656783208368-a7d176736535?w=400&h=400&fit=crop"
                  altText="Nature mission"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-96">
                <AboutPageCard 
                  title="Vision"
                  description="To build a future where caring for the Earth is part of everyday life, and where people, communities, and nature grow together in balance."
                  imageUrl="https://images.unsplash.com/photo-1650793889985-2090d35deb66?w=400&h=400&fit=crop"
                  altText="Environmental vision"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
