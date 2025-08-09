import React, { useState } from 'react';
import Welcome from '../pages/Welcome';
import HomeContent from '../pages/HomeContent';

const Home: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    return (
        <>
            {showWelcome ? (
                <Welcome onClick={() => setShowWelcome(false)} />
            ) : (
                <HomeContent />
            )}
        </>
    );
};

export default Home;