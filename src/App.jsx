import Footer from './components/Footer'
import InputBox from './components/InputBox'
import Gallery from './components/Gallery'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
      <div className='   pt-10   '>
        <h2 className='text-center text-[2rem]'>Unsplash Images</h2>
        <div className=' absolute top-4 right-10 '>
          <ThemeToggle />
        </div>
        <InputBox />
        <div className='   flex justify-center'>
          <Gallery />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
