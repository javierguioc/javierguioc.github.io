export type Project = {
  title: string
  description: string
  codeUrl: string
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
    codeUrl: 'https://huggingface.co/spaces/JavierGuio/emotion_classifier_dashboard/tree/main',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/emotion_classifier_dashboard',
    thumbnail: '/thumbnails/emotion-classifier.svg',
    tags: ['NLP', 'Hugging Face', 'Demo'],
    year: new Date().getFullYear(),
  },
  {
    title: 'Attention Explorer',
    description:
      'Visualizes and analyzes attention mechanisms in autoregressive models (DistilGPT2) to understand how transformers process text. Shows causal attention patterns across layers and heads.',
    codeUrl: 'https://huggingface.co/spaces/JavierGuio/attention-explorer/tree/main',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/attention-explorer',
    thumbnail: '/thumbnails/attention-explorer.svg',
    tags: ['Transformers', 'Attention', 'Visualization'],
    year: new Date().getFullYear(),
  },
  {
    title: 'MultiNER Studio',
    description:
      'Interactive multilingual Named Entity Recognition with XLM-RoBERTa. Features model comparison, evaluation metrics, and cross-lingual transfer analysis across English, Spanish, German, French, and more.',
    codeUrl: 'https://huggingface.co/spaces/JavierGuio/MultiNER/tree/main',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/MultiNER',
    thumbnail: '/thumbnails/multiner.svg',
    tags: ['NER', 'Multilingual', 'XLM-RoBERTa'],
    year: new Date().getFullYear(),
  },
]





