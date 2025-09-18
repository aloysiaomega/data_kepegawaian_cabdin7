import React, { useState } from 'react'
import './AjukanUsulan.css'

export default function AjukanUsulan({ onClose, onSubmit }) {
  const [jenis, setJenis] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [prioritas, setPrioritas] = useState('Normal')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ jenis, deskripsi, prioritas })
  }

  return (
    <div className="ajukan-overlay" onClick={onClose}>
      <div className="ajukan-box" onClick={e => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose}>
          ✕
        </button>
        <h2 className="ajukan-title">Ajukan Usulan Baru</h2>

        <form className="ajukan-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jenis">Jenis Usulan *</label>
            <select
              id="jenis"
              value={jenis}
              required
              onChange={e => setJenis(e.target.value)}
            >
              <option value="">Pilih Jenis Usulan Yang Ingin Diajukan</option>
              <option value="Perubahan Golongan">Perubahan Golongan</option>
              <option value="Penambahan Jam Mengajar">
                Penambahan Jam Mengajar
              </option>
              <option value="Kenaikan Gaji">Kenaikan Gaji</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="deskripsi">Deskripsi Usulan *</label>
            <textarea
              id="deskripsi"
              rows="6"
              placeholder="Jelaskan secara rinci alasan pengajuan usulan"
              required
              value={deskripsi}
              onChange={e => setDeskripsi(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="prioritas">Prioritas</label>
            <select
              id="prioritas"
              value={prioritas}
              onChange={e => setPrioritas(e.target.value)}
            >
              <option value="Normal">Normal</option>
              <option value="Tinggi">Tinggi</option>
              <option value="Rendah">Rendah</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Kirim Usulan Baru
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
