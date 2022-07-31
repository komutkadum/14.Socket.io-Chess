import Swal from "sweetalert2"

export const checkGameOverState = (game) => {
    if(game.game_over()){
        if(game.in_draw()){
          Swal.fire({title: "Its a draw",icon:'info'})
        }else if(game.in_stalemate()){
          Swal.fire({title: "its a stalemate.",icon:'info'})
        }else if(game.in_threefold_repetition()){
          Swal.fire({title: "its a threefold repitition.",icon:'info'})
        }else if(game.insufficient_material()){
          Swal.fire({title: "game over due to insufficient material.",icon:'info'})
        }else {
          Swal.fire({title: game.turn()==='w'?'black wins':'white wins',icon:'success'})
        }
    }
}