import React from 'react';
import { LiquidSwipe } from '../liquidswipe';
import He from "./He";
import He3 from './He3';
import Land from './Land';
import He4 from './He4';
import He5 from './He5';

const He2 = () => {
    var componentsToRender = [<He3/>,<He4/>,<He5/>] // Add components you want to render.
    var backgroundColors = ["green","yellow","white"] // Add background colors for each component.
    return (
        <div>
             <LiquidSwipe
            components={componentsToRender}
            colors={backgroundColors}
        />
        </div>
    );
}

export default He2;
