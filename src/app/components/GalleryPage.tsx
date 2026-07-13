import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundTexture } from './BackgroundTexture';

interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  alt: string;
  category: 'project' | 'volunteer';
}

const bangaloreGallery: GalleryImage[] = [
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6778.jpeg', title: 'School Plantation Drive', description: 'Government school students participating in tree plantation and environmental awareness.', alt: 'Bangalore govt school plantation drive - students planting trees', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6788 (1).jpeg', title: 'Community Engagement', description: 'Local community members actively involved in the greening initiative.', alt: 'Bangalore school plantation - community participation', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6801 (1).jpeg', title: 'Youth Awareness', description: 'Educating young minds about the importance of environmental conservation.', alt: 'Bangalore plantation drive - student awareness program', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6807.jpeg', title: 'Tree Planting Activity', description: 'Hands-on tree planting experience for school children.', alt: 'Bangalore school - tree planting activity', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6812 (1).jpeg', title: 'Environmental Education', description: 'Teaching sustainable practices through practical involvement.', alt: 'Bangalore govt school - environmental education', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6814.jpeg', title: 'Green Initiative', description: 'Transforming school grounds into green learning spaces.', alt: 'Bangalore plantation - green school initiative', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6821.jpeg', title: 'Student Participation', description: 'Enthusiastic students contributing to the plantation drive.', alt: 'Bangalore school - student tree planting', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6858 (2).jpeg', title: 'Community Support', description: 'Building community awareness through collaborative action.', alt: 'Bangalore plantation - community and students together', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6866 (3).jpeg', title: 'Sapling Distribution', description: 'Distributing saplings to students for the plantation drive.', alt: 'Bangalore school - sapling distribution event', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6867 (1).jpeg', title: 'Team Effort', description: 'Students and volunteers working together for a greener future.', alt: 'Bangalore plantation - teamwork and collaboration', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6869.jpeg', title: 'School Grounds Greening', description: 'Enhancing school infrastructure with green cover.', alt: 'Bangalore govt school - grounds transformation', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6875 (3).jpeg', title: 'Awareness Campaign', description: 'Spreading environmental consciousness among young students.', alt: 'Bangalore school - environmental awareness campaign', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6881 (3).jpeg', title: 'Hands-On Learning', description: 'Practical learning experience about ecology and sustainability.', alt: 'Bangalore plantation - practical environmental education', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6892.jpeg', title: 'Group Activity', description: 'Students collaborating in the plantation initiative.', alt: 'Bangalore school - group plantation activity', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6895 (2).jpeg', title: 'Green Mission', description: "School's commitment to environmental responsibility.", alt: 'Bangalore govt school - green mission project', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6896 (2).jpeg', title: 'Planting Together', description: 'Students learning the value of collective environmental action.', alt: 'Bangalore plantation - students planting together', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6897 (2).jpeg', title: 'Future Stewards', description: 'Nurturing the next generation of environmental stewards.', alt: 'Bangalore school - future environmental leaders', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6899.jpeg', title: 'School Engagement', description: 'Active participation from the entire school community.', alt: 'Bangalore plantation - school-wide engagement', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6903 (3).jpeg', title: 'Green Education', description: 'Integrating environmental values into education.', alt: 'Bangalore govt school - green education program', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6917 (3).jpeg', title: 'Plantation Success', description: 'Successful completion of the school plantation drive.', alt: 'Bangalore school - successful plantation event', category: 'project' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6921.jpeg', title: 'Community Impact', description: 'Creating lasting impact through community-school partnership.', alt: 'Bangalore plantation - community impact', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6930 (1).jpeg', title: 'Youth Leadership', description: 'Empowering students to lead environmental initiatives.', alt: 'Bangalore school - youth environmental leadership', category: 'volunteer' },
  { src: '/assets/images/Bangalore - Govt school - Plantation drive and awareness/IMG_6957 (2).jpeg', title: 'Sustainable Future', description: 'Building a sustainable future through education and action.', alt: 'Bangalore govt school - sustainable future initiative', category: 'project' },
  { src: '/assets/images/projects/IMG_4561.jpeg', title: 'Government School Outreach', description: 'BuildX volunteers addressing students at a government primary school plantation drive.', alt: 'Bangalore - BuildX team with government school students', category: 'volunteer' },
  { src: '/assets/images/projects/IMG_6785 (1).jpeg', title: 'Chikkanagamangala Visit', description: 'The BuildX team at Government Junior Primary School, Chikkanagamangala, for the plantation and awareness program.', alt: 'Bangalore - team visit to government primary school', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_6848 (1).jpeg', title: 'A Child\'s First Sapling', description: 'A child from the partner care institution proudly holding a sapling to be planted.', alt: 'Bangalore - child holding sapling at care institution', category: 'volunteer' },
  { src: '/assets/images/gallery/5ba500c0-20f5-4eef-9a86-cf640f8f928e.jpeg', title: 'Best Out of Waste', description: 'A BuildX team member poses in a handmade upcycled photo frame during the office sustainability challenge.', alt: 'Bangalore - Best Out of Waste office activity photo frame', category: 'volunteer' },
  { src: '/assets/images/gallery/80a8156a-eff6-413a-9f25-d928e551a2c9.jpeg', title: 'Green Team Spirit', description: 'Celebrating creativity and sustainability at the Best Out of Waste office activity.', alt: 'Bangalore - Best Out of Waste office activity celebration', category: 'volunteer' },
];

