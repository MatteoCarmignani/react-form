import { useState } from 'react'

function ArticleList() {

    const firstTitles = ['Crisi energetica: nuove misure per ridurre i consumi in città', 
        'Scoperta archeologica sorprende gli studiosi: riemerge un antico mosaico romano', 
        'Tecnologia e futuro: presentato il primo treno a levitazione magnetica interamente italiano',
        'Lo sport che unisce: torneo benefico raccoglie fondi record',
        'Cultura in piazza: festival della letteratura richiama migliaia di visitatori'
    ];

    const [title, setTitle] = useState(firstTitles);
    const [newTitle, setNewTitle] = useState('');

    const addTitle = e => {
        e.preventDefault();
        

        const cleanTitle = newTitle.trim();
        
        const updatedTitle = [...title, cleanTitle];
        setTitle(updatedTitle);
        // ripuliamo campo user [da var di stato]
        setNewTitle('');
    }

    const removeTitle = i => {
        const updatedTitle = title.filter((title, titleIndex) => {
            return titleIndex !== i
        });
        setTitle(updatedTitle);
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={addTitle}>
                    <input type="text"
                        placeholder='Inserisci il nuovo Titolo del giornale'
                        value={newTitle}
                        onChange={(e) => { setNewTitle(e.target.value) }}
                    />
                    <button type='submit'>Invio</button>
                </form>

                
                
                <ul>
                    {title.map((title, index) => (
                        <li
                            key={index}>
                            {title}
                            <button onClick={() => removeTitle(index)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}
export default ArticleList