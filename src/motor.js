fun
Planet(name, layers, radius = 1)
fun
Layer(color, type, height, divers)

var solarSystem = [
    new Planet("mercury", [
        Layer("brown", "mantel", 0.9),
        Layer("black", "core", 0.1)
    ])
    , new Planet("venus", [
        Layer("yellow", "atmosphere", 0.1),
        Layer("green", "mantel", 0.8),
        Layer("black", "core", 0.1)
    ])
    ,
    new Planet("earth", [
        Layer("lightblue", "atmosphere", 0.1),
        Layer("green", "mantel", 0.8),
        Layer("red", "core", 0.1)
    ]),
    new Planet("mars", [
        Layer("orange", "atmosphere", 0.1),
        Layer("red", "mantel", 0.8),
        Layer("black", "core", 0.1)
    ]), new Planet("jupitary", [
        Layer("yellow", "atmosphere", 0.9),

        Layer("orange", "core", 0.1)
    ]), new Planet("saturn", [
        Layer("lightblue", "atmosphere", 0.1),
        Layer("green", "mantel", 0.8),
    ]),
    new Planet("uranus", [
        Layer("blue", "atmosphere", 0.3),
        Layer("lightblue", "mantel", 0.8),
        Layer("black", "core", 0.1)
    ]),
    new Planet("neptune", [
        Layer("blue", "atmosphere", 0.1),
        Layer("lightblue", "mantel", 0.8),
        Layer("black", "core", 0.1)
    ]),
    new Planet("pluton", [
        Layer("grey", "mantel", 0.8),
    ])


];




