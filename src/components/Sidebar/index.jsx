import React from 'react'

const Sidebar = () => {
    const navLinks = [
        { url: 'https://calendar.google.com/', src: ' https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png' },
        { url: 'https://keep.google.com/', src: 'https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png' },
        { url: 'https://account.oncehub.com/', src: 'https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png' },
        { url: 'https://contacts.google.com/', src: 'https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png' },
        { url: 'https://www.google.com/maps', src: ' https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png' },
        { url: 'https://workspace.google.com/marketplace', src: ' https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png' },
    ];
    return (
        <div>
            <div className='sticky top-0 h-screen pt-6 mt-5'>
                <ul>
                    {navLinks.map(({ url, src }) => (
                        <li className='mt-5'>
                            <a href={url}><img src={src} alt="" style={{height: "50%", width: "50%"}}/></a>
                        </li>
                    ))}
                </ul>
            </div>
       </div>
    )
}

export default Sidebar