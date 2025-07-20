import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

const WaterWaveBackground = () => {
    const mountRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!mountRef.current || !window.THREE) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(5, 5, 128, 128);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0.0 },
                u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_color1: { value: new THREE.Color(theme === 'dark' ? '#000c1a' : '#e6f7ff') },
                u_color2: { value: new THREE.Color(theme === 'dark' ? '#005f73' : '#00b4d8') },
            },
            vertexShader: `
                uniform float u_time;
                uniform vec2 u_mouse;
                uniform vec2 u_resolution;
                varying vec2 vUv;
                
                // Simplex noise function
                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                        + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                        dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ;
                    m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    float noise = snoise(vec2(vUv.x * 3.0 + u_time * 0.2, vUv.y * 3.0));
                    float mouseEffect = smoothstep(0.2, 0.0, distance(vUv, u_mouse)) * 0.5;
                    pos.z += (noise + mouseEffect) * 0.15;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 u_color1;
                uniform vec3 u_color2;
                uniform float u_time;
                varying vec2 vUv;
                
                void main() {
                    float mixValue = vUv.y + sin(vUv.x * 10.0 + u_time) * 0.1;
                    vec3 color = mix(u_color1, u_color2, mixValue);
                    gl_FragColor = vec4(color, 0.9);
                }
            `,
            transparent: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let mouseX = 0.5;
        let mouseY = 0.5;
        let frameId;

        const onMouseMove = (event) => {
            mouseX = event.clientX / window.innerWidth;
            mouseY = 1.0 - event.clientY / window.innerHeight;
        };

        document.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            material.uniforms.u_time.value += 0.01;
            material.uniforms.u_mouse.value.x += (mouseX - material.uniforms.u_mouse.value.x) * 0.1;
            material.uniforms.u_mouse.value.y += (mouseY - material.uniforms.u_mouse.value.y) * 0.1;
            frameId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            material.uniforms.u_resolution.value.set(width, height);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(frameId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [theme]);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default WaterWaveBackground;