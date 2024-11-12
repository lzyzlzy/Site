import { useContext } from 'react';
import { ConfigContext } from '../Contexts/ConfigContexts.js'
import ImageContent from './ImageContent.js';

export default function Content() {
    let [, data] = useContext(ConfigContext)
    const type = data?.type

    if (type === 'image') {
        return (
            <div className='grow md:ml-9'>
                <ImageContent />
            </div>
        )
    }
    return (
        <div className='grow md:ml-9'>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}