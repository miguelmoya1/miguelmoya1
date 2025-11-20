import { useEffect, useState, useRef } from 'react';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
    text: string;
    className?: string;
};

const ScrambleText = ({ text, className }: Props) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [displayText, setDisplayText] = useState(text);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = text.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");

            setDisplayText(scrambled);
            pos++;

            if (pos >= text.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setDisplayText(text);
    };

    useEffect(() => {
        scramble();
        return () => stopScramble();
    }, [text]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

export default ScrambleText;
