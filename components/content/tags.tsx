type TagsProps = {
    tags: Array<Tags>,
    tagTypes: Array<Tags>
}

type Tags = {
    tag: string
}

export const Tags = ({ tags, tagTypes } :TagsProps) => {
    const colors = ['orange', 'purple', 'green'];
    return <div className='links__tags'>
        {tags.map((tag) => {
            const colorIndex = tagTypes.findIndex(t => t === tag) % (colors.length);
            const color = colors[colorIndex];
            return <p key={tag.toString()} className={`links__tag links__tag--${color}`}>{tag}</p>
        }
        )}
    </div>
}