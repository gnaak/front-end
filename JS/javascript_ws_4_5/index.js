// 코드를 작성해 주세요
// 1. 버튼 찾기
const scissorsButton = document.querySelector('#scissors-button')
const rockButton = document.querySelector('#rock-button')
const paperButton = document.querySelector('#paper-button')
console.log(scissorsButton)
console.log(rockButton)
console.log(paperButton)
// 2. 매개변수에 따라서 다른 콜백함수를 넣어주는 handler 만들기
// const buttonClickHandler = function(choice) {
//     return function(event) {
//         // TODO
//         console.log(`제 선택은 ${choice}`)
//     }
// }

// 6. 모달 찾기
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
console.log(modal)
console.log(modalContent)
// 8. 모달 클릭시 사라지는 이벤트 핸들러
modal.addEventListener('click', function() {
    this.style.display = 'none'
})


// 4. 게임 로직 만들기
let count1 = 0 // player1의 승수 -> 변화해야하니 let임.
let count2 = 0 // player2의 승수
const playGame = (player1, player2) => {
    if (player1 === 'scissors') {
      if (player2 === 'rock') {
        count2 += 1
        return 2
      } else if (player2 === 'paper') {
        count1 += 1
        return 1
      } 
    } else if (player1 === 'rock') {
      if (player2 === 'scissors') {
        count1 += 1
        return 1
      } else if (player2 === 'paper') {
        count2 += 1
        return 2
      }
    } else {
      if (player2 === 'rock') {
        count1 += 1
        return 1
      } else if (player2 === 'scissors') {
        count2 += 1
        return 2
      }
    }
    return 0
  }
// 3. handler 채우기
const buttonClickHandler = function(choice) {
    return function(event) {
        console.log(`제 선택은 ${choice}`)
        // 버튼을 비활성화
        scissorsButton.disabled = true
        rockButton.disabled = true
        paperButton.disabled = true
        // 랜덤으로 컴퓨터(Player)가 낼 손가락 결정
        const cases = ['scissors', 'rock', 'paper']
        const randomIndex = Math.floor(Math.random() * 3)
        console.log(randomIndex)
        console.log(cases[randomIndex])

        // TODO: 결정된 나, 상대(컴퓨터)의 결과로 게임의 결과를 도출.
        const result = playGame(choice, cases[randomIndex])
        console.log(result)
        // console.log(result != 0 ?
        //     `player${result}의 승리입니다!` : '무승부입니다!')
        console.log(result ?
            `player${result}의 승리입니다!` : '무승부입니다!')

        // 이미지 바꾸기
        const player1Img = document.querySelector('#player1-img')
        const player2Img = document.querySelector('#player2-img')
        console.log(player1Img)
        console.log(player2Img)
        // player1Img.src = `${choice}`
        player1Img.src = `img/${choice}.png`
        // player2Img.src = `img/${cases[randomIndex]}.png`
        // 가위바위보 이미지 로테이션
        let i = randomIndex + 1 // 컴퓨터가 선택한 그림 바로 다음 그림의 인덱스
        const rotateImg = () => {
            i = (i + 1) % 3 // 나머지 연산 3을 넘어가면 3으로 나눠서 0, 1, 2로 만들어줌
            player2Img.src = `img/${cases[i]}.png`
        }
        const timerId = setInterval(rotateImg, 100)
        // 일정 시간이 지나면 이미지 정지
        setTimeout(() => {
            clearInterval(timerId) // interval 정지

            // 5. 점수변화 로직
            const countA = document.querySelector('.countA')
            const countB = document.querySelector('.countB')
            countA.textContent = count1
            countB.textContent = count2

            // 컴퓨터의 진짜 선택
            player2Img.src = `img/${cases[randomIndex]}.png`

            // 7. 모달 활성화 및 내용 채우기
            modal.style.display = 'flex'
            modalContent.textContent = result ?
            `player${result}의 승리입니다!` : '무승부입니다!'

            // 버튼을 활성화
            scissorsButton.disabled = false
            rockButton.disabled = false
            paperButton.disabled = false
        }, 3000) // ms -> 1000. s-> 1/1000 => 1ms
        console.log(player1Img)
        console.log(player2Img)

    }
}
// (1) 게임의 승패 결과
// (2) 게임 결과 카운팅
// (3) Modal을 안띄워주고 있음


scissorsButton.addEventListener('click',
    buttonClickHandler('scissors'))
rockButton.addEventListener('click',
    buttonClickHandler('rock'))
paperButton.addEventListener('click',
    buttonClickHandler('paper'))