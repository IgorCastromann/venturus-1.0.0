
export default function handleAddTag(event){
    if (event.key == 'Enter' || event.key == 'Semicolon'){
        setTags([...tags, event.target.value])
    }
    
    return(

    )
}