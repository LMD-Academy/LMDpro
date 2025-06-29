// This file centralizes module data to ensure consistency.
import * as ModuleContent from '@/lib/modules-content';

export interface ModuleData {
  title: string;
  paragraphs: any[];
}

export const modulesData: { [key: string]: ModuleData } = {
  'strategic-communication': {
    title: "Strategic Communication",
    paragraphs: ModuleContent.module_2_2_content,
  },
  'executive-leadership': {
    title: "Executive Leadership",
    paragraphs: ModuleContent.module_5_1_GM_content,
  },
  'ai-for-business': {
    title: "AI for Business",
    paragraphs: ModuleContent.ai_module_1_foundations_content,
  },
  'intro-to-business-management': {
    title: "Introduction to Business & Management Principles",
    paragraphs: ModuleContent.module_1_1_content,
  },
  'fundamentals-of-professional-communication': {
    title: "Fundamentals of Professional Communication",
    paragraphs: ModuleContent.module_1_2_content,
  },
  'agile-methodologies-frameworks': {
    title: "Agile Methodologies & Frameworks",
    paragraphs: ModuleContent.module_3_1_AB_content,
  },
  'product-ownership-backlog-management': {
    title: "Product Ownership & Backlog Management",
    paragraphs: ModuleContent.module_3_2_AB_content,
  },
  'foundations-of-autonomous-ai-agents': {
    title: "Foundations of Autonomous AI Agents",
    paragraphs: ModuleContent.ai_module_1_foundations_content,
  },
  'designing-agentic-architectures': {
    title: "Designing Agentic Architectures",
    paragraphs: ModuleContent.ai_module_2_architectures_content,
  },
};
