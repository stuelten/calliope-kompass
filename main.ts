input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    mitTon = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    mitTon = 0
})
let mitTon = 0
basic.showIcon(IconNames.Heart, 1000)
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showCompass(10)
    if (input.compassHeading() < 10 || input.compassHeading() > 350) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
    if (mitTon > 0) {
        music.ringTone(500 + input.compassHeading())
    } else {
        music.stopAllSounds()
    }
})
