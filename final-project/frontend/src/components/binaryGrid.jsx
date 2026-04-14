const CHAR_COUNT = 15000
const HAPPY_CODING_COUNT = 580
const SEED = 42

function mulberry32(seed) {
    return function() {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

let text = ""
const rnd = mulberry32(SEED)
let index = 0
for (; index < HAPPY_CODING_COUNT; index++) {
    text+= (rnd() < 0.5 ? "1" : "0") + " "
}
text+="H A P P Y _ C O D I N G ! "
for (; index < CHAR_COUNT; index++) {
    text+= (rnd() < 0.5 ? "1" : "0") + " "
}

export function BinaryGrid() {  
    return (
        <p className="select-none">{text}</p>
    )
}