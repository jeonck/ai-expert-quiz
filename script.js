document.addEventListener('DOMContentLoaded', function() {
    // 문제 데이터
    const questions = [
        {
            question: "지도 학습(Supervised Learning)과 비지도 학습(Unsupervised Learning)의 주요 차이는?",
            options: [
                "입력 데이터의 유무",
                "정답 레이블의 유무",
                "학습 방식의 유무",
                "모델의 복잡성"
            ],
            correct: 1
        },
        {
            question: "비지도 학습(Unsupervised Learning)의 목표는?",
            options: [
                "데이터 간의 상관 관계를 찾는 것",
                "모델의 정확도를 최대화하는 것",
                "정답 레이블을 예측하는 것",
                "행동에 대한 보상을 최적화하는 것"
            ],
            correct: 0
        },
        {
            question: "딥 러닝에서의 역전파 (Backpropagation) 알고리즘 수행하는 것은?",
            options: [
                "가중치 초기화",
                "손실 함수 최적화",
                "신경망 학습 파라미터 업데이트",
                "데이터 정규화"
            ],
            correct: 2
        },
        {
            question: "분류 모델의 정확도를 측정하는 데 사용되는 지표는?",
            options: [
                "R 제곱",
                "F1 점수",
                "평균 절대 오차",
                "군집 계수"
            ],
            correct: 1
        },
        {
            question: "회귀 분석에서 오차는?",
            options: [
                "실제 값과 예측 값의 차이",
                "회귀 계수의 합",
                "설명 변수 간의 상관 관계",
                "표준 편차"
            ],
            correct: 0
        },
        {
            question: "K-평균 군집화에서 K는?",
            options: [
                "군집의 수",
                "데이터의 차원",
                "군집의 중심",
                "데이터의 크기"
            ],
            correct: 0
        },
        {
            question: "자연어 처리에서 사용되는 텍스트 전처리 방법 중 하나는?",
            options: [
                "음성 신호 변환",
                "형태소 분석",
                "이미지 필터링",
                "데이터 정규화"
            ],
            correct: 1
        },
        {
            question: "텍스트 분류에서 \"스팸 필터링\"의 목적은?",
            options: [
                "텍스트의 감정 분석",
                "텍스트의 언어 번역",
                "텍스트의 주제 분류",
                "부적절한 텍스트를 식별하여 제거"
            ],
            correct: 3
        },
        {
            question: "감정분석에서 \"긍정\"과 \"부정\"을 분류하기 위해 주로 사용되는 기법은?",
            options: [
                "회귀 분석",
                "군집화",
                "이진분류",
                "주성분 분석"
            ],
            correct: 2
        },
        {
            question: "컴퓨터 비전에서 \"컨볼루션 신경망(CNN)\"에 주로 활용되는 작업은?",
            options: [
                "텍스트 요약",
                "음성 인식",
                "이미지 분류 및 객체 검출",
                "주가 예측"
            ],
            correct: 2
        },
        {
            question: "데이터 전처리의 주요 목적은?",
            options: [
                "데이터의 크기를 확장시키기 위함",
                "데이터의 복잡성을 높이기 위함",
                "데이터의 품질을 향상시키기 위함",
                "데이터의 무결성을 저해하기 위함"
            ],
            correct: 2
        },
        {
            question: "데이터 시각화의 주요 목적은?",
            options: [
                "데이터의 크기를 줄이기 위함",
                "데이터의 복잡성을 감소시키기 위함",
                "데이터의 특징을 이해하고 전달하기 위함",
                "데이터의 보안을 강화하기 위함"
            ],
            correct: 2
        },
        {
            question: "ROC곡선(Receiver Operating Characteristic Curve)이 나타내는 것은?",
            options: [
                "모델의 정확도를 나타냄",
                "분류 모델의 성능을 시각적으로 평가하는 도구",
                "모델의 예측과 실제 값 사이의 차이를 보여줌",
                "모델의 학습 속도를 나타냄"
            ],
            correct: 1
        },
        {
            question: "다음 중 대량의 다양한 데이터를 분석하고 이해하는 데에 주로 활용되는 것은?",
            options: [
                "가상 현실",
                "빅데이터",
                "강화 학습",
                "블록체인"
            ],
            correct: 1
        },
        {
            question: "의료 분야에서 인공지능이 사용되는 예측 모델이 주로 활용하는 데이터는?",
            options: [
                "소셜 미디어 데이터",
                "환자의 유전자 정보",
                "영화 리뷰 데이터",
                "음악 재생 기록"
            ],
            correct: 1
        },
        {
            question: "금융 분야에서의 데이터 분석과 예측을 통해 주로 수행되는 작업은?",
            options: [
                "은행 로비에서의 고객 상담",
                "신용카드 발급 심사",
                "주식 시장에서의 주식 매매",
                "은행 계좌 개설 절차"
            ],
            correct: 1
        },
        {
            question: "스마트 시티에서 주로 사용되는 기술 중, 다양한 장치와 시스템을 연결하여 데이터를 수집하고 분석하는 기술은?",
            options: [
                "가상 현실",
                "사물인터넷 (IoT)",
                "블록체인",
                "양자 컴퓨팅"
            ],
            correct: 1
        },
        {
            question: "인공지능 기술 중 사이버 보안에 활용되는 주요 기술은?",
            options: [
                "가짜 지문 생성",
                "머신러닝 기반 위협 탐지",
                "가상 현실 해킹",
                "블록체인 기술"
            ],
            correct: 1
        },
        {
            question: "데이터 수집의 효과를 평가하고 보장하기 위해 데이터의 정확성과 일관성을 평가하는 과정은?",
            options: [
                "데이터 품질 평가",
                "라벨링 평가",
                "수집 도구 평가",
                "플랫폼 평가"
            ],
            correct: 0
        },
        {
            question: "인공지능의 윤리와 관련된 국제적인 가이드라인을 제공하는 단체는?",
            options: [
                "UNESCO",
                "IEEE",
                "ACM",
                "NASA"
            ],
            correct: 0
        },
        {
            question: "미래의 인공지능 전문가로서 가장 중요한 역량은?",
            options: [
                "오래된 기술에 대한 전문 지식",
                "단일 분야에서의 깊은 전문성",
                "윤리적 이해와 다양한 분야에 대한 이해",
                "높은 수학적 능력"
            ],
            correct: 2
        }
    ];

    // DOM 요소
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const questionNumberElement = document.getElementById('question-number');
    const progressElement = document.getElementById('progress');
    const progressTextElement = document.getElementById('progressText');

    // 상태 변수
    let currentQuestion = 0;
    let selectedOption = null;
    let userAnswers = new Array(questions.length).fill(null);

    // 문제 표시 함수
    function displayQuestion() {
        const question = questions[currentQuestion];
        questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
        questionNumberElement.textContent = `${currentQuestion + 1}/${questions.length}`;
        
        // 진행률 업데이트
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressElement.style.width = `${progress}%`;
        progressTextElement.textContent = `${currentQuestion + 1}/${questions.length}`;
        
        // 선택 옵션 초기화
        selectedOption = null;
        
        // 옵션 표시
        optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            // 이전에 선택된 답이 있다면 표시
            if (userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] === index) {
                optionElement.classList.add('selected');
                selectedOption = index;
            }
            
            optionElement.addEventListener('click', () => {
                // 이미 확인된 문제일 경우 정답만 표시
                if (userAnswers[currentQuestion] !== null) return;
                
                // 선택된 옵션 초기화
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                optionElement.classList.add('selected');
                selectedOption = index;
            });
            
            optionsElement.appendChild(optionElement);
        });
        
        // 이전/다음 버튼 상태 업데이트
        prevBtn.style.display = currentQuestion > 0 ? 'inline-block' : 'none';
        nextBtn.style.display = currentQuestion < questions.length - 1 ? 'inline-block' : 'none';
        
        // 정답 확인 버튼 상태 업데이트
        if (userAnswers[currentQuestion] !== null) {
            // 정답이 이미 선택된 경우, 정답 표시
            const correctIndex = questions[currentQuestion].correct;
            const optionElements = document.querySelectorAll('.option');
            optionElements.forEach((option, index) => {
                option.classList.remove('selected');
                
                if (index === userAnswers[currentQuestion]) {
                    if (index === correctIndex) {
                        option.classList.add('correct');
                    } else {
                        option.classList.add('incorrect');
                    }
                }
                
                if (index === correctIndex) {
                    option.classList.add('correct');
                }
            });
            checkBtn.textContent = '정답 확인';
            checkBtn.disabled = true;
        } else {
            checkBtn.textContent = '정답 확인';
            checkBtn.disabled = false;
        }
    }

    // 정답 확인 함수
    function checkAnswer() {
        if (selectedOption === null) {
            alert('정답을 선택해주세요.');
            return;
        }
        
        const correctIndex = questions[currentQuestion].correct;
        userAnswers[currentQuestion] = selectedOption;
        
        // 모든 옵션에 대한 상태 업데이트
        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach((option, index) => {
            option.classList.remove('selected');
            
            if (index === selectedOption) {
                if (index === correctIndex) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            }
            
            if (index === correctIndex) {
                option.classList.add('correct');
            }
        });
        
        // 정답 확인 버튼 텍스트 변경
        checkBtn.textContent = '정답 확인됨';
        checkBtn.disabled = true;
    }

    // 다음 문제로 이동
    function goToNextQuestion() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        }
    }

    // 이전 문제로 이동
    function goToPrevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
        }
    }

    // 이벤트 리스너
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', goToNextQuestion);
    prevBtn.addEventListener('click', goToPrevQuestion);

    // 초기화
    displayQuestion();
});