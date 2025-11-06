document.addEventListener('DOMContentLoaded', function() {
    // 문제 데이터
    const quizData = {
        ai: {
            title: "인공지능(AI)전문가 1급",
            questions: [
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
            ]
        },
        bigdata: {
            title: "빅데이터전문가 1급",
            questions: [
                {
                    question: "다음중 정량적인 데이터가 아닌 것은?",
                    options: [
                        "몸무게",
                        "가속도",
                        "계측량",
                        "행복감"
                    ],
                    correct: 3
                },
                {
                    question: "사용자의 요구에 따라서 정보를 처리/데이터 베이스를 관리하는 것은?",
                    options: [
                        "MYSOL",
                        "DBMS",
                        "SQL",
                        "ERP"
                    ],
                    correct: 1
                },
                {
                    question: "데이터베이스의 설명으로 아래의 지문 중 데이터베이스의 특징으로 맞는 것은?",
                    options: [
                        "데이터베이스는 합의된 데이터이다.",
                        "데이터베이스는 저장된 데이터이다.",
                        "데이터베이스는 변화하는 데이터이다.",
                        "데이터베이스는 공동사용하는 데이터이다."
                    ],
                    correct: 3
                },
                {
                    question: "기업의 경영효율화를 위해서 정보의 통합을 위해서 자원관리의 최적으로 관리하기 위한 기업 경영정보시스템을 일컫는 단어는?",
                    options: [
                        "CRP",
                        "OCP",
                        "KPR",
                        "ERP"
                    ],
                    correct: 3
                },
                {
                    question: "의사결정에 활용할 수 있는 기술을 말한다. 주로 비즈니스 관점에서 다차원적인 정보의 접근을 통해 정제된 데이터를 얻게 하는 기술은?",
                    options: [
                        "GI",
                        "OLAP",
                        "OLTP",
                        "IMC"
                    ],
                    correct: 1
                },
                {
                    question: "빅데이터를 정리한 가트너그룹의 3가지 특징/측면으로 틀린것은?",
                    options: [
                        "다양성",
                        "유용성",
                        "속도",
                        "양"
                    ],
                    correct: 1
                },
                {
                    question: "구글의 빅데이터 사례중 Ngram Viwer의 기능은?",
                    options: [
                        "차세대 에너지원",
                        "21세기 신재생 에너지",
                        "플랫폼",
                        "현미경"
                    ],
                    correct: 3
                },
                {
                    question: "빅데이터의 활용으로 만들어낸 본질적 변화로 맞지 않은 것은?",
                    options: [
                        "상관관계 > 인과관계 변화",
                        "사전조사 > 사후처리 시대",
                        "표본조사 > 전수 조사 방식으로 변화",
                        "질 > 양"
                    ],
                    correct: 3
                },
                {
                    question: "빅데이터와 같이 대용량 데이터의 처리 비용을 절감시키는 방식으로 크라우드의 분산병렬 처리 컴퓨터에도 사용된 것은?",
                    options: [
                        "SEO",
                        "TTP",
                        "맵리듀스",
                        "EEp"
                    ],
                    correct: 2
                },
                {
                    question: "특정인과의 촌수를 알아보기 할 때 사용되는 기법은?",
                    options: [
                        "머신러닝",
                        "데이터 마이닝",
                        "가족 연관규칙서",
                        "사회관계망 분석"
                    ],
                    correct: 3
                },
                {
                    question: "범죄예방 데이터를 활용해서 사전에 예방활동으로 체포할 수 있는 사례를 통해서 알 수 있는 빅데이터 시대의 위기 요인으로 바르게 표현한 것은?",
                    options: [
                        "데이터의 오해와 침해",
                        "책임원칙 훼손",
                        "데이터",
                        "사생활침해"
                    ],
                    correct: 3
                },
                {
                    question: "다음 미래의 빅데이터의 활용으로 적절한 3요소에 해당하는 것으로 알맞은 것은? \"편의점에 대통령 이미지를 넣은 컵으로 선거결과를 예측하려고 한다.\"",
                    options: [
                        "인구",
                        "예언",
                        "기술",
                        "데이터"
                    ],
                    correct: 3
                },
                {
                    question: "기본적으로 물방울 모양 단계를 거치지 않아도 되는 것은?",
                    options: [
                        "나뭇잎",
                        "다이아몬드",
                        "줄기",
                        "하트"
                    ],
                    correct: 1
                },
                {
                    question: "보기의 설명으로 맞는 것은? -보기- 가드너의 데이터 사이언스가 갖추어야 할 역량으로 소프트 스킬에 해당하지 않는 것은?",
                    options: [
                        "커뮤니케이션",
                        "분석 모델링",
                        "리더",
                        "창의성"
                    ],
                    correct: 1
                },
                {
                    question: "투자비용 측면의 빅데이터 요소가 아닌 것은?",
                    options: [
                        "데이터의 다양성",
                        "데이터의 속도",
                        "데이터의 가치",
                        "데이터의 규모"
                    ],
                    correct: 2
                },
                {
                    question: "R의 입력된명령어가 실행되는 창은?",
                    options: [
                        "워크스페이스",
                        "패키지",
                        "스크램터",
                        "콘솔"
                    ],
                    correct: 3
                },
                {
                    question: "함수 rep(1:4)의 결과는?",
                    options: [
                        "4,2,3,1.",
                        "1,2,3,4.",
                        "1,1,1,1.",
                        "1,4,1,4."
                    ],
                    correct: 1
                },
                {
                    question: "행렬의 행과 열을 알수 있는 함수?",
                    options: [
                        "nim",
                        "dim",
                        "lim",
                        "rim"
                    ],
                    correct: 1
                },
                {
                    question: "어떤 데이터의 셋의 변수들의 최소값/최대값/중앙값/평균 등을 요약하는데 사용되는 함수는?",
                    options: [
                        "top.",
                        "var.",
                        "sqr.",
                        "summary."
                    ],
                    correct: 3
                },
                {
                    question: "금일 날짜를 출력하려고 \"2018-1-29\"입니다. 추출할 때 쓰이는 R프로그램 명령어는?",
                    options: [
                        "format(Sys.Date(),%a)",
                        "format(Sys.Date(),%E)",
                        "format(Sys.Date(),%d)",
                        "format(Sys.Date(),%B)"
                    ],
                    correct: 2
                },
                {
                    question: "R을 GUI환경에서 사용편의를 개선하여 사용할 때 도와주는 패키지는?",
                    options: [
                        "rattle",
                        "R-STUDIO",
                        "ggplot2",
                        "shiny"
                    ],
                    correct: 1
                },
                {
                    question: "기본적인 변수의 설명이다. 데이터 마트에서 금액, 횟수, 구매 여부 등을 데이터 분석을 위해 만들어지는 변수는?",
                    options: [
                        "원인변수",
                        "독립변수",
                        "요약변수",
                        "파생변수"
                    ],
                    correct: 3
                },
                {
                    question: "R프로그램에서 결측지를 나타내는 용어는?",
                    options: [
                        "NAM",
                        "INP",
                        "Na",
                        "-INP"
                    ],
                    correct: 2
                },
                {
                    question: "회귀분석에서 관찰값과 예측값의 차이를 무엇이라고 하는가?",
                    options: [
                        "편의차",
                        "순의차",
                        "오차",
                        "잔차"
                    ],
                    correct: 3
                },
                {
                    question: "A반 학생과 B반 학생들이 같은 과목 시험을 봐서 그 결과를 A반과 B반을 합치려고 한다. 어떤 명령어를 사용하는가?",
                    options: [
                        "lbind",
                        "rbind",
                        "cbind",
                        "bbind"
                    ],
                    correct: 1
                },
                {
                    question: "정부에서는 최근 공공데이터의 활용을 높이고자 유익한 데이터를 기반서비스화 하려고 한다. 공공데이터와 거리가 먼 것은?",
                    options: [
                        "의료데이터",
                        "물가 지수 데이터",
                        "통화요금데이터",
                        "교통데이터"
                    ],
                    correct: 2
                },
                {
                    question: "데이터의 스킬은 하드스킬과 소프트스킬로 나뉜다. 이에 하드스킬에 가까운 것은?",
                    options: [
                        "데이터 munging",
                        "스토리텔링",
                        "창의 융합사고",
                        "비즈니스 커뮤니케이션"
                    ],
                    correct: 0
                },
                {
                    question: "다음중 정량적 데이터로 부적절한 것은?",
                    options: [
                        "강수량",
                        "영업이익",
                        "직종",
                        "가스량"
                    ],
                    correct: 2
                },
                {
                    question: "데이터베이스 특징과 거리가 먼 것은?",
                    options: [
                        "프로그램의 생산성 향상",
                        "최소화한 중복성",
                        "데이터의 무결점 유지",
                        "응용프로그램의 종속특이성"
                    ],
                    correct: 3
                },
                {
                    question: "R의 통계패키지로 설명이 부적절한 것은?",
                    options: [
                        "오픈소스프로그램",
                        "리눅스 환경에서의 사용불가능",
                        "사용자들의 여러 예시를 공유",
                        "데이터 마이닝 기능탑재"
                    ],
                    correct: 1
                }
            ]
        }
    };

    // DOM 요소
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const questionNumberElement = document.getElementById('question-number');
    const progressElement = document.getElementById('progress');
    const progressTextElement = document.getElementById('progressText');
    const tabButtons = document.querySelectorAll('.tab-button');
    const headerTitle = document.querySelector('header h1');

    // 상태 변수
    let currentQuiz = 'ai'; // 기본으로 AI 퀴즈 선택
    let currentQuestion = 0;
    let selectedOption = null;
    let userAnswers = {
        ai: new Array(quizData.ai.questions.length).fill(null),
        bigdata: new Array(quizData.bigdata.questions.length).fill(null)
    };

    // 현재 퀴즈 가져오기
    function getCurrentQuiz() {
        return quizData[currentQuiz];
    }

    // 현재 문제 가져오기
    function getCurrentQuestion() {
        return getCurrentQuiz().questions[currentQuestion];
    }

    // 문제 표시 함수
    function displayQuestion() {
        const question = getCurrentQuestion();
        const quiz = getCurrentQuiz();
        
        questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
        questionNumberElement.textContent = `${currentQuestion + 1}/${quiz.questions.length}`;
        
        // 진행률 업데이트
        const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
        progressElement.style.width = `${progress}%`;
        progressTextElement.textContent = `${currentQuestion + 1}/${quiz.questions.length}`;
        
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
            if (userAnswers[currentQuiz][currentQuestion] !== null && userAnswers[currentQuiz][currentQuestion] === index) {
                optionElement.classList.add('selected');
                selectedOption = index;
            }
            
            optionElement.addEventListener('click', () => {
                // 이미 확인된 문제일 경우 정답만 표시
                if (userAnswers[currentQuiz][currentQuestion] !== null) return;
                
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
        nextBtn.style.display = currentQuestion < quiz.questions.length - 1 ? 'inline-block' : 'none';
        
        // 정답 확인 버튼 상태 업데이트
        if (userAnswers[currentQuiz][currentQuestion] !== null) {
            // 정답이 이미 선택된 경우, 정답 표시
            const correctIndex = question.correct;
            const optionElements = document.querySelectorAll('.option');
            optionElements.forEach((option, index) => {
                option.classList.remove('selected');
                
                if (index === userAnswers[currentQuiz][currentQuestion]) {
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
            checkBtn.textContent = '정답 확인됨';
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
        
        const correctIndex = getCurrentQuestion().correct;
        userAnswers[currentQuiz][currentQuestion] = selectedOption;
        
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
        const quiz = getCurrentQuiz();
        if (currentQuestion < quiz.questions.length - 1) {
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

    // 탭 전환 함수
    function switchQuiz(quizType) {
        currentQuiz = quizType;
        currentQuestion = 0;
        selectedOption = null;
        
        // 헤더 제목 업데이트
        headerTitle.textContent = quizData[quizType].title;
        
        // 탭 버튼 상태 업데이트
        tabButtons.forEach(button => {
            if (button.dataset.quiz === quizType) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        displayQuestion();
    }

    // 이벤트 리스너
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', goToNextQuestion);
    prevBtn.addEventListener('click', goToPrevQuestion);

    // 탭 버튼 이벤트 리스너
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchQuiz(button.dataset.quiz);
        });
    });

    // 초기화
    displayQuestion();
});