import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Bot, Brain, Lightbulb, Pencil, Users, LineChart, BarChart3, CheckCircle, BookOpen, Target, Sparkles, ArrowRight } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

interface Course {
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
  topicsCovered: string[];
  finalObjective: string;
  practicalInsights: string[];
  price: string;
}

function CourseCard({ course }: { course: Course }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollment = (data: { name: string; email: string; courseType: string }) => {
    // Here you would typically send this data to your backend
    console.log('Enrollment data:', data);
    // You could also show a success message to the user
    alert('Thank you for enrolling! We will contact you shortly.');
  };

  return (
    <div className="card bg-base-200 hover:shadow-xl transition-all duration-300">
      <div className="card-body p-6">
        {/* Course Header */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <div className="text-primary">{course.icon}</div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
            <div className="badge badge-primary badge-lg">{course.price}</div>
          </div>
        </div>

        {/* Course Description */}
        <p className="text-base-content/70 mt-4">{course.shortDescription}</p>

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-2 mt-4">
          {course.bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-base-content/80">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Enroll Now Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary w-full mt-6 gap-2"
        >
          Enroll Now
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Enrollment Modal */}
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseTitle={course.title}
          onSubmit={handleEnrollment}
        />

        {/* Expanded Content */}
        <div className={`mt-6 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
          <div className="pt-6 border-t border-base-300 space-y-6">
            {/* Course Overview */}
            <div className="bg-base-100 rounded-xl p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                Course Overview
              </h4>
              <p className="text-base-content/70 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Topics Covered */}
            <div className="bg-base-100 rounded-xl p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
                <Brain className="w-5 h-5 text-primary" />
                Topics Covered
              </h4>
              <div className="grid gap-3">
                {course.topicsCovered.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">{index + 1}</span>
                    </div>
                    <p className="text-base-content/70">{topic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Objective */}
            <div className="bg-base-100 rounded-xl p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold mb-3">
                <Target className="w-5 h-5 text-primary" />
                Final Objective
              </h4>
              <p className="text-base-content/70 leading-relaxed">
                {course.finalObjective}
              </p>
            </div>

            {/* Practical Applications */}
            <div className="bg-base-100 rounded-xl p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                Practical Applications
              </h4>
              <div className="grid gap-3">
                {course.practicalInsights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-base-content/70">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className="btn btn-ghost gap-2 mt-6 w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>Show Less <ChevronUp className="w-5 h-5" /></>
          ) : (
            <>View Course Details <ChevronDown className="w-5 h-5" /></>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState<'individual' | 'organization'>('individual');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const tabParam = new URLSearchParams(window.location.search).get('tab');
      if (hash === '#courses' && tabParam) {
        setActiveTab(tabParam as 'individual' | 'organization');
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const individualCourses: Course[] = [
    {
      title: 'AI for Automation & Productivity',
      icon: <Bot className="w-8 h-8" />,
      shortDescription: 'Learn how AI can automate repetitive tasks, optimize workflows, and improve efficiency in both personal and professional life.',
      fullDescription: 'This course introduces AI-powered tools designed to simplify daily operations and increase overall productivity.',
      bulletPoints: [
        'AI task automation & workflow optimization',
        'AI-powered assistants for scheduling & email',
        'AI-driven data processing & decision-making'
      ],
      topicsCovered: [
        'Introduction to AI Automation: Understanding AI and its applications in automating daily tasks',
        'AI-Powered Task Management Tools: Exploring tools like Notion AI, Trello, and ClickUp for streamlining workflows',
        'AI Assistants for Scheduling and Emails: Leveraging AI tools such as Calendly and AI-driven email responders to save time',
        'AI for Data Processing and Decision Support: Using AI-driven analytics for better decision-making and task prioritization'
      ],
      finalObjective: 'Implement AI-driven automation strategies to enhance workflow efficiency.',
      practicalInsights: [
        'Use AI chatbots like ChatGPT to automate customer inquiries',
        'Optimize work schedules with AI-powered task planners to balance workload effectively',
        'Utilize AI transcription tools like Otter.ai to summarize meetings and extract key points'
      ],
      price: '99 CHF'
    },
    {
      title: 'AI for Personal Learning & Skills Building',
      icon: <Brain className="w-8 h-8" />,
      shortDescription: 'Explore AI-powered tools and techniques to enhance learning, develop new skills, and create personalized study plans.',
      fullDescription: 'This course explores AI-powered tools and techniques to enhance learning, develop new skills, and create personalized study plans. AI can support learners in coding, language acquisition, research, and more.',
      bulletPoints: [
        'AI-powered research & learning tools',
        'Adaptive AI tutors for skills development',
        'AI-driven writing & coding assistants'
      ],
      topicsCovered: [
        'AI as a Personal Tutor: How AI tools like Duolingo, Coursera AI, and Khan Academy provide customized learning experiences',
        'AI in Research & Knowledge Curation: Using AI-powered tools such as Elicit and Perplexity AI for research and content summarization',
        'AI for Learning Optimization: Adaptive learning platforms that analyze user progress and adjust content accordingly',
        'AI-Powered Writing and Coding Assistants: Tools like Grammarly, Hemingway, and GitHub Copilot for improving writing and coding skills'
      ],
      finalObjective: 'Develop a structured AI-powered learning plan to enhance skills efficiently.',
      practicalInsights: [
        'Use AI-powered flashcards and spaced repetition software like Anki to retain information effectively',
        'Enhance writing skills using AI grammar and style checkers such as Grammarly',
        'Learn coding with AI-based interactive platforms like Codeium or ChatGPT for debugging assistance'
      ],
      price: '99 CHF'
    },
    {
      title: 'AI for Content Creation & Digital Presence',
      icon: <Pencil className="w-8 h-8" />,
      shortDescription: 'Leverage AI to streamline content creation, optimize social media presence, and boost engagement.',
      fullDescription: 'This course will help you leverage AI to streamline content creation, optimize social media presence, and boost engagement. AI can assist in video editing, blog writing, SEO, and social media automation.',
      bulletPoints: [
        'AI-powered content automation & SEO',
        'AI-driven video & image editing tools',
        'Social media engagement optimization'
      ],
      topicsCovered: [
        'AI for Social Media Management: Tools like Buffer and Hootsuite AI to schedule and analyze social media performance',
        'AI for Video & Image Editing: Using AI-powered platforms like RunwayML and Canva AI to create high-quality visual content',
        'AI for Blog and Copywriting Automation: AI writing assistants such as Jasper AI, Copy.ai, and ChatGPT for generating articles and marketing copy',
        'AI for SEO Optimization: Leveraging AI-based SEO tools like SurferSEO and Clearscope to improve content ranking'
      ],
      finalObjective: 'Implement AI-driven content creation strategies to enhance digital presence and engagement.',
      practicalInsights: [
        'Automate social media posting with AI scheduling tools',
        'Use AI to generate blog post ideas and drafts for content marketing',
        'Enhance video and image quality using AI-driven editing tools'
      ],
      price: '99 CHF'
    }
  ];

  const organizationCourses: Course[] = [
    {
      title: 'AI for Workflow Automation & Team Productivity',
      icon: <Users className="w-8 h-8" />,
      shortDescription: 'Leverage AI-driven solutions for automating workflows, improving communication, and enhancing team productivity.',
      fullDescription: 'This course provides organizations with AI-driven solutions for automating workflows, improving communication, and enhancing team productivity.',
      bulletPoints: [
        'AI-powered for HR, employee management & project management',
        'AI Chatbots for Customer Service',
        'AI for Sales Forecasting'
      ],
      topicsCovered: [
        'AI-Powered Project Management: Tools like Asana AI, Trello AI, and Notion AI for task prioritization and automated workflows',
        'AI Chatbots for Customer Service: Deploying AI assistants like Drift and Intercom to handle customer interactions',
        'AI for HR and Employee Management: Automating recruitment, employee engagement analysis, and HR operations using tools like HireVue and Lattice',
        'AI for Sales Forecasting: Utilizing AI to predict sales trends and improve revenue forecasting through machine learning models'
      ],
      finalObjective: 'Automate repetitive business tasks and enhance overall team productivity with AI-driven solutions.',
      practicalInsights: [
        'Deploy AI chatbots for handling HR queries and onboarding new employees',
        'Use AI to streamline internal communication and collaboration via tools like Microsoft Viva and Slack AI'
      ],
      price: '99 CHF'
    },
    {
      title: 'AI for Smarter Decision-Making & Data Insight',
      icon: <LineChart className="w-8 h-8" />,
      shortDescription: 'Learn how AI can analyze vast amounts of data, extract meaningful insights, and improve decision-making for businesses.',
      fullDescription: 'This course learns how AI can be used to analyze vast amounts of data, extract meaningful insights, and improve decision-making for businesses.',
      bulletPoints: [
        'AI-powered analytics for business strategy',
        'AI in risk management, forecasting & consumer insights',
        'Predictive Analytics & Forecasting'
      ],
      topicsCovered: [
        'AI-Powered Data Analytics: Introduction to AI-driven analytics tools like Tableau AI, Google Looker, and Power BI',
        'Predictive Analytics & Forecasting: How AI models predict market trends and business opportunities',
        'AI for Market & Consumer Analysis: Leveraging AI to analyze customer sentiment and trends using NLP-based tools',
        'AI in Risk Management: Using AI to identify potential risks and automate fraud detection'
      ],
      finalObjective: 'Utilize AI-generated insights to make data-driven business decisions and optimize strategies.',
      practicalInsights: [
        'Use AI tools to track customer sentiment and analyze social media feedback',
        'Optimize supply chain management with AI-based demand forecasting'
      ],
      price: '99 CHF'
    },
    {
      title: 'AI for Content Marketing & Customer Engagement',
      icon: <BarChart3 className="w-8 h-8" />,
      shortDescription: 'Focus on AI applications in marketing, from automated email campaigns to AI-driven customer personalization strategies.',
      fullDescription: 'This course focuses on AI applications in marketing, from automated email campaigns to AI-driven customer personalization strategies.',
      bulletPoints: [
        'AI-driven email automation & lead nurturing',
        'AI-powered chatbots for customer service',
        'AI-based personalized product recommendations'
      ],
      topicsCovered: [
        'AI for Email Marketing Automation: Using AI-based email marketing platforms like Mailchimp AI and HubSpot AI',
        'AI Chatbots for Lead Nurturing: Implementing AI chatbots to engage and convert leads',
        'AI for Personalized Product Recommendations: Leveraging AI-powered recommendation engines like Amazon Personalize',
        'AI in Social Media Ad Targeting: AI-driven advertising strategies for improving customer engagement and campaign performance'
      ],
      finalObjective: 'Increase customer engagement and optimize marketing efforts with AI-powered solutions.',
      practicalInsights: [
        'Personalize email campaigns with AI-driven customer segmentation',
        'Automate customer support using AI chatbots to enhance user experience',
        'Optimize ad campaigns with AI tools that analyze performance and suggest adjustments'
      ],
      price: '99 CHF'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Available Courses</h2>
          <p className="text-xl text-base-content/70 mb-8">
            Comprehensive AI training programs tailored for both individuals and organizations
          </p>

          {/* Tab Switcher */}
          <div className="tabs tabs-boxed bg-base-200 p-1 inline-flex gap-1">
            <button
              data-tab="individual"
              className={`tab ${activeTab === 'individual' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('individual')}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              For Individuals
            </button>
            <button
              data-tab="organization"
              className={`tab ${activeTab === 'organization' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('organization')}
            >
              <Users className="w-5 h-5 mr-2" />
              For Organizations
            </button>
          </div>
        </div>

        <div className="px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'individual'
              ? individualCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))
              : organizationCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}