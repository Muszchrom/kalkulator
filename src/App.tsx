import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [snt, setSnt] = useState<undefined | number>(400000)
  const [ugn, setUgn] = useState<undefined | number>(15750)
  const [udn, setUdn] = useState<undefined | number>(420)
  const [dp0, setDp0] = useState<undefined | number>(430)
  const [dpobc, setDpobc] = useState<undefined | number>(4600)
  const [duzp, setDuzp] = useState<undefined | number>(4)
  const [i0p, setI0p] = useState<undefined | number>(1.5)
  const [sz, setSz] = useState<undefined | number>(300000)
  const [qk, setQk] = useState<undefined | number>(-120000)

  const [szc, setSzc] = useState<undefined | number>(undefined)
  const [pz, setPz] = useState<undefined | number>(undefined)
  const [qz, setQz] = useState<undefined | number>(undefined)
  const [dpt, setDpt] = useState<undefined | number>(undefined)
  const [dqt, setDqt] = useState<undefined | number>(undefined)
  const [duxp, setDuxp] = useState<undefined | number>(undefined)
  const [durp, setDurp] = useState<undefined | number>(undefined)
  const [dqobc, setDqobc] = useState<undefined | number>(undefined)
  const [ds0, setDs0] = useState<undefined | number>(undefined)
  const [dq0, setDq0] = useState<undefined | number>(undefined)

  // szc
  useEffect(() => {
    if (pz !== undefined && dpt !== undefined && qz !== undefined && qk !== undefined && dqt !== undefined) {
      setSzc(Math.sqrt((Math.pow((pz+dpt), 2) + Math.pow(qz+qk+dqt, 2))))
    }
  }, [pz, dpt, qz, qk, dqt])
  // dpt
  useEffect(() => {
    if (dp0 !== undefined && dpobc !== undefined && sz !== undefined && snt !== undefined) {
      setDpt(dp0 + dpobc*Math.pow(sz/snt, 2))
    }
  }, [dp0, dpobc, sz, snt])
  // dqt
  useEffect(() => {
    if (dp0 !== undefined && dqobc !== undefined && sz !== undefined && snt !== undefined) {
      setDqt(dp0+dqobc*Math.pow(sz/snt, 2))
    }
  }, [dp0, dqobc, sz, snt])
  // dq0
  useEffect(() => {
    if (ds0 !== undefined && dp0 !== undefined) {
      setDq0(Math.sqrt((Math.pow(ds0, 2) - Math.pow(dp0, 2))))
    }
  }, [ds0, dp0])
  // ds0
  useEffect(() => {
    if (i0p !== undefined && snt !== undefined) {
      setDs0(i0p/100*snt)
    }
  }, [i0p, snt])
  // dqobc
  useEffect(() => {
    if (duxp !== undefined && snt !== undefined) {
      setDqobc(duxp/100*snt)
    }
  }, [duxp, snt])
  // duxp
  useEffect(() => {
    if (duzp !== undefined && durp !== undefined) {
      setDuxp(Math.sqrt(Math.pow(duzp, 2)-Math.pow(durp, 2)))
    }
  }, [duzp, durp])
  // durp
  useEffect(() => {
    if (dpobc !== undefined && snt !== undefined) {
      setDurp(dpobc/snt*100)
    }
  }, [dpobc, snt])
  return (
    <div className="App" style={{background: "#282c34", color: "white", padding: "12px", minHeight: "100vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
      <h1>🌚🌚🌚</h1>
      <div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}>
          <form style={{display: "flex", flexDirection: "column"}}>
            <Inp state={snt} changeState={setSnt}>Moc znamionowa <i>S<sub>nT</sub></i></Inp>
            <Inp state={sz} changeState={setSz}>Moc zapotrzebowania pozorna <i>S<sub>Z</sub></i></Inp>
            <Inp state={pz} changeState={setPz}>Moc zapotrzebowania czynna <i>P<sub>Z</sub></i></Inp>
            <Inp state={qz} changeState={setQz}>Moc zapotrzebowania bierna <i>Q<sub>K</sub></i></Inp>
            <Inp state={ugn} changeState={setUgn}>Napięcie górne <i>U<sub>GN</sub></i></Inp>
            <Inp state={udn} changeState={setUdn}>Napięcie dolne <i>U<sub>DN</sub></i></Inp>
            <Inp state={dp0} changeState={setDp0}>Starty stanu jałowego <i>ΔP<sub>0</sub></i></Inp>
            <Inp state={dpobc} changeState={setDpobc}>Straty obciążeniowe <i>ΔP<sub>obc</sub></i></Inp>
            <Inp state={duzp} changeState={setDuzp}>Procentowe napięcie zwarcia <i>Δu<sub>z%</sub></i></Inp>
            <Inp state={i0p} changeState={setI0p}>Prąd stanu jałowego <i>i<sub>0%</sub></i></Inp>
            <Inp state={qk} changeState={setQk}>Moc bierna kompensowana <i>Q<sub>K</sub></i></Inp>
          </form>
          <div>
            <Box><i>S<sub>ZC</sub></i>= {szc !== undefined ? szc : "-"}</Box>
            {/* <p>Straty własne mocy czynnej</p> */}
            <Box><i>ΔP<sub>T</sub></i>= {dpt !== undefined ? dpt : "-"}</Box>
            {/* <p>Straty własne mocy biernej</p> */}
            <Box><i>ΔQ<sub>T</sub></i>= {dqt !== undefined ? dqt : "-"}</Box>
            {/* <p>Straty mocy biernej w stanie jałowym</p> */}
            <Box><i>ΔQ<sub>0</sub></i>= {dq0 !== undefined ? dq0 : "-"}</Box>
            {/* <p>Straty mocy pozornej w stanie jałowym</p> */}
            <Box><i>ΔS<sub>0</sub></i>= {ds0 !== undefined ? ds0 : "-"}</Box>
            <Box><i>ΔQ<sub>obc</sub></i>= {dqobc !== undefined ? dqobc : "-"}</Box>
            <Box><i>Δu<sub>X%</sub></i>= {duxp !== undefined ? duxp : "-"}</Box>
            <Box><i>Δu<sub>R%</sub></i>= {durp !== undefined ? durp : "-"}</Box>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="https://github.com/Muszchrom/kalkulator" target="_blank">Github</a>
    </div>
  );
}

function Box({children}: {children: React.ReactNode}) {
  return (
    <div style={{width: "100%", display: "flex"}}>
      {children}
    </div>
  )
}

function Inp({children, state, changeState}: {children: React.ReactNode, state: number | undefined, changeState: (val: number) => void}) {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
      <label style={{textAlign: "left"}}>{children}</label>
      <input type="number" value={state} onChange={(e) => changeState(parseFloat(e.target.value))}></input>
    </div>
  )
}

export default App;
