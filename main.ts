radio.onReceivedString(function (receivedString) {
    if (receivedString == "izquierda") {
        cuteBot.motors(5, 15)
        II = 1
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        II = 0
    }
    if (receivedString == "derecha") {
        cuteBot.motors(15, 5)
        ID = 1
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        ID = 0
    }
    if (receivedString == "avanza") {
        cuteBot.motors(20, 20)
        IA = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        IA = 0
    }
    if (receivedString == "retroceso") {
        cuteBot.motors(-15, -15)
        IR = 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        IR = 0
    }
    if (receivedString == "stop") {
        cuteBot.motors(0, 0)
        ISTOP = 1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        ISTOP = 0
    }
})
let ISTOP = 0
let IA = 0
let IR = 0
let ID = 0
let II = 0
radio.setGroup(1)
cuteBot.closeheadlights()
II = 0
ID = 0
IR = 0
IA = 0
ISTOP = 1
basic.forever(function () {
    if (II == 1) {
        ISTOP = 0
        IA = 0
        IR = 0
        ID = 0
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
        basic.pause(200)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
        basic.pause(200)
    }
    if (ID == 1) {
        ISTOP = 0
        IA = 0
        IR = 0
        II = 0
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
        basic.pause(200)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
        basic.pause(200)
    }
    if (IA == 1) {
        ISTOP = 0
        ID = 0
        IR = 0
        II = 0
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    }
    if (IR == 1) {
        ISTOP = 0
        ID = 0
        IA = 0
        II = 0
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    }
    if (ISTOP == 1) {
        IR = 0
        ID = 0
        IA = 0
        II = 0
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
        basic.pause(200)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
        basic.pause(200)
    }
})
