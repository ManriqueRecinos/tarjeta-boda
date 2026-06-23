import { QRCodeSVG } from 'qrcode.react';
import './App.css';

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/7kC32FcMupX2Cai36";
const WAZE_URL = "https://ul.waze.com/ul?ll=14.01931407%2C-89.64933872&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";

function App() {
  return (
    <div className="page-wrapper">
      {/* Animated petals */}
      <div className="petals-container" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`}></div>
        ))}
      </div>

      <div className="card">
        {/* Floral top decoration */}
        <div className="floral-top">
          <img src="/flowers.png" alt="Decoración floral" className="flowers-img" />
        </div>

        {/* Header */}
        <div className="header-section">
          <p className="nos-casamos">¡Nos Casamos!</p>
        </div>

        {/* Names */}
        <div className="names-section">
          <h1 className="name-script name-katherine">Katherine</h1>
          <p className="name-connector">✦ y ✦</p>
          <h1 className="name-script name-manrique">Manrique</h1>
        </div>

        {/* Divider */}
        <div className="divider-ornament">
          <span className="ornament-line"></span>
          <span className="ornament-diamond">❖</span>
          <span className="ornament-line"></span>
        </div>

        {/* Tagline */}
        <div className="tagline-section">
          <p className="tagline">Queremos compartir contigo</p>
          <p className="tagline">la felicidad de nuestra unión</p>
        </div>

        {/* Event details */}
        <div className="details-section">
          <div className="detail-item">
            <p className="detail-label">Día</p>
            <div className="detail-separator"></div>
            <p className="detail-value">03 de Agosto</p>
          </div>

          <div className="detail-item location-item">
            <p className="detail-label">Lugar</p>
            <div className="detail-separator"></div>
            <p className="location-name">Casa de Abuela Conchita</p>
            <div className="qr-codes-row">
              <div className="qr-item">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link-google-maps"
                  aria-label="Ver ubicación en Google Maps"
                  className="qr-link"
                >
                  <div className="qr-wrapper">
                    <QRCodeSVG
                      value={GOOGLE_MAPS_URL}
                      size={70}
                      bgColor="#ffffff"
                      fgColor="#2c2c2c"
                      level="M"
                    />
                  </div>
                  <span className="qr-label">Google Maps</span>
                </a>
              </div>

              <div className="qr-item">
                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link-waze"
                  aria-label="Ver ubicación en Waze"
                  className="qr-link"
                >
                  <div className="qr-wrapper">
                    <QRCodeSVG
                      value={WAZE_URL}
                      size={70}
                      bgColor="#ffffff"
                      fgColor="#2c2c2c"
                      level="M"
                    />
                  </div>
                  <span className="qr-label">Waze</span>
                </a>
              </div>
            </div>
          </div>

          <div className="detail-item">
            <p className="detail-label">Hora</p>
            <div className="detail-separator"></div>
            <p className="detail-value">5:00 PM</p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-ornament bottom-divider">
          <span className="ornament-line"></span>
          <span className="ornament-diamond">❖</span>
          <span className="ornament-line"></span>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <p className="footer-script">Agradeceríamos mostrar su afecto</p>
          <p className="footer-script">y cariño en sobre</p>
          <p className="confirm-text">Confirmar asistencia: (1) persona</p>

        </div>

        {/* Bottom floral decoration */}
        <div className="floral-bottom" aria-hidden="true">
          <div className="bottom-decoration">
            <span className="deco-line"></span>
            <div className="deco-center">
              <span className="leaf">🌿</span>
              <span className="flower">✿</span>
              <span className="leaf">🌿</span>
            </div>
            <span className="deco-line right"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
