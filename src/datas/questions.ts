import { Question } from '../types/mbti';

export const questions: Question[] = [
  {
    id: 1,
    question: "당신은 이름 모를 세계에 떨어졌습니다! 여긴 어디지..?",
    options: [
      {text: "주변에 뭐가 있는지 확인하자", mbti: 'E'},
      {text: "일단 앉아서 상황을 정리하자", mbti: 'I'},
      {text: "누군가 없는지 소리를 질러보자", mbti: 'E'},
      {text: "조용히 주변을 관찰하며 정보를 수집하자", mbti: 'I'}
    ],
    mbtiDimension: 'EI'
  },
  {
    id: 2,
    question: "멀리서 도움을 구하는 소리가 들려옵니다!",
    options: [
      {text: "도움을 주기 전에 구체적으로 무슨 일인지 물어보자", mbti: 'S'},
      {text: "무언가 연관된 사건이 있을지도 몰라. 바로 가서 도와주자", mbti: 'N'},
      {text: "신중하게 판단하고 행동하자", mbti: 'S'},
      {text: "이건 분명히 흥미진진한 일이 될 거야!", mbti: 'N'}
    ],
    mbtiDimension: 'SN'
  },
  {
    id: 3,
    question: "여행을 시작하다 보니 작은 마을에 도착했습니다.",
    options: [
      {text: "마을 구조를 파악하고 계획적으로 돌아보자", mbti: 'J'},
      {text: "눈에 띄는 곳부터 즉흥적으로 둘러보자", mbti: 'P'},
      {text: "먼저 여관에 가서 숙소를 확보하자", mbti: 'J'},
      {text: "마음이 가는 대로 이곳저곳을 구경하자", mbti: 'P'}
    ],
    mbtiDimension: 'PJ'
  },
  {
    id: 4,
    question: "마을 주민이 산 너머 보물이 있다는 소문을 들려줍니다. 길은 두 갈래입니다!",
    options: [
      {text: "산길은 위험해 보여. 현실적인 선택을 하자", mbti: 'T'},
      {text: "모험이란 위험을 감수하는 거지. 가보자!", mbti: 'F'},
      {text: "논리적으로 안전한 길을 선택하자", mbti: 'T'},
      {text: "느낌이 오는 길을 따라가 보자", mbti: 'F'}
    ],
    mbtiDimension: 'TF'
  },
  {
    id: 5,
    question: "여정을 계속하다 보니 괴물이 길을 막고 있습니다!",
    options: [
      {text: "다른 모험가들과 협력해 이 상황을 해결하자", mbti: 'E'},
      {text: "조용히 괴물을 피해 우회하자", mbti: 'I'},
      {text: "괴물을 상대할 방법을 다른 사람에게 물어보자", mbti: 'E'},
      {text: "내가 해결할 수 있을지 먼저 혼자 고민해보자", mbti: 'I'}
    ],
    mbtiDimension: 'EI'
  },
  {
    id: 6,
    question: "동굴 입구에서 낡은 지도를 발견했습니다.",
    options: [
      {text: "지도를 자세히 분석하고 실제와 비교해보자", mbti: 'S'},
      {text: "이 지도에는 숨겨진 이야기가 있을 것 같아!", mbti: 'N'},
      {text: "지도에 있는 정보만 믿고 따라가자", mbti: 'S'},
      {text: "지도 속 숨은 의미를 상상하며 해석해보자", mbti: 'N'}
    ],
    mbtiDimension: 'SN'
  },
  {
    id: 7,
    question: "위기에 처한 여행자를 발견했습니다.",
    options: [
      {text: "왜 이런 상황에 빠졌는지 물어보자", mbti: 'T'},
      {text: "무조건 도와주는 게 우선이야", mbti: 'F'},
      {text: "문제를 논리적으로 해결할 방법을 찾아보자", mbti: 'T'},
      {text: "이 사람의 감정을 먼저 이해하고 공감해주자", mbti: 'F'}
    ],
    mbtiDimension: 'TF'
  },
  {
    id: 8,
    question: "여행 도중 마을 축제에 초대받았습니다.",
    options: [
      {text: "일정을 조율하고 시간을 활용하자", mbti: 'J'},
      {text: "마음 가는 대로 축제를 즐기자", mbti: 'P'},
      {text: "어떤 이벤트가 있는지 계획적으로 살펴보자", mbti: 'J'},
      {text: "즉흥적으로 참여하면서 재미를 찾아보자", mbti: 'P'}
    ],
    mbtiDimension: 'PJ'
  },
  {
    id: 9,
    question: "보물 상자가 보이지만, 주변에 덫이 있는 것 같습니다!",
    options: [
      {text: "눈에 보이는 정보를 바탕으로 안전하게 접근하자", mbti: 'S'},
      {text: "덫의 작동 방식을 상상하며 해결해보자", mbti: 'N'},
      {text: "확실한 증거를 기반으로 움직이자", mbti: 'S'},
      {text: "상황의 전체 그림을 보고 판단하자", mbti: 'N'}
    ],
    mbtiDimension: 'SN'
  },

  {
    id: 10,
    question: "동료와 함께 마지막 보물 분배를 논의합니다!",
    options: [
      {text: "공정하고 논리적인 기준으로 나누자", mbti: 'T'},
      {text: "동료들의 기분을 고려해 나누자", mbti: 'F'},
      {text: "모두에게 이익이 되는 방법을 찾아보자", mbti: 'T'},
      {text: "감정적으로 상처받지 않도록 배려하며 나누자", mbti: 'F'}
    ],
    mbtiDimension: 'TF'
  },

  {
    id: 11,
    question: "모험의 끝에서 동료와 작별해야 할 시간입니다.",
    options: [
      {text: "계획적으로 마무리하며 작별 인사를 준비하자", mbti: 'J'},
      {text: "마지막 순간은 자연스럽게 흘러가는 대로 두자", mbti: 'P'},
      {text: "정리할 것들을 목록으로 만들어 놓자", mbti: 'J'},
      {text: "즉흥적으로 마지막 시간을 즐기자", mbti: 'P'}
    ],
    mbtiDimension: 'PJ'
  },

  {
    id: 12,
    question: "이세계에서의 모험이 끝나고, 원래 세계로 돌아갈 시간이 왔습니다.",
    options: [
      {text: "모든 사람에게 작별을 고하고 떠나자", mbti: 'E'},
      {text: "조용히 떠나며 내 추억 속에 간직하자", mbti: 'I'},
      {text: "돌아가기 전에 모두와 함께 마지막을 축하하자", mbti: 'E'},
      {text: "혼자 떠나는 시간을 온전히 즐기자", mbti: 'I'}
    ],
    mbtiDimension: 'EI'
  },

];