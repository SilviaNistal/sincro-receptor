def on_received_string(receivedString):
    global II, ID, IA, IR, ISTOP
    if receivedString == "izquierda":
        cuteBot.motors(5, 15)
        II = 1
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    if receivedString == "derecha":
        cuteBot.motors(15, 5)
        ID = 1
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    if receivedString == "avanza":
        cuteBot.motors(20, 20)
        IA = 1
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    if receivedString == "retroceso":
        cuteBot.motors(-15, -15)
        IR = 1
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
    if receivedString == "stop":
        cuteBot.motors(0, 0)
        ISTOP = 1
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
radio.on_received_string(on_received_string)

def Intermitente_izquierdo():
    pass
ISTOP = 0
IA = 0
IR = 0
ID = 0
II = 0
radio.set_group(1)
II = 0
ID = 0
IR = 0
IA = 0
ISTOP = 1

def on_forever():
    global ISTOP, IA, IR, ID, II
    if II == 1:
        ISTOP = 0
        IA = 0
        IR = 0
        ID = 0
    if ID == 1:
        ISTOP = 0
        IA = 0
        IR = 0
        II = 0
    if IA == 1:
        ISTOP = 0
        ID = 0
        IR = 0
        II = 0
    if IR == 1:
        ISTOP = 0
        ID = 0
        IA = 0
        II = 0
    if ISTOP == 1:
        IR = 0
        ID = 0
        IA = 0
        II = 0
basic.forever(on_forever)
