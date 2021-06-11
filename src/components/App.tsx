import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Scene } from '.'

const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas>
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <OrbitControls />
        <React.Suspense fallback={null}>
          <Scene modelPath="assets/cup-nocollide.fbx" />
          {/* <Environment preset="sunset" background /> */}
        </React.Suspense>
      </Canvas>
    </div>
  )
}

export default App
