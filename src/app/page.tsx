"use client";

import ReactLenis from "lenis/react";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb, Briefcase, BarChart3, ShieldCheck } from "lucide-react";

export default function BusinessCoachTemplatePage() {
    const navItems = [
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="EXCELIA"
                    button={{ text: "Consultation", href: "#contact" }}
                />
                <HeroSplitDualMedia
                    background={{ variant: "radial-gradient" }}
                    tag="Sustainable Excellence"
                    tagIcon={Sparkles}
                    title="Empowering People and Organizations Toward Sustainable Excellence"
                    description="Advanced solutions in training, consulting, leadership development, and project management designed to drive innovation and high-performance growth."
                    mediaItems={[
                        { imageSrc: "http://img.b2bpic.net/free-photo/curious-mature-businessman-pointing-finger-flip-chart-presentation_23-2147923346.jpg", imageAlt: "Executive leadership meeting" },
                        { imageSrc: "http://img.b2bpic.net/free-photo/car-dealership-salesman-asking-customers-questions_482257-118237.jpg", imageAlt: "Professional strategy development" },
                    ]}
                    rating={5}
                    ratingText="Trusted by Industry Leaders"
                    buttons={[
                        { text: "Book a Consultation", href: "#contact" },
                        { text: "Explore Programs", href: "#services" },
                    ]}
                    mediaAnimation="slide-up"
                />
                <FeatureCardTwentyFive
                    tag="Our Services"
                    tagIcon={Target}
                    title="Driving Strategic Innovation"
                    description="Holistic advisory and development services tailored to elevate corporate potential and operational efficiency."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        { title: "Professional Training", description: "High-impact corporate training focused on modern skills and leadership agility.", icon: Users, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/row-business-people-using-computers-office-employees-different-ages-typing-laptop-keyboards_74855-8177.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/women-discussing-business-desk_23-2149332995.jpg" }] },
                        { title: "Management Consulting", description: "Strategic advisory services to solve complex business challenges and drive performance.", icon: BarChart3, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-working-together_23-2149145155.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/employees-working-with-laptop_1098-792.jpg" }] },
                        { title: "Project Management", description: "End-to-end PMO solutions ensuring operational excellence and strategic delivery.", icon: Briefcase, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/person-talking-colleagues-video-call-communication-using-smartphone-business-meeting-businessman-holding-mobile-phone-online-conference-with-workmates-corporate-office_482257-28475.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-business-team-working_23-2149153843.jpg" }] },
                        { title: "Governance & Compliance", description: "Strengthening organizational integrity through robust frameworks and regulatory alignment.", icon: ShieldCheck, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/crystal-prism-with-long-shadow-yellow-background_23-2147948758.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/focused-project-manager-showing-presentation-laptop-colleague-office-copy-space-teamwork-communication-concept_74855-11731.jpg" }] },
                    ]}
                />
                <TestimonialCardSixteen
                    tag="Client Success"
                    title="Measurable Impact"
                    description="Proven results across diverse sectors, fostering growth and long-term organizational value."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    testimonials={[
                        { id: "1", name: "Dr. Khalid Al-Mansour", role: "CEO", company: "Global Tech Solutions", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg" },
                        { id: "2", name: "Sarah Jennings", role: "Director of Strategy", company: "Innovate Partners", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg" },
                    ]}
                    kpiItems={[
                        { value: "500+", label: "Corporate Projects" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "20+", label: "Years Expertise" },
                    ]}
                />
                <TeamCardTen
                    title="Our Leadership Experts"
                    tag="Executive Expertise"
                    membersAnimation="slide-up"
                    memberVariant="card"
                    useInvertedBackground={false}
                    members={[
                        { id: "1", name: "Ahmad Ibrahim", imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-mature-businessman-using-digital-tablet-restaurant_23-2147955278.jpg" },
                        { id: "2", name: "Elena Rossi", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg" },
                    ]}
                />
                <FaqSplitMedia
                    tag="Insights"
                    title="Frequently Asked Questions"
                    description="Detailed answers regarding our consulting methodology and training programs."
                    textboxLayout="default"
                    faqsAnimation="slide-up"
                    mediaAnimation="slide-up"
                    useInvertedBackground={false}
                    imageSrc="http://img.b2bpic.net/free-photo/couple-focused-business-colleagues-watching-content-computer-monitor-holding-pen-mouse-business-communication-teamwork-concept_74855-11648.jpg"
                    mediaPosition="right"
                    faqs={[
                        { id: "1", title: "How do we ensure measurable impact?", content: "We utilize data-driven methodologies and clear KPIs defined at the project inception to track progress and success." },
                        { id: "2", title: "Do you provide custom training programs?", content: "Yes, all our training programs are tailored to your organizational needs, industry challenges, and strategic objectives." },
                    ]}
                />
                <ContactText
                    text="Ready to transform your organization? Start your journey to excellence."
                    background={{ variant: "gradient-bars" }}
                    useInvertedBackground={true}
                    buttons={[{ text: "Request a Meeting", href: "#" }]}
                />
                <FooterLogoEmphasis
                    logoText="EXCELIA"
                    columns={[
                        { items: [{ label: "About", href: "#" }, { label: "Services", href: "#" }] },
                        { items: [{ label: "Contact", href: "#contact" }, { label: "Privacy", href: "#" }] },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}