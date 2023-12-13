import React, { useEffect } from 'react';
import './Countdown.module.css';

const Countdown = () => {
    useEffect(() => {
        const countdownTo = "12/31/2023";
        const rings = {
            'DAYS': {
                s: 86400000, // milliseconds in a day,
                max: 365
            },
            'HOURS': {
                s: 3600000, // milliseconds per hour,
                max: 24
            },
            'MINUTES': {
                s: 60000, // milliseconds per minute
                max: 60
            },
            'SECONDS': {
                s: 1000,
                max: 60
            },
            'MICROSEC': {
                s: 10,
                max: 100
            }
        };

        const rCount = 5;
        const rSpacing = 10; // px
        const rSize = 100; // px
        const rThickness = 2; // px
        const updateInterval = 11; // ms

        let cvs, ctx, size, actualSize, countdownToTime, time;

        const init = () => {
            cvs = document.getElementById('countdown-canvas');
            ctx = cvs.getContext('2d');
            size = {
                w: (rSize + rThickness) * rCount + (rSpacing * (rCount - 1)),
                h: (rSize + rThickness)
            };
            cvs.width = size.w;
            cvs.height = size.h;
            ctx.textAlign = 'center';
            actualSize = rSize + rThickness;
            countdownToTime = new Date(countdownTo).getTime();
            go();
        };

        const go = () => {
            let idx = 0;
            time = (new Date().getTime()) - countdownToTime;

            for (const rKey in rings) {
                unit(idx++, rKey, rings[rKey]);
            }

            setTimeout(go, updateInterval);
        };

        const unit = (idx, label, ring) => {
            let value = parseFloat(time / ring.s);
            time -= Math.round(parseInt(value)) * ring.s;
            value = Math.abs(value);

            let x = (rSize * .5 + rThickness * .5);
            x += +(idx * (rSize + rSpacing + rThickness));
            let y = rSize * .5;
            y += rThickness * .5;

            // calculate arc end angle
            const degrees = 360 - (value / ring.max) * 360.0;
            const endAngle = degrees * (Math.PI / 180);

            ctx.save();

            ctx.translate(x, y);
            ctx.clearRect(actualSize * -0.5, actualSize * -0.5, actualSize, actualSize);

            // first circle
            ctx.strokeStyle = "rgba(128,128,128,0.2)";
            ctx.beginPath();
            ctx.arc(0, 0, rSize / 2, 0, 2 * Math.PI, 2);
            ctx.lineWidth = rThickness;
            ctx.stroke();

            // second circle
            ctx.strokeStyle = "rgba(253, 128, 1, 0.9)";
            ctx.beginPath();
            ctx.arc(0, 0, rSize / 2, 0, endAngle, 1);
            ctx.lineWidth = rThickness;
            ctx.stroke();

            // label
            ctx.fillStyle = "#ffffff";

            ctx.font = '12px Helvetica';
            ctx.fillText(label, 0, 23);
            ctx.fillText(label, 0, 23);

            ctx.font = 'bold 40px Helvetica';
            ctx.fillText(Math.floor(value), 0, 10);

            ctx.restore();
        };

        init();
    }, []);

    return <canvas id="countdown-canvas" style={{ width: '100%', height: '130px' }}></canvas>;
};

export default Countdown;
