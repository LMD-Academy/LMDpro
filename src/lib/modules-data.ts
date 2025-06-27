
// This file centralizes module data to ensure consistency.
import * as ModuleContent from '@/lib/modules-content';

export const modulesData: { [key: string]: { title: string; audioSrc?: string; paragraphs: any[] } } = {
  'strategic-communication': {
    title: "Strategic Communication",
    audioSrc: "/uploads/audio/module_2_2_content.mp3", 
    paragraphs: ModuleContent.module_2_2_content
  },
  'executive-leadership': {
    title: "Executive Leadership",
    audioSrc: "/uploads/audio/module_5_1_GM_content.mp3", 
    paragraphs: ModuleContent.module_5_1_GM_content
  },
  'ai-for-business': {
    title: "AI for Business",
    audioSrc: "/uploads/audio/ai_module_1_foundations_content.mp3", 
    paragraphs: ModuleContent.ai_module_1_foundations_content
  },
  'intro-to-business-management': {
    title: "Introduction to Business & Management Principles",
    audioSrc: "/uploads/audio/module_1_1_content.mp3",
    paragraphs: ModuleContent.module_1_1_content
  },
  'fundamentals-of-professional-communication': {
    title: "Fundamentals of Professional Communication",
    audioSrc: "/uploads/audio/module_1_2_content.mp3",
    paragraphs: ModuleContent.module_1_2_content
  },
  'agile-methodologies-frameworks': {
    title: "Agile Methodologies & Frameworks",
    audioSrc: "/uploads/audio/module_3_1_AB_content.mp3",
    paragraphs: ModuleContent.module_3_1_AB_content
  },
  'product-ownership-backlog-management': {
    title: "Product Ownership & Backlog Management",
    audioSrc: "/uploads/audio/module_3_2_AB_content.mp3",
    paragraphs: ModuleContent.module_3_2_AB_content
  },
  'foundations-of-autonomous-ai-agents': {
    title: "Foundations of Autonomous AI Agents",
    audioSrc: "/uploads/audio/ai_module_1_foundations_content.mp3",
    paragraphs: ModuleContent.ai_module_1_foundations_content
  },
  'designing-agentic-architectures': {
    title: "Designing Agentic Architectures",
    audioSrc: "/uploads/audio/ai_module_2_architectures_content.mp3",
    paragraphs: ModuleContent.ai_module_2_architectures_content
  },
};
