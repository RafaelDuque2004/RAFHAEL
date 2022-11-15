radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 55)
    }
    if (receivedNumber == 2) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 55)
    }
    if (receivedNumber == 3) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 55)
    }
    if (receivedNumber == 4) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 55)
    }
    if (receivedNumber == 5) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    }
    if (receivedNumber == 6) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
radio.setGroup(99)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendNumber(1)
    }
    if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendNumber(2)
    }
    if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendNumber(3)
    }
    if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendNumber(4)
    }
    if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendNumber(5)
    }
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendNumber(6)
    }
})
