if (count > 0 && count % 2 == 0) {
    mat[n[0]][n[1]] = 0;
    var diceValue = Math.floor(Math.random() * 6) + 1;
    buttonDice.style.backgroundImage = `url('./${diceValue}.png')`;
    buttonDice.style.backgroundSize = "100% 100%";
    para.innerText = ("Dice value = " + diceValue)
    dice.appendChild(para)
    console.log(diceValue)
    if (diceValue == 6) { flag = true }
    // if odd values then dice value being added to row, column is kept enact.
    if (flag) {

        if (n[0] % 2 != 0) {
            n[1] += diceValue
            console.log(n)
        }

        else if (n[1] == 9 && n[0] % 2 != 0) {
            n[0]--
            n[1] -= diceValue // return m;
            console.log(m)
        }
        if (n[1] > 9 && n[0] % 2 != 0) {
            n[0]--
            if (n[0] > 5) {
                n[1] = 11 - ((n[1] - n[0]))
            }
            else if (n[0] <= 5 && n[0] != 0) {
                n[1] = 15 - ((n[1] - n[0]))
            }
            else if (n[0] == 0) {
                n[1] -= diceValue
            }
            console.log(m)

        }



        else if (n[0] % 2 == 0 && n[1] > 0) {
            n[1] -= diceValue
            console.log(m)

        }
        else if (n[0] % 2 == 0 && n[1] == 0) {
            n[1] += diceValue - 1
            n[0]--
            console.log(m)
        }
        if (n[0] % 2 == 0 && n[1] < 0 && diceValue > 3) {
            n[0]--;
            n[1] += diceValue - 1
            console.log(m)
        }
        else if (n[0] % 2 == 0 && n[1] < 0 && diceValue <= 3) {
            n[0]--;
            n[1] += diceValue + 1
            console.log(m)
        }
        // if (m=[3,0]) {
        //     m=[8,1]
        // }

        console.log({ m })
        // var matrix = document.getElementById("matrix")
        if (n[0] == 0 && n[1] == 0) {
            alert("You win ")
        }
        if (n[0] == 0 && diceValue > (n[1] - n[0])) {
            m;
        }
        if (n[0] == 0 && diceValue < (n[1] - n[0])) {
            n[1] -= diceValue
        }
        ;
    }
    snakeBite2()
    mat[n[0]][n[1]] = "2"
}

function snakeBite2() {
    var prevPos = mat[n[0]][n[1]]
    let [x, y] = m
    console.log(prevPos)
    if (mat[n[0]][n[1]] != "0" && mat[n[0]][n[1]] != "1" && mat[n[0]][n[1]]!= "2" ) {
        x = obj[mat[n[0]][n[1]]].zero;
        y = obj[mat[n[0]][n[1]]].one;
        console.log(mat[x][y], x, y, mat[n[0]][n[1]])

    }                  
    mat[x][y]  = '2'
    n = [x,y]
   }     