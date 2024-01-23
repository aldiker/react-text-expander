import { useState } from 'react'

export default function TextExpander({
    children,

    collapsedNumWords = 3,
    expandButtonText = 'Show more',
    collapseButtonText = 'Show less',
    buttonColor = 'blue',
    expanded = false,
    className = '',
}) {
    const collapsedContent = `${children
        .split(' ')
        .slice(0, collapsedNumWords)
        .join(' ')}...`

    const [isExpanded, setIsExpanded] = useState(expanded)

    return (
        <div className={className}>
            {isExpanded ? children : collapsedContent}
            <span
                style={{ color: `${buttonColor}`, cursor: 'pointer' }}
                onClick={() => setIsExpanded((exp) => !exp)}>
                {isExpanded ? ` ${collapseButtonText}` : ` ${expandButtonText}`}
            </span>
        </div>
    )
}
