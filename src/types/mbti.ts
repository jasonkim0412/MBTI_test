export interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    mbti: MBTI;
  }>;
  mbtiDimension: MBTIDimension;
}

export interface Result {
  title: string,
  en_title: string,
  description: string,
  traits: string[]
}

export type MBTIDimension = 'EI' | 'SN' | 'TF' | 'PJ';
export type MBTI = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'P' | 'J';
export type MBTIType = 'INTJ' | 'INTP' | 'INFJ' | 'INFP' | 'ISTJ' | 'ISTP' | 'ISFJ' | 'ISFP' |
    'ENTJ' | 'ENTP' | 'ENFJ' | 'ENFP' | 'ESTJ' | 'ESTP' | 'ESFJ' | 'ESFP';
