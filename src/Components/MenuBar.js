import { useContext } from 'react';
import { ConfigContext, ConfigDispatchContext } from '../Contexts/ConfigContexts.js'

export default function MenuBar() {
    const [config] = useContext(ConfigContext)
    const dispatch = useContext(ConfigDispatchContext);

    function setMenuKey(key) {
        dispatch({
            type: 'setKey',
            key: key
        })
    }
    return (
        <div className='flex-none font-mono antialiased'>
            <h1 className="text-3xl font-bold underline">
                <a href='https://liuzhenyu.net'>
                    {config.name}
                </a>
            </h1>
            <div className='text-sm mt-1 text-gray-900'>
                {config.subTitle.map((line) => (<p>{line}</p>))}
            </div>
            <div className='mt-3 font-medium'>
                <ul className='list-decimal list-inside'>
                    {config.menu.map(item => (
                        <li><button className='hover:font-bold' onClick={() => setMenuKey(item.key)}> {item.name}</button></li>
                    ))}
                </ul>
            </div>
            <div className='mt-3 font-medium'>
                <p className='hover:font-bold'><a href='.'>About</a></p>
            </div>
            <div className='mt-3 underline'>
                {config.links.map((link) => (
                    <p className='hover:font-bold'>
                        <a href={link.src} >{link.name}</a>
                    </p>
                ))}
            </div>
        </div>
    );
}