import React from 'react'
import './UsulanPreview.css'

export default function UsulanPreview({ detailUsulan, onClose }) {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-box" onClick={e => e.stopPropagation()}>

        {/* HEADER: Tombol close + judul */}
        <div className="detail-header">
          <button className="btn-close-detail" onClick={onClose}>
            ✕
          </button>
          <h2 className="detail-title">Detail Usulan</h2>
        </div>

        {/* CONTENT: Hanya area ini yang discroll */}
        <div className="detail-content">
          <section className="detail-section info">
            <h3>Informasi Usulan</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="label">Jenis Usulan</span>
                <span className="value">{detailUsulan.jenis}</span>
              </div>
              <div className="info-item">
                <span className="label">Tanggal Pengajuan</span>
                <span className="value">{detailUsulan.tanggal}</span>
              </div>
              <div className="info-item">
                <span className="label">Status</span>
                <span className="value">{detailUsulan.status}</span>
              </div>
              <div className="info-item">
                <span className="label">Prioritas</span>
                <span className="value">{detailUsulan.prioritas}</span>
              </div>
            </div>
          </section>

          <section className="detail-section desc">
            <h3>Deskripsi Usulan</h3>
            <div className="desc-box">{detailUsulan.deskripsi}</div>
          </section>

          <section className="detail-section history">
            <h3>Riwayat Status</h3>
            <ul className="history-list">
              {detailUsulan.history.length > 0 ? (
                detailUsulan.history.map((h, i) => (
                  <li key={i}>
                    <span className="hist-text">{h.teks}</span>
                    <span className="hist-date">{h.waktu}</span>
                  </li>
                ))
              ) : (
                <li className="no-history">Belum ada riwayat</li>
              )}
            </ul>
          </section>
        </div>

        {/* FOOTER: tombol Cetak */}
        <div className="detail-actions">
          <button className="btn-print">Cetak</button>
        </div>
      </div>
    </div>
  )
}
