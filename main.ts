/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program is Cookie Clicker
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let CookieNumber = 0

// Shows the number of cookies clicked
input.onButtonPressed(Button.A, function () {
    
    basic.clearScreen()
    CookieNumber += 1
    basic.showNumber(CookieNumber)
    
})

// Resets the number of cookies collected
input.onButtonPressed(Button.B, function () {
    
    basic.clearScreen()
    CookieNumber = 0
    basic.showNumber(CookieNumber)

})