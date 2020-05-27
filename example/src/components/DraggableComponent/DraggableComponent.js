import React from "react";
import { ItemTypes } from '../../ItemTypes'
import { useDrag } from 'react-dnd'

export const DraggableComponent = ({ component, onDrop }) => {
    const item = { name: component.name, type: ItemTypes.COMPONENT, component }
    const [{ opacity }, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // let alertMessage = ''
        // const isDropAllowed =
        //   dropResult.allowedDropEffect === 'any' ||
        //   dropResult.allowedDropEffect === dropResult.dropEffect
        // if (isDropAllowed) {
        //   const isCopyAction = dropResult.dropEffect === 'copy'
        //   const actionName = isCopyAction ? 'copied' : 'moved'
        //   alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`
        // } else {
        //   alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`
        // }
        // alert('dropped '+component.name)
        onDrop(component)
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })
  return (
    <div ref={drag}>
      {component.name}
    </div>
  )
}