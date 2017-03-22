import React from 'react'

export default ({ todos }) => (
    <ul>
        {todos.map(t => <li key={t}>{t}</li>)}
    </ul>
)