import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import styles from "./styles.module.css";
import { ComponentCustomization } from "../ComponentCustomization/ComponentCustomization";
import { DraggableComponent } from "../DraggableComponent/DraggableComponent";
import { PrimaryLayout } from "../../layout/PrimaryLayout/PrimaryLayout";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const Builder = ({ components = [] }) => {

    const [currentComp, setCurrentComp] = useState(null);
    // const [currentConfig, setCurrentConfig] = useState([]);
    // const [layoutComps, setLayoutComps] = useState([]);
    // const [configs, setConfigs] = useState([]

    const [textColor, setTextColor] = useState("#000");
    const [font, setFont] = useState("Roboto");

    const getClasses = (componentName) => {
        return `${styles.componentItem} ${componentName === currentComp.name ? styles.selectedCtem : ''}`
    }

    // const onDrop = comp => {
    //     setCurrentComp(comp);
    //     setLayoutComps([...layoutComps, comp]);
        
    // }

    const handleTextColorChange = (e) => {
        if(e.target.value) {
            setTextColor(e.target.value);
            document.documentElement.style.setProperty('--text-color', e.target.value);
        }
    }

    const handleFontChange = e => {
        console.log(e.target.value)
        setFont(e.target.value);
        document.body.style.fontFamily= e.target.value;
    }

    return (
        <DndProvider backend={HTML5Backend}>
        <Grid container xs={12}>
            <Grid xs={2} className={styles.componentsList}>
                <span className={styles.componentTitle}>Layouts</span>
                <span className={styles.componentItem}>Primary layout</span>
                <span className={`${styles.componentTitle} ${styles.componentTitleComp}`}>Components</span>
                {components.map(comp => <DraggableComponent className={styles.componentItem} component={comp} onClick={comp => console.log("FFFF")} onDrop={setCurrentComp}></DraggableComponent>)}
                <span style={{marginBottom: '15px'}} className={styles.componentTitle}>Theming options</span>
                <div>
                    Text color
                </div>
                <div>
                    <input type="text" value={textColor} onChange={handleTextColorChange}></input>
                </div>
                <div>Font</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label={"fonts"} name={"fonts"} value={font} onChange={handleFontChange}>
                        <FormControlLabel value="Comic sans" control={<Radio />} label="Comic sans" />
                        <FormControlLabel value="Roboto" control={<Radio />} label="Roboto" />
                        <FormControlLabel value="Arial" control={<Radio />} label="Arial" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid xs={6}>
                <PrimaryLayout />
            </Grid>
            <Grid xs={3}>
                { currentComp && <ComponentCustomization properties={currentComp.component.customizations} /> }
            </Grid>
        </Grid>
        </DndProvider>
    )
}