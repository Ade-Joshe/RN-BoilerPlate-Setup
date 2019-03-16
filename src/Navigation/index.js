import * as React from 'react';
import { Music, Album, Recent } from '../Screens';
import BottomNav from '../Components/BottomNav';

const Navigation = () => {
    let routes = [
        { key: 'music', title: 'Music', icon: 'queue-music', subtitle:'Sweet Words' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ];

    let stack = {
        music: Music,
        albums: Album,
        recents: Recent,
    };
    return (
        <BottomNav routes={routes} NavigationStack={stack} />
    );
}

export default Navigation;