import React, { useState } from "react";

import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import styles from './styles.module.css';
  

export const Placeholder = () => {
  const [Component, setComponent] = useState(null)
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.COMPONENT,
        drop: (item, monitor) => {
            setComponent(item.component)
            return {
              allowedDropEffect: 'any',
            }
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })
      const isActive = canDrop && isOver
      return (
        <div ref={drop} className={`${styles.placeholderWrapper} ${!Component ? styles.emptyPlaceholder : ''}`}>
            { Component && <Component.component {...Component.component.configuration}/> }
        </div>
      )
}