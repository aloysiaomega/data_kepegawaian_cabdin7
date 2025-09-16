import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {
  FaCertificate,
  FaHourglassHalf,
  FaClock,
  FaRegCalendarAlt,
  FaPencilAlt,
  FaCheckCircle
} from 'react-icons/fa';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-info">
            <h1>Dashboard Guru</h1>
            <h2>SMK N 2 Sukoharjo</h2>
          </div>
          <button className="btn-propose">Ajukan Usulan</button>
        </header>

        <section className="metrics">
          <div className="card card--certified">
            <div className="card-icon">
              <FaCertificate />
            </div>
            <h3>Status Sertifikasi</h3>
            <p className="card-value">Tersertifikasi Tahun 2018</p>
          </div>
          <div className="card card--pending">
            <div className="card-icon">
              <FaHourglassHalf />
            </div>
            <h3>Usulan Pending</h3>
            <p className="card-value">2 Usulan Menunggu Verifikasi</p>
          </div>
          <div className="card card--teaching">
            <div className="card-icon">
              <FaClock />
            </div>
            <h3>Jumlah jam mengajar</h3>
            <p className="card-value">
              24 jam/Minggu Terpenuhi dari 24 jam wajib
            </p>
          </div>
          <div className="card card--retirement">
            <div className="card-icon">
              <FaRegCalendarAlt />
            </div>
            <h3>Masa Pensiun</h3>
            <p className="card-value">5 Tahun 12 Agustus 2030</p>
          </div>
          </section>

                  <section className="activities">
            <h3>Aktivitas Terbaru</h3>
            <ul>
              <li className="activity activity--pending">
                <span className="activity-icon activity-icon--pending">
                  <FaPencilAlt size={18} color="#d97706" />
                </span>
                <div className="activity-text">
                  <span>Pengajuan perubahan data golongan</span>
                  <small>1 jam yang lalu</small>
                </div>
                <span className="activity-status">Pending</span>
              </li>

              <li className="activity activity--pending">
                <span className="activity-icon activity-icon--pending">
                  <FaPencilAlt size={18} color="#d97706" />
                </span>
                <div className="activity-text">
                  <span>Pengajuan penambahan jam mengajar</span>
                  <small>3 jam yang lalu</small>
                </div>
                <span className="activity-status">Pending</span>
              </li>

              <li className="activity activity--approved">
                <span className="activity-icon activity-icon--approved">
                  <FaCheckCircle size={18} color="#10b981" />
                </span>
                <div className="activity-text">
                  <span>Dokumen sertifikasi telah diverifikasi</span>
                  <small>6 jam yang lalu</small>
                </div>
                <span className="activity-status">Disetujui</span>
              </li>

              <li className="activity activity--approved">
                <span className="activity-icon activity-icon--approved">
                  <FaCheckCircle size={18} color="#10b981" />
                </span>
                <div className="activity-text">
                  <span>Dokumen diunggah</span>
                  <small>8 jam yang lalu</small>
                </div>
                <span className="activity-status">Disetujui</span>
              </li>
            </ul>
          </section>

      </main>
    </div>
  );
}
