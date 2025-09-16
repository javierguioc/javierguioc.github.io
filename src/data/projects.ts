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
  {
    title: 'Creative Text Generation Studio',
    description:
      'Interactive app demonstrating various text generation strategies using DistilGPT-2. Explore how different decoding strategies like greedy search, beam search, and nucleus sampling affect creativity vs. coherence in AI text output.',
    codeUrl: 'https://huggingface.co/spaces/JavierGuio/textGenerationStudio/tree/main',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/textGenerationStudio',
    thumbnail: '/thumbnails/text-generation.svg',
    tags: ['NLP', 'Text Generation', 'DistilGPT-2', 'Transformers'],
    year: new Date().getFullYear(),
  },
  {
    title: 'Summarizer Hub',
    description:
      'Comprehensive text summarization app featuring extractive (TF-IDF) and abstractive approaches with DistilBART, BART, and T5 models. Compare side-by-side results, adjust parameters, and analyze compression ratios with real-time metrics.',
    codeUrl: 'https://huggingface.co/spaces/JavierGuio/sumarizationHub/tree/main',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/sumarizationHub',
    thumbnail: '/thumbnails/summarizer-hub.svg',
    tags: ['NLP', 'Summarization', 'BART', 'T5', 'TF-IDF'],
    year: new Date().getFullYear(),
  },
  {
    title: 'Question Answering with Transformers',
    description:
      'Interactive AI-powered Question Answering demo using DistilBERT fine-tuned on SQuAD dataset. Features visual answer highlighting, confidence scoring, and robust error handling with a modern Gradio interface.',
    codeUrl: 'https://huggingface.co/spaces/JavierGuio/QA_Demo/tree/main',
    demoUrl: 'https://huggingface.co/spaces/JavierGuio/QA_Demo',
    thumbnail: '/thumbnails/question-answering.svg',
    tags: ['DistilBERT', 'Question Answering', 'SQuAD', 'Extractive NLP'],
    year: new Date().getFullYear(),
  },

]





