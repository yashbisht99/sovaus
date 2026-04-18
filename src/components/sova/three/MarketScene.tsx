import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import { Line } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import * as THREE from "three";

/* -----------------------------------------------------------------
   Sova — Market Intelligence Network
   A bespoke 3D visualization. Every choice serves the brand:
   • Wireframe icosphere = the market (structure, not chaos)
   • Amber nodes that pulse = competitor SKUs reporting in
   • Travelling packets along arcs = data being relayed to ops
   • Orbital rings = scheduled scans / hourly heartbeats
   • Dust field = long-tail signal noise
   • Fresnel rim + bloom = warmth without ornament
   ----------------------------------------------------------------- */

const AMBER = "#E8A020";
const AMBER_HOT = "#FFC15A";
const AMBER_VEC = new THREE.Color(AMBER);
const NODE_DIM_VEC = new THREE.Color("#5A3810");
const WIRE_COLOR = "#1F1F1F";
const BG_COLOR = "#0D0D0D"; /* ink-1 — seamless continuation of page bg */

/* Fibonacci sphere distribution — evenly spread points on a sphere */
function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (Math.sqrt(5) - 1);
  const n = Math.max(count - 1, 1);
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / n) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const t = golden * i;
    pts.push(new THREE.Vector3(Math.cos(t) * r * radius, y * radius, Math.sin(t) * r * radius));
  }
  return pts;
}

function randomOnSphere(radius: number) {
  const u = Math.random() * 2 - 1;
  const theta = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.max(0, 1 - u * u));
  return new THREE.Vector3(Math.cos(theta) * r * radius, u * radius, Math.sin(theta) * r * radius);
}

/* ------------------------------ Wireframe globe ------------------------------ */

function WireGlobe({ radius }: { radius: number }) {
  const ref = useRef<THREE.Group>(null);
  const geo = useMemo(() => new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(radius, 3)), [radius]);
  const mat = useMemo(
    () => new THREE.LineBasicMaterial({ color: WIRE_COLOR, transparent: true, opacity: 0.55 }),
    []
  );
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.045;
  });
  useEffect(
    () => () => {
      geo.dispose();
      mat.dispose();
    },
    [geo, mat]
  );
  return (
    <group ref={ref} rotation={[0.25, 0, 0.12]}>
      <lineSegments geometry={geo} material={mat} />
    </group>
  );
}

/* ------------------------------ Fresnel atmosphere ------------------------------ */

