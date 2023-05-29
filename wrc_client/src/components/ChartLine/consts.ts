const DNATranscriber = {
    // withUnitsOfMeasurement
    voltage_withUnitsOfMeasurement: "Напряжение (Вольт)",
    amperage_withUnitsOfMeasurement: "Сила тока (Ампер)",
    power_withUnitsOfMeasurement: "Мощность (Ватт)",
    RPower_withUnitsOfMeasurement:
        "Реактивная мощность (Вольт-амперы реактивные)",
    FPower_withUnitsOfMeasurement: "Полная мощность (Вольт-амперы)",
    "voltage max_withUnitsOfMeasurement": "Максимальное напряжение (Вольт)",
    "voltage min_withUnitsOfMeasurement": "Минимальное напряжение (Вольт)",
    cosinusF_withUnitsOfMeasurement: "Косинус фи",

    voltage: "Напряжение",
    amperage: "Сила тока",
    power: "Мощность",
    RPower: "Реактивная мощность",
    FPower: "Полная мощность",

    Ku: "Коэфицент усиления по напряжению ",
    Ki: "Коэфицент усиления по току",
    Kp: "Коэфицент усиления по мощности",
    "voltage max": "Максимальное напряжение",
    "voltage min": "Минимальное напряжение",

    //Трёхфазные
    "voltage 1": "Напряжение 1",
    "voltage 2": "Напряжение 2",
    "voltage 3": "Напряжение 3",
    "voltage 1_withUnitsOfMeasurement": "Напряжение 1 (Вольт)",
    "voltage 2_withUnitsOfMeasurement": "Напряжение 2 (Вольт)",
    "voltage 3_withUnitsOfMeasurement": "Напряжение 3 (Вольт)",

    "amperage 1": "Сила тока 1",
    "amperage 2": "Сила тока 2",
    "amperage 3": "Сила тока 3",
    "amperage 1_withUnitsOfMeasurement": "Сила тока 1 (Ампер)",
    "amperage 2_withUnitsOfMeasurement": "Сила тока 2 (Ампер)",
    "amperage 3_withUnitsOfMeasurement": "Сила тока 3 (Ампер)",

    "power 0": "Мощность 1",
    "power 1": "Мощность 2",
    "power 2": "Мощность 3",
    "power 0_withUnitsOfMeasurement": "Мощность 1 (Ватт)",
    "power 1_withUnitsOfMeasurement": "Мощность 2 (Ватт)",
    "power 2_withUnitsOfMeasurement": "Мощность 3 (Ватт)",
} as const;

type DNACodon = keyof typeof DNATranscriber;
type RNACodon = (typeof DNATranscriber)[DNACodon];

export default function toRna(
    dna: string,
    withUnitsOfMeasurement?: boolean
): string {
    console.log(dna);

    if (withUnitsOfMeasurement) {
        // if (isValidCodon(dna) ) {
        //     const dna_withUnitsOfMeasurement = dna+""
        //     return DNATranscriber[newRequest + "_withUnitsOfMeasurement"];
        // }

        const newRequest = dna + "_withUnitsOfMeasurement";
        if (isValidCodon(newRequest)) {
            return DNATranscriber[newRequest];
        }
    } else {
        if (isValidCodon(dna)) {
            return DNATranscriber[dna];
        }
    }

    return dna;

    // const codons = [...dna];
    // validateSequence(codons);

    // const transcribedRNA = codons.map((codon) => DNATranscriber[codon]);
    // return transcribedRNA;
}

function validateSequence(values: string[]): asserts values is DNACodon[] {
    if (!values.every(isValidCodon)) {
        throw Error("invalid sequence");
    }
}
function isValidCodon(value: string): value is DNACodon {
    return value in DNATranscriber;
}
