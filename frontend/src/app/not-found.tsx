'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
    const [count, setCount] = useState(0);
    const text = "404, page not found.";

    const charVariants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        reveal: {
            opacity: 1,
            y: 0,
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-[#0f172a] font-mono selection:bg-yellow-400">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="relative inline-block">
                    {/* 404 Content */}
                    <p className="m-0 text-2xl tracking-tight text-white sm:text-3xl">
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={`${count}-${index}`}
                                variants={charVariants}
                                initial="hidden"
                                animate="reveal"
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.2,
                                    ease: "easeOut"
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </p>

                    {/* Con trỏ (Handle) */}
                    <motion.span
                        key={`handle-${count}`}
                        initial={{ left: 0, opacity: 0 }}
                        animate={{
                            left: '100%',
                            opacity: [0, 1, 1, 1, 0]
                        }}
                        transition={{
                            left: {
                                duration: text.length * 0.05 + 0.2,
                                ease: "linear",
                                delay: 0
                            },
                            opacity: {
                                duration: text.length * 0.05 + 0.2,
                                ease: "linear",
                                times: [0, 0.1, 0.9, 0.95, 1]
                            }
                        }}
                        className="absolute top-0 mt-1 h-7 w-3.5 bg-orange-600 sm:h-8"
                    />
                </div>
            </div>

            {/* SVG Replay Button */}
            <button
                onClick={() => setCount(prev => prev + 1)}
                className="absolute bottom-0 right-0 m-4 cursor-pointer p-2 transition-colors group"
                aria-label="Replay animation"
            >
                <svg
                    viewBox="0 0 279.9 297.3"
                    className="w-5 fill-[#666] group-hover:fill-[#888] transition-colors overflow-inherit"
                >
                    <path d="M269.4,162.6c-2.7,66.5-55.6,120.1-121.8,123.9c-77,4.4-141.3-60-136.8-136.9C14.7,81.7,71,27.8,140,27.8
                    c1.8,0,3.5,0,5.3,0.1c0.3,0,0.5,0.2,0.5,0.5v15c0,1.5,1.6,2.4,2.9,1.7l35.9-20.7c1.3-0.7,1.3-2.6,0-3.3L148.6,0.3
                    c-1.3-0.7-2.9,0.2-2.9,1.7v15c0,0.3-0.2,0.5-0.5,0.5c-1.7-0.1-3.5-0.1-5.2-0.1C63.3,17.3,1,78.9,0,155.4
                    C-1,233.8,63.4,298.3,141.9,297.3c74.6-1,135.1-60.2,138-134.3c0.1-3-2.3-5.4-5.3-5.4l0,0C271.8,157.6,269.5,159.8,269.4,162.6z"/>
                </svg>
            </button>
        </div>
    );
}