const gulbargaGallery: GalleryImage[] = [
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5730 (1).jpeg', title: 'Kalyana Vana Plantation', description: 'Large-scale tree plantation initiative at Kalyana Vana forest area.', alt: 'Gulbarga Kalyana Vana plantation drive', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5736.jpeg', title: 'Community Mobilization', description: 'Local community members gathering for the plantation drive.', alt: 'Gulbarga plantation - community participation', category: 'volunteer' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5745 (2).jpeg', title: 'Forest Restoration', description: 'Restoring native forest cover in the Kalyana Vana region.', alt: 'Gulbarga Kalyana Vana forest restoration', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5748.jpeg', title: 'Tree Sapling Distribution', description: 'Distributing saplings to volunteers for plantation.', alt: 'Gulbarga plantation - sapling distribution', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5751.jpeg', title: 'Planting in Action', description: 'Volunteers actively planting trees across the Kalyana Vana area.', alt: 'Gulbarga Kalyana Vana - tree planting activity', category: 'volunteer' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5755.jpeg', title: 'Group Participation', description: 'Team members working together in the plantation drive.', alt: 'Gulbarga plantation - group activity', category: 'volunteer' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5815.jpeg', title: 'Native Species Planting', description: 'Planting native tree species suitable for the region.', alt: 'Gulbarga Kalyana Vana - native species plantation', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5827 (1).jpeg', title: 'Volunteer Engagement', description: 'Dedicated volunteers contributing to the green mission.', alt: 'Gulbarga plantation - volunteer engagement', category: 'volunteer' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5831.jpeg', title: 'Land Preparation', description: 'Preparing the land for successful tree plantation.', alt: 'Gulbarga Kalyana Vana - land preparation', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5865 (1).jpeg', title: 'Mass Plantation Event', description: 'Large-scale community plantation event at Kalyana Vana.', alt: 'Gulbarga plantation - mass tree planting event', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5879.jpeg', title: 'Green Cover Expansion', description: 'Expanding forest cover in the semi-arid Gulbarga region.', alt: 'Gulbarga Kalyana Vana - green cover expansion', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5917 (1).jpeg', title: 'Environmental Conservation', description: 'Conservation efforts through strategic tree plantation.', alt: 'Gulbarga plantation - environmental conservation', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/IMG_5935.jpeg', title: 'Successful Drive', description: 'Completion of the successful Kalyana Vana plantation drive.', alt: 'Gulbarga Kalyana Vana - successful plantation', category: 'project' },
  { src: '/assets/images/Gulbarga - plantation drive- Kalyana Vana 2/WhatsApp Image 2025-09-12 at 6.29.03 PM (2).jpeg', title: 'Community Achievement', description: 'Collective achievement in creating a greener Gulbarga.', alt: 'Gulbarga plantation - community achievement', category: 'volunteer' },
  { src: '/assets/images/projects/IMG_1467.jpeg', title: 'Dedication Seminar', description: 'A formal seminar session with university officials marking the Kalyana Vana afforestation dedication.', alt: 'Kalaburagi - Central University seminar session', category: 'project' },
  { src: '/assets/images/projects/IMG_5815 (1).jpeg', title: 'Addressing the Gathering', description: 'A BuildX representative speaking at the Kalyana Vana 2 dedication ceremony.', alt: 'Kalaburagi - speaker at Kalyana Vana dedication', category: 'volunteer' },
  { src: '/assets/images/projects/IMG_5863.jpeg', title: 'Kalyana Vana 2 Dedication', description: 'Group photo at the dedication of Kalyana Vana 2, a ground water recharge cum afforestation program.', alt: 'Kalaburagi - Kalyana Vana 2 dedication group photo', category: 'volunteer' },
  { src: '/assets/images/projects/IMG_5870.jpeg', title: 'Site Survey', description: 'The BuildX team and partners surveying the afforestation site ahead of planting.', alt: 'Kalaburagi - site visit at Kalyana Vana', category: 'volunteer' },
  { src: '/assets/images/projects/IMG_5921.jpeg', title: 'Dedication Ceremony', description: 'Dignitaries gathered at the Kalyana Vana 2 signage for the official dedication.', alt: 'Kalaburagi - Kalyana Vana 2 dedication signage', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_4536.jpeg', title: 'Ground Water Recharge Program', description: 'Signage for the Kalyana Vana 2 ground water recharge cum afforestation program overlooking the plantation site.', alt: 'Kalaburagi - Kalyana Vana 2 signage and landscape', category: 'project' },
  { src: '/assets/images/gallery/IMG_5712.jpeg', title: 'Watering a New Sapling', description: 'Carefully watering a newly planted sapling on the semi-arid Kalyana Vana grounds.', alt: 'Kalaburagi - watering sapling at Kalyana Vana', category: 'project' },
  { src: '/assets/images/gallery/IMG_5802.jpeg', title: 'Panel Discussion', description: 'University officials and BuildX representatives at the Kalyana Vana dedication seminar.', alt: 'Kalaburagi - panel discussion at dedication seminar', category: 'project' },
];

const mysuruGallery: GalleryImage[] = [
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1466.jpeg', title: 'Varuna Lake Restoration', description: 'Environmental Day 2025 celebration at Varuna Lake with conservation activities.', alt: 'Mysuru Varuna Lake - Environmental Day 2025', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1500.jpeg', title: 'Lake Cleanup Drive', description: 'Community members participating in Varuna Lake cleanup initiative.', alt: 'Mysuru Varuna Lake - cleanup drive', category: 'volunteer' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1514.jpeg', title: 'Environmental Awareness', description: 'Raising awareness about lake conservation and environmental protection.', alt: 'Mysuru Environmental Day - awareness campaign', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1516.jpeg', title: 'Community Gathering', description: 'Large community turnout for Environmental Day at Varuna Lake.', alt: 'Mysuru Varuna Lake - community event', category: 'volunteer' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1519.jpeg', title: 'Lake Conservation', description: 'Active conservation efforts to protect and restore Varuna Lake.', alt: 'Mysuru Varuna Lake - conservation project', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1528 (1).jpeg', title: 'Volunteer Action', description: 'Dedicated volunteers working on lake restoration activities.', alt: 'Mysuru Environmental Day - volunteer participation', category: 'volunteer' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1542.jpeg', title: 'Water Body Protection', description: 'Protecting vital water resources through community engagement.', alt: 'Mysuru Varuna Lake - water body protection', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1547.jpeg', title: 'Environmental Pledge', description: 'Participants taking pledge to protect the environment.', alt: 'Mysuru Environmental Day - environmental pledge', category: 'volunteer' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1577.jpeg', title: 'Lake Greenery', description: 'Plantation activities around Varuna Lake to enhance green cover.', alt: 'Mysuru Varuna Lake - lakeside plantation', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1584 (1).jpeg', title: 'Community Impact', description: 'Creating lasting impact through community-led environmental action.', alt: 'Mysuru Environmental Day - community impact', category: 'volunteer' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1586.jpeg', title: 'Nature Conservation', description: 'Preserving natural habitats around the lake ecosystem.', alt: 'Mysuru Varuna Lake - nature conservation', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1587.jpeg', title: 'Group Participation', description: 'Collaborative efforts in Environmental Day activities.', alt: 'Mysuru Environmental Day - group activity', category: 'volunteer' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1665 (1).jpeg', title: 'Lake Ecosystem', description: "Working to maintain and restore the lake's ecosystem health.", alt: 'Mysuru Varuna Lake - ecosystem restoration', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1682 (2).jpeg', title: 'Environmental Education', description: 'Educational programs about lake conservation and sustainability.', alt: 'Mysuru Environmental Day - education program', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_1722.jpeg', title: 'Lakeside Activities', description: 'Various conservation activities conducted at the lake premises.', alt: 'Mysuru Varuna Lake - conservation activities', category: 'project' },
  { src: '/assets/images/Mysuru/Environmental day 2025 - Varuna Lake/IMG_4563.jpeg', title: 'Celebration of Nature', description: 'Environmental Day celebration highlighting importance of natural resources.', alt: 'Mysuru Environmental Day - nature celebration', category: 'volunteer' },
  { src: '/assets/images/Mysuru/New folder/IMG_1739 (1).jpeg', title: 'Plantation Initiative', description: 'Tree plantation drive as part of Mysuru green initiative.', alt: 'Mysuru plantation - tree planting drive', category: 'project' },
  { src: '/assets/images/Mysuru/New folder/IMG_1752.jpeg', title: 'Sapling Care', description: 'Volunteers nurturing saplings for successful growth.', alt: 'Mysuru plantation - sapling care', category: 'volunteer' },
  { src: '/assets/images/Mysuru/New folder/IMG_1770.jpeg', title: 'Green Mission', description: "Community-driven mission to increase Mysuru's green cover.", alt: 'Mysuru plantation - green mission', category: 'project' },
  { src: '/assets/images/Mysuru/New folder/IMG_1772.jpeg', title: 'Urban Greening', description: 'Strategic tree planting in urban areas of Mysuru.', alt: 'Mysuru plantation - urban greening project', category: 'project' },
  { src: '/assets/images/Mysuru/New folder/IMG_1775.jpeg', title: 'Tree Planting Day', description: 'Special tree planting event with community participation.', alt: 'Mysuru plantation - tree planting day', category: 'volunteer' },
  { src: '/assets/images/Mysuru/New folder/IMG_1776.jpeg', title: 'Environmental Action', description: 'Taking concrete action towards environmental sustainability.', alt: 'Mysuru plantation - environmental action', category: 'project' },
  { src: '/assets/images/Mysuru/New folder/IMG_1787.jpeg', title: 'Native Species', description: 'Planting native tree species suitable for Mysuru climate.', alt: 'Mysuru plantation - native species planting', category: 'project' },
  { src: '/assets/images/Mysuru/New folder/IMG_1993 (1).jpeg', title: 'Volunteer Team', description: 'Dedicated team of volunteers contributing to the plantation.', alt: 'Mysuru plantation - volunteer team', category: 'volunteer' },
  { src: '/assets/images/Mysuru/New folder/IMG_2002.jpeg', title: 'Green Mysuru', description: 'Building a greener and more sustainable Mysuru city.', alt: 'Mysuru plantation - green city initiative', category: 'project' },
  { src: '/assets/images/Mysuru/New folder/IMG_2008 (1).jpeg', title: 'Planting Success', description: 'Successful completion of the plantation drive in Mysuru.', alt: 'Mysuru plantation - successful drive', category: 'project' },
  { src: '/assets/images/gallery/IMG_1623 (1).jpeg', title: 'Team by the Lake', description: 'The BuildX team pausing for a moment by Varuna Lake during the Environmental Day plantation drive.', alt: 'Mysuru Varuna Lake - team photo by the water', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_1682 (3).jpeg', title: 'Dedicated Sapling Care', description: 'Officials and volunteers watering a newly planted sapling at the Varuna Lake Environmental Day event.', alt: 'Mysuru Varuna Lake - watering a sapling', category: 'project' },
  { src: '/assets/images/gallery/IMG_1329.jpeg', title: 'Press Coverage – Odanadi', description: 'A newspaper clipping covering the plantation and awareness drive with the Odanadi Boys Rehabilitation Centre.', alt: 'Mysuru - press clipping on Odanadi plantation event', category: 'project' },
  { src: '/assets/images/gallery/d3ecd84a597a4020bd18d8ae336220c5.jpg', title: 'Press Coverage – Environment Day', description: 'Local newspaper coverage of the Environmental Day plantation and awareness activities in Mysuru.', alt: 'Mysuru - press clipping on Environment Day event', category: 'project' },
];

const mumbaiGallery: GalleryImage[] = [
  { src: '/assets/images/Mumbai/DSC_4338 (1).jpg', title: 'Ribbon Cutting Ceremony', description: 'The inaugural ribbon-cutting for the plantation drive at Government College of Education, Panvel.', alt: 'Mumbai Panvel - inauguration ribbon cutting ceremony', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4342 (1).jpg', title: 'Opening Remarks', description: 'Dignitaries addressing the gathering at the start of the Panvel plantation drive.', alt: 'Mumbai Panvel - opening ceremony remarks', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4350 (1).jpg', title: 'Partnership in Action', description: 'BuildX Nature Trust and Sahyog Foundation representatives coming together for the plantation drive.', alt: 'Mumbai Panvel - partner organizations at plantation drive', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4353 (2).jpg', title: 'Community Gathering', description: 'Students and staff of the Government College of Education gathered for the plantation event.', alt: 'Mumbai Panvel - community gathering at college', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4364 (2).jpg', title: 'Sapling Preparation', description: 'Saplings being readied for planting across the college grounds.', alt: 'Mumbai Panvel - saplings prepared for planting', category: 'project' },
  { src: '/assets/images/Mumbai/DSC_4372.jpg', title: 'Planting Begins', description: 'Volunteers and students beginning the plantation drive at the college campus.', alt: 'Mumbai Panvel - plantation drive begins', category: 'project' },
  { src: '/assets/images/Mumbai/DSC_4397.jpg', title: 'Hands in the Soil', description: 'A volunteer carefully placing a sapling into the freshly dug soil.', alt: 'Mumbai Panvel - planting sapling in soil', category: 'project' },
  { src: '/assets/images/Mumbai/DSC_4409.jpg', title: 'Student Participation', description: 'Students of the Government College of Education actively taking part in the plantation drive.', alt: 'Mumbai Panvel - students participating in plantation', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4417.jpg', title: 'Team Effort', description: 'Volunteers working together to plant saplings across the campus grounds.', alt: 'Mumbai Panvel - team planting saplings', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4428 (2).jpg', title: 'Campus Greening', description: 'Transforming the college campus with new tree cover.', alt: 'Mumbai Panvel - campus greening initiative', category: 'project' },
  { src: '/assets/images/Mumbai/DSC_4434 (1).jpg', title: 'Watering the Saplings', description: 'Freshly planted saplings being watered to help them establish.', alt: 'Mumbai Panvel - watering newly planted saplings', category: 'project' },
  { src: '/assets/images/Mumbai/DSC_4447.jpg', title: 'Group Participation', description: 'A large group of volunteers and students gathered around the plantation site.', alt: 'Mumbai Panvel - group participation in plantation drive', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4456.jpg', title: 'Awareness Session', description: 'An environmental awareness session held alongside the plantation activity.', alt: 'Mumbai Panvel - environmental awareness session', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4460 (2).jpg', title: 'Sahyog Foundation Partnership', description: 'Representatives from Sahyog Foundation collaborating on the Panvel plantation drive.', alt: 'Mumbai Panvel - Sahyog Foundation partnership', category: 'volunteer' },
  { src: '/assets/images/Mumbai/DSC_4463 (1).jpg', title: 'Closing Moments', description: 'A group photo marking the successful completion of the plantation drive.', alt: 'Mumbai Panvel - closing group photo', category: 'volunteer' },
  { src: '/assets/images/Mumbai/IMG_2148 (1).jpeg', title: 'BuildX Team at Panvel', description: 'The BuildX team at the Government College of Education, Panvel, for the plantation drive.', alt: 'Mumbai Panvel - BuildX team at government college', category: 'volunteer' },
  { src: '/assets/images/Mumbai/IMG_2153.jpeg', title: 'Green Campus Vision', description: 'Building towards a greener future for the Government College of Education, Panvel.', alt: 'Mumbai Panvel - green campus vision', category: 'project' },
];

const communityGallery: GalleryImage[] = [
  { src: '/assets/images/projects/IMG_1668 (1).jpeg', title: 'Carrying a Sapling', description: 'A BuildX team member carrying a young mango sapling to its new home.', alt: 'Community plantation drive - carrying a sapling', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2974.jpeg', title: 'Nurturing New Growth', description: 'Hands gently watering a freshly planted sapling in the red soil.', alt: 'Community plantation drive - watering a sapling', category: 'project' },
  { src: '/assets/images/gallery/DSC_3564.JPG', title: 'Community Plantation Drive', description: 'Officials and community members gathered for a tree plantation ceremony.', alt: 'Community plantation drive - dedication ceremony', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG-20250606-WA0003.jpg', title: 'Mango Sapling Planting', description: 'A small group planting a mango sapling as part of a community greening effort.', alt: 'Community plantation drive - mango sapling planting', category: 'project' },
  { src: '/assets/images/gallery/IMG_2978.jpeg', title: 'Dedication Gathering', description: 'A community plantation ceremony bringing together officials, volunteers, and residents.', alt: 'Community plantation drive - gathering around new sapling', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2982.jpeg', title: 'Watering the New Tree', description: 'Officials watering a newly planted sapling to mark a community greening event.', alt: 'Community plantation drive - watering new tree', category: 'project' },
  { src: '/assets/images/gallery/IMG_2986.jpeg', title: 'BuildX Team Moment', description: 'A quiet moment shared by BuildX team members during an office event.', alt: 'BuildX office - team moment', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2994.jpeg', title: 'Recognition Moment', description: 'BuildX team members marking a special recognition at the office.', alt: 'BuildX office - recognition moment', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_2996.jpeg', title: 'Office Celebration', description: 'The BuildX team coming together to celebrate a shared milestone.', alt: 'BuildX office - team celebration', category: 'volunteer' },
  { src: '/assets/images/gallery/IMG_3016.jpeg', title: 'Careful Watering', description: 'Watering a newly planted sapling to help it take root.', alt: 'Community plantation drive - careful watering of sapling', category: 'project' },
];

const allGalleryImages: GalleryImage[] = [...bangaloreGallery, ...gulbargaGallery, ...mysuruGallery, ...mumbaiGallery, ...communityGallery];

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'volunteers'>('projects');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = allGalleryImages.filter((img) => img.category === 'project');
  const volunteerImages = allGalleryImages.filter((img) => img.category === 'volunteer');

  const images = activeTab === 'projects' ? projectImages : volunteerImages;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  const renderImageCard = (image: GalleryImage, index: number) => (
    <ScrollReveal key={`${activeTab}-${index}`} delay={index * 0.05}>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer"
        onClick={() => openLightbox(index)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103713]/90 via-[#103713]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-end p-5">
          <h3 className="text-lg text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Cormorant, serif' }}>
            {image.title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed drop-shadow">
            {image.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <div className="relative pt-24 bg-[#E2DBD0]">
      {/* Hero Section */}
      <section className="py-20 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="rangoli" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-center mb-8 text-[#103713]" style={{ fontFamily: 'Cormorant, serif' }}>
              Gallery
            </h1>
            <div className="w-16 h-[1px] bg-[#628B35] mx-auto mb-12" />
            <p className="text-lg text-center leading-relaxed text-[#103713]/80">
              Moments from our journey—people planting hope, communities taking action,
              and nature reclaiming its rightful space.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-20 bg-[#E2DBD0] relative z-0 overflow-hidden">
        <BackgroundTexture variant="rangoli" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex justify-center gap-8 mb-12">
              <button
                onClick={() => setActiveTab('projects')}
                className={`relative pb-2 text-lg transition-colors font-medium ${
                  activeTab === 'projects' ? 'text-[#103713]' : 'text-[#628B35]/60 hover:text-[#103713]'
                }`}
              >
                Projects
                {activeTab === 'projects' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#628B35]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('volunteers')}
                className={`relative pb-2 text-lg transition-colors font-medium ${
                  activeTab === 'volunteers' ? 'text-[#103713]' : 'text-[#628B35]/60 hover:text-[#103713]'
                }`}
              >
                Volunteers
                {activeTab === 'volunteers' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#628B35]" />
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Gallery Grid — a single Masonry instance is mounted at a time (columns/gutter
              swap via JS resize listener), instead of mounting three breakpoint variants
              simultaneously, which used to make every image download three times. */}
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3 }}
            gutterBreakPoints={{ 0: '1rem', 768: '1.5rem' }}
          >
            <Masonry>
              {images.map((image, index) => renderImageCard(image, index))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-14 sm:px-16 md:px-20"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-3 text-white hover:text-[#628B35] transition-colors backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg"
              aria-label="Close lightbox"
            >
              <X size={22} className="sm:hidden" />
              <X size={28} className="hidden sm:block" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-1 sm:left-2 md:left-4 z-50 p-2 sm:p-3 md:p-4 text-white hover:text-[#628B35] transition-all backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} className="sm:hidden" />
              <ChevronLeft size={28} className="hidden sm:block" />
            </button>

            {/* Image Container with Glass Effect */}
            <motion.div
              key={currentImageIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full p-4 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full max-h-[65vh] object-contain rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <div className="text-center mt-4 px-4">
                <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  {images[currentImageIndex].title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">
                  {images[currentImageIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-1 sm:right-2 md:right-4 z-50 p-2 sm:p-3 md:p-4 text-white hover:text-[#628B35] transition-all backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={22} className="sm:hidden" />
              <ChevronRight size={28} className="hidden sm:block" />
            </button>

            {/* Image Counter with Glass Effect */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
