// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/Landing/LandingPage.jsx'
import Login       from './pages/Login/Login.jsx'
// import Ketenagaan  from './pages/Ketenagaan/Ketenagaan.jsx'
// import Kepegawaian from './pages/Kepegawaian/Kepegawaian.jsx'

import Dashboard       from './pages/Dashboard/Dashboard.jsx'
import Profile         from './pages/Profil/Profil.jsx'
import Dokumen         from './pages/Dokumen/Dokumen.jsx'
import Usulan          from './pages/Usulan/Usulan.jsx'
// import CetakBiodata    from './components/CetakBiodata.jsx'
// import GantiPassword   from './components/GantiPassword.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* landing page sebagai titik masuk utama */}
        <Route path="/" element={<LandingPage />} />

        {/* halaman login */}
        <Route path="/login" element={<Login />} />

        {/* halaman pilihan dari landing */}
        {/* <Route path="/ketenagaan"  element={<Ketenagaan />} />
        <Route path="/kepegawaian" element={<Kepegawaian />} /> */}

        {/* dashboard pasca-login */}
        <Route path="/dashboard"        element={<Dashboard />} />
        <Route path="/profile"          element={<Profile />} />
        // <Route path="/dokumen"          element={<Dokumen />} />
        // <Route path="/usulan"           element={<Usulan />} />
        {/* // <Route path="/cetak-biodata"    element={<CetakBiodata />} /> */}
        {/* // <Route path="/ganti-password"   element={<GantiPassword />} /> */}

        {/* catch-all: kalau tidak ketemu, kembali ke landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
