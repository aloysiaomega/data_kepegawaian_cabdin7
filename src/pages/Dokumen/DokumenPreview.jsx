import React from 'react';
import {
  FaArrowLeft,
  FaDownload,
  FaShareAlt
} from 'react-icons/fa';
import './DokumenPreview.css';

export default function DocumentPreview({ document, onClose }) {
  // contoh `document`:
  // {
  //   title: 'SK CPNS Budi Santoso',
  //   uploadDate: '10/12/2000',
  //   mime: 'PDF',
  //   size: '2.4 MB',
  //   status: 'Terverifikasi',
  //   lastVerified: '15/12/2000',
  //   verifier: 'Operator Sekolah'
  // }

  return (
    <div className="preview-overlay">
      <div className="preview-modal">
        <header className="preview-header">
          <button className="btn-back" onClick={onClose}>
            <FaArrowLeft /> Kembali
          </button>
          <div className="header-text">
            <h2>Preview Dokumen</h2>
            <p>Lihat dan verifikasi detail dokumen</p>
          </div>
        </header>

        <div className="preview-info">
          <div className="file-icon">
            {/* Ganti dengan SVG atau icon khusus */}
            <FaDownload size={32} />
          </div>
          <div className="file-details">
            <h3>{document.title}</h3>
            <p>Diunggah: {document.uploadDate}</p>
            <p>{document.mime} - {document.size}</p>
            <span className={`status-badge status-${document.status.toLowerCase()}`}>
              {document.status}
            </span>
          </div>
          <div className="preview-actions">
            <button className="btn-download">
              <FaDownload /> Unduh
            </button>
            <button className="btn-share">
              <FaShareAlt />
            </button>
          </div>
        </div>

        <div className="preview-content">
          {/* Embed PDF viewer di sini atau iframe */}
          ISI SK CPNS Budi Santoso
        </div>

        <footer className="preview-footer">
          <div className="footer-status">
            <span>Status:</span>
            <span className={`status-badge status-${document.status.toLowerCase()}`}>
              {document.status}
            </span>
          </div>
          <div className="footer-info">
            Terakhir diverifikasi: {document.lastVerified} oleh {document.verifier}
          </div>
        </footer>
      </div>
    </div>
  );
}
