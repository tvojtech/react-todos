import React from 'react'

export default ({onFilterSelect}) => (
    <ul>
        <li><a onClick={() => onFilterSelect('open')}>Open</a></li>
        <li><a onClick={() => onFilterSelect('closed')}>Closed</a></li>
    </ul>
)