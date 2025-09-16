import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './Profil.css';

export default function Profil() {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      nip: '',
      unit: '',
      birthPlace: '',
      birthDate: '',
      gender: '',
      education: '',
      functionalPosition: '',
      group: '',
      alamat: '',
      employmentStatus: ''
    }
  });

  const onSubmit = data => {
    console.log('Data profil disubmit:', data);
    // kirim ke API atau simpan di state global
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="profil-page">
      <Sidebar />

      <main className="profil-content">
        <header className="profil-header">
          <div className="profil-header-info">
            <h1>Profil Saya</h1>
            <h2>{/* bisa tampilkan nama dari data */}</h2>
          </div>
        </header>

        <form className="profil-form" onSubmit={handleSubmit(onSubmit)}>
          <section className="profil-body">
            <div className="profil-photo">
              <label htmlFor="photoInput" className="photo-upload">
                <img
                  src={preview || '/assets/images/avatar-placeholder.png'}
                  alt="Foto Profil"
                />
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    handlePhotoChange(e);
                    register('photo').onChange(e);
                  }}
                />
              </label>
            </div>

            <div className="profil-details">
              <div className="detail-row">
                <label htmlFor="fullName">Nama Lengkap</label>
                <input
                  id="fullName"
                  {...register('fullName', { required: true })}
                  placeholder="Masukkan nama lengkap"
                />
                {errors.fullName && <span className="error">Wajib diisi</span>}
              </div>

              <div className="detail-row">
                <label htmlFor="nip">NIP / NUPTK / NIK</label>
                <input
                  id="nip"
                  {...register('nip', { required: true })}
                  placeholder="Masukkan NIP/NUPTK/NIK"
                />
                {errors.nip && <span className="error">Wajib diisi</span>}
              </div>

              <div className="detail-row">
                <label htmlFor="unit">Unit / Sekolah</label>
                <input
                  id="unit"
                  {...register('unit', { required: true })}
                  placeholder="Masukkan unit/sekolah"
                />
                {errors.unit && <span className="error">Wajib diisi</span>}
              </div>

              <div className="detail-row">
                <label>Tempat, Tanggal Lahir</label>
                <div className="birth-inputs">
                  <input
                    {...register('birthPlace', { required: true })}
                    placeholder="Tempat lahir"
                  />
                  <input
                    type="date"
                    {...register('birthDate', { required: true })}
                  />
                </div>
                {(errors.birthPlace || errors.birthDate) && (
                  <span className="error">Wajib diisi</span>
                )}
              </div>

              <div className="detail-row">
                <label>Jenis Kelamin</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="Laki-laki"
                      {...register('gender', { required: true })}
                    />
                    Laki-laki
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Perempuan"
                      {...register('gender', { required: true })}
                    />
                    Perempuan
                  </label>
                </div>
                {errors.gender && (
                  <span className="error">Wajib pilih</span>
                )}
              </div>

              <div className="detail-row">
                <label htmlFor="education">Pendidikan Terakhir</label>
                <input
                  id="education"
                  {...register('education', { required: true })}
                  placeholder="Masukkan pendidikan terakhir"
                />
                {errors.education && (
                  <span className="error">Wajib diisi</span>
                )}
              </div>

              <div className="detail-row">
                <label htmlFor="functionalPosition">Jabatan Fungsional</label>
                <input
                  id="functionalPosition"
                  {...register('functionalPosition', { required: true })}
                  placeholder="Masukkan jabatan"
                />
                {errors.functionalPosition && (
                  <span className="error">Wajib diisi</span>
                )}
              </div>

              <div className="detail-row">
                <label htmlFor="group">Golongan / Pangkat</label>
                <input
                  id="group"
                  {...register('group', { required: true })}
                  placeholder="Masukkan golongan / pangkat"
                />
                {errors.group && <span className="error">Wajib diisi</span>}
              </div>

              <div className="detail-row">
                <label htmlFor="alamat">Alamat</label>
                <input
                  id="alamat"
                  {...register('alamat', { required: true })}
                  placeholder="Masukkan alamat"
                />
                {errors.alamat && (
                  <span className="error">Wajib diisi</span>
                )}
              </div>

              <div className="detail-row">
                <label htmlFor="employmentStatus">Status Kepegawaian</label>
                <select
                  id="employmentStatus"
                  {...register('employmentStatus', { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih status kepegawaian
                  </option>
                  <option value="PNS">PNS</option>
                  <option value="P3K">P3K</option>
                  <option value="GTT">GTT</option>
                  <option value="PTT">PTT</option>
                  <option value="OS">OS</option>
                  <option value="GT">GT</option>
                </select>
                {errors.employmentStatus && (
                  <span className="error">
                    Wajib pilih status kepegawaian
                  </span>
                )}
              </div>
            </div>
          </section>

          <footer className="profil-form-actions">
            <button type="submit" className="btn-save">
              Simpan
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}
