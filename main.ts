basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showCompass(50)
    if (input.compassHeading() < 10 || input.compassHeading() > 350) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
})
