

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import {Link} from 'react-router-dom';

const RotatingPlanet = () => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
  const normalMap = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, -5]}>
      <meshStandardMaterial map={texture} normalMap={normalMap} />
    </Sphere>
  );
};

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-gray-300">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars />
          <RotatingPlanet />
        </Canvas>
      </div>
      
      {/* Rest of the component remains the same */}
	  <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-8 min-h-screen font-mono">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-5xl font-bold text-center pt-24 bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 text-transparent"
				>
					iTechRoots 2024
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="text-2xl text-center max-w-2xl"
				>
					Journey Through Time and Space with Technology
				</motion.p>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="text-center space-y-4"
				>
					<h2 className="text-3xl font-semibold">Contact Us</h2>
					<p>Email: itechroots@gmail.com.com</p>
					<p>Phone: +1 (555) 123-4567</p>
					<p>Address: 123 YCCE road, Nagpur City, TC 12345</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className="text-center space-y-4"
				>
					<h2 className="text-3xl font-semibold">Useful Links</h2>
					<ul className="space-y-2 pb-24">
						<li>
							<Link to="/timeline" className="text-blue-300 hover:text-blue-100">
								Event Schedule
							</Link>
						</li>
					</ul>
				</motion.div>
			</div>
    </div>
  );
};

export default Contact;