import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'
import particlemask from "./components/config/particlesjs-config.json"
import Globe from 'react-globe.gl'
function App() {
  const [count, setCount] = useState(0)
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));
  return (
    <div className='bg-slate-800 '>
      <ParticleComponent props={particlemask}/>
      <div className='z-[5000]' >
      <Navbar className='z-50' />
      <div className='absolute top-[20vh]' >
      <Globe
      className=" top-1/2"
      style={{top:'1/2'}}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      arcsData={arcsData}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      width={'500'}
      height={'500'}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      backgroundColor={'rgba(0,0,0,0)'}
      />
      </div>

      </div>
    </div>
  )
}

export default App
