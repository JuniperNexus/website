'use client';

import { Card } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface Command {
    input: string;
    output?: string | string[];
}

export function Terminal({ commands, className }: { commands: Command[]; className?: string }) {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [displayedInput, setDisplayedInput] = useState('');
    const [displayedOutput, setDisplayedOutput] = useState<string[]>([]);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (currentCommandIndex >= commands.length) return;

        const currentCommand = commands[currentCommandIndex];
        if (!currentCommand) return;
        let inputIndex = 0;
        let outputIndex = 0;
        let currentOutputLine = 0;

        const inputInterval = setInterval(() => {
            if (inputIndex <= currentCommand.input.length) {
                setDisplayedInput(currentCommand.input.slice(0, inputIndex));
                inputIndex++;
            } else {
                clearInterval(inputInterval);
                setShowCursor(false);

                setTimeout(() => {
                    const outputInterval = setInterval(() => {
                        if (currentCommand.output !== undefined) {
                            const outputArray = Array.isArray(currentCommand.output)
                                ? currentCommand.output
                                : [currentCommand.output];

                            if (currentOutputLine < outputArray.length) {
                                const currentLine = outputArray[currentOutputLine];
                                if (currentLine && outputIndex <= currentLine.length) {
                                    setDisplayedOutput((prev) => {
                                        const newOutput = [...prev];
                                        newOutput[currentOutputLine] = currentLine.slice(
                                            0,
                                            outputIndex,
                                        );
                                        return newOutput;
                                    });
                                    outputIndex++;
                                } else {
                                    outputIndex = 0;
                                    currentOutputLine++;
                                }
                            } else {
                                clearInterval(outputInterval);
                                setTimeout(() => {
                                    setCurrentCommandIndex(currentCommandIndex + 1);
                                    setDisplayedInput('');
                                    setDisplayedOutput([]);
                                    setShowCursor(true);
                                }, 1000);
                            }
                        } else {
                            clearInterval(outputInterval);
                            setTimeout(() => {
                                setCurrentCommandIndex(currentCommandIndex + 1);
                                setDisplayedInput('');
                                setDisplayedOutput([]);
                                setShowCursor(true);
                            }, 1000);
                        }
                    }, 50);
                }, 500);
            }
        }, 100);

        return () => clearInterval(inputInterval);
    }, [commands, currentCommandIndex]);

    return (
        <Card className="bg-card text-card-foreground">
            <div className="flex items-center justify-start space-x-2 border-b p-4">
                <div className="size-3 rounded-full bg-red-500"></div>
                <div className="size-3 rounded-full bg-yellow-500"></div>
                <div className="size-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4 font-mono text-sm">
                <div className={className}>
                    {commands.slice(0, currentCommandIndex).map((command, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex items-center">
                                <span className="mr-2 text-green-500">$</span>
                                <span>{command.input}</span>
                            </div>
                            {command.output && (
                                <div className="ml-4 mt-1">
                                    {Array.isArray(command.output)
                                        ? command.output.map((line, i) => <div key={i}>{line}</div>)
                                        : command.output}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center">
                        <span className="mr-2 text-green-500">$</span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            {displayedInput}
                        </motion.span>
                        <AnimatePresence>
                            {showCursor && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.7,
                                        ease: 'easeInOut',
                                    }}
                                    className="ml-1 inline-block h-4 w-2 bg-green-500"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="ml-4 mt-1">
                        {displayedOutput.map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
