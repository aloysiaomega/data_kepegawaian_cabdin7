import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [nidn, setNidn] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!nidn || !password) {
      setError("Username dan Password wajib diisi.");
      return;
    }
    console.log({ nidn, password });
    // TODO: connect to your auth logic
  };

  return (
    <div className="login-page">
      {/* Kiri: Info */}
      <div className="login-info">
        <h1>Cabang Dinas</h1>
        <h1>Pendidikan Wilayah VII</h1>
        <p>
          Jl. Slamet Riyadi No. 1
        </p>
        <p>
          Kauman, Kecamatan Pasar
          Kliwon, Kota Surakarta 
        </p>
        <p>
          57112
        </p>
      </div>

      {/* Kanan: Login Card */}
      <div className="login-card-container">
        <div className="login-card">
          <FaGraduationCap className="login-icon" />

          <h2>SELAMAT DATANG</h2>
          <p className="subtext">
            Sistem Informasi Data Guru Cabang Dinas Pendidikan Wilayah VII
            Surakarta
          </p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nidn">Username</label>
              <input
                id="nidn"
                type="text"
                placeholder="Masukan Username"
                value={nidn}
                onChange={(e) => setNidn(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember">
                <input type="checkbox" /> Ingatkan saya
              </label>
              <a href="#" className="forgot">
                Lupa password ?
              </a>
            </div>

            <button type="submit" className="btn-login">
              MASUK
            </button>
          </form>

          <p className="help-text">
            Butuh bantuan? Hubungi Admin
          </p>
          <p>
            (0271) 651-412
          </p>
        </div>
      </div>
    </div>
  );
}
