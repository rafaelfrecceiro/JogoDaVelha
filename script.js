const options = ['X', 'O']
let turn = 0
let board = [["","",""],["","",""],["","",""]]
let finished = false

function markPosition(event){
    if(!finished) {
        let idPos = event.target.id

        event.target.value = options[turn]

        let isFinished = fillMatrix(idPos)

        if (isFinished) {
            alert("VENCEDOR - " + options[turn])
            finished = true
        } else {
            if (turn == 0) turn = 1
            else turn = 0
        }
    }
}

function fillMatrix(op){
    switch (op) {
        case "op1":
            board[0][0] = options[turn]
            break
        case "op2":
            board[0][1] = options[turn]
            break
        case "op3":
            board[0][2] = options[turn]
            break
        case "op4":
            board[1][0] = options[turn]
            break
        case "op5":
            board[1][1] = options[turn]
            break
        case "op6":
            board[1][2] = options[turn]
            break
        case "op7":
            board[2][0] = options[turn]
            break
        case "op8":
            board[2][1] = options[turn]
            break
        case "op9":
            board[2][2] = options[turn]
            break
    }

    return checkVictory()
}

function checkVictory(){
    //LINHA - COLUNA
    //Horizontais
    if((board[0][0] == options[turn] && board[0][1] == options[turn] && board[0][2] == options[turn]) ||
       (board[1][0] == options[turn] && board[1][1] == options[turn] && board[1][2] == options[turn]) ||
       (board[2][0] == options[turn] && board[2][1] == options[turn] && board[2][2] == options[turn])){
        return true
    }

    //Verticais
    if((board[0][0] == options[turn] && board[1][0] == options[turn] && board[2][0] == options[turn]) ||
       (board[0][1] == options[turn] && board[1][1] == options[turn] && board[2][1] == options[turn]) ||
       (board[0][2] == options[turn] && board[1][2] == options[turn] && board[2][2] == options[turn])){
        return true
    }

    //Diagonais
    if((board[0][0] == options[turn] && board[1][1] == options[turn] && board[2][2] == options[turn]) ||
       (board[2][0] == options[turn] && board[1][1] == options[turn] && board[0][2] == options[turn])){
        return true
    }
    return false
}