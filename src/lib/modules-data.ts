
// This file centralizes module data to ensure consistency.
import * as ModuleContent from '@/lib/modules-content';

export interface ModuleData {
  title: string;
  paragraphs: any[];
  audioPath?: string;
}

export const modulesData: { [key: string]: ModuleData } = {
  'strategic-communication': {
    title: "Strategic Communication",
    paragraphs: ModuleContent.module_2_2_content,
    audioPath: '/uploads/audio/module_2_2.wav',
  },
  'executive-leadership': {
    title: "Executive Leadership",
    paragraphs: ModuleContent.module_5_1_GM_content,
    audioPath: '/uploads/audio/module_5_1_GM.wav',
  },
  'ai-for-business': {
    title: "AI for Business",
    paragraphs: ModuleContent.ai_module_1_foundations_content,
    audioPath: '/uploads/audio/ai_module_1.wav',
  },
  'intro-to-business-management': {
    title: "Introduction to Business & Management Principles",
    paragraphs: ModuleContent.module_1_1_content,
    audioPath: '/uploads/audio/module_1_1.wav',
  },
  'fundamentals-of-professional-communication': {
    title: "Fundamentals of Professional Communication",
    paragraphs: ModuleContent.module_1_2_content,
    audioPath: '/uploads/audio/module_1_2.wav',
  },
  'agile-methodologies-frameworks': {
    title: "Agile Methodologies & Frameworks",
    paragraphs: ModuleContent.module_3_1_AB_content,
    audioPath: '/uploads/audio/module_3_1_AB.wav',
  },
  'product-ownership-backlog-management': {
    title: "Product Ownership & Backlog Management",
    paragraphs: ModuleContent.module_3_2_AB_content,
    audioPath: '/uploads/audio/module_3_2_AB.wav',
  },
  'foundations-of-autonomous-ai-agents': {
    title: "Foundations of Autonomous AI Agents",
    paragraphs: ModuleContent.ai_module_1_foundations_content,
     audioPath: '/uploads/audio/ai_module_1.wav',
  },
  'designing-agentic-architectures': {
    title: "Designing Agentic Architectures",
    paragraphs: ModuleContent.ai_module_2_architectures_content,
     audioPath: '/uploads/audio/ai_module_2.wav',
  },
};
