import * as React from 'react'

const items = [{}]
const List = () => (
  <ul>
    {items.map((item, index): any => {
      console.log(item)
      return (
        <li key={index}>
          {`list ${index}`}
        </li>
      )
    })}
  </ul>
)

export default List