function Atmosphere({ radius }: { radius: number }) {
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uColor: { value: new THREE.Color(AMBER) } }),
    []
  );
  useFrame((_, dt) => {
    uniforms.uTime.value += dt;
  });
  return (
    <mesh>
      <icosahedronGeometry args={[radius, 4]} />
      <shaderMaterial
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={/* glsl */ `
          varying vec3 vN;
          varying vec3 vV;
          void main() {
            vN = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vV = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={/* glsl */ `
          uniform vec3 uColor;
          uniform float uTime;
          varying vec3 vN;
          varying vec3 vV;
          void main() {
            float f = 1.0 - max(dot(vN, vV), 0.0);
            float rim = pow(f, 2.6);
            float breathe = 0.78 + 0.22 * sin(uTime * 0.7);
            vec3 col = uColor * rim * breathe * 1.7;
            gl_FragColor = vec4(col, rim * 0.55);
          }
        `}
      />
    </mesh>
  );
}

/* ------------------------------ Node field ------------------------------ */

function NodeField({ count, radius }: { count: number; radius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const groupRef = useRef<THREE.Group>(null);

  const { positions, hotMap, phases, baseScales } = useMemo(() => {
    const positions = fibonacciSphere(count, radius);
    const hotSet = new Set<number>();
    const targetHot = Math.floor(count * 0.18);
    while (hotSet.size < targetHot) hotSet.add(Math.floor(Math.random() * count));
    const hotMap = Array.from({ length: count }, (_, i) => hotSet.has(i));
    const phases = Array.from({ length: count }, () => Math.random() * Math.PI * 2);
    const baseScales = Array.from({ length: count }, () => 0.5 + Math.random() * 1.7);
    return { positions, hotMap, phases, baseScales };
  }, [count, radius]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const m = meshRef.current;
    if (!m) return;
    for (let i = 0; i < count; i++) {
      m.setColorAt(i, hotMap[i] ? AMBER_VEC : NODE_DIM_VEC);
    }
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [count, hotMap]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const m = meshRef.current;
    if (!m) return;
    for (let i = 0; i < count; i++) {
      const p = positions[i];
      dummy.position.copy(p);
      const pulse = hotMap[i] ? 1 + 0.55 * Math.sin(t * 1.4 + phases[i]) : 0.85;
      const s = baseScales[i] * 0.012 * pulse;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.045;
  });

  return (
    <group ref={groupRef} rotation={[0.25, 0, 0.12]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

/* ------------------------------ Arc flows (traveling data packets) ------------------------------ */

type ArcSpec = {
  curve: THREE.QuadraticBezierCurve3;
  points: THREE.Vector3[];
  speed: number;
  phase: number;
  opacity: number;
};

function ArcFlow({ spec }: { spec: ArcSpec }) {
  const dot = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = ((state.clock.elapsedTime * spec.speed + spec.phase) % 1 + 1) % 1;
    const p = spec.curve.getPoint(t);
    if (dot.current) dot.current.position.copy(p);
    if (halo.current) {
      halo.current.position.copy(p);
      const s = 1 + 0.35 * Math.sin(state.clock.elapsedTime * 4 + spec.phase * 7);
      halo.current.scale.setScalar(s);
    }
  });

  return (
    <>
      <Line
        points={spec.points}
        color={AMBER}
        lineWidth={0.6}
        transparent
        opacity={spec.opacity}
        toneMapped={false}
      />
      <mesh ref={dot}>
        <sphereGeometry args={[0.022, 12, 12]} />
        <meshBasicMaterial color={AMBER_HOT} toneMapped={false} />
      </mesh>
      <mesh ref={halo}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.35} toneMapped={false} depthWrite={false} />
      </mesh>
    </>
  );
}

function ArcFlows({ count, radius }: { count: number; radius: number }) {
  const group = useRef<THREE.Group>(null);

  const arcs = useMemo<ArcSpec[]>(() => {
    const list: ArcSpec[] = [];
    for (let i = 0; i < count; i++) {
      const a = randomOnSphere(radius);
      let b = randomOnSphere(radius);
      let guard = 0;
      while (a.distanceTo(b) < radius * 0.9 && guard < 8) {
        b = randomOnSphere(radius);
        guard++;
      }
      const mid = a.clone().add(b).multiplyScalar(0.5);
      mid.setLength(radius * (1.35 + Math.random() * 0.4));
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      list.push({
        curve,
        points: curve.getPoints(48),
        speed: 0.16 + Math.random() * 0.22,
        phase: Math.random(),
        opacity: 0.12 + Math.random() * 0.12,
      });
    }
    return list;
  }, [count, radius]);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.045;
  });

  return (
    <group ref={group} rotation={[0.25, 0, 0.12]}>
      {arcs.map((spec, i) => (
        <ArcFlow key={i} spec={spec} />
      ))}
    </group>
  );
}

/* ------------------------------ Orbital rings ------------------------------ */

function OrbitRings({ radius }: { radius: number }) {
  const g1 = useRef<THREE.Group>(null);
  const g2 = useRef<THREE.Group>(null);
  const g3 = useRef<THREE.Group>(null);

  const geos = useMemo(
    () => ({
      a: new THREE.TorusGeometry(radius * 1.08, 0.0025, 6, 200),
      b: new THREE.TorusGeometry(radius * 1.2, 0.002, 6, 200),
      c: new THREE.TorusGeometry(radius * 1.34, 0.0018, 6, 200),
    }),
    [radius]
  );
  const mats = useMemo(
    () => ({
      a: new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.3, toneMapped: false }),
      b: new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.2, toneMapped: false }),
      c: new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.12, toneMapped: false }),
    }),
    []
  );
  useEffect(
    () => () => {
      Object.values(geos).forEach((g) => g.dispose());
      Object.values(mats).forEach((m) => m.dispose());
    },
    [geos, mats]
  );

  useFrame((_, dt) => {
    if (g1.current) g1.current.rotation.z += dt * 0.08;
    if (g2.current) g2.current.rotation.x += dt * 0.05;
    if (g3.current) g3.current.rotation.y += dt * 0.04;
  });

  return (
    <>
      <group ref={g1} rotation={[Math.PI / 3, 0, 0]}>
        <mesh geometry={geos.a} material={mats.a} />
      </group>
      <group ref={g2} rotation={[0, 0, Math.PI / 4]}>
        <mesh geometry={geos.b} material={mats.b} />
      </group>
      <group ref={g3} rotation={[Math.PI / 5, Math.PI / 3, 0]}>
        <mesh geometry={geos.c} material={mats.c} />
      </group>
    </>
  );
}

/* ------------------------------ Dust ------------------------------ */

function Dust({ count, radius }: { count: number; radius: number }) {
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.55 + Math.random() * 2.4);
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      arr[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r;
      arr[i * 3 + 2] = Math.cos(phi) * r;
    }
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [count, radius]);
  const mat = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#7A6A50",
        size: 0.01,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        toneMapped: false,
      }),
    []
  );
  useEffect(
    () => () => {
      geom.dispose();
      mat.dispose();
    },
    [geom, mat]
  );
  const ref = useRef<THREE.Points>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.01;
  });
  return <points ref={ref} geometry={geom} material={mat} />;
}

/* ------------------------------ Camera parallax ------------------------------ */

function CameraRig({ enabled, offsetZ }: { enabled: boolean; offsetZ: number }) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);
  useFrame((state) => {
    current.current.x += (target.current.x - current.current.x) * 0.04;
    current.current.y += (target.current.y - current.current.y) * 0.04;
    state.camera.position.x = current.current.x * 0.55;
    state.camera.position.y = -current.current.y * 0.32;
    state.camera.position.z = offsetZ;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ------------------------------ Public component ------------------------------ */

type Density = "hero" | "subtle";

type MarketSceneProps = {
  className?: string;
  density?: Density;
};

export function MarketScene({ className, density = "hero" }: MarketSceneProps) {
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 768px)");
    const upd = () => {
      setReduced(motionMq.matches);
      setIsMobile(mobileMq.matches);
    };
    upd();
    motionMq.addEventListener("change", upd);
    mobileMq.addEventListener("change", upd);
    return () => {
      motionMq.removeEventListener("change", upd);
      mobileMq.removeEventListener("change", upd);
    };
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isHero = density === "hero";
  const nodeCount = isHero ? (isMobile ? 140 : 220) : isMobile ? 90 : 140;
  const arcCount = isHero ? (isMobile ? 6 : 9) : isMobile ? 3 : 5;
  const dustCount = isHero ? (isMobile ? 300 : 600) : isMobile ? 160 : 300;
  const radius = 2;
  const camZ = isHero ? 5.6 : 6.2;

  const frameloop: "always" | "demand" = reduced || !inView ? "demand" : "always";

  return (
    <div ref={wrapperRef} className={className} aria-hidden="true">
      <Canvas
        dpr={[1, isMobile ? 1.4 : 1.75]}
        camera={{ position: [0, 0, camZ], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        frameloop={frameloop}
      >
        <color attach="background" args={[BG_COLOR]} />
        <fog attach="fog" args={[BG_COLOR, 4.5, 11]} />

        <Suspense fallback={null}>
          <CameraRig enabled={!reduced && !isMobile} offsetZ={camZ} />
          <WireGlobe radius={radius} />
          <Atmosphere radius={radius - 0.02} />
          <NodeField count={nodeCount} radius={radius + 0.01} />
          <ArcFlows count={arcCount} radius={radius + 0.02} />
          <OrbitRings radius={radius} />
          <Dust count={dustCount} radius={radius} />

          <EffectComposer multisampling={0} disableNormalPass>
            <Bloom
              intensity={isHero ? 1.15 : 0.8}
              luminanceThreshold={0.18}
              luminanceSmoothing={0.85}
              kernelSize={KernelSize.LARGE}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MarketScene;
