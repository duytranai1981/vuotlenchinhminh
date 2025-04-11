import React from "react";

const projects = [
  { src: "/mau-nha-cap-4-mai-thai-don-gian.jpg", title: "Nhà cấp 4 mái Thái", pdf: "/MB1.pdf" },
  { src: "/z6493123248080_4f072b1f7416a979230f5f9ef4c8b795.jpg", title: "Biệt thự sân vườn 2 tầng", pdf: "/MB6.pdf" },
  { src: "/biet-phu-a-dong.png", title: "Biệt phủ kiểu Á Đông" },
  { src: "/nha-mai-nhat-hien-dai.png", title: "Nhà 1 tầng mái Nhật hiện đại" },
  { src: "/nha-tuong-vang.png", title: "Nhà mái Thái tường vàng" },
  { src: "/nha-pho-2-tang.png", title: "Nhà phố 2 tầng tối giản" },
  { src: "/nha-vuon-1-tang.png", title: "Nhà vườn 1 tầng phối hoa" },
  { src: "/nha-hien-dai-don-gian.png", title: "Nhà hiện đại đơn giản" }
];

const ContactForm = () => (
  <section style={{ marginTop: "4rem" }}>
    <h2 style={{ textAlign: "center" }}>Liên hệ tư vấn</h2>
    <form style={{ maxWidth: "480px", margin: "auto", display: "flex", flexDirection: "column", gap: "12px" }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thông tin đã được gửi!");
      }}>
      <input type="text" placeholder="Họ tên" required />
      <input type="tel" placeholder="Số điện thoại" required />
      <textarea placeholder="Nội dung cần tư vấn" rows="4" required></textarea>
      <button type="submit" className="button">Gửi liên hệ</button>
    </form>
  </section>
);

const VideoSection = () => (
  <section style={{ marginTop: "4rem" }}>
    <h2 style={{ textAlign: "center" }}>Video công trình</h2>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1La4QzGeaaQ" title="Video công trình"
        frameBorder="0" allowFullScreen></iframe>
    </div>
  </section>
);

const AboutSection = () => (
  <section style={{ paddingBottom: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Giới thiệu công ty</h2>
    <p style={{ maxWidth: "720px", margin: "auto", textAlign: "center" }}>
      Kiệt Design chuyên tư vấn – thiết kế – thi công nhà ở hiện đại, tối ưu công năng và chi phí.
      Chúng tôi tin rằng mỗi ngôi nhà là một giấc mơ được xây nên từ tâm huyết.
    </p>
  </section>
);

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <AboutSection />
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Dự án tiêu biểu</h2>
      <div className="gallery">
        {projects.map((p, idx) => (
          <div className="card" key={idx}>
            <img src={p.src} alt={p.title} />
            <div className="card-content">
              <h3>{p.title}</h3>
              {p.pdf && <a className="button" href={p.pdf} target="_blank">Xem mặt bằng</a>}
            </div>
          </div>
        ))}
      </div>
      <VideoSection />
      <ContactForm />
    </div>
  );
}