import Header from '@/components/layout/Header';

const About: React.FC = () => {
    return(
        <div>
            <Header/>
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Amanda</h1>
            <p className="mb-2">Amanda is a fictional character created for the purpose of this project. She is designed to be a relatable and engaging figure for users to interact with.</p>
            <p className="mb-2">This project showcases Amanda&apos;s journey, her interests, and her interactions with the world around her.</p>
            <p className="mb-2">Feel free to explore and learn more about Amanda through the various pages of this application.</p>
        </div>
        </div>
    );
}

export default About;