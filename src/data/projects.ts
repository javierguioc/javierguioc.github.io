export type Project = {
  title: string
  description: string
  githubUrl: string
  demoUrl?: string
  thumbnail?: string
  tags?: string[]
  year?: number
}

export const projects: Project[] = [
  {
    title: 'Emotion Classifier Dashboard',
    description:
      'Interactive dashboard that classifies emotions from text using a fine-tuned model. Built with Hugging Face Spaces.',
    githubUrl: 'https://github.com/javierguioc',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/emotion_classifier_dashboard',
    tags: ['NLP', 'Hugging Face', 'Demo'],
    year: new Date().getFullYear(),
  },
]


