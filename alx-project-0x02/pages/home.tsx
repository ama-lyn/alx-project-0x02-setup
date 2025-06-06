import Header from '@/components/layout/Header';

const Home: React.FC =()=>{
    return(
       <div>
        <Header/>
        <div className='container mx-auto p-4'>
           <h1 className='text-3xl font-bold mb-4'>Welcome to Amanda&apos;s World</h1>
           <p></p>
        </div>
        </div>
    );
}

export default Home;