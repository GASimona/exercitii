import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"

class Question {
    constructor(text, answers, correctAnswer) {
        this.text = tex
        this.answers = answers
        this.correctAnswer = correctAnswer
        this.answer = null
    }
    giveAnswer(answer) {
        this.answer = answer
    }
    hasCorrectAnswer() {
        return this.answer === this.correctAnswer  
    }
    calculatePoints() {
        if (this.hasCorrectAnswer()) {
            return 1;
        }
        return 0;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions
        this.activeQuestion = 0
        this.finished = false
    }
    answerQuestion(answer) {
        if(this.finished) {
            return
        }
        this.question[this.activeQuestion].giveAnswer(answer)
        if ( isLastQuestion() ) {
            this.finished()
        } else {
            this.activeQuestion++
        }
    }
    isLastQuestion() {
        return this.activeQuestion ==this.questions.length - 1
    }
    finish() {
        this.finished = true
    }
    calculateScore() {
        return this.questions.reduce(
            (score, question) => score + question.calculatePoints(),
            0
        )
    }
}

new Vuex.Store({
    state: {
        quiz: new Quiz(
            [
                new Question(
                    'Cati litri de apa e bine sa bei pe zi?'
                    [
                        '1 litru',
                        '0.5 litru',
                        '2 litru',
                        '5 litru'
                    ],
                    3
                ),
                new Question(
                    'Cum se poate modifica starea din Vuex?'
                    [
                        'folosind mutatii',
                        'modificand direct proprietatile starii',
                        'apeland direct metoda din mutations',
                        'starea nu se poate modifica'
                    ],
                    3
                ),
            ]
        )
    },
    mutations: {
        answerQuestion: (state, answer) => state.quiz.calculatePoints()
    },
    getters: {
        currentQuestionAnswers: (state) => state.quiz.question[state.quiz.activeQuestion].answers,
        isQuizFinished: (state) => state.quiz.fished,
        quizScore: (state) => state.quiz.calculateScore 
    }
});

const quiz = {
    template: `

    `,
    methods: {
        answerQuestion(answer) {
            store.comit('answerQuestion', answer)
        }
    },
    computed: {
        currentQuestionAnswers: () => store.atate.getters.currentQuestionAnswers,
        isQuizFinished: () => store.atate.getters.isQuizFinished,
        quizScore: () => store.atate.getters.quizScore
    }
}