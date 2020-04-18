import React, { PropsWithChildren, ReactNode, useCallback, useEffect, useState } from 'react';
import './load_effect.css';

interface CellProps {
    id?: number;
    dim: string;
    animationDelay: string;
}

function Cell(props: CellProps) {
    return (
        <div className={'cell'}
             style={{
                 width: props.dim,
                 height: props.dim,
                 animationDelay: props.animationDelay
             }}/>
    )
}
class CellEffect {
    private readonly width: number;
    private readonly height: number;
    private readonly numColumns: number;
    private readonly animDuration: number;

    constructor(width: number, height: number, columns: number, duration: number) {
        if ( width < height && width < 500) {
            this.numColumns = 2;
        }
        else if ( width < height && width >= 500 && width <= 900) {
            this.numColumns = 3;
        }
        else {
            this.numColumns = columns;
        }
        this.width = width;
        this.height = height;
        this.animDuration = duration;
    }

    private squareDim = () => (this.width - 2)/this.numColumns;
    private numRows = () => Math.ceil(this.height / (this.squareDim() + 2));
    private delayCoefficient = () => this.animDuration / (this.numColumns * this.numRows());
    private delay = () => Math.ceil(Math.random() * this.numRows() * this.numColumns) * this.delayCoefficient();
    private getNumCells = () => this.numColumns * this.numRows();
    private getDelay = () => this.delay() + 's';

    public getSquareDim = () => this.squareDim() + 'px';
    public constructCells = () => {
        let delays = [];
        for (let i=0; i<this.getNumCells(); i++) delays.push(this.getDelay());
        return delays;
    }
}

function LoadEffect(props: PropsWithChildren<ReactNode>) {
    const animationDuration = .5;
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [cells, setCells] = useState(['']);
    const [dim, setDim] = useState('');
    const [containerBg, setContainerBg] = useState('black');
    const [fadeIn, setFadein] = useState('0');

    useEffect(() => {
        setContainerBg('white');
        setFadein('1');
        const Effect = new CellEffect(width, height, 5, animationDuration);
        setDim(Effect.getSquareDim);
        setCells(Effect.constructCells);
    }, [width, height]);

    const containerRef = useCallback(node => {
        if (node) {
            setWidth(node.getBoundingClientRect().width);
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <div>
            <div ref={containerRef} id={"effect-container"} style={{transitionDelay: animationDuration + 's', background: containerBg}}>
                {cells.map((d, index) => <Cell key={index} dim={dim} animationDelay={d}/>)}
            </div>
            <div className={'fade-in'} style={{transitionDelay: animationDuration + 's', opacity: fadeIn}}>
                {props.children}
            </div>
        </div>
    )
}

export default LoadEffect;