import React from "react";
import styles from "./styles.module.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export const ComponentCustomization = ({properties}) => {

    const generateRadioGroup = (options, label) => {
        const opts = options.split(", ");
        return (
            <FormControl component="fieldset">
                <RadioGroup aria-label={label} name={label} value={"value"} onChange={console.log}>
                    {opts.map (e => <FormControlLabel value={e} control={<Radio />} label={e} />)}
                </RadioGroup>
            </FormControl>
        )
    }

    const parseProperties = properties => {
        const customizationOPtionsComp = [];
        for(let key in properties) {
            const customizationOpt = [key];
            let comp = "";
            const parts = properties[key].split(": ");
            switch(parts[0]) {
                case "type": 
                    comp = <input type="text" />
                    break;
                case "oneOf": comp = generateRadioGroup(parts[1], key); break;
            }
            customizationOpt.push(comp);
            customizationOPtionsComp.push(customizationOpt);
        }
        return customizationOPtionsComp;
    }

    if(!properties) {
        return <div className={styles.wrapper}>No customization options</div>
    }

    return (
        <div className={styles.wrapper}>
            <div style={{marginBottom: '40px'}}>Customization options</div>
            {
                parseProperties(properties).map(prop => {
                    return (
                        <>
                            <FormLabel component="legend" style={{margin: "10px 0"}}>{prop[0]}</FormLabel>
                            <div>{prop[1]}</div>
                        </>
                    )
                })
            }
        </div>
    )
}

