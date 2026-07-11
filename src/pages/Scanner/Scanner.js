import React, { useState } from 'react'
import "./Scanner.css"

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate } from 'react-router-dom';

const Scanner = () => {

    const navigate = useNavigate()

    useEffect(() => {

        const scanner = new Html5Qrcode("reader");
        let started = false;

        async function startScanner() {
            try {
                await scanner.start(
                    { facingMode: "environment" },
                    {
                        fps: 10,
                        qrbox: 250,
                    },
                    (decodedText) => {
                        console.log(decodedText);
                        navigate("/enter-amount", {
                            state: {
                                qrData: decodedText
                            }
                        })
                    }
                );

                started = true;
            } catch (err) {
                console.log (err);
            }
        }

        startScanner();

        return () => {
            if (started) {
                scanner.stop().catch(console.error);
            }
        };
    }, [navigate]);

    return <div id="reader"></div>;
};

export default Scanner;