export interface DemoCard {
  id: string;
  title: string;
  podcastDate: string;
  colors: {
    from: string;
    to: string;
    accent: string;
  };
  audioFrequency: number; // For synth generative audio pitch
  audioWaveType: OscillatorType;
}

export interface IntegrationApp {
  id: string;
  name: string;
  category: string;
  iconName: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}
