import React, { useEffect, useRef, useState } from 'react'

const Inline_Edit = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
    ])

    const [currentEditedId, setCurrentEditedId] = useState(null);
    const [currentEditedValue, setCurrentEditedValue] = useState(null);

    const inputRef = useRef(null);

    useEffect(() => {
        if (currentEditedId !== null && inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentEditedId]);

    const handleEdit = (id, text) => {
        // get id and text from the item
        setCurrentEditedId(id);
        setCurrentEditedValue(text);
    }

    // When we click outside of the input it will save the changes
    const handleBlur = () => {
        if (currentEditedId !== null) {
            saveChanges();
        }
    }

    const handleKeyDown = (e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            saveChanges()
        } else if (e.key === 'Escape') {
            setCurrentEditedId(null);
            setCurrentEditedValue(null);
        }
    }

    const saveChanges = () => {
        if (currentEditedId !== null) {
            setItems(items.map((item) => {
                return item.id === currentEditedId 
                ? 
                { ...item, text: currentEditedValue } 
                : item;
            }))

            setCurrentEditedId(null);

        }
    }

    return (
        <>
            {items.map((item) => {
                // if (!item) return null;

                return currentEditedId === item.id ?
                    (<input
                        key={item.id}
                        ref={inputRef}
                        value={currentEditedValue}
                        onChange={(e) => setCurrentEditedValue(e.target.value)}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        className='p-2 border border-gray-300 rounded-md'
                    />
                    ) : (
                        <div
                            key={item.id}
                            className='flex items-center justify-center gap-6 mb-4'
                            onClick={() => handleEdit(item.id, item.text)}>
                            <span className=''>{item.text} </span>
                            <button>Edit</button>
                        </div>
                    );
            })}
        </>
    )
}

export default Inline_Edit