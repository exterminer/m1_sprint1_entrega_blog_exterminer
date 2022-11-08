const slenzie = {
    nameEvent : '',
    questions : [],

}

const question = {
    user : '',
    user_question : '',
    vote : 0 

}

function create_event(slenzie,string){
    string = prompt('Digite o nome do evento')
    string = slenzie.nameEvent
    if(string===String){
        return string
    }else{
        return 'The input value is invalid'
    } 

}

function addQuestion(slenzie,question){
    question = prompt('Digite sua pergunta')
    
    if(question.user == ''){
        return 'The user cant be empty'
    }else if( question.user_question == ''){
        return 'he question cant be null'
    }else{
         return slenzie.questions.push(question)
    }
}

function addVoteToQuestion(int,slenzie){
    int = prompt(parseInt('Digite o posiçao para ser inserida na lista'))
    if(int >= 0 && int < slenzie.questions.length){
        slenzie.questions.push(int) 
        return'Vote registered successfully'
    }else if( int < 0){
        return 'The value is not allowed'
    }else{
        return 'Question not found'
    }
}

